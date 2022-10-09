import { writeFileSync } from 'fs';
import { join } from 'path';

import { youtube_v3 } from '@googleapis/youtube';
import { format, Options } from 'prettier';

import * as index from '../src/app/data/index';
import { Video } from '../src/app/data/video';
import { Guest } from '../src/app/data/guest';
import { Channel } from '../src/app/data/channel';

import { RawData } from './raw-data';

if (module === require.main) {
  aggregateYoutubeData();
}

async function aggregateYoutubeData() {
  const data = new RawData();
  for (const rawVideo of data.videos) {
    const channelId = rawVideo.snippet!.channelId!;
    let channel = index.channels.find((c) => c.id === channelId);
    if (!channel) {
      channel = {
        id: rawVideo.snippet!.channelId!,
        name: rawVideo.snippet!.channelTitle!,
        videos: [],
      };
      index.channels.push(channel);
    }
    if (channel.videos.every((v) => v.id !== rawVideo.id)) {
      const video: Video = {
        id: rawVideo.id!,
        channel,
        title: rawVideo.snippet!.title!,
        publishedAt: rawVideo.snippet!.publishedAt!,
        tags: filterTags(rawVideo.snippet!.tags!),
        guests: findGuests(rawVideo),
        sections: findSections(rawVideo),
      };
      channel.videos.push(video);
      video.guests?.forEach((g) => g.videos.push(video));
    }
  }

  renderIndex();
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

function findGuests(rawVideo: youtube_v3.Schema$Video): Guest[] | undefined {
  const match = rawVideo.snippet!.title!.match(/\(ft.[ ]+@?([^\)]+)\)/);
  if (!match) {
    return undefined;
  }

  const name = match[1].trim();
  let guest = index.guests.find((g) => g.name === name);
  if (!guest) {
    guest = {
      id: name.toLowerCase().replace(/[^a-z0-9_-]+/gi, '-'),
      name,
      videos: [],
      ...findSocialMediaAccounts(rawVideo.snippet!.description!, name),
    };
    index.guests.push(guest);
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

function renderIndex() {
  index.guests.sort((a, b) => a.name.localeCompare(b.name));
  index.channels.sort((a, b) => a.name.localeCompare(b.name));
  index.channels.forEach((c) =>
    c.videos.sort((a, b) => a.publishedAt.localeCompare(b.publishedAt))
  );
  const channelVariable = (channel: Channel) =>
    `channel${channel.name.replace(/[^a-zA-Z0-9]+/g, '')}`;
  const guestVariable = (guest: Guest) => `guest${guest.name.replace(/[^a-zA-Z0-9]+/g, '')}`;
  const videoVariable = (video: Video) => `video${video.id.replace(/[^a-zA-Z0-9]+/g, '_')}`;
  const fileContent = `
import { Channel } from './channel';
import { Guest } from './guest';
import { Video } from './video';

// Guests${index.guests
    .map(
      (g) => `
const ${guestVariable(g)}: Guest = {
  id: '${g.id}',
  name: '${g.name}',${
        g.youtube
          ? `
  youtube: '${g.youtube}',`
          : ''
      }${
        g.twitch
          ? `
  twitch: '${g.twitch}',`
          : ''
      }${
        g.tiktok
          ? `
  tiktok: '${g.tiktok}',`
          : ''
      }${
        g.spotify
          ? `
  spotify: '${g.spotify}',`
          : ''
      }${
        g.twitter
          ? `
  twitter: '${g.twitter}',`
          : ''
      }${
        g.instagram
          ? `
  instagram: '${g.instagram}',`
          : ''
      }
  videos: [],
};`
    )
    .join('')}

// Channels${index.channels
    .map(
      (c) => `
export const ${channelVariable(c)}: Channel = {
  id: '${c.id}',
  name: '${c.name}',
  videos: []
};

// Channel ${c.name} Videos${c.videos
        .map(
          (v) => `
const ${videoVariable(v)}: Video = {
  id: '${v.id}',
  channel: ${channelVariable(c)},
  title: '${v.title.replace(/'/g, `\\'`)}',
  publishedAt: '${v.publishedAt}',${
            v.sections
              ? `
  sections: {${Object.entries(v.sections)
    .map(
      ([key, value]) => `
    '${key}': '${value.replace(/'/g, `\\'`)}',`
    )
    .join('')}
  },`
              : ''
          }${
            v.guests
              ? `
  guests: [${v.guests
    .map(
      (g) => `
    ${guestVariable(g)},`
    )
    .join('')}
  ],`
              : ''
          }${
            v.tags
              ? `
  tags: [${v.tags
    .map(
      (t) => `
    '${t.replace(/'/g, `\\'`)}',`
    )
    .join('')}
  ],`
              : ''
          }
};
${channelVariable(c)}.videos.push(${videoVariable(v)});${(v.guests ?? [])
            .map(
              (g) => `
${guestVariable(g)}.videos.push(${videoVariable(v)});`
            )
            .join('')}
`
        )
        .join('')}
`
    )
    .join('')}

// Exports
export const channels: Channel[] = [${index.channels.map(channelVariable).join(', ')}];
export const guests: Guest[] = [${index.guests
    .map(
      (g) => `
  ${guestVariable(g)},`
    )
    .join('')}
];
`;
  const config: Options = require('../package.json').prettier;
  config.parser = 'typescript';
  writeFileSync(join(__dirname, '../src/app/data/index.ts'), format(fileContent, config), 'utf8');
}
