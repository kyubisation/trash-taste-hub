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

import { ManualData } from './manual-data';

export function aggregate(): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const channels: Channel[] = [];
    const guests: Guest[] = [];
    const videos: Video[] = [];
    const rawVideos: youtube_v3.Schema$Video[] = (tree.readJson(dataJsonPath) as any).videos;
    const manualData: ManualData = tree.readJson('schematics/aggregator/manual-data.json') as any;
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
          ...parseShortTitle(rawVideo.snippet!.title!),
          publishedAt: rawVideo.snippet!.publishedAt!,
          tags: filterTags(rawVideo.snippet!.tags!),
          guests: findGuests(rawVideo, guests),
          sections: findSections(rawVideo),
        };
        videos.push(video);
        channel.videos.push(video);
        video.guests?.forEach((g) => g.videos.push(video));
      }
    }

    for (const [key, guestInfo] of Object.entries(manualData.guests)) {
      let guest = guests.find((g) => g.id === key || g.name === key);
      if (!guest) {
        guest = {
          id: guestId(guestInfo.name ?? key),
          name: guestInfo.name ?? key,
          ...guestInfo,
          videos: [],
        };
        guests.push(guest);
      } else {
        const properties: Array<keyof Guest> = [
          'instagram',
          'spotify',
          'tiktok',
          'twitch',
          'twitter',
          'youtube',
        ];
        for (const property of properties) {
          if (guestInfo[property]) {
            guest[property] = guestInfo[property] as any;
          }
        }
      }
    }
    for (let [
      key,
      { tags, guests: guestsInfo, sections, ...unsupportedProperties },
    ] of Object.entries(manualData.videos)) {
      const video = videos.find((v) => v.id === key);
      if (!video) {
        context.logger.warn(
          `Video with id ${key} from manual-data.json does not exist in the data.`
        );
        break;
      }
      tags = Array.isArray(tags) ? tags.filter((t) => typeof t === 'string' && t) : undefined;
      if (tags?.length) {
        video.tags = video.tags ?? [];
        video.tags.push(...tags);
      }
      guestsInfo = Array.isArray(guestsInfo)
        ? guestsInfo
            .map((gi) => guests.find((g) => g.id === gi.id || g.name === gi.name))
            .filter((g): g is Guest => !!g)
        : undefined;
      if (guestsInfo?.length) {
        video.guests = video.guests ?? [];
        video.guests.push(...guestsInfo);
      }
      if (sections) {
        video.sections = sections;
      }
      if (unsupportedProperties && Object.keys(unsupportedProperties).length) {
        context.logger.warn(
          `Video with id ${key} from manual-data.json has unsupported properties: ${Object.keys(
            unsupportedProperties
          ).join(', ')}`
        );
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
  const match = title.match(
    /^([\w\W]+?)( \(ft[^\)]+\))?( \| Trash Taste( (Special|Stream|Charity Stream))?( #(\d+))?)$/
  );
  if (!match) {
    return undefined;
  }

  const result: Pick<Video, 'titleShort' | 'episodeNumber' | 'type'> = { titleShort: match[1] };
  const episodeNumber = +match[7];
  if (!isNaN(episodeNumber)) {
    result.episodeNumber = episodeNumber;
  }
  if (match[5] === 'Special' || match[5] === 'Stream' || match[5] === 'Charity Stream') {
    result.type = match[5];
  }

  return result;
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
      id: guestId(name),
      name,
      videos: [],
      ...findSocialMediaAccounts(rawVideo.snippet!.description!, name),
    };
    guests.push(guest);
  }

  return [guest];
}

function guestId(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9_-]+/gi, '-');
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
