import { youtube_v3 } from '@googleapis/youtube';
import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  mergeWith,
  url,
  applyTemplates,
  move,
  forEach,
} from '@angular-devkit/schematics';
import { format } from 'prettier';

import type { Video } from '../../src/app/data/video';
import type { Guest } from '../../src/app/data/guest';
import type { Channel } from '../../src/app/data/channel';
import { dataJsonPath } from '../collector';
import { channels as channelConstants } from '../collector/channels';

export function aggregate(): Rule {
  return async (tree: Tree, _context: SchematicContext) => {
    const channels: Channel[] = [];
    const guests: Guest[] = [];
    const rawVideos: youtube_v3.Schema$Video[] = (tree.readJson(dataJsonPath) as any).videos;
    for (const rawVideo of rawVideos) {
      const channelId = rawVideo.snippet!.channelId!;
      let channel = channels.find((c) => c.id === channelId);
      if (!channel) {
        channel = {
          id: rawVideo.snippet!.channelId!,
          name: rawVideo.snippet!.channelTitle!,
          videos: [],
        };
        channels.push(channel);
      }
      if (channel.videos.every((v) => v.id !== rawVideo.id)) {
        const video: Video = {
          id: rawVideo.id!,
          channel,
          title: rawVideo.snippet!.title!,
          ...(channel.id === channelConstants['Trash Taste']
            ? parseShortTitle(rawVideo.snippet!.title!)
            : undefined),
          publishedAt: rawVideo.snippet!.publishedAt!,
          tags: filterTags(rawVideo.snippet!.tags!),
          guests: findGuests(rawVideo, guests),
          sections: findSections(rawVideo),
        };
        channel.videos.push(video);
        video.guests?.forEach((g) => g.videos.push(video));
      }
    }

    guests.sort((a, b) => a.name.localeCompare(b.name));
    channels.sort((a, b) => a.name.localeCompare(b.name));
    channels.forEach((c) => c.videos.sort((a, b) => a.publishedAt.localeCompare(b.publishedAt)));

    return mergeWith(
      apply(url('./files'), [
        applyTemplates({
          channels,
          guests,
          channelVariable: (channel: Channel) =>
            `channel${channel.name.replace(/[^a-zA-Z0-9]+/g, '')}`,
          guestVariable: (guest: Guest) => `guest${guest.name.replace(/[^a-zA-Z0-9]+/g, '')}`,
          videoVariable: (video: Video) => `video${video.id.replace(/[^a-zA-Z0-9]+/g, '_')}`,
          escapeQuote: (value: string) => value.replace(/'/g, `\\'`),
        }),
        move('src/app/data'),
        forEach((fileEntry) => {
          const content = format(fileEntry.content.toString(), {
            ...require('../../package.json').prettier,
            parser: 'typescript',
          });
          if (!tree.exists(fileEntry.path)) {
            tree.create(fileEntry.path, content);
          } else if (tree.read(fileEntry.path)!.toString() !== content) {
            tree.overwrite(fileEntry.path, content);
          }
          return null;
        }),
      ])
    );
  };
}

function parseShortTitle(
  title: string
): Pick<Video, 'titleShort' | 'episodeNumber' | 'type'> | undefined {
  const match = title.match(/^([\w\W]+?)( \(ft[^\)]+\))?( \| Trash Taste (Special|#(\d+)))$/);
  if (!match) {
    return undefined;
  }

  const titleShort = match[1];
  const episodeNumber = +match[5];
  if (!isNaN(episodeNumber)) {
    return { titleShort, episodeNumber };
  } else if (match[4] === 'Special') {
    return { titleShort, type: 'special' };
  } else {
    return { titleShort };
  }
}

function filterTags(tags: string[]): string[] | undefined {
  const removableTags = [
    'TrashTaste',
    'Trash',
    'Trash Taste',
    'Taste',
    'Trash Taste Podcast',
    'Anime',
    'Manga',
    'CDawgVA',
    'Gigguk',
    'TheAnimeMan',
    'The Anime Man',
    'Joey',
    'Connor',
    'Garnt',
    'Podcast',
    'trash taste shorts',
    'trash taste clips',
    'podcast clips',
    'podcast anime',
    'podcast shorts',
  ];
  removableTags.push(...removableTags.map((t) => t.toLowerCase()));
  const filteredTags = tags.filter((t) => !removableTags.includes(t));
  return filteredTags.length ? filteredTags : undefined;
}

function findGuests(rawVideo: youtube_v3.Schema$Video, guests: Guest[]): Guest[] | undefined {
  const match = rawVideo.snippet!.title!.match(/\(ft.[ ]+@?([^\)]+)\)/);
  if (!match) {
    return undefined;
  }

  const name = match[1].trim();
  let guest = guests.find((g) => g.name === name);
  if (!guest) {
    guest = {
      id: name.toLowerCase().replace(/[^a-z0-9_-]+/gi, '-'),
      name,
      videos: [],
      ...findSocialMediaAccounts(rawVideo.snippet!.description!, name),
    };
    guests.push(guest);
  }

  return [guest];
}

function findSocialMediaAccounts(
  description: string,
  name: string
): Omit<Guest, 'id' | 'name' | 'videos'> | undefined {
  const nameIndex = description.indexOf(name);
  if (nameIndex < 0) {
    return undefined;
  }
  const socials = description.substring(nameIndex);
  const urls = socials
    .substring(0, socials.indexOf('\n\n'))
    .match(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi
    );
  if (!urls) {
    return undefined;
  }

  const result: Omit<Guest, 'id' | 'name' | 'videos'> = {};
  for (const url of urls) {
    if (url.includes('youtube') || url.includes('youtu.be')) {
      result.youtube = url;
    } else if (url.includes('twitter')) {
      result.twitter = url;
    } else if (url.includes('tiktok')) {
      result.tiktok = url;
    } else if (url.includes('instagram')) {
      result.instagram = url;
    } else if (url.includes('spoti.fi')) {
      result.spotify = url;
    } else if (url.includes('twitch')) {
      result.twitch = url;
    } else {
      throw new Error(`Unknown guest url: ${url}`);
    }
  }

  return result;
}

function findSections(rawVideo: youtube_v3.Schema$Video): Record<string, string> | undefined {
  const matches = Array.from(
    rawVideo.snippet!.description!.matchAll(/((\d{1,2}:)?\d{1,2}:\d{1,2}) ([^\n]+)\n?/g)
  );
  return matches.length
    ? matches.reduce(
        (current, next) => Object.assign(current, { [next[1]]: next[3].replace(/^- /, '').trim() }),
        {} as Record<string, string>
      )
    : undefined;
}
