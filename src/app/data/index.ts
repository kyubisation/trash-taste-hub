import { Channel } from './channel';
import { Guest } from './guest';
import { Video } from './video';

// Guests
const guestAbroadinJapan: Guest = {
  id: 'abroad-in-japan',
  name: 'Abroad in Japan',
  videos: [],
};
const guestakidearest: Guest = {
  id: 'akidearest',
  name: 'akidearest',
  videos: [],
};
const guestDaidus: Guest = {
  id: 'daidus',
  name: 'Daidus',
  videos: [],
};
const guestEmirichu: Guest = {
  id: 'emirichu',
  name: 'Emirichu',
  videos: [],
};
const guestGenoSamuel: Guest = {
  id: 'geno-samuel',
  name: 'Geno Samuel',
  videos: [],
};
const guestIronmouse: Guest = {
  id: 'ironmouse',
  name: 'Ironmouse',
  youtube: 'https://www.youtube.com/c/ironmouseparty',
  twitch: 'https://www.twitch.tv/ironmouse',
  tiktok: 'https://www.tiktok.com/@ironmouse',
  spotify: 'https://open.spotify.com/artist/3rkwWB8rbBCNTrSvVUBa6C',
  twitter: 'https://twitter.com/ironmouse',
  instagram: 'https://www.instagram.com/ironmouseparty/',
  videos: [],
};
const guestjacksepticeye: Guest = {
  id: 'jacksepticeye',
  name: 'jacksepticeye',
  videos: [],
};
const guestJessicaNigri: Guest = {
  id: 'jessica-nigri',
  name: 'Jessica Nigri',
  youtube: 'https://www.youtube.com/user/jessicanigri/',
  twitter: 'https://twitter.com/JESSICANIGRI',
  instagram: 'http://www.instagram.com/jessica.jska',
  videos: [],
};
const guestKenArto: Guest = {
  id: 'ken-arto',
  name: 'Ken Arto',
  twitter: 'https://twitter.com/KenArto',
  instagram: 'https://www.instagram.com/ken_arto/',
  videos: [],
};
const guestKevinPenkin: Guest = {
  id: 'kevin-penkin',
  name: 'Kevin Penkin',
  twitter: 'https://twitter.com/kevinpenkin',
  videos: [],
};
const guestKson: Guest = {
  id: 'kson',
  name: 'Kson',
  youtube: 'https://youtube.com/c/ksonONAIR',
  twitter: 'https://twitter.com/ksononair',
  videos: [],
};
const guestLadybeard: Guest = {
  id: 'ladybeard',
  name: 'Ladybeard',
  videos: [],
};
const guestLilyPichu: Guest = {
  id: 'lilypichu',
  name: 'LilyPichu',
  videos: [],
};
const guestLudwig: Guest = {
  id: 'ludwig',
  name: 'Ludwig',
  videos: [],
};
const guestMichaelReeves: Guest = {
  id: 'michael-reeves',
  name: 'Michael Reeves',
  youtube: 'https://www.youtube.com/michaelreeves',
  twitter: 'https://twitter.com/michaelreeves',
  videos: [],
};
const guestMoriCalliope: Guest = {
  id: 'mori-calliope',
  name: 'Mori Calliope',
  youtube: 'https://www.youtube.com/channel/UCL_qhgtOy0dy1Agp8vkySQg',
  twitter: 'https://twitter.com/moricalliope',
  videos: [],
};
const guestNano: Guest = {
  id: 'nano',
  name: 'Nano',
  youtube: 'https://youtu.be/goVtR6IZrc0',
  spotify: 'https://spoti.fi/3ed7qxK',
  twitter: 'https://twitter.com/fakestarusa',
  instagram: 'https://www.instagram.com/nanonano_me/',
  videos: [],
};
const guestNileRed: Guest = {
  id: 'nilered',
  name: 'NileRed',
  youtube: 'https://youtube.com/c/NileRed',
  tiktok: 'https://www.tiktok.com/@nilered',
  videos: [],
};
const guestNoriyaro: Guest = {
  id: 'noriyaro',
  name: 'Noriyaro',
  youtube: 'https://www.youtube.com/user/noriyaro',
  twitch: 'https://www.twitch.tv/noriyarojapan',
  twitter: 'https://twitter.com/noriyaro',
  videos: [],
};
const guestPokimane: Guest = {
  id: 'pokimane',
  name: 'Pokimane',
  videos: [],
};
const guestProZD: Guest = {
  id: 'prozd',
  name: 'ProZD',
  youtube: 'https://www.youtube.com/prozd',
  twitter: 'https://twitter.com/ProZD',
  videos: [],
};
const guestReinaScully: Guest = {
  id: 'reina-scully',
  name: 'Reina Scully',
  youtube: 'https://www.youtube.com/channel/UCYTspO3jUG-LbwOI1qtC-KQ',
  twitter: 'https://twitter.com/reinascully',
  instagram: 'https://www.instagram.com/reinascully/?hl=en',
  videos: [],
};
const guestShibuyaKaho: Guest = {
  id: 'shibuya-kaho',
  name: 'Shibuya Kaho',
  twitch: 'https://twitch.tv/shibuya_kaho',
  twitter: 'https://twitter.com/Shibukaho',
  instagram: 'https://instagram.com/shibukaho',
  videos: [],
};
const guestShindoL: Guest = {
  id: 'shindo-l',
  name: 'Shindo L',
  videos: [],
};
const guestShuUchida: Guest = {
  id: 'shu-uchida',
  name: 'Shu Uchida',
  videos: [],
};
const guestsydsnap: Guest = {
  id: 'sydsnap',
  name: 'sydsnap',
  twitter: 'http://www.twitter.com/sydsnap',
  videos: [],
};
const guestWilliamOsman: Guest = {
  id: 'william-osman',
  name: 'William Osman',
  videos: [],
};

// Channels
export const channelTrashTaste: Channel = {
  id: 'UCcmxOGYGF51T1XsqQLewGtQ',
  name: 'Trash Taste',
  videos: [],
};

// Channel Trash Taste Videos
const videouNDjVH5qiyM: Video = {
  id: 'uNDjVH5qiyM',
  channel: channelTrashTaste,
  title: 'The Worst Anime Podcast Has Arrived | Trash Taste #1',
  titleShort: 'The Worst Anime Podcast Has Arrived',
  episodeNumber: 1,
  publishedAt: '2020-06-05T20:00:17Z',
  tags: ['Attack On Titan', 'Emails', 'Funny', 'Anime YouTubers'],
};
channelTrashTaste.videos.push(videouNDjVH5qiyM);

const video3E0JIBNlmco: Video = {
  id: '3E0JIBNlmco',
  channel: channelTrashTaste,
  title: 'The Struggles of Life in Japan | Trash Taste #2',
  titleShort: 'The Struggles of Life in Japan',
  episodeNumber: 2,
  publishedAt: '2020-06-12T20:00:02Z',
  sections: {
    '0:00': 'Intro, Garnts birthday and wine.',
    '5:24': 'Living in Japan in quarantine.',
    '7:14': 'Why they went to live to Japan.',
    '12:14': 'Traveling.',
    '15:46': 'Going to the Crunchyroll anime awards.',
    '17:12': 'Getting offered to live in Japan.',
    '22:02': 'Moving to Japan because of anime and watching anime on Japan.',
    '23:13': 'Getting offered to live in Japan (again).',
    '24:20': 'Not getting into a routine and exploring Japan.',
    '25:09': 'Visas in Japan and finding an apartment in Japan.',
    '31:24': 'Applying for a visa in Japan.',
    '34:53': 'Connor losing his passport and more advice for getting a visa in Japan.',
    '40:35': 'Degrees and xenophobia in Japan.',
    '46:23': 'Getting the police called on them and more xenophobia.',
    '50:18': 'buisness in Japan and everything being too serious.',
    '55:13': '"Key-fee" and paying too much for rent.',
    '57:52': 'Convenience stores.',
    '1:01:40': 'Tradition in web design in Japan.',
    '1:02:58': 'Eating out and food prices.',
    '1:07:55': 'Dumb products, weight loss and cherries.',
    '1:12:32': 'Sweets, bread, cheese and nato.',
    '1:16:24': 'Fish and japanese food culture.',
    '1:19:32': 'Difficulties of not being able to speak/read japanese.',
    '1:26:01': 'Problems Connor had after just moving in.',
    '1:27:36': 'Thoughts about Akihabara.',
    '1:30:09': 'Amazon, Gumtree and more Akihabara thoughts.',
    '1:32:08': 'Connors used fridge.',
    '1:36:48': 'The reactions of people of Connor and Garnt moving.',
    '1:39:07': 'Anitubers coming to Japan.',
    '1:40:17': 'Buisness in Japan.',
    '1:41:14': 'Experiencing things and getting life skills.',
    '1:42:06': 'The language barrier.',
    '1:43:59': 'Time they are going to stay.',
    '1:46:20': 'Garnts company party story.',
    '1:48:50': 'Outro.',
  },
  tags: ['The', 'Struggles', 'of', 'Life', 'in', 'Japan'],
};
channelTrashTaste.videos.push(video3E0JIBNlmco);

const video5d3nhRaMBhI: Video = {
  id: '5d3nhRaMBhI',
  channel: channelTrashTaste,
  title: 'The Anime That Shaped Our Childhoods | Trash Taste #3',
  titleShort: 'The Anime That Shaped Our Childhoods',
  episodeNumber: 3,
  publishedAt: '2020-06-19T20:00:00Z',
};
channelTrashTaste.videos.push(video5d3nhRaMBhI);

const videoDvMLVjPk2Io: Video = {
  id: 'DvMLVjPk2Io',
  channel: channelTrashTaste,
  title: 'How to NOT Buy Anime Figures | Trash Taste #4',
  titleShort: 'How to NOT Buy Anime Figures',
  episodeNumber: 4,
  publishedAt: '2020-06-26T20:00:01Z',
  tags: ['How', 'to', 'NOT', 'Buy', 'Figures', 'Akihabara'],
};
channelTrashTaste.videos.push(videoDvMLVjPk2Io);

const videovEtlC9Sl4_Q: Video = {
  id: 'vEtlC9Sl4_Q',
  channel: channelTrashTaste,
  title: "Don't Be a YouTuber in Japan (ft. Abroad in Japan) | Trash Taste #5",
  titleShort: "Don't Be a YouTuber in Japan",
  episodeNumber: 5,
  publishedAt: '2020-07-03T20:00:08Z',
  guests: [guestAbroadinJapan],
  tags: ['Abroad in Japan', 'Chris Broad'],
};
channelTrashTaste.videos.push(videovEtlC9Sl4_Q);
guestAbroadinJapan.videos.push(videovEtlC9Sl4_Q);

const videodgZDICFDY5o: Video = {
  id: 'dgZDICFDY5o',
  channel: channelTrashTaste,
  title: "Don't Watch Anime to Learn Japanese | Trash Taste #6",
  titleShort: "Don't Watch Anime to Learn Japanese",
  episodeNumber: 6,
  publishedAt: '2020-07-10T20:00:08Z',
  tags: ["Don't", 'Watch', 'to', 'Learn', 'Japanese'],
};
channelTrashTaste.videos.push(videodgZDICFDY5o);

const videoSOOPOMAueUA: Video = {
  id: 'SOOPOMAueUA',
  channel: channelTrashTaste,
  title: 'The Internet Kinda Sucks Right Now | Trash Taste #7',
  titleShort: 'The Internet Kinda Sucks Right Now',
  episodeNumber: 7,
  publishedAt: '2020-07-17T20:00:45Z',
  tags: ['The', 'Internet', 'Kinda', 'Sucks', 'Right', 'Now'],
};
channelTrashTaste.videos.push(videoSOOPOMAueUA);

const videofR7FQv8PaVk: Video = {
  id: 'fR7FQv8PaVk',
  channel: channelTrashTaste,
  title: "We Don't Understand Anime Games | Trash Taste #8",
  titleShort: "We Don't Understand Anime Games",
  episodeNumber: 8,
  publishedAt: '2020-07-24T20:00:06Z',
};
channelTrashTaste.videos.push(videofR7FQv8PaVk);

const videodKBT8Vh9yl8: Video = {
  id: 'dKBT8Vh9yl8',
  channel: channelTrashTaste,
  title: "Japan's Earthquakes Are Terrifying | Trash Taste #9",
  titleShort: "Japan's Earthquakes Are Terrifying",
  episodeNumber: 9,
  publishedAt: '2020-07-31T20:00:08Z',
  tags: ['Japans', 'Earthquakes', 'Are', 'Terrifying', 'Japan Sinks 2020'],
};
channelTrashTaste.videos.push(videodKBT8Vh9yl8);

const video0ei80_jPw4c: Video = {
  id: '0ei80_jPw4c',
  channel: channelTrashTaste,
  title: 'Our Dark Past with Anime YouTube | Trash Taste #10',
  titleShort: 'Our Dark Past with Anime YouTube',
  episodeNumber: 10,
  publishedAt: '2020-08-07T19:00:00Z',
  tags: ['Our', 'Dark', 'Past', 'with', 'YouTubers'],
};
channelTrashTaste.videos.push(video0ei80_jPw4c);

const videomLZHgpFOYt4: Video = {
  id: 'mLZHgpFOYt4',
  channel: channelTrashTaste,
  title: 'Sitting Down with an Ex-Japanese 𝒫ó𝓇𝓃𝓈𝓉à𝓇 (ft. Shibuya Kaho) | Trash Taste #11',
  titleShort: 'Sitting Down with an Ex-Japanese 𝒫ó𝓇𝓃𝓈𝓉à𝓇',
  episodeNumber: 11,
  publishedAt: '2020-08-14T20:00:05Z',
  guests: [guestShibuyaKaho],
};
channelTrashTaste.videos.push(videomLZHgpFOYt4);
guestShibuyaKaho.videos.push(videomLZHgpFOYt4);

const videoGMCxI2KJp3Y: Video = {
  id: 'GMCxI2KJp3Y',
  channel: channelTrashTaste,
  title: 'College Horror Stories | Trash Taste #12',
  titleShort: 'College Horror Stories',
  episodeNumber: 12,
  publishedAt: '2020-08-21T20:00:01Z',
  tags: ['College', 'Horror', 'Stories', 'University'],
};
channelTrashTaste.videos.push(videoGMCxI2KJp3Y);

const videoM7D6mwcssuM: Video = {
  id: 'M7D6mwcssuM',
  channel: channelTrashTaste,
  title: 'The Chess Tournament Arc | Trash Taste Special',
  titleShort: 'The Chess Tournament Arc',
  publishedAt: '2020-08-25T20:00:03Z',
  tags: ['Chess', 'Tournament', 'Arc', 'Trash Taste Special'],
  type: 'Special',
};
channelTrashTaste.videos.push(videoM7D6mwcssuM);

const videosUlzvH1R6ng: Video = {
  id: 'sUlzvH1R6ng',
  channel: channelTrashTaste,
  title: 'Uncovering Secrets Behind Anime Piracy | Trash Taste #13',
  titleShort: 'Uncovering Secrets Behind Anime Piracy',
  episodeNumber: 13,
  publishedAt: '2020-08-28T20:00:05Z',
};
channelTrashTaste.videos.push(videosUlzvH1R6ng);

const videod_gHqu67j00: Video = {
  id: 'd-gHqu67j00',
  channel: channelTrashTaste,
  title: 'The Most BORING Anime | Trash Taste #14',
  titleShort: 'The Most BORING Anime',
  episodeNumber: 14,
  publishedAt: '2020-09-04T20:00:08Z',
};
channelTrashTaste.videos.push(videod_gHqu67j00);

const video5LBYddiLLP4: Video = {
  id: '5LBYddiLLP4',
  channel: channelTrashTaste,
  title: 'The REAL Japanese Nightlife Experience | Trash Taste #15',
  titleShort: 'The REAL Japanese Nightlife Experience',
  episodeNumber: 15,
  publishedAt: '2020-09-11T20:00:00Z',
};
channelTrashTaste.videos.push(video5LBYddiLLP4);

const videoDbg8lT53Arg: Video = {
  id: 'Dbg8lT53Arg',
  channel: channelTrashTaste,
  title: 'The WORST Fandoms in Anime | Trash Taste #16',
  titleShort: 'The WORST Fandoms in Anime',
  episodeNumber: 16,
  publishedAt: '2020-09-18T20:00:01Z',
  tags: [
    'The',
    'WORST',
    'Fandoms',
    'in',
    'Dragonball',
    "JoJo's Bizarre Adventure",
    '7 Deadly Sins',
    'Naruto',
    'Bleach',
  ],
};
channelTrashTaste.videos.push(videoDbg8lT53Arg);

const videopxhJIRpLrPE: Video = {
  id: 'pxhJIRpLrPE',
  channel: channelTrashTaste,
  title: "The Japanese Food You've Never Tried | Trash Taste #17",
  titleShort: "The Japanese Food You've Never Tried",
  episodeNumber: 17,
  publishedAt: '2020-09-25T20:00:09Z',
  tags: ['The', 'Japanese', 'Food', "You've", 'Never', 'Tried'],
};
channelTrashTaste.videos.push(videopxhJIRpLrPE);

const videoEswetmwVvtQ: Video = {
  id: 'EswetmwVvtQ',
  channel: channelTrashTaste,
  title: "We've Fallen Down the Vtuber Rabbit Hole | Trash Taste #18",
  titleShort: "We've Fallen Down the Vtuber Rabbit Hole",
  episodeNumber: 18,
  publishedAt: '2020-10-02T20:00:02Z',
  tags: [
    'We’ve',
    'Fallen',
    'Down',
    'Vtuber',
    'Rabbit Hole',
    'Virtual YouTuber',
    'Hololive',
    'Nijisanji',
    'バーチャルユーチューバー',
  ],
};
channelTrashTaste.videos.push(videoEswetmwVvtQ);

const videozyuwyIrw1pQ: Video = {
  id: 'zyuwyIrw1pQ',
  channel: channelTrashTaste,
  title: 'We Need a Break From YouTube | Trash Taste #19',
  titleShort: 'We Need a Break From YouTube',
  episodeNumber: 19,
  publishedAt: '2020-10-09T20:00:09Z',
  tags: ['We', 'Need', 'Break', 'From', 'YouTube', '19'],
};
channelTrashTaste.videos.push(videozyuwyIrw1pQ);

const videoDNDUe3oZygQ: Video = {
  id: 'DNDUe3oZygQ',
  channel: channelTrashTaste,
  title: 'Exposing Our Degenerate Side (ft. sydsnap) | Trash Taste #20',
  titleShort: 'Exposing Our Degenerate Side',
  episodeNumber: 20,
  publishedAt: '2020-10-16T21:51:47Z',
  guests: [guestsydsnap],
};
channelTrashTaste.videos.push(videoDNDUe3oZygQ);
guestsydsnap.videos.push(videoDNDUe3oZygQ);

const videonGx_x0jrE2o: Video = {
  id: 'nGx-x0jrE2o',
  channel: channelTrashTaste,
  title: 'Roasting our WORST Takes on Anime | Trash Taste #21',
  titleShort: 'Roasting our WORST Takes on Anime',
  episodeNumber: 21,
  publishedAt: '2020-10-23T20:00:05Z',
  tags: ['Roasting', 'our', 'WORST', 'Takes', 'on', 'Opinions'],
};
channelTrashTaste.videos.push(videonGx_x0jrE2o);

const videosCcv9uqSBU0: Video = {
  id: 'sCcv9uqSBU0',
  channel: channelTrashTaste,
  title: 'We Tried Real Tokyo Drifting and FAILED | Trash Taste Special',
  titleShort: 'We Tried Real Tokyo Drifting and FAILED',
  publishedAt: '2020-10-30T20:00:53Z',
  tags: ['Drifting', 'Ebisu Circuit'],
  type: 'Special',
};
channelTrashTaste.videos.push(videosCcv9uqSBU0);

const video1t1lme5nGZE: Video = {
  id: '1t1lme5nGZE',
  channel: channelTrashTaste,
  title: 'Anime Convention Horror Stories | Trash Taste #22',
  titleShort: 'Anime Convention Horror Stories',
  episodeNumber: 22,
  publishedAt: '2020-11-06T20:00:00Z',
  tags: ['Convention', 'Horror', 'Stories'],
};
channelTrashTaste.videos.push(video1t1lme5nGZE);

const videotIU0xG_lXkQ: Video = {
  id: 'tIU0xG-lXkQ',
  channel: channelTrashTaste,
  title: 'We Met a REAL Virtual YouTuber (ft. Mori Calliope) | Trash Taste #23',
  titleShort: 'We Met a REAL Virtual YouTuber',
  episodeNumber: 23,
  publishedAt: '2020-11-13T20:00:10Z',
  guests: [guestMoriCalliope],
  tags: ['Mori Calliope', 'Hololive', 'Virtual YouTuber', 'Vtuber', 'カリオペ'],
};
channelTrashTaste.videos.push(videotIU0xG_lXkQ);
guestMoriCalliope.videos.push(videotIU0xG_lXkQ);

const videoXDhyFh0DPOA: Video = {
  id: 'XDhyFh0DPOA',
  channel: channelTrashTaste,
  title: "We're Too Addicted To The Internet | Trash Taste #24",
  titleShort: "We're Too Addicted To The Internet",
  episodeNumber: 24,
  publishedAt: '2020-11-20T20:00:06Z',
};
channelTrashTaste.videos.push(videoXDhyFh0DPOA);

const videoEmJDnyHDYuM: Video = {
  id: 'EmJDnyHDYuM',
  channel: channelTrashTaste,
  title: 'The ℌệ𝔫𝔱ằ𝔦 Episode | Trash Taste #25',
  titleShort: 'The ℌệ𝔫𝔱ằ𝔦 Episode',
  episodeNumber: 25,
  publishedAt: '2020-11-27T20:00:02Z',
};
channelTrashTaste.videos.push(videoEmJDnyHDYuM);

const videoog8CYLCRXeo: Video = {
  id: 'og8CYLCRXeo',
  channel: channelTrashTaste,
  title: 'Our Trash Taste in YouTubers | Trash Taste #26',
  titleShort: 'Our Trash Taste in YouTubers',
  episodeNumber: 26,
  publishedAt: '2020-12-04T20:00:10Z',
};
channelTrashTaste.videos.push(videoog8CYLCRXeo);

const video8_9wNeYiua8: Video = {
  id: '8-9wNeYiua8',
  channel: channelTrashTaste,
  title: 'The #1 Drifting YouTuber in Japan (ft. Noriyaro) | Trash Taste #27',
  titleShort: 'The #1 Drifting YouTuber in Japan',
  episodeNumber: 27,
  publishedAt: '2020-12-11T20:00:01Z',
  guests: [guestNoriyaro],
};
channelTrashTaste.videos.push(video8_9wNeYiua8);
guestNoriyaro.videos.push(video8_9wNeYiua8);

const videoZk8QMtjnRj0: Video = {
  id: 'Zk8QMtjnRj0',
  channel: channelTrashTaste,
  title: 'Are Online Friends REAL Friends? | Trash Taste #28',
  titleShort: 'Are Online Friends REAL Friends?',
  episodeNumber: 28,
  publishedAt: '2020-12-18T20:00:06Z',
};
channelTrashTaste.videos.push(videoZk8QMtjnRj0);

const videoTBGk1TKhVeA: Video = {
  id: 'TBGk1TKhVeA',
  channel: channelTrashTaste,
  title: 'Christmas Horror Stories | Trash Taste #29',
  titleShort: 'Christmas Horror Stories',
  episodeNumber: 29,
  publishedAt: '2020-12-25T20:00:03Z',
};
channelTrashTaste.videos.push(videoTBGk1TKhVeA);

const videoURZHEqOMsU8: Video = {
  id: 'URZHEqOMsU8',
  channel: channelTrashTaste,
  title: 'A Very Drunk Start to the New Year (ft. Abroad in Japan) | Trash Taste #30',
  titleShort: 'A Very Drunk Start to the New Year',
  episodeNumber: 30,
  publishedAt: '2021-01-01T20:00:05Z',
  guests: [guestAbroadinJapan],
};
channelTrashTaste.videos.push(videoURZHEqOMsU8);
guestAbroadinJapan.videos.push(videoURZHEqOMsU8);

const videojiK2jmTVF3A: Video = {
  id: 'jiK2jmTVF3A',
  channel: channelTrashTaste,
  title: 'Japan Is A Real Life Gacha Game | Trash Taste #31',
  titleShort: 'Japan Is A Real Life Gacha Game',
  episodeNumber: 31,
  publishedAt: '2021-01-08T20:00:29Z',
};
channelTrashTaste.videos.push(videojiK2jmTVF3A);

const videohdbTw4Oz45c: Video = {
  id: 'hdbTw4Oz45c',
  channel: channelTrashTaste,
  title: "We Don't Know How to Poop | Trash Taste #32",
  titleShort: "We Don't Know How to Poop",
  episodeNumber: 32,
  publishedAt: '2021-01-15T20:00:26Z',
};
channelTrashTaste.videos.push(videohdbTw4Oz45c);

const video38_9XUFTFzs: Video = {
  id: '38_9XUFTFzs',
  channel: channelTrashTaste,
  title: "We're Too Addicted to Gacha Games | Trash Taste #33",
  titleShort: "We're Too Addicted to Gacha Games",
  episodeNumber: 33,
  publishedAt: '2021-01-22T20:00:00Z',
  tags: ['Gacha', 'GACHA GAMES'],
};
channelTrashTaste.videos.push(video38_9XUFTFzs);

const videoPRR7LAis7_E: Video = {
  id: 'PRR7LAis7-E',
  channel: channelTrashTaste,
  title: 'Roasting Our Horrible Anime Tastes | Trash Taste #34',
  titleShort: 'Roasting Our Horrible Anime Tastes',
  episodeNumber: 34,
  publishedAt: '2021-01-29T20:00:11Z',
};
channelTrashTaste.videos.push(videoPRR7LAis7_E);

const videoFzbCKTMqlWM: Video = {
  id: 'FzbCKTMqlWM',
  channel: channelTrashTaste,
  title: 'We Have Trash Taste in Manga | Trash Taste #35',
  titleShort: 'We Have Trash Taste in Manga',
  episodeNumber: 35,
  publishedAt: '2021-02-05T20:00:03Z',
};
channelTrashTaste.videos.push(videoFzbCKTMqlWM);

const videoz9ulkFRXkvQ: Video = {
  id: 'z9ulkFRXkvQ',
  channel: channelTrashTaste,
  title: 'Talking to a REAL JoJo Animator (ft. Ken Arto) | Trash Taste #36',
  titleShort: 'Talking to a REAL JoJo Animator',
  episodeNumber: 36,
  publishedAt: '2021-02-12T20:00:11Z',
  guests: [guestKenArto],
};
channelTrashTaste.videos.push(videoz9ulkFRXkvQ);
guestKenArto.videos.push(videoz9ulkFRXkvQ);

const video8NtHmr0xOrM: Video = {
  id: '8NtHmr0xOrM',
  channel: channelTrashTaste,
  title: 'How to NOT Flirt with a YouTuber | Trash Taste #37',
  titleShort: 'How to NOT Flirt with a YouTuber',
  episodeNumber: 37,
  publishedAt: '2021-02-19T20:00:02Z',
  tags: ['Connor presentation'],
};
channelTrashTaste.videos.push(video8NtHmr0xOrM);

const videoBEzKwYTQX2s: Video = {
  id: 'BEzKwYTQX2s',
  channel: channelTrashTaste,
  title: 'We Tried Cycling Across Japan and FAILED | Trash Taste Special',
  titleShort: 'We Tried Cycling Across Japan and FAILED',
  publishedAt: '2021-02-26T20:00:15Z',
  tags: ['Special', 'cycling'],
  type: 'Special',
};
channelTrashTaste.videos.push(videoBEzKwYTQX2s);

const videohbEmKBN2HKs: Video = {
  id: 'hbEmKBN2HKs',
  channel: channelTrashTaste,
  title: 'Talking to a REAL Japanese Anime Singer (ft. Nano) | Trash Taste #38',
  titleShort: 'Talking to a REAL Japanese Anime Singer',
  episodeNumber: 38,
  publishedAt: '2021-03-05T20:00:07Z',
  sections: {
    '00:00': 'Who is Nano',
    '04:58': "Nano's Wikipedia",
    '07:00': 'Why Nano started making music',
    '09:50': 'Nico Nico',
    '15:03': 'Nico Nico vs YouTube',
    '16:53': 'How long to create OP music',
    '18:49': 'First time in a music studio',
    '23:59': 'Where has Nano performed',
    '25:53': 'Anime conventions',
    '27:31': 'ExpressVPN',
    '29:06': 'Who does Nano want to cosplay',
    '31:16': 'What constitutes a good OP',
    '34:25': 'Anime music vs JPOP',
    '35:20': 'Karaoke',
    '38:35': 'How anime affected other music',
    '40:37': 'Hiding your face',
    '43:22': 'Biggest crowd',
    '45:54': 'Performing in America vs Japan',
    '48:47': 'Mistakes on the stage',
    '52:45': 'Custom Cast',
    '54:13': 'Idol culture',
    '01:00:18': 'Identity crisis',
    '01:03:19': 'Controlling your artist image',
    '01:05:46': 'Signatures',
    '01:15:04': 'Coming to live in Japan',
    '01:18:24': 'Japanese education system',
    '01:22:39': 'MackWeldon',
    '01:24:24': 'Born in the wrong generation',
    '01:29:21': 'Is Japan a utopia?',
    '01:30:35': 'Macha',
    '01:33:02': 'Public transport',
    '01:34:55': 'Food',
    '01:38:17': 'Rehearsals',
    '01:43:34': 'Who owns the rights to anime OPs',
    '01:46:39': 'How it felt hearing yourself on TV',
    '01:48:16': 'Working in the industry',
    '01:49:45': 'Who does Nano like',
    '01:51:38': "Nano's YouTube career",
    '01:58:57': 'Outro',
  },
  guests: [guestNano],
};
channelTrashTaste.videos.push(videohbEmKBN2HKs);
guestNano.videos.push(videohbEmKBN2HKs);

const video6AILeSMxtiU: Video = {
  id: '6AILeSMxtiU',
  channel: channelTrashTaste,
  title: 'THINGS THAT TERRIFY US | Trash Taste #39',
  titleShort: 'THINGS THAT TERRIFY US',
  episodeNumber: 39,
  publishedAt: '2021-03-12T20:00:04Z',
  sections: {
    '00:00': 'Intro',
    '00:47': 'Dangerous caves',
    '08:16': 'Climbing in high places',
    '11:19': 'Extreme activities',
    '13:04': 'Where our fears came from',
    '14:23': 'Connor used to be claustrophobic',
    '16:15': 'A fascinating fear',
    '17:45': "Joey's fear of heights",
    '18:55': 'A fear that came from anime',
    '20:37': 'We want to press RED BUTTONS!',
    '22:11': 'Insane bus driver story',
    '24:52': 'Joey saw lightning up close',
    '27:11': 'Honey',
    '28:51': "Joey's classmates cricket accident",
    '30:42': 'Connor passed out in sex ed',
    '33:34': 'Sex ed was weird',
    '37:39': "Connor's teacher was a chad",
    '39:09': 'Babies come out of bellybuttons',
    '42:06': 'Connor cut his own hair',
    '43:21': 'Joey used to fear toilets',
    '46:22': 'How Garnt learned about lying',
    '47:04': 'How Joey learned about lying',
    '48:34': 'Among us is difficult for us',
    '50:41': 'Twitch content is popping off',
    '53:14': 'Learning how to commentate live',
    '54:47': 'Having siblings',
    '57:03': 'Consoles we owned as children',
    '59:09': 'Connor was addicted to his gameboy',
    '01:01:37': 'Garnt went to an unofficial Nintendo store',
    '01:03:13': 'Trading games with other kids',
    '01:05:03': 'Connor mastered the art of the deal',
    '01:08:09': 'Garnt used to hustle hard',
    '01:09:49': 'Joey printed his own Yu-Gi-Oh Cards',
    '01:13:04': 'Card unboxings are amazing',
    '01:15:8': 'Streaming on Twitch',
    '01:17:45': 'Our mentality towards working',
    '01:20:35': 'The bane of any streamer',
    '01:24:36': 'The Attack on Titan segment',
    '01:26:46': 'Bookwalker',
    '01:27:59': 'Spoiler culture',
    '01:31:14': 'Are memes spoilers?',
    '01:35:46': 'Anime dedicated forums',
    '01:37:05': 'Discussing anime as it airs',
    '01:43:52': 'Last time we got spoiled on something',
    '01:47:05': 'The spoilers that everyone should know',
    '01:50:32': "We're tired, bye",
  },
};
channelTrashTaste.videos.push(video6AILeSMxtiU);

const videovrB4p_n1Ta8: Video = {
  id: 'vrB4p-n1Ta8',
  channel: channelTrashTaste,
  title: 'The WORST Japanese Convenience Store Food | Trash Taste #40',
  titleShort: 'The WORST Japanese Convenience Store Food',
  episodeNumber: 40,
  publishedAt: '2021-03-19T19:15:32Z',
  sections: {
    '00:00': 'intro',
    '01:04': 'convenience stores in japan',
    '03:57': 'fried chicken',
    '11:07': 'chicken nuggets',
    '13:02': 'skewered meat',
    '14:49': 'ashley',
    '15:09': 'cheap sake',
    '18:24': 'korokke',
    '20:16': 'spring roll',
    '22:26': 'mexican food in japan',
    '25:08': "Harry's",
    '27:51': 'gyudon',
    '30:30': 'snacks',
    '35:06': 'sausages',
    '37:25': 'sandwiches',
    '45:08': 'onigiri',
    '50:29': 'seafood sticks',
    '52:42': 'Bokksu',
    '54:40': 'meats',
    '55:31': 'pickled plums',
    '59:30': 'dried fish',
    '01:01:30': 'sugar snack',
    '01:04:17': 'cookies',
    '01:08:23': 'mini ramen',
    '01:10:18': 'a weird snack',
    '01:12:37': 'castella',
    '01:13:57': 'popcorn',
    '01:15:06': 'sugary baguette',
    '01:16:15': "lawson's chocolates",
    '01:21:39': 'almond cookies',
    '01:23:03': 'sweet potato kit kat',
    '01:24:21': 'pretz',
    '01:25:24': 'gaba',
    '01:27:51': 'ramune candy',
    '01:29:02': 'choco baby',
    '01:29:58': 'umaibo',
    '01:31:49': 'cheese',
    '01:34:03': 'even more sweets',
    '01:38:37': 'the best kit kat',
    '01:40:10': 'wasabi sticks',
    '01:42:23': 'macha',
    '01:44:10': 'garnts life changes',
    '01:47:17': 'ranking the stores',
    '01:55:16': 'tasty outro',
  },
};
channelTrashTaste.videos.push(videovrB4p_n1Ta8);

const videoESTvga3alco: Video = {
  id: 'ESTvga3alco',
  channel: channelTrashTaste,
  title: 'The YouTuber Life is CURSED | Trash Taste #41',
  titleShort: 'The YouTuber Life is CURSED',
  episodeNumber: 41,
  publishedAt: '2021-03-26T19:00:02Z',
  sections: {
    '00:00': 'Frail intro',
    '00:36': 'Revisiting the cycling special',
    '05:06': "Why Garnt didn't put the chain back on",
    '07:43': 'The logistics of filming a special',
    '10:15': 'We see through the lies of movies',
    '11:40': 'IRL streamers',
    '14:29': 'Feeling awkward in public',
    '16:48': 'Fake confidence during a stream',
    '17:54': 'Are streamers actually nice people',
    '18:32': 'The next step to IRL streaming',
    '19:08': 'The weirdest challenge on YouTube',
    '21:59': 'Garnt and Joey toy collab',
    '23:06': 'How is this allowed on YT',
    '23:59': "The most cursed stuff we've seen on YT",
    '25:41': "It's just a prank bro",
    '28:11': 'Ritual',
    '29:21': 'Adressing the monk pictures',
    '32:15': 'Having the talk with your parents',
    '36:33': 'Joey banned his dad from his socials',
    '39:31': 'Internet privacy',
    '41:35': 'Interviews with the paparazzi',
    '43:15': 'Blues Clues',
    '44:43': 'Genetics',
    '45:31': "Believing you're the exception",
    '51:06': 'Accepting your future',
    '53:58': 'Being bald',
    '54:54': 'Having your entire life recorded',
    '56:48': 'EJAS',
    '58:40': 'Storing your virtual existence',
    '01:00:17': "Garnt's thug look",
    '01:04:30': 'Suits are fun',
    '01:06:42': "Men's fashion",
    '01:11:24': 'Japan has optimized shirts',
    '01:12:40': "Japan's technology is hit or miss",
    '01:16:14': 'People are embarassing',
    '01:20:42': 'The Waffle House Index',
    '01:21:36': 'Zombie movies are not realistic',
    '01:25:18': 'Social skills after isolation',
    '01:28:25': 'Wearing masks',
    '01:29:15': 'Will cons become more hygenic',
    '01:31:20': 'Hand sanitizers',
    '01:34:45': 'Future conventions',
    '01:35:32': 'Post Malone x Pokemon',
    '01:38:20': 'Crowds make or break an event',
    '01:42:26': 'The future of chess',
    '01:47:53': 'Forgetting what you learned',
    '01:50:48': 'We thank you',
  },
};
channelTrashTaste.videos.push(videoESTvga3alco);

const videoxqurcPbqKs4: Video = {
  id: 'xqurcPbqKs4',
  channel: channelTrashTaste,
  title: 'Exposing the Truth of YouTube (ft. @akidearest) | Trash Taste #42',
  titleShort: 'Exposing the Truth of YouTube',
  episodeNumber: 42,
  publishedAt: '2021-04-02T20:00:08Z',
  sections: {
    '00:00': 'Fire intro',
    '01:01': 'Aki reveals her name',
    '01:13': 'YouTuber wikis are unreliable',
    '03:01': 'Garnt socializes',
    '04:02': 'Who is Akidearest',
    '05:50': 'Are we anime YouTubers',
    '07:34': 'Aki used to do analytical content',
    '09:03': 'How Aki and Joey met',
    '09:27': 'Skoolgirl101',
    '12:24': 'Aki reaches out to Joey',
    '14:58': 'Joey was trapped in Canada',
    '16:59': 'The longest Skype calls',
    '18:39': 'The AX experience',
    '21:48': 'Being jealous of American culture',
    '23:39': 'Parents love YouTubers',
    '25:35': 'Our parents give us feedback',
    '26:50': 'Liquid IV',
    '28:19': 'Starting YouTube',
    '33:25': 'Our perspective on grinding',
    '34:45': 'YouTubers and self worth',
    '37:07': 'Fake friends',
    '39:56': 'Collabing',
    '42:21': 'Eye contact',
    '44:41': 'People need to introduce their friends',
    '45:15': 'The handshake',
    '46:53': "Connor had drinner with Aki's family",
    '50:16': 'Food is the answer to everything',
    '51:19': 'Commenting on weight',
    '53:59': 'Military school',
    '01:05:44': 'Getting messages from people in your past',
    '01:07:08': 'School reunions',
    '01:12:11': 'Moving away from your birth country',
    '01:14:09': 'Aki used to have an accent',
    '01:15:05': 'British history and culture',
    '01:16:19': 'Accents',
    '01:18:53': 'The Welsh Dragon',
    '01:20:35': 'Connor is in a clan',
    '01:22:56': 'Joey trolls his friends',
    '01:24:13': 'Blowing up on YouTube',
    '01:28:06': 'Expanding your content',
    '01:30:38': 'True Crime',
    '01:36:49': 'Netflix documentaries',
    '01:45:43': 'How deep is the True Crime world',
    '01:50:18': 'Criminal psychology',
    '01:52:49': 'Reality and entertainment has combined',
    '01:56:45': 'Cancel culture',
    '02:02:42': 'The YouTube persona',
    '02:04:10': 'The need to know everything',
    '02:06:50': 'YouTube views matter',
    '02:10:10': "What does Aki's future hold",
    '02:11:04': 'Joey brings the outro',
  },
  guests: [guestakidearest],
};
channelTrashTaste.videos.push(videoxqurcPbqKs4);
guestakidearest.videos.push(videoxqurcPbqKs4);

const videocuYit0asYhc: Video = {
  id: 'cuYit0asYhc',
  channel: channelTrashTaste,
  title: 'Our Trash Taste In TV | Trash Taste #43',
  titleShort: 'Our Trash Taste In TV',
  episodeNumber: 43,
  publishedAt: '2021-04-09T20:00:12Z',
  sections: {
    '00:00': 'Connor shits on his phone',
    '01:04': 'Jeopardy',
    '01:52': 'Gameshows we watched growing up',
    '02:55': 'Deal or no deal',
    '04:29': 'British gameshows',
    '05:25': 'Prize pools',
    '06:43': 'Favorite gameshow',
    '07:58': 'Golden Balls',
    '12:09': 'Millionaire Hot Seat',
    '13:28': 'Weakest Link',
    '15:17': 'Reckless Ben',
    '17:11': 'Talent shows are insane',
    '18:21': '90 Day Fiancee',
    '22:50': 'American vs British Reality TV',
    '23:39': "Don't Tell the Bride",
    '26:43': 'ExpressVPN',
    '28:08': 'Organizing a wedding',
    '32:08': 'Thai weddings',
    '36:31': 'Connor gets stopped by the police',
    '43:20': 'Biggest games in japan',
    '44:04': 'Dead games',
    '44:42': 'Popular games',
    '48:12': 'Deepfakes',
    '59:41': 'Worrying about everything',
    '01:08:05': 'YouTuber boxing matches',
    '01:12:16': 'Are YouTubers ruining sports',
    '01:17:14': 'Boring sports',
    '01:19:52': 'Sports we want to try',
    '01:22:14': 'The Olympics',
    '01:24:49': 'Watching sports games',
    '01:28:57': 'Sumo',
    '01:29:55': 'Talking about America',
    '01:31:45': 'Obscure sports',
    '01:35:34': 'Robot Wars',
    '01:37:8': 'Gladiators',
    '01:39:11': 'Unbeatable Banzuke',
    '01:40:24': 'Best reality TV concept',
    '01:44:37': 'Derren Brown',
    '01:51:08': 'David Blaine',
    '01:54:32': 'Fear Factor',
    '01:58:34': 'Derren Brown special',
    '02:02:37': 'Thanking the most important people',
  },
};
channelTrashTaste.videos.push(videocuYit0asYhc);

const videojePOmeSAgdg: Video = {
  id: 'jePOmeSAgdg',
  channel: channelTrashTaste,
  title: 'Sitting Down with a Pro Cross-Dressing Idol Wrestler (ft. Ladybeard) | Trash Taste #44',
  titleShort: 'Sitting Down with a Pro Cross-Dressing Idol Wrestler',
  episodeNumber: 44,
  publishedAt: '2021-04-16T20:00:08Z',
  sections: {
    '00:00': 'Smashing intro',
    '01:02': "It's Ladybeard",
    '01:32': "Getting shushed at Denny's",
    '02:24': 'Pranking convenience store workers',
    '04:19': 'Who is Ladybeard',
    '06:40': 'Why Ladybeard left Australia',
    '08:26': 'Working in Hong Kong',
    '09:14': 'Getting into wrestling',
    '12:07': 'Moving to Japan',
    '12:46': 'The system of wrestling',
    '14:53': 'How Ladybeard became a crossdresser',
    '17:19': 'Being the object of attention',
    '19:24': 'Becoming the top wrestler in Hong Kong',
    '23:10': 'Pro wrestling entries',
    '25:32': 'Becoming a metal singer',
    '30:57': 'Ladybaby',
    '36:41': 'Harrys',
    '38:39': 'The shower curtain story',
    '43:22': 'Being in a pop group',
    '46:02': 'Babybeard',
    '49:19': 'Auditions for Babybeard',
    '54:29': 'A fake ad',
    '55:10': 'Ladybeards audience',
    '56:46': 'Getting recognized',
    '57:38': 'T-posing for a grandma',
    '59:40': 'Ladybeards future goals',
    '01:01:29': 'How to pronounce Gigguk',
    '01:02:18': "You can't sing on YouTube",
    '01:03:29': 'Working a normal job',
    '01:06:11': 'Honey',
    '01:07:49': 'Long flights',
    '01:11:53': 'Reading books',
    '01:14:00': 'Hobbies',
    '01:14:53': 'Work as a hobby',
    '01:16:40': 'Working out is weird',
    '01:17:20': 'Chad',
    '01:20:30': 'Getting into martial arts',
    '01:22:59': 'How long to learn a martial art',
    '01:24:36': 'The usefulness of martial arts',
    '01:25:44': 'MMA',
    '01:28:03': 'Easiest martial art to learn',
    '01:28:49': 'Being a stuntman',
    '01:34:41': 'Pro wrestling',
    '01:35:54': 'Wrestling injuries',
    '01:40:59': 'Playing with fire',
    '01:43:37': 'The Ladybeard Podcast',
    '01:45:38': 'Peppa the Pig',
    '01:46:44': 'Learning Japanese',
    '01:56:39': 'Ladybeard is a voice actor',
    '02:02:07': "Connor's weird voice acting gig",
    '02:05:08': 'Accents in voice acting',
    '02:10:01': "Anime we're currently watching",
    '02:12:18': 'Watching manly anime',
    '02:15:25': 'The Anime Man name is a lie',
    '02:17:34': 'Being the content',
    '02:18:44': 'Transitioning beyond anime content',
    '02:22:05': 'Stunt driving',
    '02:24:21': 'The awesome life of Ladybeard',
    '02:25:38': 'Chad outro',
  },
  guests: [guestLadybeard],
};
channelTrashTaste.videos.push(videojePOmeSAgdg);
guestLadybeard.videos.push(videojePOmeSAgdg);

const videoWzc8_GZDSR0: Video = {
  id: 'Wzc8_GZDSR0',
  channel: channelTrashTaste,
  title: 'Roasting our Terrible Taste in Games | Trash Taste #45',
  titleShort: 'Roasting our Terrible Taste in Games',
  episodeNumber: 45,
  publishedAt: '2021-04-23T20:00:06Z',
  sections: {
    '00:00:00': 'Rise up gamers',
    '00:03:12': "Garnt can't complete games",
    '00:05:13': 'Joey likes shiny new things',
    '00:07:11': 'Remembering is hard',
    '00:07:51': 'What video games we expect Garnt to play',
    '00:08:49': "Garnt's 3x3",
    '00:09:22': 'Anime games',
    '00:10:13': 'Garnt hates turn-based battles',
    '00:11:00': 'Persona 5 is a banger',
    '00:12:28': 'Tales of Symphonia',
    '00:15:10': 'More Persona 5',
    '00:17:15': 'Hype fatigue',
    '00:19:19': 'Replaying comfort games',
    '00:21:10': 'Legend of Zelda',
    '00:22:27': 'Super Mario Sunshine',
    '00:23:28': 'Ocarina of Time is overrated',
    '00:24:46': "Majora's Mask",
    '00:26:01': 'Super Mario',
    '00:28:27': 'Garnt has vanilla anime taste',
    '00:28:53': 'Gears of War',
    '00:32:02': "You can't have fun in multiplayer",
    '00:34:34': 'Talking to your teammates',
    '00:35:55': "Garnt doesn't want to play the best Metal Gear",
    '00:36:45': 'Theme Park World',
    '00:39:33': 'Box art',
    '00:41:25': 'Garnt loves the cutscenes',
    '00:42:53': 'Interacting with every NPC',
    '00:44:07': 'Mass Effect lore',
    '00:46:07': 'The Silent Hill drama',
    '00:48:11': 'Gaming FOMO',
    '00:52:05': 'Garnt was a Fifa pro',
    '00:57:11': 'Fifa Ultimate is worse than gatcha games',
    '00:59:34': 'The pay-to-win experience',
    '01:01:56': 'Gaming tournaments are expensive',
    '01:02:54': "Connor's 3x3",
    '01:03:36': 'Super Mario Strikers',
    '01:07:06': 'Batallion Wars',
    '01:09:42': 'Guitar Hero',
    '01:12:27': 'Rhythm games',
    '01:15:34': 'Sonic Riders',
    '01:18:44': 'Black Ops 2',
    '01:20:30': 'Metal Slug',
    '01:21:24': 'Contra',
    '01:22:23': 'Mega Man',
    '01:23:55': 'Battletoads',
    '01:26:01': 'Time Crisis',
    '01:32:06': 'Arcade games',
    '01:36:06': 'Apex Legends vs League of Legends',
    '01:39:40': 'Meeting up with online friends',
    '01:41:28': 'Halo Wars',
    '01:43:23': 'RTS games',
    '01:45:01': "Joey's 3x3",
    '01:45:45': 'Super Mario World',
    '01:46:54': 'Clannad',
    '01:47:42': 'Eating bricks',
    '01:48:52': 'SSX Tricky',
    '01:50:40': 'Pokemon Silver',
    '01:52:42': 'Kirby',
    '01:53:55': 'Animal Crossing',
    '01:56:40': 'Sims voice acting projects',
    '01:57:19': 'Garnt gets burned by Animal Crossing',
    '02:00:46': 'Games where you collect stuff',
    '02:04:21': 'Terraria vs Minecraft',
    '02:06:24': "Games we didn't have room to include",
    '02:12:59': 'Joey slams another outro',
  },
};
channelTrashTaste.videos.push(videoWzc8_GZDSR0);

const videoEpPbObPhozs: Video = {
  id: 'EpPbObPhozs',
  channel: channelTrashTaste,
  title: "Let's Just JUMP Right Into It (ft. Reina Scully) | Trash Taste #46",
  titleShort: "Let's Just JUMP Right Into It",
  episodeNumber: 46,
  publishedAt: '2021-04-30T20:00:05Z',
  sections: {
    '00:00:00': 'Connor is the host today',
    '00:00:40': 'Reina Scully joins the party',
    '00:02:20': 'Who is Reina Scully?',
    '00:03:43': 'SourceFed',
    '00:11:43': 'Why Reina left SourceFed',
    '00:13:08': 'Anime Club',
    '00:16:53': 'Reina brought anime knowledge to YouTube',
    '00:20:21': 'Anime fans are brutal',
    '00:22:44': 'Reinas life after SourceFed',
    '00:26:34': 'Getting a job for Philip DeFranco',
    '00:28:16': 'Ritual',
    '00:29:12': 'Starting work at Crunchyroll',
    '00:33:04': 'Being the face of Crunchyroll',
    '00:34:57': 'Interning for a YouTube channel',
    '00:35:59': 'Being camera shy',
    '00:38:26': 'Joey ignores Reina during a stream',
    '00:41:22': 'Leaving a stream open accidentally',
    '00:42:12': 'Streaming with friends',
    '00:44:39': 'Connor almost got doxed',
    '00:47:45': 'LA is intense',
    '00:49:26': "Reina didn't own her own channel",
    '00:52:48': 'Being proud of your own videos',
    '00:54:35': 'Why Reina left Crunchyroll',
    '00:56:34': 'Leaving LA',
    '00:57:35': 'Bokksu',
    '00:58:59': 'Reinas life in Japan',
    '01:02:48': 'Feeling isolated',
    '01:03:51': 'Why Reina moved to Japan',
    '01:06:26': 'Being the cool uncles',
    '01:19:50': 'Japanese TV has no chill',
    '01:11:25': 'Why does Japan censor everything',
    '01:14:24': 'Japanese TV is great for inspiration',
    '01:17:16': 'Silent Library',
    '01:18:53': 'The Inbetweeners',
    '01:20:48': 'Manscaped',
    '01:22:51': 'British TV adaptations',
    '01:23:34': 'Anime we grew up with',
    '01:24:39': 'Being an Asian in school',
    '01:29:49': 'Mandatory food segment',
    '01:34:59': 'The most 5/10 ramen ever',
    '01:36:43': 'The sketchy part of Japan',
    '01:38:18': 'Sherlock Holmes x Detective Conan',
    '01:40:57': 'Toonami',
    '01:43:08': 'Reina draws X-Files fan art',
    '01:46:00': 'Hosting a food show',
    '01:50:00': 'Voice acting',
    '01:51:35': 'Streaming setup',
    '01:54:19': 'Worst things to do during a stream',
    '01:58:07': 'Guessing our net worth',
    '01:59:17': 'Monetizing our hobbies',
    '02:01:16': 'Japan has the best aesthetic',
    '02:03:00': "UK's aesthetic",
    '02:08:30': 'Joey gets pranked by a bird',
    '02:09:14': 'Recreating sounds',
    '02:10:37': 'Japans dialect is huge',
    '02:15:03': 'Weird British words',
    '02:18:12': 'Reina brought us gifts, yay!',
  },
  guests: [guestReinaScully],
};
channelTrashTaste.videos.push(videoEpPbObPhozs);
guestReinaScully.videos.push(videoEpPbObPhozs);

const videoOpAHNHFfWH4: Video = {
  id: 'OpAHNHFfWH4',
  channel: channelTrashTaste,
  title: "We Don't Understand Live Streamers | Trash Taste #47",
  titleShort: "We Don't Understand Live Streamers",
  episodeNumber: 47,
  publishedAt: '2021-05-07T20:00:06Z',
  sections: {
    '00:00:00': 'Poopoo intro',
    '00:01:37': 'YouTube is removing the dislike counter',
    '00:03:16': 'YouTube Heroes was a thing',
    '00:03:37': 'Why does YouTube secretly change stuff',
    '00:05:45': 'Dislikes are important',
    '00:08:05': 'YouTube has made good changes',
    '00:11:37': 'Comments that are turned off',
    '00:12:01': 'Getting ratioed',
    '00:13:45': 'Instagram stops showing the amount of likes',
    '00:14:49': 'Twitter is its own ecosystem',
    '00:16:38': 'Every platform is its own bubble',
    '00:17:58': "Removing options doesn't remove the problem",
    '00:20:39': 'Ending cancel culture',
    '00:23:52': 'The copyright system has improved',
    '00:25:39': 'Demonetization is weird',
    '00:26:40': 'YouTube comments got really good',
    '00:27:52': 'ExpressVPN',
    '00:29:20': 'What feedback would we give to YouTube',
    '00:31:36': 'Getting in contact with YouTube is impossible',
    '00:34:16': 'Our videos are being ranked by views',
    '00:36:00': 'Underperforming videos',
    '00:41:46': 'Mental health and creativity',
    '00:44:31': 'Nobody understands the algorithm',
    '00:46:20': 'Mack Weldon',
    '00:47:30': 'Proving our worth to YouTube',
    '00:48:44': 'Putting numbers of parts in video titles',
    '00:49:13': 'The lore of Trash Taste',
    '00:52:02': 'Connor the VTuber magnet',
    '00:54:34': '3D people collabing with VTubers',
    '00:59:54': 'The future of VTubing',
    '01:01:51': 'Being able to meet your fans',
    '01:06:55': 'Streaming seems fun',
    '01:07:43': 'Twitch is broken',
    '01:09:26': "Ludwig's subathon",
    '01:10:35': 'Getting cancelled during your sleep',
    '01:15:05': 'Ludwig made the Truman Show real',
    '01:18:05': "Will anyone ever top Ludwig's subathon",
    '01:19:01': 'Twitch plays Pokémon',
    '01:20:45': 'LiquidIV',
    '01:21:49': 'Sporting events with Twitch chat',
    '01:23:21': 'The chaos that was Twitch plays Pokemon',
    '01:25:52': 'Creativity in streaming',
    '01:28:07': 'Original ideas on YouTube',
    '01:29:52': 'Stuff that does well on Twitch',
    '01:32:36': 'Watching Twitch on mobile',
    '01:34:05': 'Do we watch Youtube as a job',
    '01:37:10': 'Copying other peoples content',
    '01:45:51': "Things we can't get over",
  },
};
channelTrashTaste.videos.push(videoOpAHNHFfWH4);

const videop6JEsEmtsds: Video = {
  id: 'p6JEsEmtsds',
  channel: channelTrashTaste,
  title: 'Do We Drink Too Much?? | Trash Taste #48',
  titleShort: 'Do We Drink Too Much??',
  episodeNumber: 48,
  publishedAt: '2021-05-14T20:00:19Z',
  sections: {
    '00:00:00': 'Tasty intro',
    '00:00:50': 'The power of Grant',
    '00:01:14': 'We took a 3 week break',
    '00:02:18': 'What is there to talk about',
    '00:03:04': 'Journey Across Japan: Lost Islands',
    '00:04:38': "Japan's British Town",
    '00:07:03': 'British culture',
    '00:08:34': 'Joey went on a trip with Chris',
    '00:09:44': 'Connor learns a new word',
    '00:10:30': 'Speedrunning tourism',
    '00:11:31': 'Places to visit in Japan',
    '00:14:39': "Google knows where we've been",
    '00:18:17': "The prefectures Joey's visited",
    '00:20:52': 'Japans coffee is bad',
    '00:27:32': 'Honey',
    '00:28:54': 'Espresso is amazing',
    '00:31:15': 'We really needed an espresso machine',
    '00:33:54': 'Japan really is a tea society',
    '00:35:58': 'Fish & Chips',
    '00:38:40': 'What can you do in England',
    '00:40:54': 'Judging towns based on their pint prices',
    '00:42:22': "All you can drink izakaya's",
    '00:44:39': 'Coming around to liking wine',
    '00:48:30': 'Wine in Japan',
    '00:50:05': 'Hangover tier list',
    '00:52:17': 'Making mini-games out of drinking',
    '00:54:34': 'The Kamikaze Shot',
    '00:56:54': "Harry's",
    '00:58:17': 'Getting old',
    '00:59:22': 'Garnts first wine tasting event',
    '01:02:58': 'Fancy restaurants',
    '01:04:13': 'Hangover tier list recap',
    '01:04:41': 'Meilyne experiments on Garnt',
    '01:07:06': 'Evian made us beautiful',
    '01:08:54': 'Bracelets that help you lose fat',
    '01:09:47': 'Bad before and after pictures',
    '01:11:40': 'Chicken and broccoli diet works',
    '01:13:15': 'Trying to lose weight',
    '01:15:10': 'Self-improvement',
    '01:18:53': 'Enjoying food',
    '01:19:43': 'Connors worst Uber Eats experience',
    '01:22:26': 'Garnt managed to get spicy food in Japan',
    '01:24:33': 'Connor and Garnt got some really spicy food',
    '01:26:39': 'The allure of spicy food',
    '01:30:02': 'Crunchyroll',
    '01:31:08': 'Connors older brother pranks his family',
    '01:35:19': 'The spiciest thing Joeys had',
    '01:36:56': 'Spice high',
    '01:38:16': 'Garnt tries ghost pepper extract',
    '01:44:41': 'Connor used to be a lifeguard',
    '01:56:23': 'How to save kids from drowning',
    '01:58:07': 'Garnt almost drowned',
    '02:02:43': 'Joeys funnest pool experience',
    '02:03:35': 'Finding a place to swim in Japan is hard',
    '02:04:36': 'How often do people shit in a pool',
    '02:05:55': 'The downsides of being shortsighted in a pool',
    '02:10:29': 'Peeing in the pool',
    '02:11:51': 'See you next Friday',
  },
};
channelTrashTaste.videos.push(videop6JEsEmtsds);

const video7vIbh4yLxtA: Video = {
  id: '7vIbh4yLxtA',
  channel: channelTrashTaste,
  title: 'The Worst Things You Can Do in Japan | Trash Taste #49',
  titleShort: 'The Worst Things You Can Do in Japan',
  episodeNumber: 49,
  publishedAt: '2021-05-21T21:00:05Z',
  sections: {
    '00:00:00': 'Meilyne time',
    '00:00:49': "Stuff that's left behind when moving house",
    '00:02:41': 'Throwing away trash in Japan',
    '00:04:56': "The little things we don't think about in our house",
    '00:07:08': 'Sydney has a lot of weird stuff',
    '00:09:55': 'Missing a YouTube upload',
    '00:11:36': 'Lockdown in Japan',
    '00:12:15': 'Golden Week',
    '00:13:38': 'Japanese government gave you money to travel during lockdown',
    '00:18:38': 'Dreaming about the lockdown ending',
    '00:19:55': 'We crave beans and toast',
    '00:21:36': 'People make everything political',
    '00:22:45': 'UK is opening up',
    '00:25:39': "Garnt and Joey's camping adventure",
    '00:27:21': 'Bokksu',
    '00:28:24': 'Garnt buys a battery bank',
    '00:34:09': 'Camping areas in Japan',
    '00:36:51': 'Buying wood for a fire',
    '00:38:47': 'Camping in Japan is fully regulated',
    '00:40:39': 'Setting up a tent',
    '00:44:10': 'Starting a fire',
    '00:46:46': 'Connor goes camping',
    '00:49:31': 'Activities during camping',
    '00:50:31': 'Kayaking in the ocean',
    '00:53:08': 'Service stations in Japan',
    '00:55:14': 'Garnt has a ton of paperwork',
    '00:56:50': 'Gamersupps',
    '00:58:13': 'Connor and Garnt go snowboarding',
    '01:06:58': 'Snowboarding on a beginners slope',
    '01:10:29': 'Learning snowboarding at a young age',
    '01:11:57': 'Getting the hang on snowboarding',
    '01:14:29': 'Garnt tries to jump with a snowboard',
    '01:21:02': 'Connor shows off his snowboarding skills',
    '01:23:38': "Garnt's second day of snowboarding",
    '01:25:56': 'Manscaped',
    '01:27:10': "Garnt couldn't get himself up",
    '01:29:14': 'Snowboarding vs skiing',
    '01:31:32': 'How long to learn snowboarding',
    '01:32:40': 'Why Connor stopped skiing',
    '01:38:04': 'The whitest activities anyone can do',
    '01:39:45': 'The weirdest ski resort',
    '01:45:43': "We're too privileged for bad coffee",
    '01:47:46': "Don't trust free coffee",
    '01:49:51': 'Getting a coffee machine changes your life',
    '01:52:21': 'Food cooked during camping tastes the best',
    '01:52:56': 'Oh no',
    '01:55:16': "Connor realizes he doesn't want to be a peasant",
    '01:56:42': 'The money mindset',
    '02:12:03': 'Connor leaves the podcast',
  },
};
channelTrashTaste.videos.push(video7vIbh4yLxtA);

const video3aM1rVv2T3o: Video = {
  id: '3aM1rVv2T3o',
  channel: channelTrashTaste,
  title: 'The Trash Taste Awards | Trash Taste #50',
  titleShort: 'The Trash Taste Awards',
  episodeNumber: 50,
  publishedAt: '2021-05-28T20:00:12Z',
  sections: {
    '00:00:00': 'Welcome to Trash Taste Awardw',
    '00:01:37': 'Our 1 year anniversary',
    '00:04:23': 'Reflecting on the past year',
    '00:07:22': 'Categories',
    '00:09:00': 'Best Intro',
    '00:15:49': 'Hot Take of the Year',
    '00:24:18': 'Atsuko',
    '00:25:40': 'Best Hot Take of the Year',
    '00:27:28': 'Best Out-Of-Context Clip',
    '00:32:30': 'Screengrab of the Year',
    '00:37:22': 'Most Degenerate Moment',
    '00:43:01': 'Most Saltiest Moment',
    '00:48:36': 'Most Monkey Moment',
    '00:54:48': 'Best Story',
    '01:02:22': 'Biggest Clown',
    '01:04:47': 'Biggest Chad',
    '01:07:55': 'Best Nickname',
    '01:12:23': 'Best Complaining-About-America Moment',
    '01:20:49': 'Best Meme',
    '01:27:35': 'Best Tangent',
    '01:32:45': 'Best TT Special Moment',
    '01:39:43': 'Best Drip',
    '01:41:50': 'Laziest Drip',
    '01:47:14': 'Best TT Animated',
    '01:51:47': 'Best Rant',
    '01:58:01': 'Best catchphrase',
    '02:00:59': 'Guest of the Year',
    '02:06:51': 'Best Argument',
    '02:11:15': 'Best TT Special',
    '02:15:21': 'Best TT Moment',
    '02:18:29': 'Best Fan Art',
    '02:21:49': 'Our thoughts going into Trash Taste',
    '02:27:20': 'Best Trash Taste Episode',
    '02:36:43': 'Best People',
  },
};
channelTrashTaste.videos.push(video3aM1rVv2T3o);

const video1gHPFmjj28A: Video = {
  id: '1gHPFmjj28A',
  channel: channelTrashTaste,
  title: "We've Had Enough of Japan | Trash Taste #51",
  titleShort: "We've Had Enough of Japan",
  episodeNumber: 51,
  publishedAt: '2021-06-04T20:00:00Z',
  sections: {
    '00:00:00': 'Joey moistens the boys',
    '00:00:57': 'The JOJO Event',
    '00:04:49': 'Paying $40 for an event',
    '00:07:28': 'Who uses auto generated subtitles for a professional event',
    '00:10:55': 'The JoJo anime Twitter account responded to the haters',
    '00:12:56': 'Reasons to pirate',
    '00:15:14': 'Gamers have risen up',
    '00:19:03': 'Buying anime merch',
    '00:21:50': 'We need more anime events',
    '00:25:09': 'Honey',
    '00:26:23': 'Award shows',
    '00:27:54': 'Tenet',
    '00:30:02': 'How many movies do we watch',
    '00:32:44': 'Eating food from the floor',
    '00:37:44': 'Holding a baby',
    '00:39:32': "The Oscars aren't that good",
    '00:48:23': 'Anime in the Oscars',
    '00:50:00': 'Watching movies online',
    '00:52:53': "Watching movies when we're younger",
    '00:54:29': 'LiquidIV',
    '00:55:46': 'Discussing internet speeds',
    '00:58:58': 'Watching in SD vs HD',
    '01:01:02': 'Renting movies off of YouTube',
    '01:03:44': 'Megaupload',
    '01:05:55': 'Internet in the university',
    '01:07:10': 'Getting internet in Japan',
    '01:15:29': 'SIM cards in Japan',
    '01:19:34': 'Japanese banks',
    '01:26:21': 'Getting a debit/credit card in Japan',
    '01:31:21': 'Bank apps are rare in Japan',
    '01:33:28': 'We actually love Japan',
    '01:34:55': 'Giving away very personal information',
    '01:36:33': 'Moving in Japan',
    '01:38:52': 'Signatures vs stamps',
    '01:40:27': 'The battle of the Joshes',
    '01:42:06': 'Convenient online systems',
    '01:43:09': 'Freelancing in Japan is close to impossible',
    '01:44:03': 'Forms need to be filled perfectly',
    '01:46:29': 'Moving in Japan is a week long process',
    '01:53:07': 'Tipping culture',
    '01:54:48': 'Trying to withdraw money from Japanese ATMs',
    '02:00:42': 'People who live rent free in our heads',
  },
};
channelTrashTaste.videos.push(video1gHPFmjj28A);

const videoPa_KjzmZgBk: Video = {
  id: 'Pa_KjzmZgBk',
  channel: channelTrashTaste,
  title: "We Can't Stop Giving Bad Opinions | Trash Taste #52",
  titleShort: "We Can't Stop Giving Bad Opinions",
  episodeNumber: 52,
  publishedAt: '2021-06-11T20:00:04Z',
  sections: {
    '00:00:00': 'A savage intro',
    '00:00:33': "Joey's been building furniture",
    '00:01:04': 'The most annoying furniture to build',
    '00:02:39': "Connor's cockroach infested fridge and washing machine",
    '00:06:46': 'Garnts first run in with a cockroach',
    '00:15:02': 'Joeys dad is a chad',
    '00:20:09': 'Worst furniture to build',
    '00:22:17': 'Sleeping on the floor',
    '00:23:44': 'How to get some good sleep',
    '00:25:54': 'Getting out of the bed',
    '00:27:38': 'ExpressVPN',
    '00:29:01': 'Hydration',
    '00:29:26': 'Peeing',
    '00:32:52': 'Making drinking fun',
    '00:34:53': 'Carbonated drinks',
    '00:37:51': 'Getting milk at McDonalds',
    '00:39:54': 'Tea from Starbucks',
    '00:41:59': 'Tea in UK',
    '00:43:53': 'American kettles',
    '00:45:09': 'Tea variety',
    '00:49:08': 'Americans vs tea',
    '00:50:40': 'Connor abandoned the kettle',
    '00:53:00': 'Microwaving tea',
    '00:54:48': 'Connors brother made him tea',
    '00:57:15': "Harry's",
    '00:58:51': 'How to recognize an aussie',
    '01:01:52': 'Creepie crawlies',
    '01:05:58': 'Poisonous food',
    '01:10:11': 'Weird online challenges',
    '01:15:00': 'Pasties',
    '01:16:52': 'School food',
    '01:19:03': 'Connor was nice to the cafeteria ladies',
    '01:21:14': 'Best part of the school dinner',
    '01:24:16': 'Hustling for cheese strings',
    '01:26:26': 'Lunchables',
    '01:28:05': 'Garnt discovers Nutella',
    '01:31:37': 'Viscous breakfast spreads',
    '01:33:45': 'Peanut Butter',
    '01:35:32': 'Sharing snacks',
    '01:36:14': 'Joey ruins Kit Kats',
    '01:39:22': 'The Toblerone debacle',
    '01:43:01': "Terry's Chocolate Orange",
    '01:45:19': 'Jaffa Cakes',
    '01:46:17': 'Chocolate overload',
    '01:49:00': 'Our favorite cakes',
    '01:51:16': 'Dessert bars',
    '01:52:43': 'The vibes are important',
    '01:55:37': 'People who eat Kit Kats correctly',
  },
};
channelTrashTaste.videos.push(videoPa_KjzmZgBk);

const video9Dl8PbibmBI: Video = {
  id: '9Dl8PbibmBI',
  channel: channelTrashTaste,
  title: 'We Read The WORST ℌệ𝔫𝔱ằ𝔦 Doujins | Trash Taste #53',
  titleShort: 'We Read The WORST ℌệ𝔫𝔱ằ𝔦 Doujins',
  episodeNumber: 53,
  publishedAt: '2021-06-18T20:59:29Z',
  sections: {
    '00:00:00': 'Watch on Patreon to see EVERYTHING',
    '00:00:45': 'This is a wine episode',
    '00:00:58': 'Bois forced Connor to read',
    '00:03:41': "What we're covering today",
    '00:04:37': 'Dorei Usagi to Anthony',
    '00:05:34': 'What Connor thought of reading Doujins',
    '00:09:06': 'Story in doujins',
    '00:09:31': 'Connor tries explaining the story of Dorei Usagi to Anthony',
    '00:11:12': 'Why did Joey pick this doujin',
    '00:12:24': 'The premise of Dorei Usagi to Anthony',
    '00:16:44': 'The weird ending of Dorei Usagi to Anthony',
    '00:22:11': 'The conclusion to Dorei Usagi to Anthony',
    '00:23:15': 'The art style Dorei Usagi to Anthony',
    '00:23:40': 'The author of Dorei Usagi to Anthony',
    '00:26:22': "Inma no Mikata! | Succubi's Supporter!",
    '00:27:11': "The story of Succubi's Supporter!",
    '00:28:01': 'GamerSupps',
    '00:28:57': 'The best job in the world for a man',
    '00:29:35': 'The best artist for drawing BJ scenes',
    '00:30:17': 'How well doujins translate into adult anime',
    '00:32:22': 'Why Garnt picked this doujin',
    '00:37:26': "Connors final thoughts on Succubi's Supporter!",
    '00:39:15': 'Queen Bee',
    '00:40:27': 'The macaron analogy',
    '00:42:17': 'Juunengo no Jinsei Soudan',
    '00:45:21': 'The story of Juunengo no Jinsei Soudan',
    '00:55:52': 'Garnt needs spice with his animation',
    '00:56:42': 'GAMERSupps',
    '00:57:41': 'Breaking taboos',
    '01:01:02': 'Why this is Garnts favorite parody doujin',
    '01:05:05': 'Peace Hame / Say Cheese',
    '01:08:54': 'The story of Peace Hame/Say Cheese',
    '01:14:29': 'Making you wait for it',
    '01:17:23': 'Connor thought this doujin was 10/10',
    '01:17:54': 'Watching adult anime for the story',
    '01:18:20': 'The bois finally agree on something',
    '01:19:59': 'NTR is the future',
    '01:24:06': 'Top searched terms on PH',
    '01:25:11': 'Seikatsu Shuukan',
    '01:26:01': 'The story of Seikatsu Shuukan',
    '01:27:14': 'GAMERSUPPS',
    '01:29:42': 'The worst trope',
    '01:31:08': 'Connor makes an exception',
    '01:36:29': 'Connors thoughts on Seikatsu Shuukan',
    '01:38:24': 'Why did Joey recommend Seikatsu Shuukan',
    '01:40:18': 'Kyoushi to Seito to',
    '01:44:15': 'The story of Kyoushi to Seito to',
    '01:46:40': 'Getting whiplash from a doujin',
    '01:54:17': 'Kyoushi to Seito to is a 7/10',
    '01:55:27': 'Metamorphosis',
    '01:57:41': 'The story of Metamorphosis',
    '02:04:29': 'Is Metamorphosis a masterpiece',
    '02:08:17': 'Garnt had something awoken inside him',
    '02:10:42': 'The final chapter of Metamorphosis',
    '02:11:31': 'God tier facial expressions',
    '02:13:08': 'Connor is tired of reading doujins',
    '02:16:23': 'The inspiration behind Metamorphosis',
    '02:21:09': 'Connors feelings after reading Metamorphosis',
    '02:24:19': 'The monke finally had to read',
    '02:24:57': 'Doujin tier list',
    '02:27:51': 'The loveliest degenerates',
  },
};
channelTrashTaste.videos.push(video9Dl8PbibmBI);

const videofUF29xWCjXM: Video = {
  id: 'fUF29xWCjXM',
  channel: channelTrashTaste,
  title: 'Goodbye Trash Taste Season 1 | Trash Taste #54',
  titleShort: 'Goodbye Trash Taste Season 1',
  episodeNumber: 54,
  publishedAt: '2021-06-25T20:00:07Z',
  sections: {
    '00:00:00': 'Intro manoeuvre',
    '00:00:39': "We're finally moving out",
    '00:02:04': 'Plane seating',
    '00:07:28': 'Sleeping on a plane',
    '00:13:26': 'Crying babies on planes',
    '00:14:47': 'Noise cancelling headphones',
    '00:17:08': 'The sun hurts',
    '00:22:02': 'Bokksu',
    '00:22:53': 'Berserk',
    '00:23:57': 'Hiatuses',
    '00:25:22': 'Paying our respects to Berserk',
    '00:35:51': 'Overworking',
    '00:40:03': 'Castlevania on Netflix',
    '00:42:39': 'Voice acting in anime',
    '00:48:23': 'The Minions movie is anime',
    '00:51:44': 'Vessi',
    '00:52:53': 'Eden',
    '00:55:55': 'Getting lost in translation',
    '01:04:21': 'Yasuke',
    '01:08:19': 'Eighty-Six',
    '01:09:49': 'The Way of the Househusband',
    '01:15:08': 'Acting in Japan',
    '01:16:33': 'Korean movies are awesome',
    '01:17:44': 'Japanese acting is reminiscent of anime',
    '01:19:50': 'Japanese dramas',
    '01:20:55': 'Cinematography',
    '01:23:53': 'Animation VS story',
    '01:24:38': 'Campy shows',
    '01:28:12': 'Musicals',
    '01:33:45': 'Actors who hate their own movies',
    '01:34:34': 'Daniel Craig is sabotaging James Bond films',
    '01:40:44': 'Anime musicals',
    '01:43:07': 'Season 1 is coming to a close',
    '01:56:51': 'People who are sticking around for season 2',
  },
};
channelTrashTaste.videos.push(videofUF29xWCjXM);

const videos5g2z4a9M3s: Video = {
  id: 's5g2z4a9M3s',
  channel: channelTrashTaste,
  title: 'Trash Taste PC Building Speedrun | Trash Taste Special',
  titleShort: 'Trash Taste PC Building Speedrun',
  publishedAt: '2021-06-28T19:00:09Z',
  type: 'Special',
};
channelTrashTaste.videos.push(videos5g2z4a9M3s);

const videovFbY_xLhLd0: Video = {
  id: 'vFbY_xLhLd0',
  channel: channelTrashTaste,
  title: 'Welcome to Trash Taste Season 2 | Trash Taste #55',
  titleShort: 'Welcome to Trash Taste Season 2',
  episodeNumber: 55,
  publishedAt: '2021-07-02T20:00:28Z',
  sections: {
    '00:00:00': 'Season 2 starts now',
    '00:01:02': 'Talking about our new set',
    '00:03:03': 'Skincare',
    '00:07:14': 'Acne',
    '00:09:13': 'Short hair vs long hair',
    '00:10:37': 'Figuring out our haircuts',
    '00:11:43': 'Good TikTok memes be bussin',
    '00:14:15': 'Social media tries too hard',
    '00:15:27': 'Twitters new features',
    '00:16:13': 'Are we turning into boomers',
    '00:16:58': 'We were in a press conference',
    '00:29:13': 'Switching studios was more time consuming than anticipated',
    '00:30:20': 'ExpressVPN',
    '00:31:36': 'Connors Crazy Taxi adventure',
    '00:39:40': 'The service industry in Japan',
    '00:43:12': 'Taxi lifehack',
    '00:46:05': "Garnt should've just said yes to the taxi driver",
    '00:50:35': 'Moving in Japan',
    '00:54:06': 'Connor got a noise complaint',
    '00:58:05': "We don't actually film that much inside our homes",
    '01:00:14': "Garnt's neighbor from hell",
    '01:11:10': 'Connor turned off the internet on his housemates',
    '01:14:42': 'Mack Weldon',
    '01:15:44': 'Connor stole from his housemates',
    '01:18:42': 'Exposing our thieving past',
    '01:20:09': 'Joey was so angry he accidentally stole a candy',
    '01:21:39': 'Connor tried to game a store',
    '01:22:40': "The worst thing Garnt's ever done",
    '01:25:28': 'The trust system in Japan',
    '01:28:05': 'Who steals their parents credit cards',
    '01:30:26': 'Garnt gets visited by the tooth fairy',
    '01:32:00': 'The worst Bible story',
    '01:39:33': 'Teachers remember too much',
    '01:40:46': 'Honey',
    '01:41:50': 'Connor did a talk about YouTube',
    '01:49:15': 'Going to study in a foreign country',
    '01:57:28': 'Leaving League',
    '01:58:51': 'People who love taking opportunities',
  },
};
channelTrashTaste.videos.push(videovFbY_xLhLd0);

const videojFIKDHetyFw: Video = {
  id: 'jFIKDHetyFw',
  channel: channelTrashTaste,
  title: '100 WAYS TO DIE IN JAPAN (ft. Abroad in Japan) | Trash Taste #56',
  titleShort: '100 WAYS TO DIE IN JAPAN',
  episodeNumber: 56,
  publishedAt: '2021-07-09T20:00:10Z',
  sections: {
    '00:00:00': 'Apex Raid of Shadows',
    '00:00:20': "Chris's drip",
    '00:06:47': 'Trash Taste webtoon',
    '00:08:26': 'Internet slang',
    '00:10:26': 'Too Much Volcano',
    '00:14:15': 'Journey Across Japan',
    '00:19:16': 'Scary plane flight',
    '00:22:42': 'Chris is a scaredy-cat',
    '00:26:26': 'Apari',
    '00:27:41': 'The breakfast debacle',
    '00:33:43': 'British food in Japan',
    '00:35:39': 'What Chris misses about England',
    '00:37:31': 'Architecture',
    '00:42:02': 'Taking a sulfur bath',
    '00:45:32': 'Denkiburo',
    '00:47:13': "Chris's near death experience",
    '00:50:58': 'Chris tries skiing',
    '00:52:35': 'Climbing mount Fuji',
    '00:54:43': 'What content will Chris do now',
    '00:56:59': "Japan's most active volcano",
    '00:58:47': 'How to make the ultimate series in a week',
    '01:00:16': 'Abandoned islands in Japan',
    '01:01:56': 'Honkai Impact',
    '01:03:15': 'Drinks are popped',
    '01:03:59': 'Connor went to the dentist',
    '01:05:25': 'The Japan dentist experience',
    '01:07:59': 'Chris loves e-sports',
    '01:08:21': 'Rate My Takeaway',
    '01:10:34': "Chris's favorite video games",
    '01:12:29': 'Chris used to do fencing',
    '01:13:34': 'Taekwondo',
    '01:14:28': "Chris wasn't prepared to climb Mount Fuji",
    '01:21:45': 'Chris has done everything',
    '01:24:23': 'Filming concerts in Japan',
    '01:25:42': 'Abroad in Japan merch',
    '01:27:26': 'Is wearing kimono cultural appropriation',
    '01:30:18': 'Garnt got Thai jozud',
    '01:32:13': 'Chris is actually Welsh',
    '01:34:17': 'Connor is one of the most famous Welsh people',
    '01:35:22': 'Crunchyroll',
    '01:36:26': 'Getting verified on Twitter',
    '01:39:32': 'Connor had no sense of danger',
    '01:41:42': 'Death by cattle',
    '01:43:13': 'Garnt goes off on swans',
    '01:46:10': 'Dangerous animals',
    '01:48:49': 'Ghost Wolf',
    '01:51:28': 'Ghosts',
    '01:52:19': 'UFOs',
    '01:54:43': "Joey's paranormal experience",
    '01:58:10': 'Our brains are kind of dumb',
    '02:01:58': "Curb your son's wife",
    '02:03:36': 'Chris won $150 from Connor',
    '02:04:32': 'People fighting',
    '02:05:46': 'Garnt learned how to time travel',
    '02:12:42': 'Thank you Barry',
  },
  guests: [guestAbroadinJapan],
};
channelTrashTaste.videos.push(videojFIKDHetyFw);
guestAbroadinJapan.videos.push(videojFIKDHetyFw);

const videoMhPRmgX_gAw: Video = {
  id: 'MhPRmgX_gAw',
  channel: channelTrashTaste,
  title: "Proving We're Actually an Anime Podcast | Trash Taste #57",
  titleShort: "Proving We're Actually an Anime Podcast",
  episodeNumber: 57,
  publishedAt: '2021-07-16T20:00:03Z',
  sections: {
    '00:00:00': "Don't cheat on your husband",
    '00:00:21': "We're exhausted our backlog",
    '00:00:40': 'Recent topics',
    '00:02:18': 'Influencer crypto scams',
    '00:11:31': 'Being the face of YouTube',
    '00:14:36': 'Getting our vaccine shots',
    '00:23:40': 'Bokksu',
    '00:24:28': 'Invincible was amazing',
    '00:27:44': 'Comic book adaptations',
    '00:29:36': 'Records of Ragnarok',
    '00:32:28': 'Adapting a manga',
    '00:33:59': "Connor's worst take yet",
    '00:37:11': 'The art in anime',
    '00:38:45': 'When a story becomes predictable',
    '00:42:05': 'One-Punch Man season 2 vs season 1',
    '00:44:19': 'Mob Psycho 100 has top tier story',
    '00:45:54': 'The future of One-Punch Man',
    '00:47:12': 'Will Chainsaw Man live up to the hype',
    '00:49:24': 'Trese',
    '00:50:38': 'Odd Taxi',
    '00:53:33': "Wonder Egg Priority didn't deliver",
    '00:56:56': 'Promised Neverland season 2',
    '00:58:00': 'Live action posters',
    '00:59:25': 'Why are JAV only 480p',
    '01:01:19': 'Coco graduated',
    '01:07:31': 'The politics in vtubing',
    '01:10:29': 'The future of Hololive',
    '01:14:47': 'Male vtubers',
    '01:17:01': 'What makes a popular streamer',
    '01:25:41': 'Trendsetters',
    '01:27:14': 'Dhar Mann is dominating YouTube',
    '01:30:56': 'Arcade Craniacs',
    '01:33:10': 'Connor summarizes a Dharr Mann video',
    '01:35:24': 'Joey visited Nintendo World',
    '01:39:25': 'Nintendo gamified an amusement park',
    '01:44:38': 'The best attraction at Nintendo World',
    '01:47:41': 'Themed foods',
    '01:50:21': 'Voice acting in amusement parks',
    '01:53:48': 'The best part of Nintendo World',
    '01:54:52': 'The most important topic of this podcast',
  },
};
channelTrashTaste.videos.push(videoMhPRmgX_gAw);

const videoADOjGd0_5O0: Video = {
  id: 'ADOjGd0_5O0',
  channel: channelTrashTaste,
  title: 'Talking to a REAL Japanese Anime Voice Actor (ft. Shu Uchida) | Trash Taste #58',
  titleShort: 'Talking to a REAL Japanese Anime Voice Actor',
  episodeNumber: 58,
  publishedAt: '2021-07-23T20:00:02Z',
  sections: {
    '00:00:00': 'Voicing an intro',
    '00:00:24': 'Our official first guest in the new studio',
    '00:01:28': 'Joey went to the same school as Shu',
    '00:04:02': 'Chasing the voice acting dream',
    '00:05:41': 'The many faces of Shu Uchida',
    '00:07:49': 'Dropping out of school to become a VA',
    '00:16:10': 'Voice Acting in Japan is strict',
    '00:17:07': 'Voice Acting schools',
    '00:23:58': 'Crunchyroll',
    '00:25:09': "Shu's first role",
    '00:26:59': 'How parents feel about voice acting',
    '00:29:35': 'Every parent knows each other',
    '00:33:44': 'The childhood friend trope',
    '00:39:22': 'How to practice for voice acting',
    '00:44:28': 'Voice acting animals',
    '00:47:08': 'Manscaped',
    '00:48:16': 'The process of auditioning in Japan',
    '00:50:54': 'Auditioning together with a famous actor',
    '00:51:23': 'The process of dubbing anime in English',
    '00:51:57': 'How many auditions does it take to land a role',
    '00:53:31': 'How has the pandemic changed auditioning',
    '00:57:22': 'The recording session',
    '01:02:29': 'Redoing lines in front of your colleagues',
    '01:05:22': 'Watching the shows you voice in',
    '01:07:28': 'Joey tried to do a New York accent',
    '01:10:37': 'American accents',
    '01:13:46': 'Bad English in anime',
    '01:15:46': 'Getting recognized for voice work',
    '01:16:56': 'Advice for aspiring voice actors',
    '01:20:07': 'Voice actors in Japan are celebrities',
    '01:21:04': 'Big social media following helps with VA',
    '01:22:12': 'Non-native Japanese VA',
    '01:25:09': 'Voice acting and vtubers',
    '01:28:22': 'Getting starstruck',
    '01:31:51': "Shu's YouTube videos",
    '01:32:21': 'Australian slang',
    '01:33:43': "Shu's favorite YouTube channels",
    '01:35:15': 'Animal channels on YouTube',
    '01:37:29': 'Making YouTube videos',
    '01:40:00': 'Doing sponsor segments',
    '01:40:41': "Shu's favorite anime",
    '01:44:27': 'Researching voice actors',
    '01:45:39': 'Voice CDs',
    '01:49:33': "Shu's VA career",
    '01:51:04': 'Going to fan events',
    '01:56:40': 'Our lovely patrons',
  },
  guests: [guestShuUchida],
};
channelTrashTaste.videos.push(videoADOjGd0_5O0);
guestShuUchida.videos.push(videoADOjGd0_5O0);

const videoS_CSPYo0Nxo: Video = {
  id: 'S-CSPYo0Nxo',
  channel: channelTrashTaste,
  title: 'The Biggest Scandal in Anime History | Trash Taste #59',
  titleShort: 'The Biggest Scandal in Anime History',
  episodeNumber: 59,
  publishedAt: '2021-07-30T20:00:11Z',
  sections: {
    '00:00:00': 'The worst superpower',
    '00:01:04': 'Anime Tube',
    '00:13:27': 'The golden age of streaming',
    '00:16:25': 'Kickstarter',
    '00:21:06': 'Anime Tube testimonials',
    '00:22:21': 'Honey',
    '00:23:38': 'Reviews on websites',
    '00:25:47': 'The quality of beds',
    '00:28:56': 'Memory foam has no bounce',
    '00:30:44': 'Water bread',
    '00:31:40': 'Pillow talk',
    '00:34:33': 'Staying in hospitals',
    '00:37:45': 'Snowball fight gone wrong',
    '00:39:43': 'Joey got his knob flicked',
    '00:40:47': "Garnt's near death experience",
    '00:41:44': 'Connor almost broke his back on a trampoline',
    '00:43:18': 'Japan is back in lockdown',
    '00:46:36': "Japan's discriminating against foreigners",
    '00:52:44': "Younger generation isn't interested in politics",
    '00:54:24': 'Nintendo makes the laws',
    '00:58:09': 'Big companies in Japan do their own thing',
    '01:01:56': 'Preparing to go back home',
    '01:06:28': 'Every country smells different',
    '01:12:48': 'Nostril hair length',
    '01:14:05': 'Mouth breathers',
    '01:20:37': 'Superstition',
    '01:26:42': 'The body starts falling apart at 30',
    '01:27:37': 'Kidney stones',
    '01:30:40': 'Hospitals hit different',
    '01:34:07': 'Wanting to go to a hospital',
    '01:36:58': 'Candy',
    '01:39:57': 'Listing out chips',
    '01:46:55': "People who don't breath through their mouths",
  },
};
channelTrashTaste.videos.push(videoS_CSPYo0Nxo);

const videoIHW3TauaL0E: Video = {
  id: 'IHW3TauaL0E',
  channel: channelTrashTaste,
  title: 'Roasting our Terrible Taste in Movies | Trash Taste #60',
  titleShort: 'Roasting our Terrible Taste in Movies',
  episodeNumber: 60,
  publishedAt: '2021-08-06T20:00:02Z',
  sections: {
    '00:00:00': 'Content starts now',
    '00:00:50': 'Our 3x3 of movies',
    '00:04:38': "Garnt's 3x3",
    '00:08:29': 'Garnt gushes over Confessions',
    '00:13:39': 'The 40-Year-Old Virgin',
    '00:17:16': 'Sacha Baron Cohen is a genius',
    '00:20:32': 'Kung Fu Hustle',
    '00:22:34': 'Martial arts movies',
    '00:23:24': 'Rush Hour',
    '00:26:16': 'Memento',
    '00:31:00': 'Punishing Gray Raven',
    '00:32:20': 'Edgar Wright',
    '00:38:18': 'The Matrix',
    '00:40:13': 'Star Wars and Lord of the Rings',
    '00:49:00': 'People who ruin movies',
    '00:51:06': 'We have mugs',
    '00:52:50': "Joey's 3x3",
    '00:54:20': 'Gangster movies',
    '00:57:34': 'Apocalypse Now',
    '01:03:24': "The King's Speech",
    '01:06:26': 'Bruce Almighty',
    '01:07:08': 'Akira Kurosawa',
    '01:12:18': 'One Cut of the Dead',
    '01:15:48': 'Gladiator',
    '01:16:28': 'Zach Snyder',
    '01:18:20': 'Austin Powers',
    '01:21:08': 'Will Ferrell',
    '01:22:43': 'Comedy movies',
    '01:25:42': 'Trainspotting',
    '01:30:56': "Connor's 3x3",
    '01:31:21': 'Now this is powerful',
    '01:31:46': 'Tokyo Drift',
    '01:36:32': 'Shrek',
    '01:39:43': 'Quentin Tarantino',
    '01:47:31': 'Adam Sandler',
    '01:50:26': 'Leonardo DiCaprio',
    '01:52:16': 'Tom Hanks',
    '01:54:16': 'Willy Wonka',
    '01:54:42': 'The Truman Show',
    '01:56:15': 'No Country for Old Men',
    '01:57:56': 'Watching clips from movies on YouTube',
    '02:00:50': 'Martial Arts Films',
    '02:17:02': 'People who watch movies',
  },
};
channelTrashTaste.videos.push(videoIHW3TauaL0E);

const video6wLBE3b_3jU: Video = {
  id: '6wLBE3b_3jU',
  channel: channelTrashTaste,
  title: 'Roasting our Trash Taste in Manga | Trash Taste #61',
  titleShort: 'Roasting our Trash Taste in Manga',
  episodeNumber: 61,
  publishedAt: '2021-08-13T20:00:01Z',
  sections: {
    '00:00:00': 'start',
    '00:00:46': 'Cyberpunk intro',
    '00:04:02': 'Death Note one shot',
    '00:04:46': 'Physical manga',
    '00:08:47': "Connor's 3x3",
    '00:10:13': 'You Are My Princess',
    '00:11:29': 'Black Butler',
    '00:20:47': 'One-Punch Man',
    '00:29:08': 'ExpressVPN',
    '00:30:23': 'Terra Formars',
    '00:36:06': 'Gantz',
    '00:41:35': 'Edgy manga',
    '00:45:50': 'Deadman Wonderland',
    '00:46:37': "JoJo's Bizarre Adventure",
    '00:53:27': 'Vinland Saga',
    '00:58:40': 'Claymore',
    '01:01:09': 'Characters with ranks',
    '01:02:28': 'Eyeshield 21',
    '01:05:52': 'Bookwalker',
    '01:07:25': "Joey's 3x3",
    '01:10:10': 'Joey got scammed',
    '01:11:57': 'Yu Yu Hakusho',
    '01:20:21': 'Slam Dunk',
    '01:24:47': 'Black Cat',
    '01:30:55': "Anime doesn't have endings",
    '01:32:55': 'Beastars',
    '01:38:02': 'Ichigo 100%',
    '01:41:01': 'Uzumaki',
    '01:42:42': 'Oyasumi Punpun',
    '01:50:26': 'Shonen Jump is king',
    '01:54:02': 'Manscaped',
    '01:55:29': "Garnt's 3x3",
    '01:56:21': 'The Breaker',
    '02:00:43': 'Kingdom',
    '02:05:12': 'Writing smart characters',
    '02:09:10': 'Great Teacher Onizuka',
    '02:15:02': 'Psyren',
    '02:22:55': 'Love Hina',
    '02:27:54': 'Domestic Girlfriend',
    '02:33:50': '20th Century Boys',
    '02:38:58': 'Beck',
    '02:45:14': 'Berserk',
    '02:55:17': 'People with great taste in manga',
  },
};
channelTrashTaste.videos.push(video6wLBE3b_3jU);

const video398hQfZ5Ljg: Video = {
  id: '398hQfZ5Ljg',
  channel: channelTrashTaste,
  title: 'Our Terrible Boomer Opinions | Trash Taste #62',
  titleShort: 'Our Terrible Boomer Opinions',
  episodeNumber: 62,
  publishedAt: '2021-08-20T20:00:30Z',
  sections: {
    '00:00:00': 'MUGS',
    '00:00:45': 'Welcome',
    '00:02:26': 'Our second vaccine shots',
    '00:06:09': 'Watching the Olympics',
    '00:13:14': 'Are we patriotic?',
    '00:20:32': 'Olympics and anime music',
    '00:23:07': 'The opening of the Olympics',
    '00:28:37': "Sonic's appearance in the Olympics",
    '00:30:10': 'Apari',
    '00:31:32': 'Japanese weather is too much for the Olympics',
    '00:36:45': 'Who won the Olympics',
    '00:38:30': 'American football',
    '00:39:30': 'Superbowl',
    '00:41:18': 'TV ads',
    '00:51:17': "Dragons' Den",
    '00:56:47': 'Bokksu',
    '00:57:51': 'Pokémon Unite',
    '01:02:52': 'Microtransactions in Pokémon games',
    '01:04:52': 'Genshin update stream on Twitch',
    '01:08:43': "Don't pre-order games",
    '01:17:05': 'Press conferences for games',
    '01:20:58': 'Difficulty in video games',
    '01:28:12': 'Accessibility in games',
    '01:33:49': 'Zenmarket',
    '01:35:20': 'Xbox Adaptive Controller',
    '01:38:13': 'Game consoles that failed us',
    '01:42:00': 'Memory cards',
    '01:46:57': 'The day Garnt almost snapped',
    '01:50:01': 'The worst genre of online videos',
    '01:54:57': 'Jackass',
    '01:59:27': 'Weird TikTok trends',
    '02:09:38': 'Will we start TikTok accounts',
    '02:11:41': 'The good type of TikTokkers',
  },
};
channelTrashTaste.videos.push(video398hQfZ5Ljg);

const video8TGJf8l_XXU: Video = {
  id: '8TGJf8l-XXU',
  channel: channelTrashTaste,
  title: 'Summer In Japan IS HELL | Trash Taste #63',
  titleShort: 'Summer In Japan IS HELL',
  episodeNumber: 63,
  publishedAt: '2021-08-27T20:00:02Z',
  sections: {
    '00:00:00': "It's too hot",
    '00:01:04': 'Summer vs winter',
    '00:10:06': 'Mech Arena',
    '00:13:12': 'Enjoying the sun',
    '00:14:29': 'Hanami',
    '00:20:01': 'The boys stayed at an Airbnb',
    '00:24:58': 'Combining drinks',
    '00:27:18': 'Quitting energy drinks',
    '00:29:20': 'Caring about your body',
    '00:30:54': 'Taking a break from YouTube',
    '00:37:49': 'Streaming your comfort games',
    '00:41:21': 'Horror movies',
    '00:45:04': 'Samuel was the OG',
    '00:48:45': 'Old internet websites',
    '00:50:52': 'Annihilation',
    '00:52:56': "Garnt's childhood was filled with movies",
    '00:56:19': 'Nicolas Cage movies',
    '00:59:59': 'Horror movie DVD covers',
    '01:01:25': 'Joey realizes he hates horror films',
    '01:02:02': 'Parents always walk in at the worst times',
    '01:05:14': 'Watching stuff with your lads',
    '01:14:37': 'Heath Ledger',
    '01:16:21': 'Cicadas',
    '01:22:46': 'Liveleak',
    '01:26:22': 'Our brains are turning into mush',
    '01:31:02': 'What color was the dress',
    '01:32:10': 'Losing your hearing with age',
    '01:35:15': 'Garnt misses the beach',
    '01:36:29': 'Mosquitoes',
    '01:41:34': 'Emu War',
    '01:46:59': 'Winter in Australia',
    '01:49:44': 'Getting rid of appliances in Japan',
    '01:58:00': "People who probably aren't fans of this heat",
  },
};
channelTrashTaste.videos.push(video8TGJf8l_XXU);

const videooWHbkpJKwxY: Video = {
  id: 'oWHbkpJKwxY',
  channel: channelTrashTaste,
  title: 'We Hate Our Fans | Trash Taste #64',
  titleShort: 'We Hate Our Fans',
  episodeNumber: 64,
  publishedAt: '2021-09-03T20:00:25Z',
  sections: {
    '00:00:00': "We're not good",
    '00:00:33': 'Talking about weather',
    '00:02:17': 'Reading fan mail',
    '00:10:47': 'Fans as friends',
    '00:17:27': 'Managing a Discord server',
    '00:21:46': "Pewdiepie doesn't know us",
    '00:22:32': 'Papparazzi',
    '00:27:57': 'ExpressVPN',
    '00:28:50': 'YouTube comments',
    '00:32:29': 'Doing YouTube as a job',
    '00:36:30': 'Boys supporting boys',
    '00:38:43': 'Defensive fandoms',
    '00:42:18': 'Having an opinion on YouTube',
    '00:45:11': 'Negativity brings the views',
    '00:51:30': 'Being a Fate fan',
    '00:56:02': 'Jojo fandom',
    '01:00:20': 'Gatekeeping',
    '01:07:58': 'Mack Weldon',
    '01:09:23': 'Spotting fake anime fans',
    '01:14:47': 'Rediscovering creators',
    '01:20:58': 'Connor is ready to box',
    '01:22:34': 'Will we stop the podcast if the views decline',
    '01:27:35': 'Adapting your content with the times',
    '01:31:08': 'Understanding how virality works',
    '01:35:58': 'Casey Neistat is Limitless',
    '01:40:28': 'What is good content',
    '01:47:18': 'Drama channels',
    '01:51:35': 'Honey',
    '01:53:08': 'Passion projects',
    '02:00:37': 'Obsessing over specific things',
    '02:09:35': 'Japan is full of niche things',
    '02:15:50': 'Japanese zoom calls',
    '02:18:26': 'People who support us through the clickbait',
  },
};
channelTrashTaste.videos.push(videooWHbkpJKwxY);

const video7ciUUFK3K14: Video = {
  id: '7ciUUFK3K14',
  channel: channelTrashTaste,
  title: 'We CANNOT Stop Arguing | Trash Taste #65',
  titleShort: 'We CANNOT Stop Arguing',
  episodeNumber: 65,
  publishedAt: '2021-09-10T20:17:16Z',
  sections: {
    '00:00:00': "You're not ready for what's to come",
    '00:00:39': 'Our bodies are giving up already',
    '00:05:00': 'Working in a coffee shop',
    '00:05:58': 'Drinking coffee',
    '00:09:40': 'Working outside of your room',
    '00:17:07': 'Toilet breaks',
    '00:19:57': 'Sitting down to pee',
    '00:21:53': 'Garnt is a shitting wizard',
    '00:25:55': 'Bokksu',
    '00:27:01': 'Cushioned toilet seats',
    '00:29:46': 'Connor loves buying candles',
    '00:37:32': 'Homemade soaps',
    '00:40:48': 'Salt flavored toothpaste',
    '00:43:45': 'How we feel about massages',
    '00:46:42': 'Going to a sauna',
    '00:52:31': 'The best onsen in Tokyo is being shut down',
    '00:54:52': 'The little pebbles of doom',
    '00:56:04': 'Having fish eat your feet',
    '00:58:02': 'Taking a spa day',
    '01:00:18': 'The perfect vacation',
    '01:01:02': 'Trying to camp during a typhoon',
    '01:05:36': 'Buying beverages with your mates',
    '01:15:15': 'Is fishing even fun',
    '01:18:54': 'Boating',
    '01:21:33': 'Wagyu beef is overrated',
    '01:26:48': "Expensive foods aren't that good",
    '01:31:53': 'Fried chicken culture',
    '01:33:51': 'The Great Boneless Debate',
    '01:39:14': 'All chicken tastes the same',
    '01:41:25': 'Optimal skin to meat ratio',
    '01:45:38': 'Chicken thighs',
    '01:48:00': 'Finally Googling facts',
    '01:48:56': "We all make mistakes and it's fine",
    '01:51:38': 'Chicken debate is finally settling down',
    '01:55:15': 'What type of chicken gang are you',
  },
};
channelTrashTaste.videos.push(video7ciUUFK3K14);

const videopPmJeqnnxQI: Video = {
  id: 'pPmJeqnnxQI',
  channel: channelTrashTaste,
  title: 'We Got SCAMMED | Trash Taste #66',
  titleShort: 'We Got SCAMMED',
  episodeNumber: 66,
  publishedAt: '2021-09-17T20:00:09Z',
  sections: {
    '00:00:00': 'A musky intro',
    '00:00:42': 'Garnt goes to the bank',
    '00:08:07': 'Printing stuff in Japan',
    '00:13:35': 'Garnt got trolled by a bank',
    '00:15:46': 'Scams in Japan',
    '00:26:14': 'Trolling scammers',
    '00:29:01': 'Protecting parents from scams',
    '00:31:58': 'Girl Gun Cafe',
    '00:33:14': 'We thought Meilyne tried to scam us',
    '00:36:15': 'YouTube scams are getting too real',
    '00:41:27': 'Scams on Facebook',
    '00:45:17': 'The new Evangelion film',
    '00:51:28': 'The watch order of Evangelion',
    '00:53:59': 'The last Evangelion films hit different',
    '00:57:23': 'Getting into Evangelion',
    '01:01:31': 'Storytelling in Evangelion',
    '01:07:44': 'Hatsune Miku Kabuki',
    '01:09:19': 'Watch parties on Twitch',
    '01:10:29': 'Our reaction to the ending of the new Eva film',
    '01:16:29': 'Overanalyzing Evangelion',
    '01:21:15': 'The Toy Story franchise',
    '01:28:41': 'Modern Disney animated films',
    '01:31:45': 'Refusing to learn',
    '01:34:03': 'Harry Potter is getting weird',
    '01:41:09': 'Recycling in Japan',
    '01:46:45': 'Dealing with noise complaints',
    '01:56:24': 'Changing of the seasons',
    '02:00:59': 'Japanese drip',
    '02:07:46': 'What is drip',
    '02:17:24': 'People with real drip',
  },
};
channelTrashTaste.videos.push(videopPmJeqnnxQI);

const videoRm8nxEAzjYQ: Video = {
  id: 'Rm8nxEAzjYQ',
  channel: channelTrashTaste,
  title: 'EXPOSING Our Manager | Trash Taste #67',
  titleShort: 'EXPOSING Our Manager',
  episodeNumber: 67,
  publishedAt: '2021-09-24T20:00:13Z',
  sections: {
    '00:00:00': 'The worst fear',
    '00:00:59': 'Can we say "Female"',
    '00:03:27': 'Strangest thing Meilyne has seen us do',
    '00:08:33': 'Meilyne is a professional food reviewer',
    '00:18:50': 'Looking at restaurant menus on Google',
    '00:22:24': 'Debating jelly as a dessert',
    '00:30:43': 'Genshin Impact',
    '00:32:52': 'Conquering buffets',
    '00:44:34': "Meilyne's thoughts on our rants about America",
    '00:50:45': 'Studying history in school',
    '01:00:39': 'Cooking classes',
    '01:01:39': 'Manscaped',
    '01:02:47': 'Americans',
    '01:08:25': "UK isn't cool anymore",
    '01:12:55': 'Our first phones',
    '01:14:47': 'Meilyne the gamer',
    '01:16:18': "Meilyne's 3D husband vs her 2D husbands",
    '01:24:42': 'Nigerian beef stew',
    '01:27:13': 'Learning how to cook',
    '01:29:21': 'Meilyne the YouTuber',
    '01:32:02': 'Videos Meilyne likes to watch',
    '01:36:00': 'Meilyne the weeb',
    '01:37:29': 'Meilyne the food enjoyer',
    '01:47:51': 'Welsh food',
    '01:49:14': 'Tea',
    '01:53:28': "Microwaving food that shouldn't be microwaved",
    '01:55:13': 'The most expensive coffee',
    '01:56:53': 'Coffee YouTubers',
    '02:02:11': 'Boba is funny',
    '02:08:15': 'Steak',
    '02:17:04': 'BBQ',
    '02:24:20': 'Bussin people',
  },
};
channelTrashTaste.videos.push(videoRm8nxEAzjYQ);

const videoFciJamr2z1Q: Video = {
  id: 'FciJamr2z1Q',
  channel: channelTrashTaste,
  title: 'The Dark World of Chris Chan (ft. Geno Samuel) | Trash Taste #68',
  titleShort: 'The Dark World of Chris Chan',
  episodeNumber: 68,
  publishedAt: '2021-10-01T22:53:03Z',
  sections: {
    '00:00:00': 'Disclaimer',
    '00:00:36': 'Geno Samuel',
    '00:01:12': 'Chris Chan',
    '00:03:19': 'The documentary',
    '00:05:54': 'Who is Chris Chan',
    '00:09:40': 'Being a Christorian',
    '00:12:04': 'The process of making an episode',
    '00:13:58': 'The Chris Cinematic Universe',
    '00:18:31': 'The start',
    '00:25:30': 'The Trolling Arc',
    '00:31:56': 'Honey',
    '00:33:01': 'Private Villa of Corrupted Citizens',
    '00:37:18': 'High school gal pals',
    '00:41:00': 'Game store Arc',
    '00:49:28': 'Home Arc',
    '00:59:02': 'How much is cut from an episode',
    '01:01:45': 'The transformation',
    '01:09:49': 'Different Dimensions Arc',
    '01:13:52': 'Money issues',
    '01:16:40': 'The morality behind making a documentary',
    '01:17:40': 'Final Gear',
    '01:18:45': 'The Mother Arc',
    '01:27:15': 'Is this the end of the story',
    '01:30:23': 'Raising Chris',
    '01:38:44': 'Sonichu comics',
    '01:43:43': 'The Idea Guys Saga',
    '01:45:31': 'Pickle suit man',
    '01:48:42': 'Liquid Chris',
    '01:56:00': 'Sonic and My Little Pony',
    '01:59:23': 'Geno in Japan',
    '02:06:51': "Geno's future",
    '02:13:07': 'Thank you for your support',
  },
  guests: [guestGenoSamuel],
};
channelTrashTaste.videos.push(videoFciJamr2z1Q);
guestGenoSamuel.videos.push(videoFciJamr2z1Q);

const videoJwpBZ80J0R4: Video = {
  id: 'JwpBZ80J0R4',
  channel: channelTrashTaste,
  title: 'Nice | Trash Taste #69',
  titleShort: 'Nice',
  episodeNumber: 69,
  publishedAt: '2021-10-08T20:00:04Z',
  sections: {
    '00:00:00': 'Bickering from the get-go',
    '00:02:02': "What this episode could've been",
    '00:03:07': 'Our take on politics',
    '00:09:07': 'Keeping up with world news',
    '00:16:14': 'Sydney was mad patriotic',
    '00:24:44': 'ExpressVPN',
    '00:26:09': 'Are we mad patriotic',
    '00:27:22': 'Welsh history lesson',
    '00:29:29': 'Getting mentioned as a small nation',
    '00:33:12': 'Joey gets deported',
    '00:34:57': "Connor didn't get a visa to visit USA",
    '00:38:11': 'Which passport is the best',
    '00:39:46': 'Tourism in the UK',
    '00:49:03': 'Joey trolls friends who visit him',
    '00:50:28': 'Is Akihabara overhyped',
    '00:51:45': 'Getting recognized in Japan',
    '00:53:40': 'Crunchyroll',
    '00:54:56': 'Getting recognized in the UK',
    '01:00:19': 'Dressing for work at home',
    '01:04:34': 'Shirt on or off',
    '01:09:48': 'Reacting to earthquakes',
    '01:19:03': 'In the case of an earthquake',
    '01:24:40': 'Natural disasters',
    '01:27:14': 'Weird cultural things',
    '01:35:03': 'Getting poisoned',
    '01:40:24': 'Bokksu',
    '01:41:49': "We're leaving for 6 weeks",
    '01:43:42': 'Chores',
    '01:50:05': 'Garnt has stinky trash',
    '01:57:03': 'Fabric softener is OP',
    '01:58:28': "What we'll do after the break",
    '02:03:39': 'The best fans',
  },
};
channelTrashTaste.videos.push(videoJwpBZ80J0R4);

const videolh7bJa534AY: Video = {
  id: 'lh7bJa534AY',
  channel: channelTrashTaste,
  title: 'Quarantine Nightmares | Trash Taste #70',
  titleShort: 'Quarantine Nightmares',
  episodeNumber: 70,
  publishedAt: '2021-10-15T20:00:24Z',
  sections: {
    '00:00:00': 'We need coffee',
    '00:00:37': 'Little babymen',
    '00:01:18': 'Garnt and Connor went to the UK',
    '00:04:12': 'Drinking with your parents',
    '00:08:31': 'Connor won a chess game',
    '00:10:34': 'Connors notes on the UK',
    '00:12:57': 'Vending machines are amazing',
    '00:16:05': 'Wearing masks',
    '00:21:53': 'Ordering food has become easier',
    '00:23:38': 'Japanese food is superb',
    '00:27:11': 'Expensive restaurants in Japan vs UK',
    '00:28:30': 'The price difference of alcohol',
    '00:29:42': 'Good and bad fast food',
    '00:31:34': 'Getting back into Japan',
    '00:39:09': 'Connor pranks an airport',
    '00:43:18': 'We were herded like cattle',
    '00:46:44': 'The wellness check',
    '00:48:11': 'Spit tests',
    '00:49:45': 'The mobile apps do not work properly',
    '00:50:50': 'Quarantine experience after arriving in Japan',
    '00:54:04': 'Connor befriends an old Japanese man',
    '00:55:57': 'The quarantine hotel',
    '00:59:11': 'Connors hotel room',
    '01:03:20': 'Food in the hotel',
    '01:05:27': 'Garnt brought a bag of instant ramen',
    '01:07:00': 'Garnts hotel experience',
    '01:18:56': "Connor couldn't stand being locked up",
    '01:22:15': 'Leaving the hotel',
    '01:24:58': 'The chad that is Zed',
    '01:27:27': 'Different kinds of restrictions',
    '01:32:30': 'Restrictions are loosening in Japan',
    '01:35:25': 'Quarantining at home',
    '01:36:44': 'Connor did a 70 hour stream',
    '01:42:48': 'Our editor is a machine',
    '01:46:47': 'Manscaped',
    '01:47:54': "We've gotten old",
    '01:49:43': 'Garnts existential crisis',
    '01:51:24': "Birthday gifts don't work when you're older",
    '01:52:34': 'Having to show your ID',
    '01:53:55': 'How much does the beard change your age',
    '01:56:40': "We're finally talking about anime",
    '01:59:48': 'Tales of Arise',
    '02:07:38': 'Connors opinion on turn-based combat',
    '02:11:21': 'Sora in Smash',
    '02:15:08': 'Connor randomly brings up a weird meme',
    '02:16:07': 'Joey brings back the original topic',
    '02:17:33': "Well, it's been fun",
  },
};
channelTrashTaste.videos.push(videolh7bJa534AY);

const videoxqP3WXFYiGc: Video = {
  id: 'xqP3WXFYiGc',
  channel: channelTrashTaste,
  title: 'WE ARE PRIVILEGED | Trash Taste #71',
  titleShort: 'WE ARE PRIVILEGED',
  episodeNumber: 71,
  publishedAt: '2021-10-22T20:00:17Z',
  sections: {
    '00:00:00': "You Don't have to understand the memes",
    '00:04:30': 'Chris is a boomer',
    '00:05:18': "We don't understand our taste in humor",
    '00:07:27': "Memes don't last at all",
    '00:10:21': 'TikTok in Japan',
    '00:19:00': 'TikTok trends',
    '00:21:23': 'Couchguy',
    '00:24:53': "We're being overanalyzed",
    '00:27:54': "Harry's",
    '00:29:14': 'You need to preface everything',
    '00:33:15': 'Peoples reaction to our drip topic',
    '00:36:59': 'Income and work relationship',
    '00:40:16': 'Good skill is expensive',
    '00:44:22': "YouTube doesn't have any job security",
    '00:47:18': 'Twitch leak',
    '00:52:29': 'YouTubers are relatable unlike celebrities',
    '00:54:29': 'Earning money from YouTube',
    '00:56:09': 'The necessity of talking about ad rates',
    '01:00:11': 'Honey',
    '01:01:20': 'You have to grind YouTube to make it',
    '01:04:56': 'Garnt worked at the BBC',
    '01:06:05': 'Keeping up with the changes to stay relevant',
    '01:07:56': 'The bois have "changed"',
    '01:13:31': "We've fallen off",
    '01:16:36': 'Garnt met a Pokémon dealer',
    '01:19:17': 'Why is Logan Paul opening other peoples Pokémon cards',
    '01:26:19': 'Why watch our podcast instead of an actual film',
    '01:28:55': 'Men find it hard to talk to each other',
    '01:39:01': 'Time as a resource',
    '01:41:06': 'Connor has been haunted by this question',
    '01:45:52': 'Connors weirdest toilet adventures',
    '01:49:11': "Connor's Yakuza mission",
    '01:53:35': 'Japan is weird',
    '01:55:23': 'The reason why Garnt is against bidets',
    '01:57:44': 'Toilets that are just a hole in the ground',
    '02:00:50': 'Toilet experience so bad that Connor threw up',
    '02:03:32': "We're done with poop stories",
    '02:04:17': 'Normal poopers',
  },
};
channelTrashTaste.videos.push(videoxqP3WXFYiGc);

const video_Xb2L4q1SW4: Video = {
  id: '-Xb2L4q1SW4',
  channel: channelTrashTaste,
  title: "GHOSTS DON'T SCARE US | Trash Taste #72",
  titleShort: "GHOSTS DON'T SCARE US",
  episodeNumber: 72,
  publishedAt: '2021-10-29T20:00:00Z',
  sections: {
    '00:00:00': 'Joey has changed',
    '00:00:58': 'Connor signed up for a gym membership',
    '00:04:18': 'Cancelling stuff in Japan is easy',
    '00:09:24': 'You need to check out of ryokans at 9am',
    '00:15:26': 'Is breakfast just sugar',
    '00:23:41': 'The snacks of our childhood',
    '00:28:28': 'Baki is more intense than Jojo',
    '00:43:30': 'Watching anime in the gym',
    '00:46:31': 'Esports',
    '00:54:18': 'Moving companies seeing our weird stuff',
    '01:04:56': 'Settling down',
    '01:06:15': 'The children of Japan',
    '01:09:19': 'Garnt went fishing',
    '01:20:29': 'Hobbies',
    '01:22:46': 'Garnt has a house now',
    '01:26:16': 'The rush hour in Tokyo never ends',
    '01:29:40': "Japan doesn't have 4 seasons",
    '01:30:48': "Garnt isn't used to living in a house",
    '01:34:54': 'Paranormal activity',
    '01:54:36': 'Connor gets existential',
    '02:06:46': 'Garnts new addiction',
    '02:10:31': 'Connor is infatuated with bidets',
    '02:11:45': 'People who fancy bidets',
  },
};
channelTrashTaste.videos.push(video_Xb2L4q1SW4);

const videoduEihBy6ujg: Video = {
  id: 'duEihBy6ujg',
  channel: channelTrashTaste,
  title: 'WE WILL NEVER UNDERSTAND JAPANESE | Trash Taste #73',
  titleShort: 'WE WILL NEVER UNDERSTAND JAPANESE',
  episodeNumber: 73,
  publishedAt: '2021-11-05T20:00:22Z',
  sections: {
    '00:00:00': 'You made it',
    '00:01:00': 'Dune',
    '00:06:51': 'Looking at movie reviews',
    '00:11:58': 'The Last Duel',
    '00:13:52': 'Changing your opinion based on others',
    '00:15:03': 'Daniel Craig likes smooching',
    '00:20:06': 'The impact of celebrities for a movie',
    '00:24:00': 'Everybody knows The Rock',
    '00:26:47': 'Celebrity culture',
    '00:28:58': 'People dislike Chris Pratt now',
    '00:31:18': 'The Mario movie',
    '00:33:54': 'Having a movie theater at home',
    '00:36:45': 'ExpressVPN',
    '00:38:01': 'The Matrix',
    '00:43:34': 'Keanu Reeves is awesome',
    '00:44:54': 'Garnt realized that he likes anime',
    '00:48:22': 'Connor watched 86',
    '00:55:53': 'Should we do a monthly anime watching club',
    '00:58:23': 'Garnt struggles with decorating his room',
    '01:03:19': 'The aesthetic of wall scrolls',
    '01:06:27': 'Glass is heavy',
    '01:08:07': 'Joey needs the limited edition stuff',
    '01:10:11': 'Where do you put a huge figurine',
    '01:12:19': "Connor's JoJo merch obsession",
    '01:14:12': "Connor's drip is a lie",
    '01:17:27': 'The S-Tier socks',
    '01:22:18': 'Honey',
    '01:23:26': 'Watching anime with subtitles',
    '01:28:17': 'Text can be terrifying',
    '01:30:09': 'Learning a new language',
    '01:34:45': 'Managing your time',
    '01:36:54': 'Waking up early might be good',
    '01:39:04': "We can't stay up late anymore",
    '01:42:56': 'Big announcement',
    '01:43:47': 'Can you understand culture',
    '01:56:48': 'Is Connor fake Welsh',
    '01:58:09': 'The great UK debate',
    '02:05:01': "UK doesn't have any truck drivers",
    '02:10:15': 'Crazy people are everywhere',
    '02:16:17': 'The power of the internet',
    '02:20:12': 'The elegant people',
  },
};
channelTrashTaste.videos.push(videoduEihBy6ujg);

const videoh5QspNrKphM: Video = {
  id: 'h5QspNrKphM',
  channel: channelTrashTaste,
  title: 'The Vtuber Rap God Returns (ft. Mori Calliope) | Trash Taste #74',
  titleShort: 'The Vtuber Rap God Returns',
  episodeNumber: 74,
  publishedAt: '2021-11-12T20:00:11Z',
  sections: {
    '00:00:00': 'Pop pop, babymen are here',
    '00:01:27': 'Mori is now a veteran',
    '00:05:35': 'Sleeping during streaming',
    '00:09:11': 'The most difficult rap',
    '00:14:40': "Mori's favorite streams",
    '00:17:52': 'How to come up with stream ideas',
    '00:21:13': "Mori's attending a convention",
    '00:24:53': 'Connor loves Gorilla Tag',
    '00:28:36': 'The hardest thing about being a vtuber',
    '00:32:50': "Video description doesn't matter",
    '00:35:29': 'How Mori learned streaming',
    '00:42:51': 'Jump King',
    '00:46:13': "Mori's favorite content to make",
    '00:49:14': 'The gang is confused by basic English',
    '00:52:29': "There's always an expert in the chat",
    '00:54:14': 'Streaming on Twitch vs YouTube',
    '00:58:44': 'People overanalyzing vtubers',
    '01:02:52': 'Zenmarket',
    '01:04:01': 'Streaming takes too much energy',
    '01:10:11': 'Working on the go',
    '01:17:35': 'Stream lingo',
    '01:21:36': 'Adam Sandler',
    '01:24:44': 'Memes get Garnt to watch films',
    '01:29:32': 'The Squid Game dub',
    '01:33:26': 'What Mori watches in her free time',
    '01:39:35': 'Learning Japanese through anime',
    '01:43:44': "Mori's life since the last episode",
    '01:51:54': "What would Mori be doing if she wasn't a vtuber",
    '01:56:51': 'The rivalry between vtubers',
    '02:03:39': 'Being an indie vtuber VS being managed',
    '02:07:17': "Mori's future plans",
    '02:10:51': 'Bone or boneless',
    '02:12:38': "Please don't go to our Patreon",
  },
  guests: [guestMoriCalliope],
};
channelTrashTaste.videos.push(videoh5QspNrKphM);
guestMoriCalliope.videos.push(videoh5QspNrKphM);

const videoJr5xSmrSqyA: Video = {
  id: 'Jr5xSmrSqyA',
  channel: channelTrashTaste,
  title: 'WE LIVE IN A SOCIETY | Trash Taste #75',
  titleShort: 'WE LIVE IN A SOCIETY',
  episodeNumber: 75,
  publishedAt: '2021-11-19T20:00:10Z',
  sections: {
    '00:00:00': 'This is like Squid Game',
    '00:02:10': 'Anime has become too generic',
    '00:06:39': 'The absolute state of isekai',
    '00:10:30': 'Voices in anime',
    '00:16:03': 'Garnt is ascending to become a speedster',
    '00:21:49': 'We need tech support',
    '00:35:30': 'Will we get online courses to become content creators',
    '00:39:38': 'Bokksu',
    '00:40:51': 'We actually discuss Squid Game',
    '00:44:22': 'Actors vs people they portray',
    '00:51:41': 'Society has changed',
    '00:55:31': 'The power of anonymity',
    '01:03:26': 'Online communities',
    '01:12:30': "We're easily influenced",
    '01:20:31': 'Hideo Kojima has the best name ideas',
    '01:25:26': 'Bad Japanese food',
    '01:26:38': 'Joey goes off against olives',
    '01:33:28': 'Manscaped',
    '01:34:42': 'Trying sea urchin',
    '01:41:49': 'Garnt swallows two sacks',
    '01:44:21': 'Grossed out by food',
    '01:49:07': 'Getting a wrong order in a restaurant',
    '01:55:05': 'Eating wings on a date',
    '01:58:03': 'Elbows on the table',
    '01:59:33': 'Having tattoos in Japan',
    '02:03:04': 'Robert Downey Jr. had a hard time coming to Japan',
    '02:04:46': "Ignoring laws in Japan isn't expensive",
    '02:13:29': 'This is society',
  },
};
channelTrashTaste.videos.push(videoJr5xSmrSqyA);

const videopWdHBCvah1Y: Video = {
  id: 'pWdHBCvah1Y',
  channel: channelTrashTaste,
  title: "We Don't Understand Public Holidays | Trash Taste #76",
  titleShort: "We Don't Understand Public Holidays",
  episodeNumber: 76,
  publishedAt: '2021-11-26T20:00:13Z',
  sections: {
    '00:00:00': 'Thanksgiving starts now',
    '00:02:16': 'Dates of holidays',
    '00:06:04': 'Taking a vacation in Japan',
    '00:12:13': 'UK used to have the weirdest holidays',
    '00:13:42': 'Holidays in the USA',
    '00:15:26': 'Joey used to throw eggs at buildings',
    '00:22:39': 'Babbel',
    '00:23:32': 'Stores had to stop selling eggs on Halloween',
    '00:25:09': 'Joey got spooked on 4th of July',
    '00:27:03': 'Guy Fawkes Day',
    '00:29:49': 'Easter',
    '00:30:35': 'Thai holidays',
    '00:34:25': 'Welsh holidays',
    '00:35:52': 'What era were we born in',
    '00:37:40': 'Dating methods',
    '00:41:43': 'Imperial vs metric',
    '00:52:06': "Harry's",
    '00:53:04': 'How we feel about giving gifts',
    '00:55:42': 'The idea behind a gift',
    '00:57:32': 'Gifting money',
    '01:00:10': 'Finding a perfect gift',
    '01:04:25': 'Sucking at shopping',
    '01:06:29': 'Gift giving as an adult',
    '01:10:24': 'Our most expensive gifts',
    '01:15:26': 'Lazy gifts',
    '01:17:41': 'Optimizing gifting',
    '01:22:56': "Japan's weather is sussy",
    '01:24:04': 'Minions are huge in Japan',
    '01:27:09': 'Merch collaborations in Japan',
    '01:31:34': 'Honey',
    '01:32:52': 'Putting anime characters on anything',
    '01:37:42': 'Pokémon is insanely huge',
    '01:44:16': 'Most successful franchises',
    '01:48:25': 'Most recognizable anime character',
    '01:54:47': 'Pachinko is OP at making money',
    '01:59:04': 'Trash Taste x YOU',
  },
  tags: ['We', "Don't", 'Understand', 'Public', 'Holidays', '76'],
};
channelTrashTaste.videos.push(videopWdHBCvah1Y);

const videoauxlYK_n2zw: Video = {
  id: 'auxlYK_n2zw',
  channel: channelTrashTaste,
  title: 'Trash Taste Tech Tips | Trash Taste Episode #77',
  publishedAt: '2021-12-03T20:00:00Z',
  sections: {
    '00:00:00': "We're out of coffee",
    '00:00:43': 'Connor got a new phone',
    '00:08:48': 'Finding the right tech to buy',
    '00:11:29': "Japan doesn't like OnePlus",
    '00:14:40': 'Smartwatches',
    '00:18:43': 'Removing useful functions from new phones',
    '00:23:32': "Garnt can't close his Chrome tabs",
    '00:26:59': 'You never want to get an email from YouTube',
    '00:28:58': 'The man who knows what he wants',
    '00:31:38': 'Apari',
    '00:32:42': "Visiting a school shouldn't be scary",
    '00:36:16': 'School punishments',
    '00:39:36': 'Connor bought drip',
    '00:43:01': 'Japans second-hand hits different',
    '00:50:29': 'Yahoo auction in Japan is exclusive',
    '00:51:38': 'Difference in sizes between Japan and USA',
    '01:01:33': 'Cosori',
    '01:02:49': 'Connor loves them wings',
    '01:05:06': 'Spicy food challenge',
    '01:13:52': 'The drip jacket has historical value',
    '01:17:10': 'What is the most popular meme',
    '01:21:24': 'Our favorite memes',
    '01:24:29': 'Honey',
    '01:25:46': 'Arcane',
    '01:33:19': 'Garnt saw KDA debut',
    '01:34:59': 'Everything about League of Legends is good asides from the game',
    '01:38:21': "New films that we've watched",
    '01:40:11': 'Robert Pattinson kinda slaps',
    '01:43:14': 'THE Suicide Squad',
    '01:45:22': 'Superhero franchises are getting too big',
    '01:50:17': "What we're going to watch for sure",
    '01:51:45': 'Going to the cinema',
    '01:53:47': 'Hans Zimmer is the god of bass',
    '01:55:49': 'When food products change ingredients',
    '01:59:58': 'Connor called a food company to get answers',
    '02:06:39': 'Min maxing procrastination',
    '02:11:30': "We're starving, no joke",
  },
};
channelTrashTaste.videos.push(videoauxlYK_n2zw);

const video1XKE8EOtwpg: Video = {
  id: '1XKE8EOtwpg',
  channel: channelTrashTaste,
  title: 'Sitting Down with a REAL Japanese Host | Trash Taste #78',
  titleShort: 'Sitting Down with a REAL Japanese Host',
  episodeNumber: 78,
  publishedAt: '2021-12-10T20:00:00Z',
  sections: {
    '00:00:00': 'Trash Taste x Apari merch',
    '00:02:21': 'We have a guest',
    '00:03:31': 'Being a host',
    '00:04:29': 'Turkish origins',
    '00:05:58': 'Bartering in Japan',
    '00:07:30': 'Being introverted',
    '00:11:39': 'Growing up in a different country',
    '00:14:47': 'Garnt is the dad figure',
    '00:17:24': 'Working at a pizza place',
    '00:26:21': 'This episode was planned a long time ago',
    '00:28:39': 'ExpressVPN',
    '00:29:54': 'You get paid for applying to host positions',
    '00:39:06': 'The appeal of host clubs',
    '00:44:13': 'Standing out as a host',
    '00:49:59': 'The host tier list',
    '00:54:55': 'Turkish taxi mafia',
    '00:57:27': 'The most interesting clients',
    '00:59:54': 'The most famous host',
    '01:04:49': 'Experiencing life',
    '01:08:36': 'A 60-year old client',
    '01:11:39': 'How to become the top host',
    '01:15:21': 'Do hosts have an issue with alcohol',
    '01:24:23': 'The social fetish',
    '01:27:30': 'The political aspect of host clubs',
    '01:35:15': 'The history of host clubs',
    '01:38:05': 'Bokksu',
    '01:39:37': 'Differences between newer and older clubs',
    '01:41:26': "What happens when you're a bad host",
    '01:47:51': 'Discrimination in host clubs',
    '01:50:01': 'How is the clientele so rich',
    '01:54:58': 'Champagne pyramids are expensive',
    '01:59:55': 'Favorite vtubers',
    '02:01:49': 'Freelancing as a host',
    '02:05:11': 'How to keep your client',
    '02:09:47': 'Being a host is becoming more popular',
    '02:20:49': 'Drinking with friends',
    '02:22:59': 'Speedrunning Twitch ban',
    '02:25:54': 'The future of host clubs',
    '02:28:02': "Who we'd buy a drink for",
  },
};
channelTrashTaste.videos.push(video1XKE8EOtwpg);

const videomhWMch3v9WY: Video = {
  id: 'mhWMch3v9WY',
  channel: channelTrashTaste,
  title: 'THE ANIME FIGURE SPECIAL | Trash Taste #79',
  titleShort: 'THE ANIME FIGURE SPECIAL',
  episodeNumber: 79,
  publishedAt: '2021-12-17T20:00:13Z',
  sections: {
    '00:00:00': '2 Weeks Left',
    '00:01:27': 'This is a special episode',
    '00:02:09': 'Figure Special Version 2',
    '00:13:58': 'Rashinban',
    '00:19:23': 'Garnt tries to find a figure from a game Connor has played',
    '00:25:55': 'Joey splurged on Persona 5',
    '00:31:26': "Connor's first JoJo figure",
    '00:33:45': 'Garnt buys a lewd figure from one of his favorite artists',
    '00:36:30': 'Joey reps Akira',
    '00:38:58': 'Connor bought a lewd figure as well',
    '00:42:14': 'Garnt bought a statue',
    '00:47:18': 'Joey found a figure that can beat Goku',
    '00:52:10': "Connor had to buy a figure that wasn't from an anime",
    '00:56:16': 'Astop',
    '00:56:57': 'Garnt gets tactical with his shopping',
    '00:59:06': 'Joey buys a Fist of the North Star figure',
    '01:00:35': "Connor's JoJo collection increases",
    '01:01:53': 'Garnt just started buying waifus',
    '01:06:31': "Connor's JoJo spree",
    '01:09:19': 'Garnt bought a Black Goku',
    '01:13:12': 'Joey buys a figure from the last anime season',
    '01:17:14': 'Connor bought something other than JoJo',
    '01:22:38': 'Joey spotted a wild Kirito appreciator',
    '01:24:22': 'Amiami',
    '01:24:41': 'Joey bought a figure from an incestuous series',
    '01:29:08': 'Garnt was forced to buy this figure',
    '01:33:46': 'Connor had to figure out anime that Joey watched in 2021',
    '01:40:46': 'The boys bought Among Us merch',
    '01:47:54': 'Garnt got legs of steel',
    '01:48:59': 'Buying random figures',
    '01:51:35': 'Joey had trouble finding this specific figure',
    '01:53:02': 'Connor bought the bike from Akira',
    '01:56:57': 'Showing off some more cool figures',
    '02:01:24': "Connor had to figure out an anime the boys haven't seen",
    '02:07:42': 'Mandarake',
    '02:10:08': 'Joey delved into Garnts FGO habits',
    '02:14:11': 'Garnt got the safest figure recommendation',
    '02:20:31': 'Garnt bought a sick Gundam figure',
    '02:22:52': 'Joey got massively ripped off',
    '02:28:33': "Connor's final challenge",
    '02:30:02': 'Garnt really surprises the boys',
    '02:34:05': 'Revealing the scores',
    '02:37:32': 'How all of this was even possible',
  },
};
channelTrashTaste.videos.push(videomhWMch3v9WY);

const video9EU_GkHqGAE: Video = {
  id: '9EU-GkHqGAE',
  channel: channelTrashTaste,
  title: 'Last Trash Taste of 2021 | Trash Taste #80',
  titleShort: 'Last Trash Taste of 2021',
  episodeNumber: 80,
  publishedAt: '2021-12-24T20:00:01Z',
  sections: {
    '00:00:00': 'Your final chance',
    '00:01:10': 'Where we learn new words',
    '00:03:51': 'We desperately need assistants',
    '00:10:19': 'Joey discovered to-do lists',
    '00:13:23': 'Waiting for the country to open up',
    '00:16:17': 'We ate Michelin star ramen',
    '00:23:01': "Expensive sushi isn't that much better",
    '00:29:37': 'Chefs who enjoy their work',
    '00:31:49': 'You can order a smile from McDonalds in Japan',
    '00:38:23': 'Shadowverse',
    '00:39:25': 'Where we lived before',
    '00:43:00': 'Food places in our previous location',
    '00:45:20': 'Garnt burnt out',
    '00:47:28': 'Trash Taste is our priority',
    '00:51:14': 'How long Garnt takes to make videos',
    '01:01:43': 'Second channels are a blessing',
    '01:06:31': 'Having high standards for the main channel',
    '01:09:57': 'New Years promises',
    '01:13:39': 'Trash Taste specials',
    '01:16:14': 'Manscaped',
    '01:17:25': 'Our biggest regrets',
    '01:22:08': 'Christmas in Australia',
    '01:29:04': 'Connors parents want to visit Japan',
    '01:32:53': 'Christmas foods',
    '01:35:38': 'Joey became old',
    '01:43:20': 'Building furniture',
    '01:45:44': 'Gardens are cool but...',
    '01:50:49': 'Children as workforce',
    '01:53:52': "Let's talk about NFTs",
    '02:05:33': 'Happy end of the year',
  },
};
channelTrashTaste.videos.push(video9EU_GkHqGAE);

const videoZ0xtAGKqAtg: Video = {
  id: 'Z0xtAGKqAtg',
  channel: channelTrashTaste,
  title: 'Our WORST Food Takes Yet | Trash Taste #81',
  titleShort: 'Our WORST Food Takes Yet',
  episodeNumber: 81,
  publishedAt: '2021-12-31T20:00:15Z',
  sections: {
    '00:00:00': 'Japanese coffee',
    '00:00:34': 'Joey got a haircut',
    '00:01:42': 'Talking about current events',
    '00:03:12': 'Our New Year promises',
    '00:05:06': "Joey's channel got almost shut down",
    '00:08:32': 'Connors troubles with YouTube copyright system',
    '00:13:46': "Connor didn't learn from his first mistake",
    '00:20:46': 'How companies abuse the copyright system',
    '00:25:22': 'Copyright Armageddon',
    '00:28:38': 'Ayylien',
    '00:29:45': 'The dislike button',
    '00:38:31': 'Likes on Instagram',
    '00:39:50': 'The reason behind hiding the dislike button',
    '00:43:27': "Garnt's world famous lasagna",
    '00:48:49': 'Garnt leveled up his lasagna skills for Meilyne',
    '00:53:41': 'Cooking is fun when you don\t have to clean',
    '00:55:15': 'A day old lasagna is better than a fresh one',
    '00:57:37': 'What type of pizza is the best pizza',
    '00:59:36': 'Having a hotdog in the crust',
    '01:01:41': 'The two types of pizza in Japan',
    '01:04:17': 'Honey',
    '01:05:26': 'Connor explains why he loves American pizza',
    '01:09:06': 'Japanese sushi vs American sushi',
    '01:14:51': 'Garnt thinks all the bread tastes the same',
    '01:19:58': 'All rice tastes the same',
    '01:25:06': 'Bokksu',
    '01:26:31': 'Sydney stabs Garnt in the back',
    '01:27:40': 'Garnt fought a cockroach with a mousepad',
    '01:32:15': 'The epic battle',
    '01:39:41': 'Connor has an issue with doves',
    '01:41:20': "The surprising conclusion to Garnt's cockroach story",
    '01:43:02': 'The hotdog pizza arrived',
    '01:46:43': 'How many different tastes does a food need',
    '01:50:16': 'Getting a pizza in Japan',
    '01:52:47': 'Being brought up on a certain kind of food',
    '01:54:26': 'Broccoli with mayonnaise',
    '01:57:27': 'Can you eat one dish infinitely',
    '02:00:12': 'Everybody agrees on how bussin this episode was',
  },
};
channelTrashTaste.videos.push(videoZ0xtAGKqAtg);

const videosxT3do4Wn0I: Video = {
  id: 'sxT3do4Wn0I',
  channel: channelTrashTaste,
  title: "We Became Japan's WORST Michelin Star Chefs | Trash Taste Special",
  titleShort: "We Became Japan's WORST Michelin Star Chefs",
  publishedAt: '2022-01-07T20:00:11Z',
  tags: [
    'Cooking',
    'Special',
    'Japanese',
    'Food',
    'Trash Taste Sepcial',
    'Cooking Special',
    'Iron Chef',
    'Trash Taste Cooking Special',
  ],
  type: 'Special',
};
channelTrashTaste.videos.push(videosxT3do4Wn0I);

const video1oyrYYqQWWw: Video = {
  id: '1oyrYYqQWWw',
  channel: channelTrashTaste,
  title: 'WE ALMOST DIED | Trash Taste #82',
  titleShort: 'WE ALMOST DIED',
  episodeNumber: 82,
  publishedAt: '2022-01-14T20:00:01Z',
  sections: {
    '00:00:00': 'We almost perished',
    '00:03:06': 'Taking thumbnail photos',
    '00:07:33': 'Who has the best YouTube thumbnails',
    '00:09:35': 'Being proud of your work',
    '00:11:39': 'Should they have waited with making Game of Thrones',
    '00:15:45': 'It takes too much time to make good stuff',
    '00:22:37': "An animation that's been in the making for 40 years",
    '00:25:58': "The most we've spent on our projects",
    '00:29:44': 'Joeys longest project',
    '00:31:43': 'Trash Taste specials take forever',
    '00:36:42': 'Our plans for this years specials',
    '00:40:08': 'Express VPN',
    '00:41:13': 'We went camping',
    '00:48:01': 'Our camping trip was stacked out',
    '00:52:40': 'Preparing the camping site and grilling',
    '01:00:09': 'We had some fire safety issues',
    '01:03:38': 'We set a gas lighter on fire',
    '01:07:49': 'The beer almost froze',
    '01:09:30': 'Garnt had to cuddle Connor',
    '01:14:51': "Connor couldn't handle the cold",
    '01:17:16': "Garnt's fear of pissing in the woods",
    '01:20:57': 'Connor and Nabi snoring',
    '01:22:46': 'The air was so cold it hurt to breathe',
    '01:25:05': 'Garnt was scammed out of warmth',
    '01:28:16': 'Garnt used his engineering degree',
    '01:30:33': 'Camping summary',
    '01:31:36': 'People throwing hot water on themselves',
    '01:34:59': "Harry's",
    '01:36:11': 'Beards are weird',
    '01:44:11': 'Garnt has to check under the car each time',
    '01:50:14': "Joey's irrational fear",
    '01:51:03': 'Fears from our childhoods',
    '01:56:11': 'Garnt got introduced to horror films by his cousin',
    '01:59:39': 'Darkness scares us',
    '02:03:15': "People who aren't easily scared",
  },
};
channelTrashTaste.videos.push(video1oyrYYqQWWw);

const videoBzgyXd4Rfss: Video = {
  id: 'BzgyXd4Rfss',
  channel: channelTrashTaste,
  title: 'Sitting Down with a Legendary Japanese Vtuber (ft. Kson) | Trash Taste #83',
  titleShort: 'Sitting Down with a Legendary Japanese Vtuber',
  episodeNumber: 83,
  publishedAt: '2022-01-21T20:00:06Z',
  sections: {
    '00:00:00': 'Kson has joined the party',
    '00:01:27': 'Why switch from 3D to 2D',
    '00:03:15': 'Who is Kson',
    '00:05:23': 'How long to make a cosplay',
    '00:06:41': 'Getting both English and Japanese viewers',
    '00:11:01': "Do Ksons parents know what she's doing",
    '00:15:07': 'Vtubers have taken over the world',
    '00:19:47': 'What games does Kson play',
    '00:22:05': 'Minecraft',
    '00:25:32': 'We finally talk about anime',
    '00:31:34': "Kson's favorite anime",
    '00:37:30': 'NSYNC made Kson want to become a vtuber',
    '00:39:21': 'Protective parents',
    '00:47:24': 'Why stream on YouTube',
    '00:49:52': 'Honey',
    '00:50:59': 'Kson watched the wrong Jojo',
    '00:55:46': 'Gundam',
    '01:01:14': 'Levels of crafting',
    '01:05:17': 'Gunpla',
    '01:07:28': 'Backseating during streams',
    '01:08:32': 'Understanding Mahjong',
    '01:13:05': 'Favorite types of streams',
    '01:16:24': 'Subnautica',
    '01:20:19': 'You can poop in Arc',
    '01:24:40': 'Getting a manager',
    '01:26:17': 'Indie vtubers',
    '01:32:02': 'Did Kson want to become a vtuber',
    '01:36:08': 'How Kson got into cosplaying',
    '01:40:04': 'Western memes vs Japanese memes',
    '01:46:45': 'Favorite memes',
    '01:50:53': "Kson's plans for this year",
    '01:54:35': 'Going to anime conventions',
    '01:57:00': 'Kson picks a fight with the UK',
    '02:00:06': 'Theme parks',
    '02:09:54': 'Kson started watching anime in university',
    '02:13:15': 'UK is actually dope',
  },
  guests: [guestKson],
};
channelTrashTaste.videos.push(videoBzgyXd4Rfss);
guestKson.videos.push(videoBzgyXd4Rfss);

const videobQyhBfnhIDY: Video = {
  id: 'bQyhBfnhIDY',
  channel: channelTrashTaste,
  title: 'WE ARE DYING (ft. Abroad in Japan) | Trash Taste #84',
  titleShort: 'WE ARE DYING',
  episodeNumber: 84,
  publishedAt: '2022-01-28T20:00:09Z',
  sections: {
    '00:00:00': 'Chris the affable',
    '00:01:42': 'Chris the Santa',
    '00:04:25': 'Connor got a poker set',
    '00:07:22': "Japan doesn't allow gambling",
    '00:13:08': 'How we feel about crane games',
    '00:20:11': "Chris goes for Joey's job",
    '00:25:10': 'Boys try picking a good anime for Chris to watch',
    '00:31:13': 'Dune looked great',
    '00:34:37': 'Arcane again',
    '00:35:41': 'Our thoughts on Star Wars',
    '00:39:52': 'Using departed actors in films',
    '00:44:11': 'AI tries recreating Garnts voice',
    '00:47:10': 'Gigguk 2.0 has arrived',
    '00:48:20': 'Chris and Connor adventures',
    '00:49:26': 'Taking for Granted',
    '00:50:22': 'Sacrificing your body for content',
    '00:51:37': 'Wacky Weekend has taken us places',
    '00:56:21': 'Chris got waterboarded',
    '00:57:45': 'Connor got a massage',
    '01:00:27': 'Garnt got a massage',
    '01:02:23': 'Chris is finally verified',
    '01:03:23': 'Highlight of the year',
    '01:10:40': 'Bokksu',
    '01:11:59': "Chris doesn't understand musical instruments",
    '01:13:04': "Chris's new amazing studio",
    '01:17:44': 'Chris also has a second channel',
    '01:19:31': 'Making your health into content',
    '01:22:10': "Chris's endoscopy adventures",
    '01:24:41': 'Connor and Garnt got a funky Covid test',
    '01:25:28': 'Cleaning your ears',
    '01:28:19': 'Garnt tells a story about Sydney',
    '01:30:27': 'Should you clean your ears',
    '01:32:48': 'Corona necklaces',
    '01:34:36': 'Western films take a while to arrive in Japan',
    '01:37:50': 'Connor goes to the cinema randomly',
    '01:40:02': 'Hamster Squid Game',
    '01:42:42': 'Japan blasts weird music',
    '01:44:27': 'Chris tries to put on a hoodie',
    '01:47:00': 'Goals for 2022',
    '01:47:59': 'Chris being in our special',
    '01:48:50': 'Chris wants to travel outside of Japan',
    '01:52:06': 'Dangerous video ideas',
    '01:55:45': 'Manscaped',
    '01:56:51': 'Mukbang and professional eaters',
    '02:03:31': 'Why we diss on America as much',
    '02:08:55': 'Hotels in London suck',
    '02:10:57': 'Chris got locked in an Airbnb',
    '02:13:36': 'Joey played an Uno reverse card on the Japanese police',
    '02:16:34': "Connor can't tell the difference between Japanese military and old people",
    '02:21:46': 'Chris got a ticket for speeding',
    '02:23:30': 'The entire podcast needs to be reshot',
  },
  guests: [guestAbroadinJapan],
};
channelTrashTaste.videos.push(videobQyhBfnhIDY);
guestAbroadinJapan.videos.push(videobQyhBfnhIDY);

const videoTYgUS6j0avo: Video = {
  id: 'TYgUS6j0avo',
  channel: channelTrashTaste,
  title: 'The Boys Went Snowboarding | Trash Taste #85',
  titleShort: 'The Boys Went Snowboarding',
  episodeNumber: 85,
  publishedAt: '2022-02-04T20:00:15Z',
  sections: {
    '00:00:00': 'The reality of this podcast',
    '00:01:31': "Garnt found out that he's his own worst enemy",
    '00:02:20': 'Expensive honey',
    '00:05:32': 'Expensive salt',
    '00:06:08': 'Poop coffee beans',
    '00:10:49': 'Making money online as an entrepreneur',
    '00:18:54': 'Ski resorts in Japan speak mostly English',
    '00:25:00': "Garnt wasn't built for such low temperatures",
    '00:29:37': 'Princess Connect',
    '00:30:59': 'Slipping some onsen water in your mouth',
    '00:33:47': 'Different levels of slopes',
    '00:42:53': 'Our accidents on the slopes',
    '00:51:25': 'Conclusion of our winter trip',
    '00:59:42': 'Honey',
    '01:00:45': 'Garnt tried a Pokémon game',
    '01:08:12': 'Games have lowered their difficulty',
    '01:16:24': 'Atlus games',
    '01:19:52': 'The high school setting in anime',
    '01:26:02': "It's easy to connect with anime because it's not real",
    '01:29:55': 'Connor watched Mushoku Tensei',
    '01:42:33': "Why haven't you all subscribed to our second channels",
    '01:43:20': 'Connor is changing up his schedule',
    '01:46:29': 'The TV Meta on Twitch',
    '02:01:06': 'The Patreon Meta',
  },
};
channelTrashTaste.videos.push(videoTYgUS6j0avo);

const videog2v_83FFrSc: Video = {
  id: 'g2v_83FFrSc',
  channel: channelTrashTaste,
  title: "We're Still an Anime Podcast | Trash Taste #86",
  titleShort: "We're Still an Anime Podcast",
  episodeNumber: 86,
  publishedAt: '2022-02-11T20:00:25Z',
  sections: {
    '00:00:00': "You wouldn't steal a podcast",
    '00:01:22': 'The seating matters',
    '00:03:13': 'Short people get the middle seat',
    '00:06:50': "Joey discovers he isn't 6 feet",
    '00:13:44': 'Tiny bathrooms',
    '00:18:11': 'ExpressVPN',
    '00:19:17': 'Themed bars in Japan',
    '00:23:44': 'How smaller bars survive with only a couple customers',
    '00:28:36': 'Connor and Chris kept eating too much',
    '00:32:57': "Other bars we've been to",
    '00:34:38': 'Bar culture in Australia',
    '00:38:08': 'Gaming bars in UK',
    '00:45:43': 'Bokksu',
    '00:46:40': 'Attack on Titan is amazing',
    '00:53:00': "We're looking forward to the culmination of AoT",
    '00:58:39': 'Boyhood',
    '01:02:16': 'Demon Slayer is amazing',
    '01:05:23': 'Why so many people enjoy Demon Slayer',
    '01:11:29': "Harry's",
    '01:12:33': "All of Joey's relatives watch Demon Slayer",
    '01:14:36': 'Demon Slayer is inescapable in Japan',
    '01:19:29': 'Anime films',
    '01:22:47': 'The hype surrounding Chainsaw Man is insane',
    '01:23:57': 'This concludes anime talk',
    '01:26:58': 'Joey finished 13 Sentinels in 3 days',
    '01:35:11': 'Connor played Jump King for 4 days straight',
    '01:45:18': 'Joey begs Garnt not to play Final Fantasy Online',
    '01:50:01': "Garnt tried to play Final Fantasy but couldn't",
    '01:55:27': 'Garnt is looking into getting a PS5',
    '01:57:53': 'Potato shortage in Japan',
    '02:01:50': 'Connor lusts for the extinct bananas',
    '02:10:28': 'Interfering with nature',
    '02:13:37': 'The least scary thing',
  },
};
channelTrashTaste.videos.push(videog2v_83FFrSc);

const video4tfKGg6Bpes: Video = {
  id: '4tfKGg6Bpes',
  channel: channelTrashTaste,
  title: 'OUR AWKWARD FAN STORIES | Trash Taste #87',
  titleShort: 'OUR AWKWARD FAN STORIES',
  episodeNumber: 87,
  publishedAt: '2022-02-18T20:00:09Z',
  sections: {
    '00:00:00': 'We are bringing the bass',
    '00:00:52': 'Joey got cancelled',
    '00:01:43': 'Multi-layered dramas',
    '00:04:06': 'Saying something is "okay" actually means it\'s bad',
    '00:06:26': 'Jujutsu Kaisen vs a wedding',
    '00:08:42': 'Our hot takes are becoming more widespread',
    '00:14:22': 'People taking us out of context',
    '00:16:02': 'The anime community has changed',
    '00:18:42': "Why people get annoyed over Joey's takes",
    '00:20:42': 'How to deal with online hate',
    '00:23:10': 'Teaching parents how to deal with people being mean to us',
    '00:26:58': 'Honey',
    '00:28:22': "It's good to vent to each other",
    '00:32:07': 'Drama culture',
    '00:39:09': 'Comments from long-term fans hit different',
    '00:41:16': 'Becoming friends with YouTubers',
    '00:48:54': 'The weirdest part about meeting an online friend',
    '00:52:38': 'Connors cringiest interaction',
    '00:55:04': 'A fan confused Joey with Garnt',
    '00:57:15': 'When fans mess up',
    '00:58:17': 'Connor got mistaken for the author of Goblin Slayer',
    '01:00:40': 'Garnt got mistaken for Super Eyepatch Wolf',
    '01:03:01': 'Remembering specific topics fans ask about',
    '01:04:59': 'Magic spoon',
    '01:06:33': 'Let this be the year of the anime conventions',
    '01:09:28': 'Getting called by our usernames',
    '01:13:02': 'How people have butchered our real names',
    '01:19:08': 'Weird names that people have',
    '01:22:56': 'Anime conventions in Australia',
    '01:25:51': 'Drinking at conventions',
    '01:27:22': "Getting dragged to see stuff you don't care about by your parents",
    '01:32:26': 'Connor picked his room when he was 2',
    '01:35:45': 'Garnt watched Pokémon instead of meditating',
    '01:41:18': 'Remembering the stuff we watch',
    '01:42:18': 'Song lyrics',
    '01:47:19': 'Making a music episode',
    '01:53:39': 'People who listen to lyrics...maybe',
  },
};
channelTrashTaste.videos.push(video4tfKGg6Bpes);

const videoktpnsG6pvA8: Video = {
  id: 'ktpnsG6pvA8',
  channel: channelTrashTaste,
  title: 'The Dream Episode | Trash Taste #88',
  titleShort: 'The Dream Episode',
  episodeNumber: 88,
  publishedAt: '2022-02-25T20:00:20Z',
  sections: {
    '00:00:00': 'Garnt has forgotten how to podcast',
    '00:00:49': "Why we haven't recorded for 3 weeks",
    '00:10:13': 'Being ill is a state of mind',
    '00:15:31': 'Appetite while sick',
    '00:19:56': "Connor says that food poisoning isn't an illness",
    '00:36:46': 'Honkai Impact 3rd',
    '00:38:08': "Connor doesn't like hospitals",
    '00:41:00': 'Hospital and dentist smells',
    '00:43:30': 'How often we visit the dentist',
    '00:48:44': 'Riding in an ambulance',
    '00:54:33': 'Fever dreams',
    '00:59:18': 'Dreams that change your life',
    '01:06:14': 'Flow of time in a dream',
    '01:12:08': 'ExpressVPN',
    '01:13:15': 'Lucid dreaming',
    '01:24:25': 'Sleep paralysis',
    '01:30:28': 'Visualizing your surroundings in a dream',
    '01:40:59': 'Manscaped',
    '01:42:16': 'Sleep talking & walking',
    '01:50:28': 'Sleep pissing & shitting',
    '02:02:30': 'Analyze our dreams',
    '02:03:17': 'People who have awesome dreams',
  },
};
channelTrashTaste.videos.push(videoktpnsG6pvA8);

const videoc8ksAWojjag: Video = {
  id: 'c8ksAWojjag',
  channel: channelTrashTaste,
  title: 'Roasting Our Trash Taste In Music | Trash Taste #89',
  titleShort: 'Roasting Our Trash Taste In Music',
  episodeNumber: 89,
  publishedAt: '2022-03-04T21:00:16Z',
  sections: {
    '00:00:00': '24-Hour stream',
    '00:01:07': 'The process of picking best song',
    '00:07:06': "Connor's 3x3",
    '00:08:15': 'Parcels',
    '00:12:26': 'Biffy Clyro',
    '00:13:55': 'Using your native accent to sing',
    '00:18:06': 'Tame Impala',
    '00:18:51': 'Weebcore',
    '00:21:57': 'Weeknd',
    '00:24:45': 'Comedy music',
    '00:27:54': 'Epic atmospheric music',
    '00:29:37': 'City pop',
    '00:31:03': 'YouTube recommends good music',
    '00:32:21': 'Bandai Spirits',
    '00:33:43': "Connor's music phase",
    '00:35:49': "Garnt's 3x3",
    '00:37:56': 'Kooks',
    '00:41:02': 'Garnt played guitar in a band',
    '00:58:47': 'Connor learns about music',
    '01:02:14': 'Bradio',
    '01:04:44': 'Muse',
    '01:08:06': 'The Killers',
    '01:13:12': 'MJ',
    '01:18:58': 'Anime-like music',
    '01:23:09': 'Daft Punk',
    '01:26:32': 'AM',
    '01:27:27': 'FLCL',
    '01:32:41': 'Magic Spoon',
    '01:33:58': "Joey's 3x3",
    '01:35:41': 'Ozzy Osbourne',
    '01:37:59': 'Led Zeppelin',
    '01:40:19': 'Pink Floyd',
    '01:46:38': 'Radiohead',
    '01:48:24': 'Getting emotional over music',
    '01:51:38': 'Tool',
    '01:53:57': 'MF Doom',
    '01:56:38': 'Tangerine Dream',
    '01:59:04': 'Nick Drake',
    '02:02:01': 'Depressing music',
    '02:03:22': 'Midwest emo',
    '02:09:39': 'Jun Maeda',
    '02:16:03': 'People who have good taste in music',
  },
};
channelTrashTaste.videos.push(videoc8ksAWojjag);

const video5v2aXluO5fc: Video = {
  id: '5v2aXluO5fc',
  channel: channelTrashTaste,
  title: "WE DON'T UNDERSTAND SPORTS | Trash Taste #90",
  titleShort: "WE DON'T UNDERSTAND SPORTS",
  episodeNumber: 90,
  publishedAt: '2022-03-11T20:00:01Z',
  sections: {
    '00:00:00': 'Charity time',
    '00:01:07': "Joey is forced to solve a Rubik's cube",
    '00:01:59': 'Garnt took back his promise on FF14',
    '00:03:27': "Connor's addicted to difficult games",
    '00:07:52': 'Difference between having a challenge and speedrunning',
    '00:10:26': 'Enjoying games on stream vs off stream',
    '00:15:07': 'Our thoughts on Pokémon Arceus',
    '00:21:23': 'Garnt picks games based on reviews',
    '00:24:46': 'What is so inviting about MMORPGs',
    '00:32:21': 'ExpressVPN',
    '00:33:31': "We're into Wordle now",
    '00:38:43': 'Babble Royale',
    '00:41:06': 'Does wanting to play golf make us boomers',
    '00:48:04': 'How Garnt became the chosen one of golf',
    '00:52:52': 'How to start with golf',
    '00:54:30': 'Bokksu',
    '00:55:41': 'Baseball increases your charisma',
    '00:57:43': 'We had very different physical education classes',
    '00:59:56': 'Sports days',
    '01:03:59': 'Joey and Connor share stories about pissing themselves',
    '01:06:38': "Connor can't stop himself from being too competitive",
    '01:09:29': 'Joey had 4 different sports days in Australia',
    '01:12:52': 'Getting reprimanded for outside school activities',
    '01:14:11': 'Connors school building had 2 different schools',
    '01:16:09': 'Boys will be boys',
    '01:18:57': 'Connor was a master sailor',
    '01:25:37': 'School trips',
    '01:28:15': 'Budgeting your lunch money',
    '01:35:01': 'Bookwalker',
    '01:36:12': 'The movies lied to us',
    '01:37:16': 'Learning how to drive a car',
    '01:40:27': 'Different stages of drivers licenses',
    '01:41:47': 'Connors arduous driving school journey',
    '01:46:13': 'Garnt started his driving experience in Thailand',
    '01:48:06': 'Driving instructors are weird',
    '01:50:02': 'Connor got extorted',
    '01:56:03': "Garnt's first driving experience gave him a shock",
    '01:59:47': 'How Connor flipped his friends ATV',
    '02:03:34': 'Driving motorbikes',
    '02:07:15': 'We need more extreme sports',
    '02:10:49': 'Avid extreme sports fans',
  },
};
channelTrashTaste.videos.push(video5v2aXluO5fc);

const videoZWS2nFo7eEo: Video = {
  id: 'ZWS2nFo7eEo',
  channel: channelTrashTaste,
  title: 'Animals We Could Beat in a Fight | Trash Taste #91',
  titleShort: 'Animals We Could Beat in a Fight',
  episodeNumber: 91,
  publishedAt: '2022-03-18T20:00:20Z',
  sections: {
    '00:00:00': 'Garnt got stuck in a snowstorm',
    '00:04:31': "Sydney wasn't prepared for the snow",
    '00:09:34': 'Joey was in a dust storm',
    '00:13:03': 'Fire storms are crazy',
    '00:15:09': 'There was a storm in the UK',
    '00:17:19': "There's nothing dangerous in the UK",
    '00:20:14': 'Controlled bush fires',
    '00:22:46': 'Joey almost got bit by the most venomous ant',
    '00:28:34': 'Fish that looks like a stone',
    '00:30:05': "Harry's",
    '00:31:12': 'Jellyfish',
    '00:36:28': 'Eternal life',
    '00:38:36': 'How long would you like to live',
    '00:41:54': "Garnt's grandma is a chad",
    '00:43:09': 'The animals we fear the most',
    '00:49:35': 'Bears',
    '00:52:38': 'What we think is the strongest animal',
    '00:56:15': 'Call of Antia',
    '00:57:27': 'The most dangerous things were we all along',
    '00:58:03': 'The biggest animal we could take on',
    '01:00:49': 'Joey used to have a parrot',
    '01:05:12': 'Connor built a PC',
    '01:11:01': 'Garnt has started eating breakfast',
    '01:13:43': 'Cereal without milk',
    '01:16:15': 'How healthy is cereal',
    '01:20:30': 'Japanese bread is expensive',
    '01:25:45': 'Putting bread in the freezer',
    '01:28:35': 'Ice in your beer',
    '01:30:00': 'Where do you put your eggs',
    '01:34:17': "Garnt can't stop chewing on ice",
    '01:35:11': 'Connor swallowed a huge ice cube on a date',
    '01:42:34': 'The types of ice we like to eat',
    '01:48:17': 'Drinks in plastic bags',
    '01:54:19': 'The hack you need to use during a work interview',
    '01:57:25': 'Lifehacks',
    '02:05:59': 'People who maybe drink water',
  },
};
channelTrashTaste.videos.push(videoZWS2nFo7eEo);

const videoXL6SuPw3kug: Video = {
  id: 'XL6SuPw3kug',
  channel: channelTrashTaste,
  title: 'Our Lives Are a Sitcom | Trash Taste #92',
  titleShort: 'Our Lives Are a Sitcom',
  episodeNumber: 92,
  publishedAt: '2022-03-25T20:00:45Z',
  sections: {
    '00:00:00': 'Has internet gotten worse',
    '00:06:31': 'The year when internet started going downhill',
    '00:10:44': 'Have politics been too gamified',
    '00:19:53': 'Being the smart kid in class',
    '00:22:49': 'Savages everywhere',
    '00:26:29': 'Honey',
    '00:27:34': 'The chillest community',
    '00:37:04': 'Joey has risen anew',
    '00:49:45': 'Jujutsu Kaisen is just okay',
    '00:56:20': 'The word "mid" is being overused',
    '01:04:32': 'How we define mid shows',
    '01:09:45': "Child actors who've gone into artsy movies",
    '01:13:41': 'Trash television',
    '01:15:49': 'Pawn Stars',
    '01:17:47': 'Storage Wars',
    '01:19:41': 'Reality TV shows that we used to watch',
    '01:28:59': 'Manscaped',
    '01:30:06': 'Taking part in a reality show',
    '01:31:22': 'Social media is the new reality TV',
    '01:33:25': 'YouTube is what TV used to be',
    '01:36:21': 'Top tier people',
  },
};
channelTrashTaste.videos.push(videoXL6SuPw3kug);

const videopjHme1fdS3M: Video = {
  id: 'pjHme1fdS3M',
  channel: channelTrashTaste,
  title: 'The Metaverse was a Mistake | Trash Taste #93',
  titleShort: 'The Metaverse was a Mistake',
  episodeNumber: 93,
  publishedAt: '2022-04-01T20:00:07Z',
  sections: {
    '00:00:00': 'People who work with animals are surprisingly happy',
    '00:03:15': 'Putting on gloves filled with ants',
    '00:07:03': 'Superstitious beliefs',
    '00:10:44': 'Science vs magic',
    '00:16:03': 'Eating oranges while sick',
    '00:17:37': 'Putting wasabi on a wound',
    '00:19:47': 'Salt on wounds',
    '00:22:25': 'Idioms and superstition',
    '00:26:16': 'Having your life flash before your eyes',
    '00:29:23': 'Raid Shadow Legends',
    '00:30:30': 'Garnt fixed his mouth ulcers with salt',
    '00:33:33': 'Why we believe that pseudoscience works',
    '00:35:43': "We can't proceed long term events",
    '00:37:29': 'NFT dating app',
    '00:39:48': 'NFTs are getting a bad rep',
    '00:43:07': 'Influencers who use NFTs to get rich',
    '00:45:34': 'NFT perception in Japan',
    '00:47:36': 'That one part in Tenet',
    '00:51:58': "Why people don't have legs in the metaverse",
    '00:54:38': 'VR Chat',
    '00:55:57': 'Buying land in the Metaverse',
    '00:58:50': 'Getting motion sick in VR',
    '01:00:47': 'How is Metaverse going to work',
    '01:04:46': "VR isn't easy enough to set up",
    '01:09:10': 'Evolution of graphics in video games',
    '01:14:22': 'Where can video game graphics even advance to',
    '01:21:42': 'Fully immersive virtual reality',
    '01:23:41': 'The future of VR',
    '01:25:23': 'Snoop Dogg joined Faze',
    '01:30:16': 'Celebrities who started streaming',
    '01:32:11': 'Gordon Ramsay is on the internet',
    '01:34:30': "Why every reality TV show doesn't post their stuff on YouTube",
    '01:38:21': 'Netflix is spewing out reality TV shows',
    '01:39:31': 'Murder documentaries',
    '01:41:18': 'Ads in awkward places',
    '01:43:18': 'Different ways to approach talking about murder',
    '01:44:39': 'Are these documentaries weird as entertainment',
    '01:46:48': 'Are we consuming the content wrong',
    '01:48:44': 'People who try to solve the crimes themselves',
    '01:51:59': 'Morbid curiosity',
    '01:57:13': 'Reddit 50-50',
    '01:58:35': "People who's job is to go over internet content",
    '02:00:17': 'Bright spots',
  },
};
channelTrashTaste.videos.push(videopjHme1fdS3M);

const videoRBKHSHEEgdU: Video = {
  id: 'RBKHSHEEgdU',
  channel: channelTrashTaste,
  title: 'This Is Why Real Men Cry | Trash Taste #94',
  titleShort: 'This Is Why Real Men Cry',
  episodeNumber: 94,
  publishedAt: '2022-04-08T20:00:06Z',
  sections: {
    '00:00:00': "There definitely wasn't an intro before this",
    '00:03:09': 'Coughing and pooping at the same time',
    '00:04:51': 'Japan only has two seasons',
    '00:06:27': 'We are sweaty bois',
    '00:08:34': 'Air conditioner vs a fan',
    '00:11:01': "The reason why Connor's apartment smelled",
    '00:13:42': 'Pigeons outwitted Garnt',
    '00:15:31': 'Joey woke up to opossums doing their thing',
    '00:16:14': 'Reflective things against doves',
    '00:17:12': 'Foxes sound like screaming kids',
    '00:18:35': 'Connor had an ant and mice infestation',
    '00:21:28': 'Garnt is afraid of bees',
    '00:23:38': 'Can we make Garnt put his hand in a box of bees',
    '00:27:17': 'Hornets vs bees',
    '00:29:20': 'Ants can take a liquid form',
    '00:30:40': 'Kangaroos are massive',
    '00:32:41': 'Bunnies are ruining Australia',
    '00:36:42': 'Rabbits are too cute',
    '00:39:05': 'Giant tortoises were too tasty',
    '00:46:24': 'People only care about cute or cool animals',
    '00:50:04': 'ExpressVPN',
    '00:51:11': 'Getting rid of wasps nests',
    '00:52:24': 'Bigger spiders are less scary than small ones',
    '00:53:57': 'Connor had tiny roommates',
    '00:56:21': 'Joey had termites',
    '00:58:02': 'People who clean homes after the resident has passed away',
    '01:01:38': 'Garnt had an interesting Airbnb experience',
    '01:03:32': 'When should you write a will',
    '01:07:12': 'Releasing videos post mortem',
    '01:10:10': 'Sad stories in anime',
    '01:13:57': "It's hard to make empathetic stories revolving death",
    '01:17:45': 'Joey felt empty',
    '01:21:05': 'A piece of media that has made us cry the most',
    '01:24:57': 'Bois talk about crying',
    '01:31:23': "Connor can't stop talking about Batman",
    '01:34:26': "Harry's",
    '01:35:28': 'Batman The Animated Series',
    '01:37:03': 'Batman Arkham Asylum',
    '01:37:59': 'Connor was an achievement hunter',
    '01:45:04': 'Fishing mini-games',
    '01:48:02': 'Joey is really into mahjong',
    '01:51:07': 'Garnt loves bridge',
    '01:52:59': 'Is mahjong and bridge an old person game',
    '01:54:30': "Chess isn't interesting to watch",
    '01:57:53': 'Go',
    '01:59:25': "Sport games that we don't know the rules of",
    '02:01:13': 'Some sports are better to watch than others',
    '02:05:20': 'People who love milk',
  },
};
channelTrashTaste.videos.push(videoRBKHSHEEgdU);

const videowi9fRiR4xWk: Video = {
  id: 'wi9fRiR4xWk',
  channel: channelTrashTaste,
  title: 'We Survived a MASSIVE Earthquake in Japan | Trash Taste #95',
  titleShort: 'We Survived a MASSIVE Earthquake in Japan',
  episodeNumber: 95,
  publishedAt: '2022-04-15T20:00:18Z',
  sections: {
    '00:00:00': 'Our most useless skills',
    '00:02:08': "Solving a Rubik's cube",
    '00:04:54': 'Joey mastered the kendama',
    '00:07:55': "Connor ruined his Harry Potter Rubik's cube",
    '00:10:33': 'Our go to party tricks',
    '00:11:51': 'Connor clicks his wrists',
    '00:12:15': 'Joey makes his signature sound',
    '00:13:38': 'Garnt sent money to a magic company',
    '00:15:48': 'Joey learnt how to backflip',
    '00:17:50': 'Connor wants to master the umbrella trick',
    '00:18:45': "Are there people who don't own pens",
    '00:20:34': 'Unidentified Mysterious Animals',
    '00:26:29': 'The earthquake in Japan',
    '00:29:34': 'The earthquake signal',
    '00:30:55': 'Honey',
    '00:32:06': 'The RPG item sound',
    '00:33:26': "Garnt's entire street lost electricity",
    '00:39:06': 'Connor was in a basement during the earthquake',
    '00:41:27': "It wasn't Joey's first rodeo",
    '00:44:19': 'Comprehending the earthquake rating scale',
    '00:50:59': 'USA has the most volcanoes',
    '00:52:37': 'Are we prepared for a disaster',
    '00:58:18': 'Surviving a nuclear bomb',
    '01:04:39': 'Getting hit by an atom',
    '01:07:58': 'Bokksu',
    '01:08:57': 'Could we survive a zombie apocalypse',
    '01:16:53': 'The youth is more prepared than us',
    '01:19:54': 'Should Trash Taste get a bunker',
    '01:22:33': 'Tree houses look cool',
    '01:24:17': 'Who could survive the longest',
    '01:27:45': 'Could we last on a deserted island',
    '01:29:37': 'Drinking your piss',
    '01:33:09': 'The time Nathan For You almost broke character',
    '01:35:22': 'What 3 items would we take to a deserted island',
    '01:45:16': 'Would you move to a house where someone died',
    '01:51:41': 'When does a new home turn into your actual home',
    '01:56:35': 'Connor figured out how to live the good life',
    '01:58:04': 'Man caves',
    '02:00:58': 'Garnt wants to be in a prison',
    '02:03:37': 'Old folks home',
    '02:06:19': 'People who can still decide',
  },
};
channelTrashTaste.videos.push(videowi9fRiR4xWk);

const video61rCpY7H7oo: Video = {
  id: '61rCpY7H7oo',
  channel: channelTrashTaste,
  title: 'Proving We Truly Have Trash Taste | Trash Taste #96',
  titleShort: 'Proving We Truly Have Trash Taste',
  episodeNumber: 96,
  publishedAt: '2022-04-22T20:00:00Z',
  sections: {
    '00:00:00': 'Thoughts on the 24-hour stream',
    '00:08:10': "Everybody's playing Jump King",
    '00:16:19': 'How are Japanese websites so bad',
    '00:22:21': 'Secret menus in restaurants',
    '00:31:23': 'ExpressVPN',
    '00:32:34': 'Our friend took over a bar',
    '00:34:44': 'The secret Japanese menu',
    '00:37:52': 'Spicy food',
    '00:45:01': 'Rice is more popular than you think',
    '00:55:18': 'Vesync',
    '00:56:24': 'The first time Connor tried boba',
    '01:01:49': 'Why is boba tea so popular',
    '01:04:39': 'Japanese food needs to be aesthetic but not good',
    '01:08:30': "Theme cafe's don't respect the themes",
    '01:14:56': 'Making noise in Japan',
    '01:17:56': "Garnt's street is controlled by old lady thugs",
    '01:22:24': 'Sorting trash is a nightmare',
    '01:33:48': 'Our monthly anime talk',
    '01:47:56': "Anime characters age don't mesh with their personality",
    '01:55:43': 'Censoring in anime',
    '02:00:13': 'Ranking of Kings',
    '02:02:52': 'NFT bad',
    '02:06:08': "People who don't conform",
  },
};
channelTrashTaste.videos.push(video61rCpY7H7oo);

const videoHPQY80BYUHA: Video = {
  id: 'HPQY80BYUHA',
  channel: channelTrashTaste,
  title: 'Our SECRET Japan Travel Tips | Trash Taste #97',
  titleShort: 'Our SECRET Japan Travel Tips',
  episodeNumber: 97,
  publishedAt: '2022-04-29T20:00:04Z',
  sections: {
    '00:00:00': 'Is black paint heavier than white paint',
    '00:06:42': 'This episode has a theme',
    '00:11:30': 'POV You just arrived in Japan',
    '00:20:41': 'Get Suica',
    '00:22:46': 'Akihabara is pretty dope',
    '00:30:17': 'You can pilot a mecha in an arcade',
    '00:34:11': 'Athletic Greens',
    '00:35:09': 'Weeb stuff outside of Akihabara',
    '00:39:38': 'Karaoke is the most fun thing to do in Japan',
    '00:49:19': 'Onsens',
    '00:57:56': 'Ryokans',
    '01:03:03': 'Avoid bars where people invite you in',
    '01:05:02': 'Ikebukuro',
    '01:12:25': 'Hokkaido',
    '01:16:10': 'Hakodate',
    '01:20:31': 'Should you visit Kyoto',
    '01:23:49': 'Okinawa has beaches Joey can appreciate',
    '01:26:30': 'People come for anime and stay for the food',
    '01:28:42': 'Garnt prefers conveyor belt sushi over restaurant sushi',
    '01:30:56': 'Should people try Wagyu beef',
    '01:33:24': 'Chicken meat',
    '01:35:12': 'Underrated food',
    '01:40:41': 'Tonkatsu is god-tier',
    '01:43:42': 'Just try all the foods',
    '01:44:47': 'Conbini food',
    '01:48:47': 'Where to go if you have more time',
    '01:51:31': 'Seeing mount Fuji',
    '01:53:27': 'Getting around Tokyo',
    '01:56:10': 'Kyushu',
    '01:57:42': 'The wine capital of Japan',
    '01:59:40': 'Where to go if you like sake',
    '02:02:39': 'Theme parks',
    '02:04:34': 'Closing words about Japan',
  },
};
channelTrashTaste.videos.push(videoHPQY80BYUHA);

const video192Qd9oP84g: Video = {
  id: '192Qd9oP84g',
  channel: channelTrashTaste,
  title: 'Wedding Planning is an Absolute Nightmare | Trash Taste #98',
  titleShort: 'Wedding Planning is an Absolute Nightmare',
  episodeNumber: 98,
  publishedAt: '2022-05-06T20:00:54Z',
  sections: {
    '00:00:00': 'Garnt left us',
    '00:05:48': 'Are Sydney and Garnt related',
    '00:10:00': 'Marrying in a church',
    '00:12:01': 'Garnt got a marriage beta run',
    '00:16:42': 'The most fun part about a wedding',
    '00:18:45': 'Wedding sizes',
    '00:22:04': 'Lining up at a wedding',
    '00:23:43': 'Wedding politics',
    '00:26:06': 'Trash Taste wedding special',
    '00:29:49': 'Joey is finally visiting England',
    '00:33:01': 'Amazing bars in the UK',
    '00:40:34': "What Joey's been up to",
    '00:43:12': "Remembering the best places you've been to",
    '00:46:45': 'Golden Week is upon us',
    '00:50:10': "What Connor's been up to",
    '00:52:11': 'Garnt got recognized by a bartender',
    '00:57:13': 'We are a fire hazard',
    '01:02:45': 'Convention gone wrong',
    '01:07:53': "Harry's",
    '01:08:59': 'We are going to AX',
    '01:11:38': 'The anituber meetup',
    '01:14:14': 'Talking to fans',
    '01:17:59': 'Garnt experiences a Tesla',
    '01:20:06': 'Connor got shit in a friends tesla',
    '01:23:46': 'The new Doctor Strange film',
    '01:29:30': 'Marvel fatigue',
    '01:32:12': 'Severance',
    '01:37:18': 'Spy x Family',
    '01:45:56': 'Elden Ring',
    '01:51:16': 'Metal Gear Rising Revengeance',
    '01:54:33': 'The Steam Deck',
    '01:56:49': 'A Pokémon game that is finally challenging',
    '01:58:47': 'Modding Games',
    '02:01:15': 'VR time',
  },
};
channelTrashTaste.videos.push(video192Qd9oP84g);

const videoznhQFPnCxec: Video = {
  id: 'znhQFPnCxec',
  channel: channelTrashTaste,
  title: 'JAPAN IS OPENING UP TO NEW PEOPLE (ft. @Daidus) | Trash Taste #99',
  titleShort: 'JAPAN IS OPENING UP TO NEW PEOPLE',
  episodeNumber: 99,
  publishedAt: '2022-05-13T20:00:12Z',
  sections: {
    '00:00:00': 'Bowing when on the phone',
    '00:02:45': 'Who is Daidus',
    '00:04:56': 'Daidus has never been to Japan',
    '00:09:53': 'American vs Japanese workers',
    '00:15:25': 'You buy fruit in Japan to flex',
    '00:21:50': 'The experience of moving to Japan',
    '00:25:58': 'Garnt optimized coming to Japan',
    '00:28:22': 'Honey',
    '00:29:29': 'Garnt and Connor were the beta testers',
    '00:31:16': 'Feeling helpless like a baby',
    '00:33:23': 'Daidus lost his rent money because of his shoes',
    '00:35:24': 'The word you need to use in your sentences',
    '00:38:00': 'The cults in Japan',
    '00:41:01': 'Daidus likes the low calorie beer',
    '00:45:06': 'Motivation to work',
    '00:46:02': 'First reactions of Tokyo',
    '00:47:07': 'Ramen in a cup vs in a packet',
    '00:51:14': 'Daidus learnt 3D animation in university',
    '00:54:38': 'Passing your work to someone else',
    '00:57:05': 'The process of making a Daidus video',
    '01:00:24': 'Not working has ceased to be an option',
    '01:06:28': 'YouTube really shoves your video performance in your face',
    '01:09:41': 'Bokksu',
    '01:10:45': 'Taking on sponsors used to be taboo',
    '01:16:55': 'Watching content at 2x the speed',
    '01:26:51': 'The bidet course',
    '01:28:55': 'Japanese bathtubs need to exist all over the world',
    '01:32:48': 'Daidus blows the guys away with his wiping habits',
    '01:35:44': "Daidus's face reveal",
    '01:45:45': 'The future of story time animation',
    '01:49:32': 'How Daidus blew up',
    '01:53:39': 'The first time Daidus met Connor',
    '01:57:16': 'Daidus tells a story',
    '01:59:19': 'You never stop building furniture',
    '02:02:10': 'Daidus built a PC worse than Joey',
    '02:04:54': "Daidus's Japan bucket list",
    '02:06:16': "Daidus's advice on moving abroad",
  },
  guests: [guestDaidus],
};
channelTrashTaste.videos.push(videoznhQFPnCxec);
guestDaidus.videos.push(videoznhQFPnCxec);

const videojtKsu1aIwvM: Video = {
  id: 'jtKsu1aIwvM',
  channel: channelTrashTaste,
  title: 'The 2nd Annual Trash Taste Awards | Trash Taste #100',
  titleShort: 'The 2nd Annual Trash Taste Awards',
  episodeNumber: 100,
  publishedAt: '2022-05-20T20:00:16Z',
  sections: {
    '00:00:00': 'Welcome to the Awardw show',
    '00:02:06': 'TT Studio',
    '00:03:01': 'This podcast has too many episodes',
    '00:05:00': 'TT After Dark',
    '00:06:45': 'TT awardw',
    '00:08:57': 'Nomination categories',
    '00:12:24': 'Hot Take of the Year',
    '00:18:40': 'Best OOC Clip',
    '00:24:12': 'Screen Grab of the Year',
    '00:29:40': 'Most Degenerate Moment',
    '00:35:21': 'ExpressVPN',
    '00:36:25': 'Saltiest Moment',
    '00:43:45': 'Most Monke Moment',
    '00:51:36': 'Best Story',
    '00:57:43': 'Biggest Clown',
    '01:00:56': 'Biggest Chad',
    '01:03:41': 'Honey',
    '01:04:41': 'Best Nickname',
    '01:07:42': 'Best Complaining-About-America Moment',
    '01:11:40': 'Best Meme',
    '01:16:55': 'Fans\' "They Actually Talked About Anime" Award',
    '01:21:25': 'Best Tangent',
    '01:26:43': 'Best Drip',
    '01:29:57': 'Manscaped',
    '01:30:58': 'Laziest Drip',
    '01:33:43': 'Best Rant',
    '01:36:35': 'Best Argument',
    '01:41:08': 'Worst Food Take',
    '01:43:43': 'Best Poop Moment',
    '01:48:36': 'Most Privileged Moment',
    '01:53:52': 'The "I Made It the Fuck Up" Award',
    '01:58:40': 'Best TTAD Episode',
    '02:01:54': 'Dumbest Quiz Answer',
    '02:07:05': 'Moment of the Year',
    '02:12:12': 'Best TT Episode',
    '02:16:39': 'Thoughts on TT Season 2',
    '02:19:15': 'What to expect in TT Season 3',
  },
};
channelTrashTaste.videos.push(videojtKsu1aIwvM);

const videoZd1iy4iMkmY: Video = {
  id: 'Zd1iy4iMkmY',
  channel: channelTrashTaste,
  title: 'The Struggles of a Storytime Youtuber (ft. @Emirichu)  | Trash Taste #101',
  titleShort: 'The Struggles of a Storytime Youtuber (ft. @Emirichu) ',
  episodeNumber: 101,
  publishedAt: '2022-05-27T20:00:08Z',
  sections: {
    '00:00:00': 'Emily is here',
    '00:01:37': 'Connor is the reason why Emily moved to Japan',
    '00:04:37': 'Deer at Nara park are vicious',
    '00:07:58': 'Comparing your skills to other artists',
    '00:13:24': 'Emily studied to be a teacher',
    '00:15:35': "The animated music video that changed Emily's life",
    '00:18:59': 'Telling your parents you do YouTube for a living',
    '00:24:09': "Emily's first videos",
    '00:26:35': 'Joining the story time community',
    '00:27:55': 'Gaining 2 million subscribers in 2 years',
    '00:31:42': "Emily's friend who didn't want to talk to her until she was famous",
    '00:35:33': 'Female Youtubers are put into 2 boxes',
    '00:39:07': 'Twitter went crazy over a pic of Sydney',
    '00:40:49': 'People forget that YouTubers have a private life',
    '00:42:15': 'Swearing in videos, guys vs girls',
    '00:47:49': 'Old friends who wanted to talk when you became big',
    '00:51:21': 'Getting a visa was like The Hunger Games',
    '00:53:20': 'Trying to differentiate people',
    '00:56:13': 'Japanese locals think Emily is one of them',
    '00:58:25': 'How to memorize kanji',
    '01:01:26': 'Coffee has arrived',
    '01:05:51': 'Japanese locals love to teach you Japanese',
    '01:08:07': 'The delivery guy ignored Daidus to talk to Emily',
    '01:10:33': "Japanese can talk in English but won't talk in it unless you do as well",
    '01:17:15': 'People who speak every language',
    '01:18:49': 'Connor was annoyed that a guy at a strip club was vibing',
    '01:20:24': 'Joey trolled a girl by pretending to not speak Japanese',
    '01:21:53': 'Talking behind a tourists back',
    '01:25:47': 'Joey has to reserve all the tables',
    '01:31:27': 'Places Emily wants to visit in Japan',
    '01:32:18': 'Japanese strawberries',
    '01:34:34': 'Fruit baskets are insanely expensive',
    '01:37:26': 'Japanese strawberries are crazy big',
    '01:40:53': 'Having an actual sleep schedule',
    '01:42:44': 'Teamfight Tactics',
    '01:46:58': 'Counterside',
    '01:48:01': 'Connor gushes even more about TFT',
    '01:50:52': "Emily's favorite character in League",
    '01:52:23': "Emily's thoughts on Jujutsu Kaisen",
    '01:57:50': 'Emily explains her anime taste',
    '02:05:00': 'Baki and Jojo',
    '02:08:55': 'Daidus likes drama',
    '02:10:46': 'Understanding anime films',
    '02:14:38': 'When They Cry',
    '02:17:32': 'Being an edge lord',
    '02:19:02': 'Connor loves Katanagatari',
    '02:20:28': 'Emily has decided to consume more content',
    '02:24:50': 'Enjoying chill anime',
    '02:29:49': 'Look at Emily',
  },
  guests: [guestEmirichu],
};
channelTrashTaste.videos.push(videoZd1iy4iMkmY);
guestEmirichu.videos.push(videoZd1iy4iMkmY);

const videopr_aIBYhxvw: Video = {
  id: 'pr-aIBYhxvw',
  channel: channelTrashTaste,
  title: 'Goodbye Japan | Trash Taste #102',
  titleShort: 'Goodbye Japan',
  episodeNumber: 102,
  publishedAt: '2022-06-03T20:00:17Z',
  sections: {
    '00:00:00': 'We are actually leaving',
    '00:02:48': 'Joey hid a secret from the guys',
    '00:07:54': 'Graphic design is hard',
    '00:11:21': 'Keyboard sounds',
    '00:15:37': 'The tenkeyless debate begins',
    '00:18:13': 'Connor likes to take his keyboards with him on trips',
    '00:31:31': 'Headphones',
    '00:35:45': 'Honey',
    '00:36:49': 'Monitor refresh rate',
    '00:39:38': 'Picking the right sounding keys',
    '00:42:36': 'Garnt got diagnosed with ADHD',
    '00:47:35': 'Connor was convinced as a child that he has dyslexia',
    '00:52:44': 'Diagnosing your child',
    '00:58:12': 'Many people ignore mental health',
    '01:01:27': 'Self diagnosing',
    '01:03:09': 'Bad experience with doctors',
    '01:06:07': 'Connor would rather be sick than have his voice threatened',
    '01:08:09': "We'll be filming abroad for a while",
    '01:12:59': 'Gaining weight',
    '01:14:54': 'How much underwear do you need for vacations',
    '01:19:07': 'Connor scammed an airline',
    '01:22:53': "Joey almost couldn't leave Canada",
    '01:27:48': "Garnt's airline demanded $4000 from him",
    '01:39:55': 'Have we ever gone full Karen',
    '01:41:32': "Garnt couldn't talk his way through a bouncer",
    '01:47:42': "Joey's manager went anti-Karen",
    '01:51:01': 'Paying bouncers has its upsides and downsides',
    '01:56:11': "Don't be a Karen but know a Karen",
    '01:57:57': "People who aren't Karen's",
  },
};
channelTrashTaste.videos.push(videopr_aIBYhxvw);

const videoHW6mghCe6Wk: Video = {
  id: 'HW6mghCe6Wk',
  channel: channelTrashTaste,
  title: 'Our First Trash Taste Convention Experience | Trash Taste #103',
  titleShort: 'Our First Trash Taste Convention Experience',
  episodeNumber: 103,
  publishedAt: '2022-06-10T20:00:05Z',
  sections: {
    '00:00:00': 'We have a new studio',
    '00:01:21': 'We went to MCM London',
    '00:05:23': 'The scale of anime cons',
    '00:07:05': 'The scale of game cons',
    '00:09:07': 'Our MCM London experience',
    '00:12:33': 'First Trash Taste panel ever',
    '00:18:44': 'Stop being cringe',
    '00:28:00': "We'll be prepared next time",
    '00:30:49': 'MCM signing',
    '00:32:01': 'Connor had a Mission Impossible-esque plan',
    '00:39:44': 'Having a bodyguard',
    '00:41:04': 'Getting gifts from fans',
    '00:42:32': "Garnt's perfect disguise idea",
    '00:46:33': 'Cosplayers',
    '00:47:58': 'Signing death notes',
    '00:50:15': 'Special gifts',
    '00:52:40': 'Signing weird things',
    '00:56:13': 'Getting recognized outside the MCM',
    '01:04:24': 'CDawgZVA',
    '01:07:12': 'The worst time to get noticed',
    '01:12:25': 'Being in the UK',
    '01:14:21': 'Weird interaction',
    '01:28:25': "London's new Elizabeth line",
    '01:29:59': 'The bakery that changes you',
    '01:33:11': 'Meal deals',
    '01:37:07': 'Garnt and bread',
    '01:40:09': 'Spending money in the UK',
    '01:44:17': "That's been this episode",
  },
};
channelTrashTaste.videos.push(videoHW6mghCe6Wk);

const videosrdgNtMhrj4: Video = {
  id: 'srdgNtMhrj4',
  channel: channelTrashTaste,
  title: 'Sitting down with a REAL Anime Composer (ft. Kevin Penkin) | Trash Taste #104',
  titleShort: 'Sitting down with a REAL Anime Composer',
  episodeNumber: 104,
  publishedAt: '2022-06-17T20:00:09Z',
  sections: {
    '00:00:00': 'Kevin the Lad',
    '00:01:43': 'Getting to work on Made in Abyss',
    '00:06:37': 'Working for a Japanese company',
    '00:08:54': 'Connor is right with beeps and the boops',
    '00:12:25': 'How did Kevin learn Japanese',
    '00:19:14': 'Normal Kevin vs Aussie Kevin',
    '00:25:22': 'Naming music tracks',
    '00:29:35': 'Getting commissions for anime music',
    '00:32:24': 'How Kevin started making anime music',
    '00:39:14': 'How Kevin met the boys',
    '00:55:15': "Kevin's creative process",
    '01:01:13': 'Can you know if a song will become a banger',
    '01:09:23': 'Finding a good recording spot',
    '01:13:00': 'The Tower of God soundtrack',
    '01:22:23': 'Kevin has mastered many musical instruments',
    '01:34:31': 'Composing during covid',
    '01:38:07': 'The Star Wars Visions soundtrack',
    '01:49:24': 'Manscaped',
    '01:50:24': "What's next for Kevin?",
  },
  guests: [guestKevinPenkin],
};
channelTrashTaste.videos.push(videosrdgNtMhrj4);
guestKevinPenkin.videos.push(videosrdgNtMhrj4);

const videoGl2aHWx5HFg: Video = {
  id: 'Gl2aHWx5HFg',
  channel: channelTrashTaste,
  title: 'Sitting Down With a Real ℌệ𝔫𝔱ằ𝔦 Artist (ft. Shindo L) | Trash Taste #105',
  titleShort: 'Sitting Down With a Real ℌệ𝔫𝔱ằ𝔦 Artist',
  episodeNumber: 105,
  publishedAt: '2022-06-24T20:00:10Z',
  sections: {
    '00:00:00': 'The spiciest guest',
    '00:02:31': "Metamorphosis should've been even more depressing",
    '00:08:14': 'Has being from the states affected the creative process',
    '00:09:38': "ShindoL didn't expect Metamorphosis to be memed so much",
    '00:14:02': 'How to start drawing eromanga in Japan',
    '00:19:05': 'Doujins by ShindoL',
    '00:26:07': 'Honey',
    '00:27:22': 'A day in the life of an eromangaka',
    '00:29:22': 'How the Japanese audience reacted to Metamorphosis',
    '00:30:25': 'Amount of story vs anything else',
    '00:35:28': 'Least favorite tropes in manga',
    '00:36:26': 'The amount of research that goes into eromanga',
    '00:38:06': 'How doujins avoid Japanese copyright rules',
    '00:47:26': 'Trends in manga that are overdone',
    '00:55:33': 'Doing a normal manga',
    '00:58:17': 'Going from eromanga to manga',
    '01:01:31': 'How many doujin artists can do it for a living',
    '01:03:11': 'The main way to make a living from drawing',
    '01:06:06': 'Censoring',
    '01:08:50': 'Rules for what needs to be censored',
    '01:15:29': 'Bokksu',
    '01:16:49': 'Joey asks a legitimate question',
    '01:23:09': "ShindoL's favorite tags",
    '01:31:20': "How ShindoL's colleagues feel about his work",
    '01:35:56': 'Tippsy Sake',
    '01:37:24': 'ShindoL is a massive souls fan',
    '01:39:23': 'Manga that ShindoL likes',
    '01:42:34': 'Hours lost to gaming',
    '01:43:57': 'Pursuing hobbies outside of work',
    '01:44:46': 'Battle manga',
    '01:50:21': 'We are enlightened',
  },
  guests: [guestShindoL],
};
channelTrashTaste.videos.push(videoGl2aHWx5HFg);
guestShindoL.videos.push(videoGl2aHWx5HFg);

const videoV9PhUz0lX70: Video = {
  id: 'V9PhUz0lX70',
  channel: channelTrashTaste,
  title: 'TOP OF THE MORNING (ft.  @jacksepticeye ) | Trash Taste #106',
  titleShort: 'TOP OF THE MORNING',
  episodeNumber: 106,
  publishedAt: '2022-07-01T20:00:14Z',
  sections: {
    '00:00:16': "Who's Jacksepticeye",
    '00:04:29': 'Jack is a YouTube boomer',
    '00:07:39': 'Being a caricature of yourself',
    '00:10:19': "Let's talk anime",
    '00:15:04': 'Anime that blew your mind',
    '00:18:46': "Sean's favorite anime",
    '00:24:06': "Sean's trip to Japan",
    '00:27:19': 'Voice acting in video games',
    '00:32:02': 'PCSpecialist',
    '00:32:47': 'Being yourself',
    '00:36:24': 'Doing daily uploads',
    '00:44:08': 'The insane reach of Jacksepticeye',
    '00:51:46': 'Weird fan interactions',
    '00:59:10': 'Takarazuka',
    '01:02:27': 'Weather in Japan',
    '01:05:36': 'Sean speaks Korean',
    '01:14:18': 'Top of the Mornin coffee',
    '01:20:02': 'Moving to Brighton',
    '01:28:00': "Sean's favorite dishes",
    '01:31:04': 'Touring',
    '01:38:32': 'Planning the show',
    '01:42:11': 'ADHD gang unite',
    '01:47:33': 'Tailoring your performance',
    '01:50:13': "When the jokes don't land",
    '01:52:03': 'The Trash Taste Experience',
    '01:55:36': 'The future of YouTube content creation',
    '01:59:17': 'Sean is the ultimate gamer',
    '02:01:43': 'What Sean wants to do now',
  },
  guests: [guestjacksepticeye],
};
channelTrashTaste.videos.push(videoV9PhUz0lX70);
guestjacksepticeye.videos.push(videoV9PhUz0lX70);

const video6IE9eg0HoX8: Video = {
  id: '6IE9eg0HoX8',
  channel: channelTrashTaste,
  title: 'OUR BOY GOT MARRIED | Trash Taste #107',
  titleShort: 'OUR BOY GOT MARRIED',
  episodeNumber: 107,
  publishedAt: '2022-07-08T20:00:01Z',
  sections: {
    '00:00:00': 'Welcome to our new studio',
    '00:01:27': 'Our equipment is lost',
    '00:02:58': 'Garnt had the worst airline experience',
    '00:09:02': "Garnt can't catch a break",
    '00:13:59': 'Running around in circles for your baggage',
    '00:18:43': 'Amazon delivery in the States vs Japan',
    '00:24:59': 'Whining about America',
    '00:27:51': 'First time in LA for a long period of time',
    '00:29:16': 'Joey caught Covid',
    '00:31:04': "You can't walk anywhere in Los Angeles",
    '00:33:37': 'Garnt and Sydney had a sketchy Airbnb',
    '00:36:01': 'Connor wants to live in LA',
    '00:37:23': "Garnt's wedding had the best vibes",
    '00:40:24': 'Meilyne went ham on the open bar',
    '00:45:33': 'Garnt had to sleep on the floor',
    '00:48:27': 'Garnt getting hyped for the wedding',
    '00:53:40': "Sydney walked down to Guts' theme",
    '00:59:17': 'The biggest meme during Grants wedding',
    '01:03:06': 'Recreating the ending of Evangelion',
    '01:06:48': 'Planning the little details',
    '01:10:22': 'Joey was pissed over cultural appropriation',
    '01:11:21': 'Meilyne is straight up unhinged',
    '01:13:36': 'Karen was fast',
    '01:16:28': 'Joey saved his mate',
    '01:18:33': 'Mudan got given work during the wedding',
    '01:20:05': "Garnt's mom went ham",
    '01:21:33': 'Joey has some sick moves',
    '01:23:50': "There's a GoPro with footage from the wedding",
    '01:27:00': 'Joey forgot his shoes',
    '01:29:18': 'Getting to see the Stonehenge',
    '01:31:59': 'The race of the ducks',
    '01:33:59': 'The most British thing to do',
    '01:35:22': 'Bookwalker',
    '01:36:30': "Connor met Garnt's parents",
    '01:38:35': 'British food was better than we remembered',
    '01:39:41': 'Connor streamed with Chris',
    '01:43:07': 'British accents are crazy',
    '01:49:31': 'Getting represented in anime',
    '01:50:58': 'Wales has a branding issue',
    '01:57:42': 'The biggest history buffs',
  },
};
channelTrashTaste.videos.push(video6IE9eg0HoX8);

const videoqmfGOBiE6O0: Video = {
  id: 'qmfGOBiE6O0',
  channel: channelTrashTaste,
  title: 'OFFLINETV CROSSOVER (ft. @LilyPichu) | Trash Taste #108',
  titleShort: 'OFFLINETV CROSSOVER',
  episodeNumber: 108,
  publishedAt: '2022-07-15T20:00:23Z',
  sections: {
    '00:00:00': 'Trash Taste Tour announcement',
    '00:00:50': 'Trash Taste has been taken over again',
    '00:05:15': 'Reading spoilers before watching the show',
    '00:10:11': "It's Morbin time",
    '00:14:41': 'MBTI types',
    '00:19:54': 'What does Lilypichu do',
    '00:21:56': 'How to get into OfflineTV',
    '00:24:49': 'Fan dubbing other peoples stuff',
    '00:25:20': 'How OfflineTV formed',
    '00:26:35': 'Living in a content house with friends',
    '00:27:13': 'Honey',
    '00:28:17': "Lily's earlier collabs with the boys",
    '00:31:32': 'Making voice acting content',
    '00:38:35': 'Going to Japan',
    '00:39:05': 'What Powerpuff girls are we',
    '00:41:41': 'Connor is a child',
    '00:44:15': 'You can walk in Japan',
    '00:48:43': 'Getting useless tech',
    '00:51:40': 'British food is messed up',
    '01:01:19': "Lily's hottest food take",
    '01:04:26': 'Gacha games can suck you dry',
    '01:12:57': 'ExpressVPN',
    '01:13:56': 'Valorant',
    '01:15:29': 'Talking to others in video games',
    '01:16:38': 'Lily likes League',
    '01:20:02': 'People who take arcades seriously',
    '01:22:05': 'Beating your friends in Smash',
    '01:25:37': 'Talking trash',
    '01:28:57': 'The worst characters in League',
    '01:33:17': 'The ultimate gamer is still a human',
    '01:36:57': "Nobody wants to say they're a YouTuber",
    '01:42:29': 'Bloodline',
    '01:43:34': '10 years streaming',
    '01:47:05': "Lily can't stop sucking up content",
    '01:48:56': 'The craze of Wordle',
    '01:51:59': 'The best era of YouTube',
    '01:53:59': 'Doing accents in voice acting',
    '01:58:58': 'Michael Reeves will be on next, spoilers I guess',
    '02:02:23': 'Lily was the best host',
  },
  guests: [guestLilyPichu],
};
channelTrashTaste.videos.push(videoqmfGOBiE6O0);
guestLilyPichu.videos.push(videoqmfGOBiE6O0);

const videoGPDrZwxi338: Video = {
  id: 'GPDrZwxi338',
  channel: channelTrashTaste,
  title: 'Daily Life of a Mad Scientist (ft. @Michael Reeves) | Trash Taste #109',
  titleShort: 'Daily Life of a Mad Scientist',
  episodeNumber: 109,
  publishedAt: '2022-07-22T20:00:03Z',
  sections: {
    '00:00:00': "Let's talk stocks",
    '00:01:07': 'Who is Michael Reeves',
    '00:03:12': 'Michael dropped out of university',
    '00:06:36': 'Schools have too much filler',
    '00:08:56': 'Learning through YouTube videos',
    '00:11:25': 'Where does Michael get ideas for his videos',
    '00:15:25': 'Michael loves electricity',
    '00:18:16': 'Electroboom',
    '00:20:58': 'Creator Clash',
    '00:32:03': 'Connor tried boxing',
    '00:35:32': 'YouTube boxing scene is evolving',
    '00:40:31': 'Gamersupps',
    '00:41:37': 'Jellied eels is some bussin food',
    '00:48:13': 'Michael talks about anime',
    '00:51:56': 'Michael pops a bottle',
    '00:52:40': 'OfflineTV bought a Boston Dynamics dog',
    '00:53:51': "Michael's going to Japan",
    '00:59:24': 'Getting equipment in Japan vs LA',
    '01:03:35': 'Michaels thoughts on living in LA',
    '01:07:09': 'Joey got approached by a person in the subway',
    '01:09:58': "Michael's YouTube beginning",
    '01:14:43': 'Nutting before boxing',
    '01:19:13': 'Connor misses the bidet',
    '01:23:58': 'Who even eats breakfast',
    '01:26:11': 'The Hawaii life',
    '01:29:04': 'The boys want to buy a castle',
    '01:32:17': 'British food',
    '01:33:43': 'Manscaped',
    '01:34:47': 'Asian restaurants',
    '01:37:12': 'Google review ratings',
    '01:38:47': 'LA food',
    '01:41:43': "Natural things aren't always good",
    '01:47:36': 'Everything in Japan is famous',
    '01:56:23': 'Combinis',
    '02:00:46': 'Hotdog stalls',
    '02:02:26': 'Wrapping up',
  },
  guests: [guestMichaelReeves],
};
channelTrashTaste.videos.push(videoGPDrZwxi338);
guestMichaelReeves.videos.push(videoGPDrZwxi338);

const videoI6EKOnqlN48: Video = {
  id: 'I6EKOnqlN48',
  channel: channelTrashTaste,
  title: 'We Spent a Day with @AnthonyPadilla | Trash Taste #110',
  titleShort: 'We Spent a Day with @AnthonyPadilla',
  episodeNumber: 110,
  publishedAt: '2022-07-29T20:00:11Z',
  sections: {
    '00:00:00': 'Trash Taste is going on tour',
    '00:00:37': 'Outtakes',
    '00:01:29': 'The OG of YouTube is here',
    '00:02:00': 'Who is Anthony Padilla',
    '00:04:48': 'How Anthony dives into his interviews',
    '00:10:42': 'I Spent a Day With Pony Players',
    '00:12:39': 'Embarrassed doing things without cameras',
    '00:18:26': 'Being intrusive',
    '00:19:54': 'Why did Anthony start the interview series',
    '00:21:41': 'Scripting interviews',
    '00:25:48': 'Getting people to be comfortable on camera',
    '00:28:22': 'People behind the scenes',
    '00:30:32': 'Having people that depend on the performance of your videos',
    '00:35:38': 'Quitting college for YouTube',
    '00:42:11': 'Getting paid for making videos',
    '00:49:17': 'Being the most subscribed channel on YouTube',
    '00:53:59': 'Mail Time with Smosh',
    '00:59:13': 'Bokksu',
    '01:00:20': 'Defy Media',
    '01:06:42': 'Getting tired of Smosh',
    '01:13:06': 'Smosh the Movie',
    '01:25:26': "Anthony Padilla's adventures",
    '01:28:16': 'Tippsy Sake',
    '01:29:24': 'The golden era of YouTube',
    '01:33:25': 'The secret to staying relevant',
    '01:45:04': 'Constantly learning from newcomers',
    '01:48:34': 'TikTok',
    '01:55:37': 'Getting burnt out',
    '01:57:07': 'How long can YouTube be a career',
    '02:03:43': "What's next for Anthony",
    '02:06:46': "People who enjoy what they're doing",
  },
};
channelTrashTaste.videos.push(videoI6EKOnqlN48);

const videosSLrYZkoArQ: Video = {
  id: 'sSLrYZkoArQ',
  channel: channelTrashTaste,
  title: 'The Struggles of a Professional Voice Actor (ft. @ProZD)  | Trash Taste #111',
  titleShort: 'The Struggles of a Professional Voice Actor (ft. @ProZD) ',
  episodeNumber: 111,
  publishedAt: '2022-08-05T20:00:12Z',
  sections: {
    '00:00:00': 'Intro',
    '00:00:26': 'We found a guest with a lower voice than Connor',
    '00:01:43': 'Visiting Japan',
    '00:03:16': 'Crane games',
    '00:07:52': 'ProZD has good anime taste',
    '00:09:46': "Who's ProZD",
    '00:15:12': 'ProZD has never made a thumbnail',
    '00:19:22': 'Becoming a voice actor',
    '00:23:56': 'Is social media presence important for voice actors',
    '00:28:32': 'Honey',
    '00:29:33': "YouTubers don't get enough respect",
    '00:31:54': 'Working in live-action',
    '00:35:21': 'Working with motion capture',
    '00:37:45': 'The roles we dream of acting in',
    '00:40:51': 'ProZD is a board game fanatic',
    '00:42:22': 'The best board games to play',
    '00:45:31': 'How did the board game hobby start',
    '00:48:17': 'Games that everybody can get into',
    '00:52:47': 'Niche vs obscure anime',
    '00:55:33': 'Haruhi Suzumiya',
    '00:59:52': 'My Anime List vs Anime News Network',
    '01:08:26': 'Comparing the top 10 anime',
    '01:12:09': 'Do you need to watch every episode to form a review',
    '01:21:29': 'Our favorite obscure anime',
    '01:28:56': 'How ProZD met Connor',
    '01:34:05': 'Watching media at double the speed',
    '01:40:13': 'Skipping cutscenes',
    '01:51:59': 'Watching the show you voice act in',
    '01:56:54': 'Matching lip flaps',
    '01:58:52': 'Reading the tutorial for a game',
  },
  guests: [guestProZD],
};
channelTrashTaste.videos.push(videosSLrYZkoArQ);
guestProZD.videos.push(videosSLrYZkoArQ);

const videoUZEK5f6ejW8: Video = {
  id: 'UZEK5f6ejW8',
  channel: channelTrashTaste,
  title: 'THE BOIZ ARE GOING ON TOUR! | Trash Taste #112',
  titleShort: 'THE BOIZ ARE GOING ON TOUR!',
  episodeNumber: 112,
  publishedAt: '2022-08-12T20:00:08Z',
  sections: {
    '00:00:00': "We're back in Japan",
    '00:01:14': 'Talking about the tour',
    '00:09:10': "We're getting a tour bus",
    '00:14:08': 'Who the show will be for',
    '00:21:12': 'ExpressVPN',
    '00:22:21': "We've been travelling a lot",
    '00:25:12': 'The flight from LA to Miami',
    '00:29:38': 'How to sleep on a plane',
    '00:39:29': 'Joey and Connor went to Miami',
    '00:42:17': "We couldn't stop talking to each other",
    '00:46:47': 'Being motivated to do more content',
    '00:48:43': 'How we enjoyed the LA experience',
    '00:50:26': 'The worst meal we had in LA',
    '01:04:56': "You can't book tables in LA",
    '01:07:31': 'HiDive',
    '01:08:50': 'We went to Australia',
    '01:13:01': 'How do koalas still exist',
    '01:15:58': 'Being surprised by ibises',
    '01:18:34': 'Connor went to medieval times',
    '01:22:56': 'Joey paid 18 dollars for a can of beer',
    '01:23:37': 'Garnt told the bouncer to look at his Wikipedia page',
    '01:26:55': 'Australian sarcasm',
    '01:31:12': 'Everyone likes chocolate biscuits',
    '01:33:13': 'Chocolate flavored stuff makes Connor sick',
    '01:40:41': 'Sorbet',
    '01:42:23': 'The orange debate',
    '01:50:21': 'The worst fruit',
    '01:54:06': 'You can make more room for dessert',
    '01:56:49': 'Gaslighting Connor',
  },
};
channelTrashTaste.videos.push(videoUZEK5f6ejW8);

const videoZbnnHRbqwB0: Video = {
  id: 'ZbnnHRbqwB0',
  channel: channelTrashTaste,
  title: 'Sitting Down with a Professional Cosplayer (ft. @Jessica Nigri) | Trash Taste #113',
  titleShort: 'Sitting Down with a Professional Cosplayer',
  episodeNumber: 113,
  publishedAt: '2022-08-19T20:00:15Z',
  sections: {
    '00:00:00': 'The Cosplay Goddess is here',
    '00:02:14': 'How Jessica got her start with cosplay',
    '00:03:28': "Let's talk drinks",
    '00:06:35': 'Jessica used to work in a vineyard',
    '00:08:16': 'Getting famous overnight',
    '00:10:51': 'Entering Lollipop Chainsaw cosplay competition',
    '00:14:27': 'The cosplay scene when Jessica started',
    '00:17:40': "Jessica's mother taught her how to sew",
    '00:18:45': 'The most difficult cosplay',
    '00:19:35': 'Deciding what to cosplay',
    '00:21:06': 'Voice acting Super Sonico',
    '00:25:29': 'Going to therapy',
    '00:27:12': 'The process of making cosplay',
    '00:28:56': 'Apari',
    '00:30:00': 'Making the Ironmouse cosplay',
    '00:32:39': 'Joey went to a photoshoot with Jessica',
    '00:36:20': 'Aki almost drowned',
    '00:40:11': 'Connor tried cosplaying himself',
    '00:42:49': 'Posing is difficult',
    '00:46:05': 'Jessica brought us hats',
    '00:48:32': "Conventions didn't use to have much rules",
    '00:53:25': 'Using conventions as an excuse to travel',
    '00:55:40': 'Going to 30 conventions in a single year',
    '00:56:42': 'Italian vs American pizza',
    '00:58:15': 'Bokksu',
    '00:59:26': 'How many conventions has Jessica been to',
    '01:04:50': 'Jessica had a documentary done about her',
    '01:10:46': 'Garnt left mid stream and debated whether to return',
    '01:13:27': 'Jessica wants to make a hobbit Airbnb',
    '01:15:18': 'Our busiest year yet',
    '01:19:11': 'Having different hobbies',
    '01:22:26': 'TikTok has changed everything',
    '01:26:14': "Jessica's insane convention stories",
    '01:28:24': "A guy bought Jessica's address off the internet",
    '01:32:40': "Amouranth's story",
    '01:33:48': 'We need bodyguards',
    '01:36:16': 'Tippsy',
    '01:37:20': 'We had to get our own security for AX',
    '01:39:47': "Conventions don't understand the power of influencers",
    '01:41:35': "We're going on a tour",
    '01:44:17': 'Trash Taste gets a dog',
    '01:50:21': 'Sydney wanted to feed homeless dogs',
    '01:55:18': 'Joey got cat allergies after his second cat',
    '01:59:19': "Garnt and Sydney got some love from their neighbor's cat",
    '02:00:46': 'Joey tried to pet a kangaroo',
    '02:03:14': 'CGI films',
    '02:06:01': 'Come back next week',
  },
  guests: [guestJessicaNigri],
};
channelTrashTaste.videos.push(videoZbnnHRbqwB0);
guestJessicaNigri.videos.push(videoZbnnHRbqwB0);

const videoTajZ3_uqlbU: Video = {
  id: 'TajZ3_uqlbU',
  channel: channelTrashTaste,
  title: 'Sitting Down with YouTube’s Top Streamer (ft. @Ludwig) | Trash Taste #114',
  titleShort: 'Sitting Down with YouTube’s Top Streamer',
  episodeNumber: 114,
  publishedAt: '2022-08-26T20:00:08Z',
  sections: {
    '00:00:00': 'Test tour',
    '00:00:27': 'Who is Ludwig',
    '00:03:47': 'Will YouTube win the streaming wars',
    '00:05:44': 'Reaction videos',
    '00:07:24': 'The streaming meta',
    '00:09:34': 'Chess',
    '00:12:05': 'Connor kept beating his dad in chess',
    '00:13:26': "YouTubers who've fallen off",
    '00:18:03': "Ludwig's 5 year plan",
    '00:20:44': 'The Subathon',
    '00:25:36': 'Streaming events',
    '00:27:46': 'ExpressVPN',
    '00:28:54': 'Ludwig has tons of employees',
    '00:31:08': 'Why stream on Twitch and not on YouTube',
    '00:32:33': 'Going from Twitch to YouTube',
    '00:33:34': "The CEO of YouTube went on Ludwig's podcast",
    '00:36:55': 'Preparing for the podcast with Susan',
    '00:38:54': 'Ludwig shows his tattoo',
    '00:42:03': "Ludwig hasn't visited Japan",
    '00:45:14': 'The heat in Japan is unbearable',
    '00:46:41': "What is Ludwig's home town known for",
    '00:47:32': "Ludwig isn't even the most popular YouTuber of his school",
    '00:49:10': 'Garnt talks about Brighton',
    '00:50:14': "Connor is angry he wasn't invited to a documentary about Welsh YouTubers",
    '00:53:00': 'Ludwig went to the UK',
    '00:56:27': 'PCSpecialist',
    '00:57:27': "Kettles aren't a joke",
    '00:59:16': 'French people',
    '01:01:12': 'English breakfast',
    '01:03:46': 'North vs South England',
    '01:08:31': 'Food in different countries',
    '01:14:14': 'Beer',
    '01:17:30': 'Having blood from different nationalities',
    '01:19:48': 'Travelling with parents',
    '01:22:35': 'Smash',
    '01:27:37': 'Working at Apple',
    '01:31:09': 'How Ludwig became a weeb',
    '01:33:44': 'Finally talking about anime',
    '01:50:27': 'Manscaped',
    '01:51:35': 'Even more anime',
    '01:55:07': 'How much do others opinions change your thoughts on anime',
    '02:00:45': 'Gordon Ramsay ruined Mr. Beasts video',
    '02:02:42': 'Adult cartoons',
    '02:06:40': 'How to be a productivity machine',
    '02:09:29': 'Ludwig had a weird interaction with QTCinderella',
    '02:12:50': 'Absolutely family friendly content',
    '02:14:59': 'Anime and Manga',
    '02:20:30': 'Bye',
  },
  guests: [guestLudwig],
};
channelTrashTaste.videos.push(videoTajZ3_uqlbU);
guestLudwig.videos.push(videoTajZ3_uqlbU);

const video4o5TXDOjeD8: Video = {
  id: '4o5TXDOjeD8',
  channel: channelTrashTaste,
  title: 'We Are The WORST Movie Reviewers | Trash Taste #115',
  titleShort: 'We Are The WORST Movie Reviewers',
  episodeNumber: 115,
  publishedAt: '2022-09-02T20:00:01Z',
  sections: {
    '00:00:00': 'We are soft',
    '00:00:51': 'Garnt is playing with waifus',
    '00:02:02': 'Reacclimating to Japan',
    '00:05:25': 'Wearing shorts in public',
    '00:09:33': 'Joey has a hole in his boxers',
    '00:14:06': 'How Garnt knows when to wash his clothes',
    '00:17:53': "Garnt doesn't like housework",
    '00:22:58': 'Ironing clothes',
    '00:27:46': 'Honey',
    '00:28:48': 'Owning a dishwasher',
    '00:37:41': 'Connor is sad about a café',
    '00:39:36': 'Uber Eats in the States is goated',
    '00:42:36': 'Customizing your order in Uber Eats',
    '00:46:06': 'What type of chocolate is our favorite',
    '00:55:00': 'Thor Love and Thunder',
    '00:58:16': 'Top Gun',
    '00:58:45': 'Batman',
    '01:03:41': 'Sonic 2',
    '01:06:04': 'Marvel films',
    '01:08:36': 'End of the world films',
    '01:14:18': 'Tom Cruise does some insane stunts',
    '01:20:12': 'Everything Everywhere All At Once',
    '01:23:41': 'The new Matrix',
    '01:26:00': 'John Wick',
    '01:26:53': 'Having proper representation in a movie',
    '01:32:38': 'The meme of Breaking Bad',
    '01:34:44': 'The Boys',
    '01:37:34': 'Invincible',
    '01:38:41': 'SpongeBob Squarepants',
    '01:43:33': 'Too many subscription services',
    '01:47:13': 'Pay a monthly fee to heat your seats',
    '01:53:08': "We're a part of the problem",
  },
};
channelTrashTaste.videos.push(video4o5TXDOjeD8);

const videojOHqQG2MbJs: Video = {
  id: 'jOHqQG2MbJs',
  channel: channelTrashTaste,
  title: 'Sitting Down with a Top Female Streamer (ft. @Pokimane) | Trash Taste #116',
  titleShort: 'Sitting Down with a Top Female Streamer',
  episodeNumber: 116,
  publishedAt: '2022-09-09T20:00:20Z',
  sections: {
    '00:00:00': 'Trash Taste Tour!',
    '00:00:27': 'How to call Pokimane',
    '00:03:20': 'The American accent',
    '00:11:18': "How it's like living in LA",
    '00:13:43': 'Living in content creator houses',
    '00:17:16': 'Twitch has changed dramatically',
    '00:19:36': 'Dealing with toxic online culture',
    '00:25:05': 'Being the top female streamer',
    '00:30:11': 'ExpressVPN',
    '00:31:15': 'Pushing the boyfriend/girlfriend experience',
    '00:36:15': 'The simp movement',
    '00:38:56': 'People who push the envelope',
    '00:42:03': 'Profiting from problems',
    '00:45:21': 'The crazy articles written about Pokimane',
    '00:51:59': 'The price of having fame',
    '00:57:28': "Pokimane's apology videos",
    '01:00:10': 'Taking down videos',
    '01:04:12': 'Being mad for the sake of being mad',
    '01:05:21': 'Among Us has changed us',
    '01:06:51': 'Fortnite',
    '01:08:12': "Connor doesn't like Valorant",
    '01:09:58': 'The next Twitch meta',
    '01:14:07': 'Adding narrative to your stream',
    '01:19:44': 'IRL streams',
    '01:21:26': 'Pokimane went to Korea',
    '01:25:29': 'Filming in public spaces',
    '01:27:17': 'Would Pokimane live in Korea',
    '01:28:18': "Harry's",
    '01:29:23': 'Streaming vs making YouTube videos',
    '01:30:55': 'Streaming in Japan',
    '01:32:40': 'Arcades',
    '01:35:56': 'Connor is too competitive',
    '01:40:56': 'Recent rumors about Pokimane',
    '01:43:31': 'The Pokimane vtuber controversy',
    '01:47:53': 'Watching TV shows on stream',
    '01:57:00': 'React content',
    '01:59:16': "Pokimane's favorite anime",
    '02:08:09': 'Insane reactions',
    '02:12:05': 'The green circle',
  },
  guests: [guestPokimane],
};
channelTrashTaste.videos.push(videojOHqQG2MbJs);
guestPokimane.videos.push(videojOHqQG2MbJs);

const videobYIb_YaaCMY: Video = {
  id: 'bYIb-YaaCMY',
  channel: channelTrashTaste,
  title: 'Cycling is HARD | Trash Taste #117',
  titleShort: 'Cycling is HARD',
  episodeNumber: 117,
  publishedAt: '2022-09-16T20:00:09Z',
  sections: {
    '00:00:00': 'Plushies',
    '00:00:16': 'How does one work',
    '00:02:39': 'Garnt finally has a schedule',
    '00:06:09': 'Connor did a charity cycleathon',
    '00:13:16': 'Managing the stream while cycling',
    '00:17:23': 'Choosing a bike',
    '00:20:38': 'Making cycling entertaining',
    '00:24:12': 'Prepping for the cycleathon',
    '00:28:17': 'Having chat with you',
    '00:31:54': 'Cycling is scary',
    '00:36:45': 'Cycling makes you fit',
    '00:38:51': 'Honkai Impact 3rd',
    '00:39:58': 'Accommodation while cycling',
    '00:43:53': 'Connors bike recommendation',
    '00:52:55': 'Weather while cycling',
    '00:55:59': 'Doing even crazier streams',
    '00:58:54': 'Arguing with Chris',
    '01:05:37': 'Cycleathon overall',
    '01:09:40': 'Big streams in the future',
    '01:15:32': 'Google maps is a liar',
    '01:19:48': 'Bokksu',
    '01:21:34': 'Sigur Rós',
    '01:30:02': 'Films made for the cinema',
    '01:33:19': 'TV default settings',
    '01:41:26': 'Live shows vs recorded shows',
    '01:47:51': 'Sitcoms',
    '01:53:01': 'Musicals',
    '01:58:16': 'Rakugo',
    '02:04:35': "That's all folks",
  },
};
channelTrashTaste.videos.push(videobYIb_YaaCMY);

const video4byDAin3yyo: Video = {
  id: '4byDAin3yyo',
  channel: channelTrashTaste,
  title: 'We are the Garbage Taste Podcast (ft. @William Osman) | Trash Taste #118',
  titleShort: 'We are the Garbage Taste Podcast',
  episodeNumber: 118,
  publishedAt: '2022-09-23T20:00:01Z',
  sections: {
    '00:00:00': 'Garbage Flavor',
    '00:01:57': "We don't talk about anime",
    '00:03:08': 'The Trash Taste branding',
    '00:06:13': "William's favorite anime",
    '00:17:03': 'Easiest way to get people into anime',
    '00:23:54': 'The first anime William watched',
    '00:25:33': 'Good sci-fi anime',
    '00:29:30': 'William is a mad scientist',
    '00:33:48': 'Getting an engineering degree',
    '00:42:14': 'Buying books for university',
    '00:49:03': 'Helping Mr. Beast on the Squid Game video',
    '00:58:36': 'Everything went wrong',
    '01:04:10': 'Would William do it again',
    '01:07:51': 'Why William posts so rarely',
    '01:13:35': 'PCSpecialist',
    '01:14:34': 'Working with radiation',
    '01:19:05': 'Safety is important',
    '01:21:22': "Who's the most dangerous YouTuber",
    '01:26:32': 'Has William been scared for his life',
    '01:30:39': 'FPS Russia',
    '01:34:01': 'MythBusters',
    '01:35:55': 'Safety precautions',
    '01:37:41': 'Having your house burn down',
    '01:45:52': 'How much do our parents watch our videos',
    '01:50:40': "William loves Japan because it's like Disney Land",
    '01:54:26': 'Australia is white trash America',
    '01:57:00': 'Rules are weird sometimes',
    '01:59:40': 'Connor got stopped by the TSA',
    '02:04:45': 'Border Patrol is intense',
    '02:09:31': 'Drinking at the airport',
    '02:11:16': 'Connor had someone smoke in his plane',
    '02:15:12': 'The absolute state of people on a plane',
    '02:19:46': 'Shoutout to turtles',
  },
  guests: [guestWilliamOsman],
};
channelTrashTaste.videos.push(video4byDAin3yyo);
guestWilliamOsman.videos.push(video4byDAin3yyo);

const videooMgQoMNXdn8: Video = {
  id: 'oMgQoMNXdn8',
  channel: channelTrashTaste,
  title: 'We HATE Celebrities | Trash Taste #119',
  titleShort: 'We HATE Celebrities',
  episodeNumber: 119,
  publishedAt: '2022-09-30T20:00:26Z',
  sections: {
    '00:00:00': 'The prequels',
    '00:06:10': 'The OG trilogy',
    '00:09:14': 'The new trilogy',
    '00:09:55': 'Harrison Ford',
    '00:12:40': 'Disney',
    '00:16:10': 'Animation to live action',
    '00:22:41': 'Meeting a celebrity in the wild',
    '00:30:31': 'Honey',
    '00:31:45': 'Meeting the creator of Death Note',
    '00:34:00': 'Traditional vs internet celebrities',
    '00:36:02': 'We got smuggled into Vidcon',
    '00:43:07': 'Vidcon vultures',
    '00:47:31': 'Social platform reach',
    '00:52:00': 'Short content revenue',
    '01:02:53': 'VR as the future',
    '01:05:25': 'DVD discs',
    '01:09:25': 'Movie related games',
    '01:21:12': 'Movies',
    '01:24:04': 'Problem with show binging',
    '01:29:48': 'Documentary',
    '01:41:35': 'TV after midnight',
    '01:44:30': 'Niche nature documentaries',
    '01:48:09': 'M.E.T.A',
  },
};
channelTrashTaste.videos.push(videooMgQoMNXdn8);

const videoX0ZvX_Sm0cI: Video = {
  id: 'X0ZvX_Sm0cI',
  channel: channelTrashTaste,
  title: 'The Most Dangerous Man on YouTube (ft. @NileRed) | Trash Taste #120',
  titleShort: 'The Most Dangerous Man on YouTube',
  episodeNumber: 120,
  publishedAt: '2022-10-07T20:00:17Z',
  sections: {
    '00:00:00': 'Nile Red does the thing',
    '00:00:48': 'YouTubers who Connor is scared to be in prison with',
    '00:01:56': 'Nigel and pee',
    '00:06:00': 'Tolerant neighbors',
    '00:07:00': 'Everything started with fire',
    '00:10:45': 'Having a smoke bomb go off in your house',
    '00:12:54': "The one time Nigel's mom got angry",
    '00:15:40': 'Almost causing a wildfire',
    '00:21:58': 'Getting scared of explosives',
    '00:23:34': 'Almost losing your hand',
    '00:26:06': 'Taking your blowtorch to school',
    '00:28:58': 'Making flash powder',
    '00:32:01': 'ExpressVPN',
    '00:33:01': 'How much experience does Nigel have',
    '00:38:50': 'How safe is everything actually',
    '00:42:07': 'Getting acid on your arm while filming',
    '00:43:31': 'Lube',
    '00:47:01': 'Being on a watch list',
    '00:48:44': 'Calling the government about using uranium',
    '00:53:48': 'Chemical leak',
    '00:55:09': "Having certification doesn't matter",
    '00:57:07': 'Bromium',
    '01:00:17': 'Making meth',
    '01:05:00': 'Being refused to sell chemicals',
    '01:07:29': 'The differences between forms of chemistry',
    '01:10:19': "Nigel didn't really like Chemistry in school",
    '01:13:44': 'Making pure capsaicin',
    '01:19:21': 'How accurate is Breaking Bad',
    '01:23:37': 'Getting rid of a body',
    '01:28:04': 'Connor is looking for the perfect strat',
    '01:33:29': 'Being checked up on by the government',
    '01:43:00': 'Being impersonated',
    '01:50:05': 'Copyrighting your voice',
    '01:54:00': 'Why Nile Red videos can take months to edit',
    '01:58:21': 'Listening to your own voice messed him up',
    '02:13:34': 'Greg',
    '02:15:27': 'People who blew up stuff when they were little',
  },
  guests: [guestNileRed],
};
channelTrashTaste.videos.push(videoX0ZvX_Sm0cI);
guestNileRed.videos.push(videoX0ZvX_Sm0cI);

const videoUUnX3gdpTSw: Video = {
  id: 'UUnX3gdpTSw',
  channel: channelTrashTaste,
  title: 'We Are NOT Alphas | Trash Taste #121',
  titleShort: 'We Are NOT Alphas',
  episodeNumber: 121,
  publishedAt: '2022-10-14T20:00:17Z',
  sections: {
    '00:00:00': 'Why are we still getting demonetized',
    '00:00:50': 'Japanese restaurants panic when you have a normal portion size',
    '00:08:30': 'Coffee is usually brought after the meal',
    '00:12:29': "Domino's Pizza didn't succeed in Italy",
    '00:15:35': 'Did England invent football',
    '00:17:28': 'The oldest sport in the world',
    '00:19:48': 'Rise up fellow herbivores',
    '00:23:09': 'GamerSupps',
    '00:24:21': "Listening to people you don't agree with",
    '00:26:55': 'Haka',
    '00:30:35': 'Wales has some interesting traditions',
    '00:35:07': 'Garnt has started to appreciate Thai culture',
    '00:37:12': "What's your bloodline",
    '00:43:23': 'Feeding children your culture',
    '00:45:40': 'Would Connor teach Welsh to his child',
    '00:50:04': 'Who understands culture better',
    '00:53:35': 'Accent shifting',
    '00:57:58': 'PC Specialist',
    '00:59:06': 'Herbivores',
    '01:00:00': 'Vegetarian culture in Japan',
    '01:06:57': 'Yuzu is too powerful',
    '01:09:55': 'The worst citrus fruit',
    '01:13:26': 'Sakura flavor',
    '01:14:51': 'Every sakura tree is a clone of each other',
    '01:17:22': 'Weddings in Japan dropped because of vtubers',
    '01:19:18': 'How can japan fix its baby problems',
    '01:21:23': 'Love is Blind',
    '01:26:57': 'Being too shy to take off your mask',
    '01:33:32': "Japan's mask culture",
    '01:36:30': "Japan's economy is having an oopsie",
    '01:40:29': "Japan is still announcing it's daily number of cases",
    '01:42:28': 'The public consensus on talking about the pandemic',
    '01:49:28': 'Just tough it out',
    '01:51:50': 'Our fellow alpha herbivores',
  },
};
channelTrashTaste.videos.push(videoUUnX3gdpTSw);

export const channelTrashTasteAfterDark: Channel = {
  id: 'UCKaN3mt53ATqRjzalb2ALFQ',
  name: 'Trash Taste After Dark',
  videos: [],
};

// Channel Trash Taste After Dark Videos
const videognGm0hcdTDA: Video = {
  id: 'gnGm0hcdTDA',
  channel: channelTrashTasteAfterDark,
  title: 'Is The Welsh Flag The Best? | Trash Taste Stream #1',
  titleShort: 'Is The Welsh Flag The Best?',
  episodeNumber: 1,
  publishedAt: '2021-01-28T10:00:11Z',
  sections: {
    '00:00:00': 'Intro',
    '00:09:16': 'Speedrunning',
    '00:11:41': 'Games During Free Time',
    '00:13:20': 'Why Twitch instead of YouTube',
    '00:14:09': 'How Topics Are Brought Up',
    '00:15:43': 'League of Legends',
    '00:17:33': 'Connor Toxic Gamer',
    '00:18:33': 'Casual Games and Being Challenged',
    '00:24:52': 'Live Podcasts?',
    '00:25:18': 'PewDiePie Vtuber',
    '00:25:50': 'Composers and Artists',
    '00:26:31': 'Dream Guest',
    '00:27:53': 'Kevin Penkin',
    '00:28:27': 'PO Box',
    '00:30:01': 'Pranks',
    '00:30:37': 'Talking About Streams and Ideas',
    '00:31:08': 'Intern',
    '00:31:53': 'Behind The Scenes',
    '00:32:45': 'Fast Food',
    '00:34:20': 'Attack on Titan',
    '00:36:26': 'Trash Taste Specials',
    '00:38:30': 'Mario Party',
    '00:39:24': 'Coomers',
    '00:42:48': 'Cyberpunk 2077',
    '00:48:03': 'Cyberpunk Gay Reddit Thread',
    '00:50:20': 'Warm Beer',
    '00:51:32': 'Cyberpunk Gay Reddit Thread (continued)',
    '00:54:49': 'Anime or Manga Recommendation Segment?',
    '00:55:35': 'Anime Winter 2021',
    '01:01:35': 'Connor Normie',
    '01:03:49': 'Horimiya and Camera Change',
    '01:04:52': 'Being Friends with Yourself',
    '01:06:10': 'Best Beer',
    '01:07:00': 'Germany',
    '01:08:20': 'Best Beer (continued)',
    '01:10:05': 'Not Friends?',
    '01:11:39': 'YouTube House',
    '01:14:00': 'Relationships',
    '01:18:22': 'Garnt and Sydney',
    '01:20:08': 'Relationships (continued)',
    '01:23:10': 'Age',
    '01:25:08': 'Chris Broad',
    '01:25:34': 'Prince Andrew',
    '01:27:30': 'Royal Family',
    '01:31:28': 'National Anthem',
    '01:34:29': 'Patriotic',
    '01:35:22': 'Welsh Flag',
    '01:37:23': 'Best Flag?',
    '01:47:42': 'Primary Colors',
    '01:49:22': 'Public Service Announcement',
    '01:50:02': 'Best Flag? (continued)',
    '01:50:49': 'Outro',
  },
  tags: [
    'Streams',
    'Twitch',
    'Flag',
    'Episode 1',
    'Episode One',
    '#1',
    'One',
    'Welsh',
    'Welsh Flag',
    'Trash Taste Streams',
  ],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videognGm0hcdTDA);

const videofBCwbFLjwZk: Video = {
  id: 'fBCwbFLjwZk',
  channel: channelTrashTasteAfterDark,
  title: 'Reacting to The Anime Awards | Trash Taste Stream #2',
  titleShort: 'Reacting to The Anime Awards',
  episodeNumber: 2,
  publishedAt: '2021-02-20T10:42:11Z',
  tags: ['Streams', 'Twitch'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videofBCwbFLjwZk);

const videowCddNmGs8oo: Video = {
  id: 'wCddNmGs8oo',
  channel: channelTrashTasteAfterDark,
  title: "We're getting a mascot? | Trash Taste Stream #3",
  titleShort: "We're getting a mascot?",
  episodeNumber: 3,
  publishedAt: '2021-03-16T21:01:12Z',
  sections: {
    '00:00': 'Hype intro',
    '00:55': 'Wet stuff',
    '02:13': "We're streaming regularly now",
    '04:55': 'Our favorite speedruns to watch',
    '06:53': 'The new Eva movie',
    '13:23': 'Must go-to restaurants in Tokyo',
    '14:10': 'Trash Taste mascot',
    '15:27': 'Has Connor started One Piece?',
    '15:52': 'Favorite kanji',
    '17:11': 'Nier:Automata',
    '20:07': 'Devil is a Part-Timer S2',
    '21:57': 'Devil May Cry',
    '23:33': 'New Shonen Jump manga titles',
    '27:50': 'Having remote guests',
    '30:12': 'Nagatoro',
    '31:57': 'Kaiju no 8 vs Pacific Rim',
    '32:50': 'Godzilla',
    '37:06': 'Apex Legends',
    '41:37': 'Games that are movies',
    '43:22': 'The perfect game for Garnt',
    '44:17': 'Gatcha',
    '52:11': 'Auto-play in games',
    '59:10': 'How guests get on TT',
    '01:00:25': 'Getting into Apex',
    '01:03:03': 'Cancelling Maid Dragon',
    '01:03:53': 'Survival adventure Games',
    '01:07:16': 'Video games',
    '01:08:29': 'Tyler1',
    '01:09:32': 'Getting into a game',
    '01:11:03': 'Dead by Daylight',
    '01:12:39': 'Monster Hunter',
    '01:13:32': 'Vibing',
    '01:14:57': 'Shouting is fun',
    '01:16:26': 'Redo of a Healer',
    '01:21:53': 'Re:Zero S2P2',
    '01:22:26': 'Wonder Egg Priority',
    '01:22:58': 'Anime of the year',
    '01:24:54': 'Demon Slayer movie',
    '01:25:30': 'Anime movies',
    '01:26:44': 'Trash Taste in a nutshell',
    '01:32:14': 'The Burger King tweet',
    '01:36:16': 'Plant based burgers',
    '01:37:50': 'Subway',
    '01:41:23': 'The refill culture',
    '01:42:04': 'Soda',
    '01:43:15': 'Food labels',
    '01:46:14': 'The metric system',
    '01:48:02': 'Different measuring systems',
    '01:53:02': 'Pints are the best unit',
    '01:56:26': 'Beer',
    '02:04:12': 'Outro',
  },
  tags: ['Streams', 'Twitch', 'mascot', 'evangelion', 'apex'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videowCddNmGs8oo);

const videoYEPlagGqXm4: Video = {
  id: 'YEPlagGqXm4',
  channel: channelTrashTasteAfterDark,
  title: 'Plans With Our New Studio? | Trash Taste Stream #4',
  titleShort: 'Plans With Our New Studio?',
  episodeNumber: 4,
  publishedAt: '2021-04-27T19:52:24Z',
  sections: {
    '00:00:00': 'Alexa, do the intro',
    '00:01:01': 'Wine',
    '00:03:16': 'Destroyed figurines',
    '00:04:04': "Connor's meme picture",
    '00:04:52': 'Joey pervs on a figurine',
    '00:05:30': 'Trash Taste Anniversary',
    '00:10:41': "Connor can't have his drip",
    '00:11:24': 'The vtuber rabbithole',
    '00:13:11': 'Streaming is intense',
    '00:15:04': "We're becoming hot tub streamers",
    '00:19:03': 'Australian things',
    '00:21:42': 'We have a new studio',
    '00:22:31': 'Ladybeard drained us',
    '00:24:50': 'Wrestling with Ladybeard',
    '00:28:00': 'Preparing drinks',
    '00:32:34': 'Dab break',
    '00:33:21': 'Cleaning up our mess',
    '00:35:26': 'Talking about anime?',
    '00:38:55': "Don't Toy With Me, Miss Nagatoro",
    '00:42:06': 'Uzaki-chan and Umaru-chan',
    '00:44:18': 'The way of the house husband',
    '00:47:11': 'Cromartie High School',
    '00:48:00': 'J.C. Staff',
    '00:52:13': 'Even more anime talk',
    '00:54:54': "Words that we've never heard of",
    '00:58:12': 'Joey is smart',
    '01:01:15': 'What we do with spare rubber bands',
    '01:03:25': 'Taxi vs Train in Tokyo',
    '01:05:09': 'Connor blows off Garnt',
    '01:09:42': 'Taking the taxi in Japan',
    '01:12:03': 'Vivy',
    '01:14:54': 'Indian curry x Zorball',
    '01:19:04': 'Joey shows his drip',
    '01:19:34': 'Garnt speaks American',
    '01:20:20': 'Are we going to play Apex',
    '01:23:40': "We're doing a special stream soon",
    '01:24:31': 'The hot tub streamer is still better than us',
    '01:25:25': 'Peer pressure',
    '01:27:23': 'Will Connor play Fate',
    '01:28:12': 'Our thoughts on Star Wars',
    '01:29:12': 'Our top 3 anime leaders',
    '01:31:10': 'Apex vs League',
    '01:31:48': 'Heroes of the Storm',
    '01:32:29': 'Monster Hunter Rise',
    '01:33:30': 'Plans with our new studio',
    '01:36:15': 'Future specials',
    '01:38:54': 'Tenga time',
    '01:40:14': 'The future of Tengas',
    '01:41:05': 'Philips Hue',
    '01:41:53': 'Dungeons and Dragons',
    '01:45:52': 'Podcast length',
    '01:48:50': "Justice League Snyder's cut",
    '01:50:03': 'Superhero films',
    '01:51:58': 'How long should our podcasts be',
    '01:53:15': 'Avengers',
    '01:55:19': 'Wrapping it up',
  },
  tags: ['Streams', 'Twitch', 'hot tub', 'studio', 'new studio', 'moving', 'anniversary', 'awards'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videoYEPlagGqXm4);

const videoXqsMgrupF2E: Video = {
  id: 'XqsMgrupF2E',
  channel: channelTrashTasteAfterDark,
  title: 'Which American Flag is the Best? | Trash Taste Stream #5',
  titleShort: 'Which American Flag is the Best?',
  episodeNumber: 5,
  publishedAt: '2021-05-26T20:18:47Z',
  sections: {
    '00:00:00': 'Gamer intro',
    '00:01:24': 'The final stream in this studio',
    '00:03:43': 'Twitch lingo',
    '00:04:59': 'Snakes',
    '00:06:30': 'Garnt went clubbing',
    '00:08:21': 'This is a livestream',
    '00:11:03': 'Tiermaker',
    '00:15:06': 'PC building competition',
    '00:17:22': 'Rhode Island',
    '00:19:43': 'Idaho',
    '00:21:43': 'Maine',
    '00:25:16': 'North Dakota',
    '00:28:05': 'Connecticut',
    '00:32:13': 'Alaska',
    '00:34:04': 'Wyoming',
    '00:37:23': 'Virginia',
    '00:46:50': 'Alabama and Florida',
    '00:50:16': 'Arizona',
    '00:51:56': 'Arkansas',
    '00:54:18': 'Delaware',
    '00:56:29': 'Indiana',
    '00:57:38': 'Iowa',
    '00:59:00': 'Maryland',
    '01:02:59': 'Michigan',
    '01:06:38': 'Montana',
    '01:07:45': 'New Hampshire',
    '01:10:02': 'New Mexico',
    '01:11:16': 'Oklahoma',
    '01:13:04': 'Pennsylvania',
    '01:14:41': 'South Carolina',
    '01:17:44': 'Texas',
    '01:20:27': 'Wisconsin',
    '01:21:32': 'Colorado',
    '01:22:47': 'Louisiana',
    '01:25:22': 'Minnesota',
    '01:26:09': 'Absolute State Flags',
    '01:35:42': 'Ohio',
    '01:38:41': 'Speedrunning the rest of the flags',
    '01:44:47': 'We finished the tier list',
    '01:48:37': 'Fondest memory of this studio',
  },
  tags: ['Streams', 'Twitch', 'tier list', 'tiermaker', 'america', 'flags'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videoXqsMgrupF2E);

const videoWLyaWlhCcew: Video = {
  id: 'WLyaWlhCcew',
  channel: channelTrashTasteAfterDark,
  title: 'We Moved.',
  publishedAt: '2021-07-03T20:00:04Z',
  tags: ['Streams', 'Twitch'],
};
channelTrashTasteAfterDark.videos.push(videoWLyaWlhCcew);

const video9In0SciVBNc: Video = {
  id: '9In0SciVBNc',
  channel: channelTrashTasteAfterDark,
  title: 'Our First Figurine In The New Studio | Trash Taste Stream #6',
  titleShort: 'Our First Figurine In The New Studio',
  episodeNumber: 6,
  publishedAt: '2021-08-05T20:56:23Z',
  sections: {
    '00:00:00': 'Our new set',
    '00:03:27': 'Building the Attack on Titan statue',
    '00:17:20': 'Answering questions',
    '00:25:36': 'Trash Taste guests',
    '00:27:59': 'We finished the statue',
    '00:30:44': 'Fixing audio issues',
    '00:33:36': "Connor's PC got manhandled",
    '00:36:06': 'Gushing over the statue',
    '00:38:18': 'Anime x fashion collabs',
    '00:41:52': 'Getting a new phone',
    '00:47:00': 'Going back home',
    '00:51:51': 'Existential crisis',
    '00:53:54': 'Can YouTube be a stable job',
    '01:02:36': 'Food price in Japan',
    '01:06:43': 'Trash Taste specials',
    '01:13:42': 'Chess tournament',
    '01:21:45': 'Ancestry & 23andMe',
    '01:25:06': 'Cousins',
  },
  tags: [
    'Streams',
    'Twitch',
    'after dark',
    'attack on titan',
    'new studio',
    'new season',
    'season 2',
    'new set',
  ],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(video9In0SciVBNc);

const videoY1FLfLIcfS4: Video = {
  id: 'Y1FLfLIcfS4',
  channel: channelTrashTasteAfterDark,
  title: 'Trash Taste Office Tour!',
  publishedAt: '2021-08-11T20:00:16Z',
  tags: ['Streams', 'Twitch'],
};
channelTrashTasteAfterDark.videos.push(videoY1FLfLIcfS4);

const videoAYcculqrvFA: Video = {
  id: 'AYcculqrvFA',
  channel: channelTrashTasteAfterDark,
  title: 'Reacting to the Manga Awards | Trash Taste Stream #7',
  titleShort: 'Reacting to the Manga Awards',
  episodeNumber: 7,
  publishedAt: '2021-09-09T20:00:03Z',
  sections: {
    '00:00:00': 'We are now brighter',
    '00:00:44': 'Our first sponsored stream',
    '00:03:48': 'Manga awards',
    '00:07:34': 'Manga awards 2020 winners',
    '00:11:13': 'Winners of 2019 and 2018',
    '00:13:27': 'Manga award nominees 2021',
    '00:20:30': 'Print manga 3rd place',
    '00:26:38': 'Print manga 2nd place',
    '00:33:41': 'Print manga winner',
    '00:41:50': 'Digital manga 3rd place',
    '00:45:06': 'Digital manga 2nd place',
    '00:50:32': 'Digital manga winner',
    '00:58:29': 'Honorable mentions',
    '01:17:19': 'Final thoughts',
  },
  tags: ['Streams', 'Twitch'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videoAYcculqrvFA);

const videoIdv7AAglAXs: Video = {
  id: 'Idv7AAglAXs',
  channel: channelTrashTasteAfterDark,
  title: 'We Tested Our Anime Knowledge and Won... | Trash Taste Stream #8',
  titleShort: 'We Tested Our Anime Knowledge and Won...',
  episodeNumber: 8,
  publishedAt: '2021-10-20T16:12:12Z',
  sections: {
    '00:00:00': 'Spelling bee',
    '00:00:54': 'Hello every single one of you',
    '00:02:51': 'On the topic of current news',
    '00:05:01': 'We are so relatable',
    '00:06:06': 'Bring back FB gaming posts',
    '00:08:21': 'Weirdly colored stuff',
    '00:15:20': 'Windows are life',
    '00:18:46': 'Reading Twitch chat',
    '00:23:11': 'Daddy Bookwalker',
    '00:25:54': 'The rules of the game show',
    '00:30:35': 'Question 1',
    '00:34:19': 'Question 2',
    '00:41:05': 'Question 3',
    '00:44:16': 'Question 4',
    '00:48:42': 'Question 5',
    '00:55:00': 'Question 6',
    '01:05:24': 'Question 7',
    '01:14:49': 'Question 8',
    '01:21:08': 'Question 9',
    '01:26:45': 'Connor eats a ghost pepper',
    '01:28:24': 'Question 10',
    '01:37:54': 'Question 11',
    '01:41:32': 'Question 12',
    '01:49:03': 'Question 13',
    '01:53:44': 'Question 14',
    '01:59:03': 'Question 15',
    '02:07:20': 'Ad time',
    '02:08:53': 'Joey brings us the winnings',
    '02:14:51': 'Big things ahead',
  },
  tags: [
    'Streams',
    'Twitch',
    'who wants to be a millionaire',
    'millionaire',
    'game',
    'quiz',
    'game show',
    'bookwalker',
  ],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videoIdv7AAglAXs);

const videoVbsP8uE234I: Video = {
  id: 'VbsP8uE234I',
  channel: channelTrashTasteAfterDark,
  title: 'Trash Taste Official Spelling Bee Challenge! | Trash Taste Stream #9',
  titleShort: 'Trash Taste Official Spelling Bee Challenge!',
  episodeNumber: 9,
  publishedAt: '2021-11-03T20:45:00Z',
  sections: {
    '00:00:00': 'Where do we look',
    '00:01:02': 'Joey is a spelling bee expert',
    '00:04:55': 'Reading words is weird',
    '00:05:44': 'Handling the spice',
    '00:08:43': 'Weird food',
    '00:16:18': 'Can you mess up mashed potatoes',
    '00:19:43': 'Easiest dish to cook',
    '00:20:40': 'The spelling bee starts',
    '00:21:58': 'Round 1',
    '00:25:20': 'Round 2',
    '00:28:40': 'Round 3',
    '00:34:07': 'Round 4',
    '00:37:39': 'Round 5',
    '00:41:18': 'Round 6',
    '00:45:29': 'Round 7',
    '00:51:02': 'Round 8',
    '00:55:15': 'Round 9',
    '01:04:03': 'Round 10',
    '01:13:13': 'Round 11',
    '01:20:58': 'Round 12',
    '01:31:03': 'Round 13',
    '01:47:32': 'Round 14',
    '02:02:49': 'Round 15',
    '02:11:51': 'The results',
    '02:15:37': 'Spelling donations',
    '02:17:23': 'New games to play',
    '02:21:58': 'A big announcement',
    '02:25:56': "Let's Raid",
  },
  tags: [
    'Streams',
    'Twitch',
    'spelling bee',
    'game show',
    'game',
    'quiz',
    'spelling',
    'words',
    'tournament',
  ],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videoVbsP8uE234I);

const videoE4dC1FsUA64: Video = {
  id: 'E4dC1FsUA64',
  channel: channelTrashTasteAfterDark,
  title: 'We Tried the WORST American Snacks | Trash Taste Stream #10',
  titleShort: 'We Tried the WORST American Snacks',
  episodeNumber: 10,
  publishedAt: '2021-11-10T21:01:45Z',
  sections: {
    '00:00:00': 'Our adventure with Uber Eats',
    '00:04:21': "It's the America topic again",
    '00:05:44': 'We have snacks',
    '00:07:33': 'Which country has the best snacks',
    '00:09:35': 'Why is dried fruit named differently',
    '00:19:23': 'Lying to get into university',
    '00:31:10': "Garnt's exam story",
    '00:42:24': 'Takis',
    '00:48:11': 'The salt debate',
    '00:51:44': 'Twinkies',
    '00:56:28': 'Rap snacks',
    '00:59:50': 'Fruit Gushers',
    '01:06:53': 'Rap Snacks again',
    '01:09:25': 'Caramel Apple Pops',
    '01:16:13': 'Rice Krispies Treats',
    '01:18:43': 'Pop tarts',
    '01:25:30': 'What is pizza',
    '01:31:34': 'Goldfish',
    '01:34:43': 'No really, what constitutes as pizza',
    '01:36:43': 'Pumpkin Spice Snaps',
    '01:40:08': 'Meilyne showed her true colors',
    '01:44:03': 'Flamin Hot Mac n Cheese',
    '01:52:11': 'Chicken in a Biskit',
    '02:00:17': 'Thanking the most important people',
  },
  tags: [
    'Streams',
    'Twitch',
    'trying',
    'snacks',
    'american',
    'america',
    'flamin hot',
    'twinkies',
    'pumpkin spice',
  ],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videoE4dC1FsUA64);

const videoWkgnZ_dl2QI: Video = {
  id: 'WkgnZ_dl2QI',
  channel: channelTrashTasteAfterDark,
  title: 'The Boys Take a Japanese Test | Trash Taste Stream #11',
  titleShort: 'The Boys Take a Japanese Test',
  episodeNumber: 11,
  publishedAt: '2021-11-17T20:11:07Z',
  sections: {
    '00:00:00': 'Welcome Pickle Ricks',
    '00:01:50': "What we're doing today",
    '00:11:20': 'How many words do we know',
    '00:14:45': 'You could work for us',
    '00:16:51': 'Guests on After Dark',
    '00:18:30': 'Kadokawa',
    '00:22:51': 'Rare items',
    '00:32:09': 'Warm up',
    '00:33:42': 'Writing our names in Japanese',
    '00:43:37': 'Mountain',
    '00:45:56': 'Japan',
    '00:48:54': 'Writing numbers',
    '00:55:49': 'Person',
    '00:59:05': 'Fire',
    '01:03:57': 'Up & down',
    '01:08:23': 'Left & right',
    '01:12:34': 'Man & woman',
    '01:20:59': 'House',
    '01:25:53': 'Teacher',
    '01:29:52': 'Little sister',
    '01:36:12': 'Karate Kid',
    '01:40:24': 'The day of birth',
    '01:42:23': 'Hobby',
    '01:48:35': 'Testing Joey',
    '01:50:25': 'Outside',
    '01:52:43': 'Dog',
    '01:55:03': 'Tuesday',
    '01:57:17': 'Cheap',
    '02:03:26': 'Tanaka',
    '02:06:48': 'Name',
    '02:10:56': 'Colors',
    '02:24:12': 'The results',
  },
  tags: ['Streams', 'Twitch', 'after dark', 'VOD', 'japanese', 'test'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videoWkgnZ_dl2QI);

const videoqV7tml8dBao: Video = {
  id: 'qV7tml8dBao',
  channel: channelTrashTasteAfterDark,
  title: "RANKING EVERY COUNTRY'S BEERS | Trash Taste Stream #12",
  titleShort: "RANKING EVERY COUNTRY'S BEERS",
  episodeNumber: 12,
  publishedAt: '2021-12-01T23:13:05Z',
  sections: {
    '00:00:00': 'Not like this',
    '00:00:24': 'Welcome',
    '00:01:03': 'Boys & Chris',
    '00:02:34': "What we're doing today",
    '00:06:26': 'British beer',
    '00:07:57': 'Australian beer',
    '00:09:26': 'Japanese beer',
    '00:12:03': 'Favorite beer of Trash Taste',
    '00:14:31': 'Different beers',
    '00:18:04': 'Liking beer for the first time',
    '00:22:56': 'Everything is falling apart',
    '00:25:26': 'Anime',
    '00:33:44': 'Ramen stream when?',
    '00:36:44': 'Corona (beer)',
    '00:45:10': 'Heineken',
    '00:51:34': 'Chang',
    '00:57:56': 'Dreher',
    '01:04:06': '333',
    '01:10:54': 'Guinness',
    '01:22:19': 'Estrella',
    '01:27:57': 'Budweiser',
    '01:35:08': 'Miller',
    '01:40:20': 'Bintang',
    '01:47:25': 'Yebisu',
    '01:54:58': 'Budvar & Weissbier',
    '01:59:54': 'Best & worst',
    '02:06:07': 'Niche subreddits',
    '02:10:13': 'Outro',
  },
  tags: [
    'Streams',
    'Twitch',
    'beer',
    'tasting',
    'tier list',
    'around the world',
    'different',
    'types',
    'guinness',
    'yebisu',
  ],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videoqV7tml8dBao);

const video9AxveF6cLRw: Video = {
  id: '9AxveF6cLRw',
  channel: channelTrashTasteAfterDark,
  title: 'Which One of Us Is Better At English? | Trash Taste Stream #13',
  titleShort: 'Which One of Us Is Better At English?',
  episodeNumber: 13,
  publishedAt: '2021-12-08T20:01:50Z',
  sections: {
    '00:00:00': 'Za Warudo',
    '00:00:41': 'Accidentally going live',
    '00:01:22': 'Shawarma',
    '00:02:36': 'The plan',
    '00:06:57': 'Mental arithmetic',
    '00:10:32': 'Cosori',
    '00:15:56': 'JoJo Stone Ocean',
    '00:21:48': 'Miyazaki',
    '00:26:54': 'Movie Directors',
    '00:28:55': 'Countdown',
    '00:33:50': 'Round 1',
    '00:37:25': 'Round 1.1',
    '00:40:55': 'Round 1.2',
    '00:48:57': 'Round 1.3',
    '00:53:59': 'Round 2',
    '00:59:14': 'Round 2.1',
    '01:04:50': 'Round 2.2',
    '01:16:15': 'Round 2.3',
    '01:24:08': 'Why is there no Countdown in other countries',
    '01:27:25': 'Round 3',
    '01:33:07': 'Round 3.1',
    '01:36:13': 'Round 3.2',
    '01:49:27': 'Round 3.3',
    '01:54:27': 'Final round',
    '01:56:59': 'Results',
    '02:02:32': 'Future plans',
  },
  tags: ['Streams', 'Twitch', 'countdown', 'game show', 'challenge', 'words', 'english'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(video9AxveF6cLRw);

const video_ZgriBwXUbY: Video = {
  id: '_ZgriBwXUbY',
  channel: channelTrashTasteAfterDark,
  title: 'The Big FAT Quiz of 2021 | Trash Taste Stream #14',
  titleShort: 'The Big FAT Quiz of 2021',
  episodeNumber: 14,
  publishedAt: '2021-12-15T20:01:59Z',
  sections: {
    '00:00:00': 'The drip council is here',
    '00:02:09': "We're doing a quiz about this year",
    '00:04:30': 'A viewer sent us a stream idea',
    '00:07:36': 'What we remember about 2021',
    '00:08:57': 'Streaming watching a show',
    '00:10:36': 'Cosori',
    '00:15:44': 'This chicken be bussin',
    '00:20:32': 'Getting emails from YouTube',
    '00:22:40': 'The Big Fat Quiz of the Year',
    '00:26:04': 'Question 1',
    '00:31:38': 'Question 2',
    '00:37:20': 'Question 3',
    '00:41:23': 'Question 4',
    '00:42:53': 'Question 5',
    '00:48:33': 'Question 6',
    '00:50:37': 'Question 7',
    '00:54:02': 'Question 8',
    '00:57:56': 'Question 9',
    '01:03:04': 'Question 10',
    '01:07:46': 'Question 11',
    '01:12:04': 'Question 12',
    '01:15:23': 'Half-time',
    '01:20:21': 'Question 13',
    '01:27:58': 'Question 14',
    '01:34:15': 'Question 15',
    '01:36:46': 'Question 16',
    '01:40:03': 'Question 17',
    '01:43:16': 'Question 18',
    '01:46:23': 'Question 19',
    '01:51:11': 'Question 20',
    '01:53:32': 'Question 21',
    '01:55:19': 'Question 22',
    '01:57:19': 'Question 23',
    '02:02:25': 'Bonus question 1',
    '02:05:26': 'Bonus question 2',
    '02:08:29': 'Bonus question 3',
    '02:11:20': 'Bonus question 4',
    '02:13:20': 'Final Question',
    '02:15:21': 'Final thoughts',
  },
  tags: ['Streams', 'Twitch', 'quiz', 'challenge', 'big fat', '2021', 'year', 'questions'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(video_ZgriBwXUbY);

const videowinrxCE5rEs: Video = {
  id: 'winrxCE5rEs',
  channel: channelTrashTasteAfterDark,
  title: 'Judging Your TRASH PC Setups | Trash Taste Stream #15',
  titleShort: 'Judging Your TRASH PC Setups',
  episodeNumber: 15,
  publishedAt: '2021-12-18T22:33:57Z',
  sections: {
    '00:00:00': 'Daddy Aorus',
    '00:00:48': "Today's mission",
    '00:01:50': 'Giveaway',
    '00:05:12': 'Trash Taste Merch',
    '00:06:08': 'Expectations',
    '00:08:22': "Bois' setup",
    '00:16:49': 'Submissions',
    '00:17:38': 'Good submission 1',
    '00:24:11': 'Good submission 2',
    '00:28:50': 'Good submission 3',
    '00:36:12': 'Good submission 4',
    '00:42:02': 'Good submission 5',
    '00:44:02': 'Good submission 6',
    '00:49:05': 'Funny submissions',
    '00:55:04': 'Bad submissions',
    '00:56:51': 'Bad submission 1',
    '01:01:45': 'Bad submission 2',
    '01:07:10': 'Bad submission 3',
    '01:12:02': 'Bad submission 4',
    '01:15:39': 'Bad submission 5',
    '01:21:51': 'Bad submission 6',
    '01:24:46': 'Bad submission 7',
    '01:30:19': 'Half-time',
    '01:31:50': 'Bad submission 8',
    '01:37:43': 'Bad submission 9',
    '01:42:43': 'Bad submission 10',
    '01:48:46': 'Ranking',
    '02:04:21': 'Conclusion',
    '02:16:31': 'Winner',
    '02:23:16': 'You made this episode work',
    '02:24:06': 'Announcement',
    '02:27:16': 'Outro',
  },
  tags: ['Streams', 'Twitch', 'aorus', 'pc', 'setup', 'judging', 'rating', 'your', 'viewer'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videowinrxCE5rEs);

const videoxpxEM1eq8D8: Video = {
  id: 'xpxEM1eq8D8',
  channel: channelTrashTasteAfterDark,
  title: 'THE ANIME FIGURE SPECIAL FINALE | Trash Taste Stream #16',
  titleShort: 'THE ANIME FIGURE SPECIAL FINALE',
  episodeNumber: 16,
  publishedAt: '2021-12-22T19:35:18Z',
  sections: {
    '00:00:00': 'Happy Tree Day',
    '00:00:50': 'Figure episode',
    '00:04:02': 'Score so far',
    '00:06:10': 'Akihabara video 2021',
    '00:07:45': 'Figures',
    '00:19:50': 'Favorite Jojo figure',
    '00:21:37': 'Ass',
    '00:22:54': 'Bookwalker',
    '00:30:20': 'Top stream in the world!',
    '00:33:05': 'Fate statue & Akira bike',
    '00:38:51': 'Contentious points',
    '00:41:52': 'Figure closest to $69',
    '00:46:31': 'Figure from the highest rated MAL series',
    '00:50:51': 'Most spent on a non-figure',
    '00:52:33': 'Most expensive figure',
    '00:55:15': 'Cosori',
    '00:58:21': 'Figure closest to $420',
    '01:01:42': 'Most figures bought from anime original movie',
    '01:04:24': 'Most spent on one series',
    '01:06:03': 'The most spent in one store',
    '01:06:54': 'Most hentai figures bought',
    '01:07:53': 'Who spent a total of closest to $3333',
    '01:18:24': 'Most figures bought',
    '01:19:22': 'Most cheapest figure bought',
    '01:20:48': 'Eating chicken and listening to Sydney',
    '01:24:08': 'Duplicate characters bought',
    '01:32:31': 'Votes',
    '01:34:51': 'Joey didn\'t shout "I love incest"',
    '01:37:06': 'Is Demon Slayer a recent anime',
    '01:41:07': 'Connor Dio figure duplicates',
    '01:44:25': 'Is Goku black same as black Goku?',
    '01:50:14': 'Can Joeys figure beat Goku',
    '01:53:27': 'Are all among us characters same?',
    '02:04:39': 'Connors Eva is an Eva?',
    '02:10:09': 'Points to grab',
    '02:10:55': 'Most degenerate figure',
    '02:13:10': 'Best overall haul',
    '02:14:43': 'Best figure',
    '02:17:23': 'Worst figure & loser',
    '02:20:04': 'Final score',
    '02:20:42': 'Punishment',
    '02:32:33': 'Thank you',
    '02:35:46': 'What more to come',
    '02:36:42': 'Outro',
  },
  tags: ['Streams', 'Twitch', 'figurine', 'special', 'challenge', 'figure'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videoxpxEM1eq8D8);

const videoSKWXuPpheSI: Video = {
  id: 'SKWXuPpheSI',
  channel: channelTrashTasteAfterDark,
  title: 'The Trash Taste Official Photoshoot!',
  publishedAt: '2022-01-09T19:00:20Z',
  tags: ['Streams', 'Twitch', 'official', 'photoshoot', 'vlog'],
};
channelTrashTasteAfterDark.videos.push(videoSKWXuPpheSI);

const videoItyCZ7zaja0: Video = {
  id: 'ItyCZ7zaja0',
  channel: channelTrashTasteAfterDark,
  title: "Proving That We're DUMBER Than 5th Graders | Trash Taste Stream #17",
  titleShort: "Proving That We're DUMBER Than 5th Graders",
  episodeNumber: 17,
  publishedAt: '2022-01-19T22:22:57Z',
  sections: {
    '00:00:00': "We're back from vacation",
    '00:01:59': 'Revision',
    '00:06:05': 'University',
    '00:10:03': 'Uni debt',
    '00:11:00': 'Owning a credit card',
    '00:14:14': 'Longest time without taking a dump',
    '00:20:22': "Are we smarter than 10 year old's",
    '00:25:59': 'Talking about the show',
    '00:29:44': 'Question 1',
    '00:36:22': 'Question 2',
    '00:47:22': 'Question 3',
    '00:50:11': 'Question 4',
    '00:54:58': 'Question 5',
    '00:58:27': 'Question 6',
    '01:00:39': 'Question 7',
    '01:06:29': 'Question 8',
    '01:09:20': 'Question 9',
    '01:11:49': 'Question 10',
    '01:18:59': 'Question 11',
    '01:22:18': 'Question 12',
    '01:27:46': 'Question 13',
    '01:31:34': 'The Red Sea',
    '01:35:50': 'Question 14',
    '01:37:38': 'Question 15',
    '01:39:46': 'Question 16',
    '01:42:12': 'Question 17',
    '01:44:43': 'Question 18',
    '01:47:50': 'Question 19',
    '01:51:13': 'Question 20',
    '01:53:44': 'Question 21',
    '01:56:25': 'Question 22',
    '02:00:20': 'Question 23',
    '02:03:04': 'Last question',
    '02:07:32': 'Results',
    '02:09:23': "What we're doing next week",
  },
  tags: ['Streams', 'Twitch', 'smarter than', '5th grader', 'game show', 'quiz', 'challenge'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videoItyCZ7zaja0);

const videoma1BwqXPhOg: Video = {
  id: 'ma1BwqXPhOg',
  channel: channelTrashTasteAfterDark,
  title: 'The Uno Game That ALMOST Ended The Podcast | Trash Taste Stream #18',
  titleShort: 'The Uno Game That ALMOST Ended The Podcast',
  episodeNumber: 18,
  publishedAt: '2022-01-26T19:14:24Z',
  sections: {
    '00:00:00': 'Cat noises ASMR',
    '00:01:08': 'What is Uno?',
    '00:07:18': 'Fan mail',
    '00:08:50': 'Uno Piece',
    '00:10:14': 'Rules',
    '00:12:47': 'Game one start',
    '00:47:16': 'Game one end',
    '00:48:35': 'Meilyne joins the battle',
    '00:51:39': 'New rules',
    '00:56:10': 'Game two start',
    '01:05:38': 'Game two end',
    '01:08:26': 'Even more rules added',
    '01:10:21': 'Game three start',
    '01:53:46': "Camera commit aliven't",
    '02:00:01': 'Meilyne feet',
    '02:01:19': 'Game continues',
    '02:22:04': 'Game three end',
    '02:23:49': 'Results',
    '02:24:27': 'Meilyne defends herself about the cooking special',
    '02:27:09': 'Meilyne the cat whisperer',
    '02:33:51': "What we're doing next week",
  },
  tags: ['Streams', 'Twitch', 'uno', 'attack', 'challenge', 'meilyne'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videoma1BwqXPhOg);

const videovlqUFXnAAqQ: Video = {
  id: 'vlqUFXnAAqQ',
  channel: channelTrashTasteAfterDark,
  title: 'This Is The Most Stupidly Hardest History Quiz | Trash Taste Stream #19',
  titleShort: 'This Is The Most Stupidly Hardest History Quiz',
  episodeNumber: 19,
  publishedAt: '2022-02-17T19:17:56Z',
  sections: {
    '00:00:00': 'Why we missed a few streams',
    '00:01:48': 'Wordle',
    '00:06:53': 'Rage games',
    '00:15:42': 'Todays activity',
    '00:19:10': 'Cosori',
    '00:24:56': 'History',
    '00:27:54': 'TT awardw 2',
    '00:29:17': 'World history quiz',
    '00:31:14': 'Question 1',
    '00:36:07': 'Question 2',
    '00:39:32': 'Question 3',
    '00:45:53': 'Question 4',
    '00:48:40': 'Question 5',
    '00:51:11': 'Question 6',
    '00:54:48': 'Question 7',
    '00:57:38': 'Question 8',
    '01:01:13': 'PP break',
    '01:05:19': 'Question 9',
    '01:10:49': 'Question 10',
    '01:15:41': 'Question 11',
    '01:19:47': 'Question 12',
    '01:24:11': 'Question 13',
    '01:26:36': 'Question 14',
    '01:28:49': 'Question 15',
    '01:32:52': 'Question 16',
    '01:34:42': 'Question 17',
    '01:38:40': 'Question 18',
    '01:41:03': 'Question 19',
    '01:44:13': 'Question 20',
    '01:46:42': 'Question 21',
    '01:49:00': 'Question 22',
    '01:52:01': 'Results',
    '01:53:21': 'Thoughts',
    '01:56:25': 'I soil myself',
    '01:57:59': "What we're doing next week?",
  },
  tags: ['Streams', 'Twitch', 'quiz', 'hardest', 'history', 'challenge'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videovlqUFXnAAqQ);

const videoJaHkRosMISQ: Video = {
  id: 'JaHkRosMISQ',
  channel: channelTrashTasteAfterDark,
  title: 'We Became The Biggest Food Streamers | Trash Taste Stream #20',
  titleShort: 'We Became The Biggest Food Streamers',
  episodeNumber: 20,
  publishedAt: '2022-02-26T19:51:55Z',
  sections: {
    '00:00:00': 'Just smile and wave',
    '00:01:02': "What's the plan for today?",
    '00:02:35': 'Fate figure must go (sad GUNT noises)',
    '00:05:02': 'Elden Ring',
    '00:06:17': 'Stream moments',
    '00:10:20': 'Difficult games',
    '00:13:13': 'NieR anime',
    '00:15:45': 'Old games',
    '00:21:34': 'Famous sound effects',
    '00:28:49': 'Building a statue',
    '00:44:34': 'Tippsy Sake',
    '00:50:55': 'Food tasting',
    '00:58:20': 'Spice',
    '01:01:12': 'Japan seafood',
    '01:04:23': 'Cocktail',
    '01:06:29': 'Canned food',
    '01:11:03': 'Best seafood dish',
    '01:20:10': 'Cheese',
    '01:23:46': 'Alcohol',
    '01:31:14': 'Continuing building the statue',
    '01:45:55': 'Kill the animals',
    '01:53:26': 'Joey impressions',
    '02:03:33': 'Statue has been built',
    '02:08:28': "What we're doing next week",
  },
  tags: ['Streams', 'Twitch', 'food', 'stream', 'qna', 'figurine', 'statue', 'building', 'eating'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videoJaHkRosMISQ);

const video9dZiDzhrvgg: Video = {
  id: '9dZiDzhrvgg',
  channel: channelTrashTasteAfterDark,
  title: 'RANKING AMERICAN GIRL SCOUT COOKIES | Trash Taste Stream #21',
  titleShort: 'RANKING AMERICAN GIRL SCOUT COOKIES',
  episodeNumber: 21,
  publishedAt: '2022-03-02T19:20:47Z',
  sections: {
    '00:00:00': 'Plan for today',
    '00:01:09': 'Girl Scout cookies',
    '00:07:31': 'Cookies',
    '00:11:42': 'Brownies',
    '00:17:04': 'Tiers of Girl Scouts',
    '00:17:44': 'Premium Bandai',
    '00:21:14': 'Garnt being bored',
    '00:33:50': "We're going all out with our tasting",
    '00:36:03': 'First cookie taste test',
    '00:39:42': 'Cookie nr 2',
    '00:44:48': 'Cookie nr 3',
    '00:48:01': 'Cookie nr 4',
    '00:52:57': 'Mambo nr 5',
    '01:00:24': 'Cookie nr 6',
    '01:03:11': 'Cookie nr 7',
    '01:10:06': 'Cookie nr 8',
    '01:17:26': 'Cookie nr 9',
    '01:26:33': 'Cookie nr 10',
    '01:35:55': 'Cookie nr 11',
    '01:42:03': 'Cookie nr 12',
    '01:44:50': 'Connor rages about sugar',
    '01:50:37': 'Last cookie',
    '01:53:28': 'Girl stands for...',
    '01:58:09': 'Overall score',
    '02:00:34': 'Final thoughts',
    '02:01:35': 'Freshness',
    '02:06:08': 'Donos',
    '02:08:08': 'What are we doing next week?',
  },
  tags: [
    'Streams',
    'Twitch',
    'girl scout',
    'cookies',
    'american',
    'japanese',
    'rating',
    'biscuits',
  ],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(video9dZiDzhrvgg);

const videot99Y40G8UBw: Video = {
  id: 't99Y40G8UBw',
  channel: channelTrashTasteAfterDark,
  title: 'We Tried To Guess Songs By Their Lyrics? | Trash Taste Stream #22',
  titleShort: 'We Tried To Guess Songs By Their Lyrics?',
  episodeNumber: 22,
  publishedAt: '2022-03-09T21:07:50Z',
  sections: {
    '00:00:00': 'The Potato guy',
    '00:02:16': 'Plan for today',
    '00:04:34': 'Lyrics are for the weak',
    '00:08:25': 'Guess the lyrics',
    '00:09:59': 'Question 1',
    '00:13:43': 'Question 2',
    '00:17:08': 'Question 3',
    '00:22:25': 'Question 4',
    '00:30:00': 'Question 5',
    '00:34:38': 'Question 6',
    '00:38:42': 'Question 7',
    '00:42:01': 'Question 8',
    '00:44:06': 'Question 9',
    '00:46:51': 'Connor is still salty',
    '00:48:53': 'Cosori',
    '00:57:55': 'Question 10',
    '01:01:58': 'Question 11',
    '01:04:29': 'Question 12',
    '01:07:18': 'Question 13',
    '01:09:33': 'Question 14',
    '01:13:22': 'Question 15',
    '01:17:32': 'Question 16',
    '01:21:01': 'Question 17',
    '01:22:47': 'Question 18',
    '01:25:14': 'Question 19',
    '01:29:38': 'Question 20',
    '01:32:15': 'Question 21',
    '01:36:00': 'Question 22',
    '01:37:08': 'Question 23',
    '01:39:43': 'Question 24',
    '01:43:42': 'Question 25',
    '01:46:34': 'Question 26',
    '01:49:55': 'Question 27',
    '01:52:53': 'Question 28',
    '01:54:56': 'Question 29',
    '01:59:07': 'Final question',
    '02:00:19': 'Results',
    '02:04:36': 'Final thoughts',
    '02:08:09': 'Meme songs',
    '02:11:40': "What's up next",
  },
  tags: ['Streams', 'Twitch', 'lyrics', 'music', 'songs', 'challenge', 'quiz', 'guess'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videot99Y40G8UBw);

const video3utUCKjNgbo: Video = {
  id: '3utUCKjNgbo',
  channel: channelTrashTasteAfterDark,
  title: 'We Took The ULTIMATE Gamer Test | Trash Taste Stream #23',
  titleShort: 'We Took The ULTIMATE Gamer Test',
  episodeNumber: 23,
  publishedAt: '2022-03-17T18:45:00Z',
  sections: {
    '00:00:00': 'We are GAMERS',
    '00:04:57': 'What are we doing today?',
    '00:07:11': 'The cinema experience',
    '00:17:35': 'The quiz',
    '00:19:02': 'Kadokawa',
    '00:24:47': 'Specific words',
    '00:27:09': 'Pre-quiz shenanigans',
    '00:29:58': 'Question 1',
    '00:33:46': 'Question 2',
    '00:38:40': 'Question 3',
    '00:41:14': 'Question 4',
    '00:44:42': 'Question 5',
    '00:46:21': 'Question 6',
    '00:50:27': 'Question 7',
    '00:54:15': 'Question 8',
    '00:57:22': 'Question 9',
    '01:00:54': 'Question 10',
    '01:05:12': 'Question 11',
    '01:08:18': 'Question 12',
    '01:11:16': 'Question 13',
    '01:12:25': 'Question 14',
    '01:15:41': 'Question 15',
    '01:18:48': 'Question 16',
    '01:26:26': 'Question 17',
    '01:30:55': 'Question 18',
    '01:33:46': 'Question 19',
    '01:39:24': 'Question 20',
    '01:43:21': 'Question 21',
    '01:45:12': 'Question 22',
    '01:51:09': 'Question 23',
    '01:52:17': 'Last question',
    '01:56:38': 'Results',
    '02:00:59': 'What are we doing next?',
  },
  tags: [
    'Streams',
    'Twitch',
    'game',
    'gaming',
    'video game',
    'quiz',
    'challenge',
    'halo',
    'gta',
    'nintendo',
  ],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(video3utUCKjNgbo);

const video4wwAHUkqdds: Video = {
  id: '4wwAHUkqdds',
  channel: channelTrashTasteAfterDark,
  title: 'We Know NOTHING About Anime Figures | Trash Taste Stream #24',
  titleShort: 'We Know NOTHING About Anime Figures',
  episodeNumber: 24,
  publishedAt: '2022-03-23T19:15:00Z',
  sections: {
    '00:00:00': "We're already back",
    '00:04:18': 'Joey finished Jump King',
    '00:08:04': 'Elden Ring',
    '00:09:50': 'Difficulty in games',
    '00:16:30': 'Gameplay loops',
    '00:23:10': 'What are we doing today?',
    '00:23:51': 'Amiami',
    '00:25:31': 'The Price Is Right',
    '00:27:39': 'The rules',
    '00:31:47': 'Break',
    '00:33:05': 'We are professional appraisers',
    '00:37:01': 'Round 1 - Figure 1',
    '00:42:42': 'Round 1 - Figure 2',
    '00:48:32': 'Round 1 - Figure 3',
    '00:53:09': 'Round 1 - Figure 4',
    '00:58:52': 'Round 2 - Figure 1',
    '01:03:14': 'Round 2 - Figure 2',
    '01:06:47': 'Round 2 - Figure 3',
    '01:10:05': 'Round 2 - Figure 4',
    '01:14:05': 'Break',
    '01:17:21': 'Rules round 3',
    '01:19:25': 'Round 3 - Figure 1',
    '01:26:47': 'Round 3 - Figure 2',
    '01:32:06': 'Round 3 - Figure 3',
    '01:37:10': 'Round 3 - Figure 4',
    '01:41:10': 'Rules round 4',
    '01:43:10': 'Round 4 - Figure 1',
    '01:54:37': 'Round 4 - Figure 2',
    '02:06:38': 'Round 4 - Figure 3',
    '02:16:34': 'Amiami',
    '02:18:04': 'Results & afterthoughts',
    '02:25:46': "Next week's plan",
  },
  tags: ['Streams', 'Twitch', 'figurine', 'quiz', 'price is right', 'challenge'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(video4wwAHUkqdds);

const videoK3jybGGR7Kk: Video = {
  id: 'K3jybGGR7Kk',
  channel: channelTrashTasteAfterDark,
  title: 'We Role-played in an Isekai ft. @DEMONDICE | Trash Taste Stream #25',
  titleShort: 'We Role-played in an Isekai ft. @DEMONDICE',
  episodeNumber: 25,
  publishedAt: '2022-03-31T02:00:03Z',
  sections: {
    '00:00:00': "We're doing a Konosuba TRPG",
    '00:04:33': 'DEMONDICE is a veteran at this',
    '00:07:54': 'The rules of TRPG',
    '00:10:23': 'Bookwalker',
    '00:11:48': 'Yen Press',
    '00:12:58': 'Entering the world of Konosuba',
    '00:15:15': 'Introducing our characters',
    '00:16:09': 'Dee Z. Nüts',
    '00:19:03': 'Mira',
    '00:20:43': 'Taro',
    '00:23:32': 'House rules',
    '00:26:01': "Garnt got isekai'd",
    '00:32:03': 'First dice throw',
    '00:33:26': 'Taking on the bandits',
    '00:39:17': 'Forming a team',
    '00:42:43': 'Character actions',
    '00:45:18': 'The fight continues',
    '00:48:47': 'Connor tried to untie himself',
    '00:50:43': 'Joey helps',
    '00:51:59': 'The bandits strike back',
    '00:53:50': 'Garnt fumbles his attack',
    '00:56:55': 'Joey casts some fire',
    '01:01:51': 'Discovering skills',
    '01:08:54': 'Connor enters the battle',
    '01:14:20': "Joey's turn",
    '01:19:06': 'Did Joey die already',
    '01:22:27': 'End of the bandits',
    '01:25:34': 'Introducing ourselves to each other',
    '01:28:56': 'Break time',
    '01:32:17': 'Doing some little looting',
    '01:37:55': 'Entering the city',
    '01:46:35': 'Different quests to take',
    '02:01:19': 'How to restore health',
    '02:12:53': 'Stealing potions from a little kid',
    '02:24:03': 'Break time',
    '02:27:50': 'Going to the lake',
    '02:34:40': "There's a trap",
    '02:38:53': 'Learning new skills',
    '02:48:13': 'Making a plan',
    '02:53:00': 'Sanitizing the lake',
    '03:19:03': 'Break',
    '03:22:13': 'Kawaii-kon',
    '03:23:36': 'Crocodile battle continues',
    '03:44:41': 'We were betrayed',
    '03:53:28': 'Connor does a major oopsie',
    '04:06:34': 'Connor contacts god',
    '04:09:23': 'The ultimate attack',
    '04:12:32': 'Phase 2',
    '04:13:36': 'Break time',
    '04:16:45': 'The final battle with Ringo',
    '04:20:32': 'Reward time',
    '04:23:52': 'The end',
    '04:25:13': "We're signing some books",
    '04:30:10': 'What an amazing journey',
  },
  tags: [
    'Streams',
    'Twitch',
    'trpg',
    'dungeons and dragons',
    'demondice',
    'karen',
    'konosuba',
    'dnd',
    'tabletop',
  ],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videoK3jybGGR7Kk);

const videoUQbT7ISWJgI: Video = {
  id: 'UQbT7ISWJgI',
  channel: channelTrashTasteAfterDark,
  title: 'Every Time We Fail, We Get a Punishment! | Trash Taste Charity Stream #1',
  titleShort: 'Every Time We Fail, We Get a Punishment!',
  episodeNumber: 1,
  publishedAt: '2022-04-06T17:15:00Z',
  sections: {
    '00:00:00': 'The longest 24 hours of our lives',
    '00:07:31': 'The plan for today',
    '00:13:58': 'Revealing our first After Dark guest',
    '00:21:10': 'Stretch goals',
    '00:34:39': 'Quick Break',
    '00:39:17': 'TTRPG After Dark with Demon Dice',
    '00:41:12': 'Setting up the jenga',
    '00:44:29': 'Snack of choice',
    '00:45:55': 'Normal jenga round 1',
    '00:53:25': 'Normal jenga round 2',
    '00:58:45': "The longest streams we've done",
    '01:02:39': 'Talking about sleep',
    '01:11:08': 'Setting Up Sushi Jenga',
    '01:16:53': 'Extreme sushi jenga',
    '01:25:53': 'Quick Break',
    '01:30:22': 'Extreme sushi jenga continues',
    '01:44:51': 'The bois do squats and push-ups',
    '01:51:25': 'Reading more donations',
    '01:52:15': "Chat decided what we'll eat",
    '01:59:02': 'What fast food chains are overrated?',
    '02:07:03': 'Connor explains what a toast sandwich is',
    '02:09:27': 'Old fashioned words',
    '02:11:39': 'We got raided',
  },
  tags: ['Streams', 'Twitch', 'charity', 'extreme', 'jenga', 'sushi', 'punishment', '24-hour'],
  type: 'Charity Stream',
};
channelTrashTasteAfterDark.videos.push(videoUQbT7ISWJgI);

const videogVIjtjfM_AQ: Video = {
  id: 'gVIjtjfM-AQ',
  channel: channelTrashTasteAfterDark,
  title: "Can We Guess What's In The Box? | Trash Taste Charity Stream #2",
  titleShort: "Can We Guess What's In The Box?",
  episodeNumber: 2,
  publishedAt: '2022-04-13T17:15:02Z',
  sections: {
    '00:00:00': 'Paying respect to the sigmas',
    '00:10:14': "Why Connor hasn't played Apex",
    '00:11:52': "The term ''gas''",
    '00:13:25': 'British food',
    '00:18:05': 'Reading out messages from alphas',
    '00:19:21': 'Babies and their first words',
    '00:21:53': 'Baby videos',
    '00:24:08': 'The pizza arrived',
    '00:28:45': 'Eating pizza with chopsticks',
    '00:34:02': 'Eating sushi with knife and fork',
    '00:36:23': 'Talking about food',
    '00:40:40': 'Lunch break is over',
    '00:43:15': "Rules for ''What's In The Box?''",
    '00:48:13': 'Round 1 - Garnt',
    '00:50:28': 'Round 2 - Connor',
    '00:53:29': 'Round 3 - Joey',
    '00:55:51': 'Round 4 - Garnt',
    '00:59:25': 'Round 5 - Connor',
    '01:03:21': 'Round 6 - Joey',
    '01:07:37': 'Round 7 - Garnt',
    '01:10:30': 'Round 8 - Connor',
    '01:13:37': 'Round 9 - Joey',
    '01:16:36': 'Round 10 - Garnt',
    '01:19:44': 'Round 11 - Connor',
    '01:22:44': 'Round 12 - Joey',
    '01:26:16': 'Round 13 - Garnt',
    '01:30:38': 'Round 14 - Connor',
    '01:34:31': 'Round 15 - Joey',
    '01:38:13': 'Round 16 - Garnt',
    '01:41:19': 'Round 17 - Connor',
    '01:46:28': 'Round 18 - Joey',
    '01:48:23': 'End of the game',
    '01:51:07': 'Break',
    '01:58:02': 'Sydney replaces Garnt',
    '02:03:11': 'Soju overdose',
    '02:06:11': 'Trash Taste Meme Award',
    '02:08:10': 'Beer',
    '02:09:42': 'Connor calls Sydney poor',
    '02:11:13': 'Bubi & Hime',
    '02:11:59': 'Garnt returns from the toilet',
    '02:14:48': 'Russian Trash Taste dub',
    '02:16:31': 'Spicy piss',
    '02:18:22': 'Quirks in My Hero Academia',
    '02:20:52': 'Superpowers',
    '02:24:46': 'Goku can beat everything',
    '02:29:50': 'Connor is 5-years old',
    '02:31:28': 'We hit $37,500',
    '02:38:37': 'We have a new Sigma',
    '02:46:46': 'Manga',
    '02:48:27': 'Fixing tech/audio issues',
    '02:50:51': 'Robert Pattinson is British',
    '02:53:30': 'The boys are actually talking about anime',
    '03:00:23': 'Seven Deadly Sins',
    '03:05:16': 'The Ultimate Shonen Bracket',
    '03:08:28': 'Seven Deadly Sins VS Demon Slayer',
    '03:10:05': 'Jujutsu Kaisen VS Bleach',
    '03:15:13': 'Naruto VS One Piece',
    '03:16:56': 'Hunter x Hunter VS Dragon Ball Z',
    '03:18:53': 'SEMI-FINALS: Demon Slayer VS Jujutsu Kaisen',
    '03:24:25': 'SEMI-FINALS: One Piece VS Hunter x Hunter',
    '03:28:15': 'THE FINALS: Jujutsu Kaisen VS One Piece',
    '03:30:25': 'The winner is...',
    '03:32:54': 'Do you like Imagine Dragons',
  },
  tags: [
    'Streams',
    'Twitch',
    '24-hour',
    'charity',
    "what's in the box",
    'challenge',
    'guessing',
    'hand',
    'slimy',
    'lubed among us',
  ],
  type: 'Charity Stream',
};
channelTrashTasteAfterDark.videos.push(videogVIjtjfM_AQ);

const videoonjk8yo2JoQ: Video = {
  id: 'onjk8yo2JoQ',
  channel: channelTrashTasteAfterDark,
  title: 'The First Trash Taste Meme Review | Trash Taste Charity Stream #3',
  titleShort: 'The First Trash Taste Meme Review',
  episodeNumber: 3,
  publishedAt: '2022-04-20T17:15:01Z',
  sections: {
    '00:00:00': 'Reviewing top posts on our subreddit',
    '00:01:29': 'The boys in sync',
    '00:04:50': "Trash Taste, but it's all Connor",
    '00:06:35': 'Garnt drinks Corona',
    '00:08:11': 'ChokeDawgVA',
    '00:10:36': "Trash Taste, but it's art",
    '00:12:06': 'SrGrafo',
    '00:14:19': 'Garnt CGI edit',
    '00:18:12': 'Memes & fanart',
    '00:31:30': 'Trash Taste intro in RTX',
    '00:35:06': "Trash Taste, but it's all Joey",
    '00:37:30': 'Bottom Gear',
    '00:40:53': 'Deez nuts are getting out of hand',
    '00:53:15': 'Continuing with the memes',
    '00:57:01': 'Boys caught in 4k',
    '01:00:02': 'Gigguk memes',
    '01:02:20': 'Memes & fanart',
    '01:27:16': 'Break',
    '01:34:28': 'Battle of the sigmas',
    '01:38:51': 'Connor dons a monkey suit',
    '01:44:36': 'Shouting out some sigmas',
    '01:46:40': 'Memes & fanart',
    '02:03:50': 'Joey the Fish Slayer',
    '02:05:15': 'Joey turns into a banana',
    '02:09:19': 'Speedrunning the last memes',
    '02:22:20': 'Trash Taste Meme Award winner',
    '02:25:47': 'Reading donations',
    '02:39:10': "What we're doing with Chris",
    '02:43:25': 'The mystery of cum',
  },
  tags: ['Streams', 'Twitch', 'meme review', 'first', 'official', 'subreddit', 'memes'],
  type: 'Charity Stream',
};
channelTrashTasteAfterDark.videos.push(videoonjk8yo2JoQ);

const videoQPTRa5ilOBU: Video = {
  id: 'QPTRa5ilOBU',
  channel: channelTrashTasteAfterDark,
  title: 'We Got @Abroad in Japan To Guess Memes | Trash Taste Charity Stream #4',
  titleShort: 'We Got @Abroad in Japan To Guess Memes',
  episodeNumber: 4,
  publishedAt: '2022-04-27T17:15:01Z',
  sections: {
    '00:00:00': 'First official After Dark guest',
    '00:07:10': 'Chris begs for compliments',
    '00:11:32': 'Garnt puts on the Clown costume',
    '00:18:19': "Chris doesn't know Among Us",
    '00:19:28': 'Time for the meme quiz',
    '00:23:43': 'Question 1',
    '00:27:21': 'Question 2',
    '00:29:45': 'Question 3',
    '00:32:56': 'Question 4',
    '00:37:19': 'Question 5',
    '00:39:12': 'Question 6',
    '00:41:23': 'Question 7',
    '00:43:04': 'Question 8',
    '00:44:29': 'Question 9',
    '00:48:10': 'Question 10',
    '00:50:52': 'Question 11',
    '00:51:59': 'Question 12',
    '00:54:52': 'Question 13',
    '00:57:19': 'Dinner break',
    '01:03:01': "Last week's earthquake",
    '01:08:32': 'Connor always has food poisoning',
    '01:10:27': 'Going back to England',
    '01:11:19': 'Maid Chris',
    '01:12:40': 'Continuing with the quiz',
    '01:13:53': 'Question 14',
    '01:18:56': 'Question 15',
    '01:22:45': 'Question 16',
    '01:25:52': 'Question 17',
    '01:29:01': 'Question 18',
    '01:31:01': 'Question 19',
    '01:34:02': 'Question 20',
    '01:36:03': 'Question 21',
    '01:39:53': 'Question 22',
    '01:45:21': 'Question 23',
    '01:48:58': 'Question 24',
    '01:52:33': 'Final question',
    '01:55:48': 'Results',
    '01:59:37': "Chris' favorite meme",
    '02:00:49': 'Reading Alphas',
  },
  tags: [
    'Streams',
    'Twitch',
    'chris',
    'broad',
    'abroad in japan',
    'meme',
    'quiz',
    'challenge',
    'first guest',
    'memes',
  ],
  type: 'Charity Stream',
};
channelTrashTasteAfterDark.videos.push(videoQPTRa5ilOBU);

const videocFf6jTKKivA: Video = {
  id: 'cFf6jTKKivA',
  channel: channelTrashTasteAfterDark,
  title: '@Abroad in Japan Crashed Our Spelling Bee | Trash Taste Charity Stream #5',
  titleShort: '@Abroad in Japan Crashed Our Spelling Bee',
  episodeNumber: 5,
  publishedAt: '2022-05-04T17:15:04Z',
  sections: {
    '00:00:00': 'Time for the Spelling Bee',
    '00:04:22': 'How it works',
    '00:05:58': 'Round 1 - Garnt',
    '00:07:01': 'Round 1 - Connor',
    '00:08:59': 'Round 1 - Chris',
    '00:09:53': 'Round 1 - Joey',
    '00:11:20': 'Round 2 - Garnt',
    '00:13:28': 'Round 2 - Connor',
    '00:14:23': 'Round 2 - Chris',
    '00:15:15': 'Round 2 - Joey',
    '00:17:00': 'Round 3 - Garnt',
    '00:18:50': 'Round 3 - Connor',
    '00:20:18': 'Round 3 - Chris',
    '00:23:04': 'Round 3 - Joey',
    '00:25:42': 'Round 4 - Garnt',
    '00:27:12': 'Round 4 - Connor',
    '00:28:48': 'Round 4 - Chris',
    '00:29:38': 'Round 4 - Joey',
    '00:30:15': 'Round 5 - Garnt',
    '00:32:02': 'Round 5 - Connor',
    '00:33:32': 'Round 5 - Chris',
    '00:34:33': 'Round 5 - Joey',
    '00:35:08': 'Round 6 - Garnt',
    '00:37:15': 'Round 6 - Connor',
    '00:38:36': 'Round 6 - Chris',
    '00:39:55': 'Round 6 - Joey',
    '00:41:35': 'Round 7 - Garnt',
    '00:42:46': 'Round 7 - Connor',
    '00:44:42': 'Round 7 - Chris',
    '00:46:59': 'Round 7 - Joey',
    '00:47:47': 'Round 8 - Garnt',
    '00:48:47': 'Round 8 - Connor',
    '00:49:24': 'Round 8 - Chris',
    '00:50:19': 'Round 8 - Joey',
    '00:51:13': 'Round 9 - Garnt',
    '00:51:45': 'Round 9 - Connor',
    '00:52:44': 'Round 9 - Chris',
    '00:53:08': 'Round 9 - Joey',
    '00:54:29': 'Round 10 - Garnt',
    '00:55:51': 'Round 10 - Connor',
    '00:56:47': 'Round 10 - Chris',
    '00:57:51': 'Round 10 - Joey',
    '00:58:57': 'Round 11 - Garnt',
    '01:00:49': 'Round 11 - Connor',
    '01:01:43': 'Round 11 - Chris',
    '01:02:31': 'Round 11 - Joey',
    '01:03:27': 'Results',
    '01:06:31': 'Our 24 hour stream is half-way',
    '01:11:36': 'Doing a YLYL later',
    '01:16:36': 'Clowns',
    '01:21:59': "90's children's shows",
    '01:27:04': 'Almost time to shave',
    '01:29:24': 'We hit $100,000',
    '01:35:36': 'Stretch goals',
    '01:44:08': 'Alphas are amazing',
    '01:49:07': 'Connor shaves his beard',
    '01:55:51': 'Chris got drunk in a church',
    '01:58:27': 'Joey and Garnt get ready to shave',
    '01:59:47': 'Chris entertains chat',
    '02:04:25': 'Garnt is finally shaving as well',
    '02:08:51': 'Shaving cam',
    '02:14:45': 'Chris takes over Trash Taste',
    '02:15:55': 'Connor has become Dr. Ligma',
    '02:17:54': 'We hit $110k',
    '02:22:27': 'What are we doing next?',
  },
  tags: [
    'Streams',
    'Twitch',
    'spelling bee',
    'chris broad',
    'abroad in japan',
    'spelling',
    'words',
    'letters',
    'challenge',
    'ligma',
  ],
  type: 'Charity Stream',
};
channelTrashTasteAfterDark.videos.push(videocFf6jTKKivA);

const videoQT_Ygbx_65E: Video = {
  id: 'QT-Ygbx_65E',
  channel: channelTrashTasteAfterDark,
  title: 'We Cannot Laugh At Any Cost! | Trash Taste Charity Stream #6',
  titleShort: 'We Cannot Laugh At Any Cost!',
  episodeNumber: 6,
  publishedAt: '2022-05-11T18:15:01Z',
  sections: {
    '00:00:00': 'op',
    '00:00:43': 'Time for You Laugh You Lose',
    '00:05:18': 'Fixing media share audio',
    '00:12:23': 'Trash Taste Twilight Zone',
    '00:15:01': 'Breakfast in a ryokan',
    '00:17:50': 'Staying up all night',
    '00:19:58': 'Chris & Joey are alone',
    '00:23:37': 'Media share audio is fixed',
    '00:26:16': 'What counts as a laugh?',
    '00:30:12': 'How YLYL works',
    '00:31:55': 'Starting YLYL',
    '01:38:33': 'Break',
    '01:44:00': 'More YLYL',
    '02:10:34': 'The boys made it',
    '02:13:08': 'Break',
    '02:17:40': 'Garnt eats pizza crust with mayo & ketchup',
    '02:27:21': 'Ashley eats the mayo/ketchup mess',
    '02:28:49': 'Chris goes home',
    '02:30:32': 'The boys are getting tired',
    '02:36:00': 'Reading donations',
    '02:40:30': 'Setting up for the second guest',
    '02:42:49': 'We have a new sigma!',
    '02:47:20': 'Break',
  },
  tags: [
    'Streams',
    'Twitch',
    'ylyl',
    'you laugh you lose',
    'try not to laugh',
    'challenge',
    'chris',
    'abroad in japan',
    'chris broad',
  ],
  type: 'Charity Stream',
};
channelTrashTasteAfterDark.videos.push(videoQT_Ygbx_65E);

const video_rndSz8bEt0: Video = {
  id: '_rndSz8bEt0',
  channel: channelTrashTasteAfterDark,
  title: 'Ironmouse Is Finally On Trash Taste! | Trash Taste Charity Stream #7',
  titleShort: 'Ironmouse Is Finally On Trash Taste!',
  episodeNumber: 7,
  publishedAt: '2022-05-18T17:15:03Z',
  sections: {
    '00:00:00': 'Ironmouse is finally on Trash Taste',
    '00:05:46': 'Connor eats natto',
    '00:15:13': 'Garnt likes natto',
    '00:17:39': 'Connor goes in for seconds',
    '00:20:34': 'Weird foods',
    '00:23:22': 'Plasma',
    '00:27:03': 'Jump King',
    '00:30:05': 'Vampire Survivors',
    '00:33:32': "Ironmouse's subathon",
    '00:42:14': 'The worst kept secret',
    '00:44:05': 'Origin of "Andy"',
    '00:47:33': 'Harry Potter',
    '00:54:51': "Robert Pattinson's movies",
    '00:58:08': 'Ironmouse is obsessed with Furbys',
    '01:00:50': 'Harry Potter games',
    '01:02:28': 'THE RETURN OF CUM',
    '01:08:22': 'Dhar Mann',
    '01:10:55': 'Gacha games',
    '01:16:32': 'Sleep',
    '01:19:52': 'Music',
    '01:25:58': "AMV's",
    '01:31:19': 'Anime',
    '01:34:19': 'Joey does a Skype impression',
    '01:36:14': 'Sleeping on stream',
    '01:40:33': 'The internet broke our sense of humor',
    '01:44:31': 'Ironmouse converts people into VTubers',
    '01:49:06': 'Streaming',
    '01:53:40': 'COVID helped with our success',
    '01:57:24': 'Gacha games (again)',
    '02:05:54': 'Eroges',
    '02:10:49': 'Rance',
    '02:13:41': "It's 5AM",
    '02:16:07': 'Karaoke',
    '02:21:18': 'We can rap',
    '02:25:07': 'Being medicated',
    '02:33:17': 'Getting called out of nowhere',
    '02:35:22': 'Anime',
    '02:47:08': "Ironmouse's Top 30 Anime",
    '03:26:13': 'Reading donations',
    '03:33:51': 'Joey eats a ghost pepper',
    '03:45:32': 'Reading donations',
    '03:50:32': 'Joey is in pain',
    '03:55:57': 'Break',
    '04:02:11': 'Explaining "lubed Among Us" to Ironmouse',
    '04:04:17': '3.5 hours left',
    '04:08:39': 'The Wolf of Wall Street',
    '04:14:17': 'Shark Tale',
    '04:16:31': "Fish don't exist",
    '04:21:48': 'Finding Nemo',
    '04:24:25': 'Back to Shark Tale',
    '04:26:36': 'Optimus Prime is into lolis',
    '04:38:16': 'Tired monke reads out donations',
    '04:47:55': 'Garnt takes over reading donations',
    '05:05:25': 'Joey has returned',
    '05:09:24': 'Joey leaves again',
    '05:33:32': 'Connor wakes up',
    '05:44:45': 'Laughing about Connor yawning',
    '05:46:47': 'Connor speedrunning donations ASMR',
    '06:19:39': 'Connor reads random facts',
    '06:32:36': 'Playing Wordle',
    '06:36:51': 'We look tired, because we are',
    '06:50:07': 'Clowns are creepy',
    '06:54:48': 'Bread',
    '06:58:44': 'Almost at the end',
    '07:03:25': 'El Chupacabra',
    '07:09:34': 'Ironmouse is leaving',
    '07:11:49': 'Sleepy Connor ASMR',
    '07:15:16': 'Joey is awake',
    '07:30:13': 'Thanks to everyone',
    '07:37:24': 'Final words',
  },
  guests: [guestIronmouse],
  tags: ['Streams', 'Twitch', 'charity', 'ironmouse', 'vtuber', 'favorite', 'tungsten rat'],
  type: 'Charity Stream',
};
channelTrashTasteAfterDark.videos.push(video_rndSz8bEt0);
guestIronmouse.videos.push(video_rndSz8bEt0);

const videouWquUXm9M_U: Video = {
  id: 'uWquUXm9M_U',
  channel: channelTrashTasteAfterDark,
  title: 'We Handled DANGEROUS Australian Wildlife | Trash Taste Stream #26',
  titleShort: 'We Handled DANGEROUS Australian Wildlife',
  episodeNumber: 26,
  publishedAt: '2022-07-23T18:15:01Z',
  sections: {
    '00:00:00': 'The boys are down under',
    '00:01:37': 'The plan',
    '00:04:51': 'Connor & Garnt discover Australia',
    '00:07:39': 'The clothes never change',
    '00:10:37': 'Trying Aussie snacks',
    '00:13:23': 'Burger rings',
    '00:15:25': 'Shapes pizza flavour',
    '00:18:31': 'Shapes chicken flavour',
    '00:20:16': 'Shapes barbeque flavour',
    '00:22:23': 'Lamington',
    '00:24:59': 'TimTam',
    '00:30:29': 'TimTam SLAM',
    '00:34:15': "Meeting Joey's family",
    '00:39:16': 'Seeing the wildlife',
    '00:46:56': 'Quiz time',
    '00:49:52': 'Question 1',
    '00:52:45': 'Question 2',
    '00:54:19': 'Question 3',
    '00:56:40': 'Question 4',
    '00:59:38': 'Question 5',
    '01:01:47': 'Question 6',
    '01:06:16': 'Question 7',
    '01:08:23': 'Question 8',
    '01:10:29': 'Question 9',
    '01:12:44': 'Question 10',
    '01:17:06': 'Question 11',
    '01:18:45': 'Question 12',
    '01:21:07': 'Question 13',
    '01:22:58': 'Question 14',
    '01:25:59': 'Question 15',
    '01:27:27': 'Question 16',
    '01:29:32': 'Question 17',
    '01:31:00': 'Quiz results',
    '01:32:07': "We'll be handling animals next",
    '01:35:25': 'Blue-tongue lizard',
    '01:38:39': 'Spider python',
    '01:44:19': 'Black-headed python',
    '01:49:39': 'Diamond python',
    '01:58:21': 'Snake-necked turtle',
    '02:02:54': 'Freshwater crocodile',
    '02:06:50': 'Saltwater crocodile',
    '02:09:46': 'Iguana',
    '02:17:26': 'It has been an experience',
    '02:20:36': 'Sending a raid',
  },
  tags: [
    'Streams',
    'Twitch',
    'australia',
    'down under',
    'animals',
    'wildlife',
    'snacks',
    'trying',
    'food',
    'dangerous',
  ],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videouWquUXm9M_U);

const videoBsf86Z3_ls0: Video = {
  id: 'Bsf86Z3-ls0',
  channel: channelTrashTasteAfterDark,
  title: 'Trash Taste Goes To Anime Expo 2022',
  publishedAt: '2022-07-30T17:05:53Z',
  tags: ['Streams', 'Twitch', 'anime expo', 'ax', 'convention', 'geexplus'],
};
channelTrashTasteAfterDark.videos.push(videoBsf86Z3_ls0);

const videoTaZ9mZcHNeY: Video = {
  id: 'TaZ9mZcHNeY',
  channel: channelTrashTasteAfterDark,
  title: 'Could We Pass The American Citizenship Test? | Trash Taste Stream #28',
  titleShort: 'Could We Pass The American Citizenship Test?',
  episodeNumber: 28,
  publishedAt: '2022-08-11T20:22:53Z',
  sections: {
    '00:00:00': 'Murica!',
    '00:03:04': 'This IS pre-recorded',
    '00:04:23': 'American cartoons had seasons',
    '00:06:00': 'Garnt needs help',
    '00:07:50': 'Joey played minesweeper for 5 hours',
    '00:12:23': "Games we don't know the rules for",
    '00:16:48': 'The quiz',
    '00:19:35': 'TT Tour',
    '00:20:57': 'Question 1',
    '00:22:31': 'Question 2',
    '00:26:20': 'Question 3',
    '00:31:02': 'Question 4',
    '00:34:59': 'Question 5',
    '00:38:56': 'Question 6',
    '00:41:02': 'Question 7',
    '00:45:55': 'Question 8',
    '00:49:15': 'Question 9',
    '00:52:00': 'Question 10',
    '00:57:21': 'Question 11',
    '01:01:22': 'Question 12',
    '01:05:37': 'Question 13',
    '01:08:26': 'Question 14',
    '01:13:19': 'Question 15',
    '01:20:41': 'Question 16',
    '01:23:31': 'Question 17',
    '01:26:10': 'Question 18',
    '01:28:50': 'Question 19',
    '01:32:38': 'Last question',
    '01:39:09': 'Results',
    '01:44:01': 'What are we doing next week?',
    '01:46:27': 'How to draw',
    '01:49:27': 'Twitch raid',
  },
  tags: ['Streams', 'Twitch', 'america', 'test', 'citizenship', 'quiz'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videoTaZ9mZcHNeY);

const videoY9i_1wfJbFs: Video = {
  id: 'Y9i_1wfJbFs',
  channel: channelTrashTasteAfterDark,
  title: 'Unboxing Fan Gifts From Anime Expo | Trash Taste Stream #27',
  titleShort: 'Unboxing Fan Gifts From Anime Expo',
  episodeNumber: 27,
  publishedAt: '2022-08-13T19:15:00Z',
  sections: {
    '00:00:00': 'After Dark is BACK',
    '00:03:26': 'The Among Us in r/place',
    '00:05:31': "Bois' Australia experience",
    '00:10:51': 'Connor is NOT wearing the same shirt',
    '00:13:03': 'When good quotes get memed too much',
    '00:14:54': 'Gaming',
    '00:18:25': 'New consoles',
    '00:22:23': 'Playing games in peace',
    '00:25:04': 'Garnt has a confession',
    '00:25:47': 'Bloodline',
    '00:26:49': "What's in the box?",
    '00:34:06': 'Gundam VIP event',
    '00:35:17': 'The box is full of mysteries',
    '00:50:51': 'Vinland Saga signed posters',
    '00:51:48': 'Even more bags',
    '00:54:59': 'Which hat is better?',
    '00:59:27': 'Even more stuff',
    '01:10:54': 'Oranges',
    '01:13:54': 'Ignoring Connors take and opening another bag',
    '01:16:05': 'Juicers',
    '01:18:37': 'Thanks for the gifts',
    '01:21:07': 'Alcoholic drinks',
    '01:25:17': 'Weird stuff',
    '01:27:14': 'Nier;Automata',
    '01:30:12': "That's all, folks",
  },
  tags: ['Streams', 'Twitch', 'anime expo', 'fan gifts', 'gifts', 'unboxing', 'merch'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videoY9i_1wfJbFs);

const video9HLMTcPfHNU: Video = {
  id: '9HLMTcPfHNU',
  channel: channelTrashTasteAfterDark,
  title: 'The WORST Pictionary Game Ever Played | Trash Taste Stream #29',
  titleShort: 'The WORST Pictionary Game Ever Played',
  episodeNumber: 29,
  publishedAt: '2022-08-17T20:00:02Z',
  sections: {
    '00:00:00': 'Thicc Sus',
    '00:01:28': 'The plan for today',
    '00:04:25': 'We got vessels',
    '00:05:25': 'Pictionary',
    '00:06:53': 'Meme movies',
    '00:15:27': 'Overhyped characters',
    '00:20:31': 'Shakespeare',
    '00:22:55': 'Winnie the Pooh',
    '00:25:11': 'Movies that we want made',
    '00:28:09': 'Ad break',
    '00:31:32': 'Rules',
    '00:37:58': 'Round 1',
    '00:48:15': 'Round 2',
    '00:53:50': 'Round 3',
    '00:58:29': 'Round 4',
    '01:03:08': 'Round 5',
    '01:06:54': 'Round 6',
    '01:10:07': 'Round 7',
    '01:16:58': 'Round 8',
    '01:24:06': 'Round 9',
    '01:28:57': 'Round 10',
    '01:37:08': 'Round 11',
    '01:39:03': 'Garnt needs to pee',
    '01:42:26': 'Continuing the game',
    '01:44:49': 'Round 12',
    '01:52:54': 'Bonus round',
    '01:56:44': 'Results',
    '01:57:44': 'What are we doing next week?',
    '02:03:20': 'Raid',
  },
  tags: ['Streams', 'Twitch', 'pictionary', 'quiz', 'drawing', 'painting'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(video9HLMTcPfHNU);

const videoXdXeOd8f3MA: Video = {
  id: 'XdXeOd8f3MA',
  channel: channelTrashTasteAfterDark,
  title: 'Guessing Video Games By Sound Is IMPOSSIBLE | Trash Taste Stream #30',
  titleShort: 'Guessing Video Games By Sound Is IMPOSSIBLE',
  episodeNumber: 30,
  publishedAt: '2022-08-25T20:00:10Z',
  sections: {
    '00:00:00': 'Noises',
    '00:01:18': "What the bois doin'?",
    '00:04:15': 'Toenail dilemma',
    '00:06:59': 'Quiz rules',
    '00:08:08': 'Office drama',
    '00:11:10': 'Eroge',
    '00:16:09': 'Connor wears the same shirt again',
    '00:17:13': 'Manscaped',
    '00:21:09': 'Quiz time',
    '00:27:01': 'Question 1',
    '00:30:05': 'Question 2',
    '00:32:45': 'Question 3',
    '00:35:13': 'Question 4',
    '00:39:42': 'Question 5',
    '00:40:54': 'Question 6',
    '00:44:06': 'Question 7',
    '00:48:44': 'Question 8',
    '00:51:16': 'Question 9',
    '00:54:47': 'Question 10',
    '00:58:39': 'Question 11',
    '01:01:40': 'Question 12',
    '01:04:17': 'Question 13',
    '01:10:43': 'Question 14',
    '01:13:52': 'Question 15',
    '01:17:07': 'Question 16',
    '01:20:39': 'Question 17',
    '01:26:56': 'Question 18',
    '01:32:49': 'Question 19',
    '01:35:14': 'Question 20',
    '01:39:18': 'Question 21',
    '01:42:26': 'Question 22',
    '01:45:24': 'Question 23',
    '01:50:06': 'Question 24',
    '01:57:55': 'Question 25',
    '02:00:47': 'Question 26',
    '02:04:54': 'Question 27',
    '02:08:27': 'Question 28',
    '02:11:30': 'Question 29',
    '02:14:58': 'Final Question',
    '02:18:55': 'Results',
    '02:24:10': 'Bye bye',
  },
  tags: [
    'Streams',
    'Twitch',
    'video game',
    'music',
    'sounds',
    'sound effects',
    'quiz',
    'challenge',
    'test',
    'retro',
    'pokemon',
    'final fantasy',
  ],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videoXdXeOd8f3MA);

const videot89DEnhIuJI: Video = {
  id: 't89DEnhIuJI',
  channel: channelTrashTasteAfterDark,
  title: 'Tasting Wine From EVERY Country | Trash Taste Stream #31',
  titleShort: 'Tasting Wine From EVERY Country',
  episodeNumber: 31,
  publishedAt: '2022-09-07T20:00:24Z',
  sections: {
    '00:00:00': 'Why is a woman amongst men in the room?',
    '00:01:05': 'What are we doing today?',
    '00:03:15': 'Connor live after cyclethon',
    '00:04:56': 'Strat talk',
    '00:08:24': 'Piss & Vinegar',
    '00:13:58': 'Sport',
    '00:17:06': 'Wine game rules',
    '00:22:23': 'TT ad',
    '00:23:48': 'Wine 1',
    '00:30:39': 'Wine 2',
    '00:39:47': 'Wine 3',
    '00:47:21': 'Wine 4',
    '00:53:15': 'Wine 5',
    '01:02:52': 'Wine 6',
    '01:09:59': 'Wine 7',
    '01:13:25': 'Quick intermission',
    '01:16:26': 'Wine 8',
    '01:21:32': 'Wine 9',
    '01:25:49': 'Wine 10',
    '01:32:40': 'Final two',
    '01:39:00': 'Final result',
    '01:41:25': 'Random talking',
    '01:46:15': 'Who are we raiding?',
  },
  guests: [guestsydsnap],
  tags: ['Streams', 'Twitch', 'wine', 'guessing', 'price', 'country', 'challenge'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videot89DEnhIuJI);
guestsydsnap.videos.push(videot89DEnhIuJI);

export const channelTrashTasteHighlights: Channel = {
  id: 'UCry1ZVKLslbZXuQgsf-3TXg',
  name: 'Trash Taste Highlights',
  videos: [],
};

// Channel Trash Taste Highlights Videos
const videoFYBZ3_zyTZY: Video = {
  id: 'FYBZ3-zyTZY',
  channel: channelTrashTasteHighlights,
  title: 'The Future of Zombie Movies',
  publishedAt: '2021-03-31T21:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoFYBZ3_zyTZY);

const videoGiTEi_TCcu4: Video = {
  id: 'GiTEi_TCcu4',
  channel: channelTrashTasteHighlights,
  title: 'The Rise of Akidearest',
  publishedAt: '2021-04-03T19:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoGiTEi_TCcu4);

const videogRic1HVC2CM: Video = {
  id: 'gRic1HVC2CM',
  channel: channelTrashTasteHighlights,
  title: 'How Aki and Joey Met',
  publishedAt: '2021-04-03T20:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videogRic1HVC2CM);

const videoU4h6pUnnd0I: Video = {
  id: 'U4h6pUnnd0I',
  channel: channelTrashTasteHighlights,
  title: 'Our Parents Watch More Youtubers Than Us',
  publishedAt: '2021-04-04T20:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoU4h6pUnnd0I);

const videorTranMSgrU4: Video = {
  id: 'rTranMSgrU4',
  channel: channelTrashTasteHighlights,
  title: 'The Anime That Taught Us Social Skills',
  publishedAt: '2021-04-05T20:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videorTranMSgrU4);

const video0XQ0A92jshg: Video = {
  id: '0XQ0A92jshg',
  channel: channelTrashTasteHighlights,
  title: 'Will We Actually Attend Our High School Reunions??',
  publishedAt: '2021-04-06T20:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video0XQ0A92jshg);

const videodP4UPxN7eJA: Video = {
  id: 'dP4UPxN7eJA',
  channel: channelTrashTasteHighlights,
  title: 'Why Are ALL Women Obsessed with True Crime Documentaries??',
  publishedAt: '2021-04-07T20:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videodP4UPxN7eJA);

const videoRpQEeH14rDQ: Video = {
  id: 'RpQEeH14rDQ',
  channel: channelTrashTasteHighlights,
  title: 'YouTube Views ARE Important',
  publishedAt: '2021-04-08T20:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoRpQEeH14rDQ);

const videosziaz7qrAuU: Video = {
  id: 'sziaz7qrAuU',
  channel: channelTrashTasteHighlights,
  title: 'Gameshows We Watched as Children',
  publishedAt: '2021-04-10T19:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videosziaz7qrAuU);

const videoXHvipNdKKDU: Video = {
  id: 'XHvipNdKKDU',
  channel: channelTrashTasteHighlights,
  title: '90 Day Fiancée is AMAZING (on YouTube)',
  publishedAt: '2021-04-11T19:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoXHvipNdKKDU);

const videoheHhSgII2M8: Video = {
  id: 'heHhSgII2M8',
  channel: channelTrashTasteHighlights,
  title: "Connor's BIZARRE Experience with Japanese Police",
  publishedAt: '2021-04-12T19:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoheHhSgII2M8);

const video75rKWLI1hSU: Video = {
  id: '75rKWLI1hSU',
  channel: channelTrashTasteHighlights,
  title: "We're Nihilists Now",
  publishedAt: '2021-04-12T21:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video75rKWLI1hSU);

const videoYrcsMKyg_Kg: Video = {
  id: 'YrcsMKyg-Kg',
  channel: channelTrashTasteHighlights,
  title: 'Sports We Never Knew We Liked',
  publishedAt: '2021-04-13T20:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoYrcsMKyg_Kg);

const video7bzqqQxcreo: Video = {
  id: '7bzqqQxcreo',
  channel: channelTrashTasteHighlights,
  title: 'CRAZIEST Concepts for TV Shows',
  publishedAt: '2021-04-14T21:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video7bzqqQxcreo);

const videoABHQvIEvnMs: Video = {
  id: 'ABHQvIEvnMs',
  channel: channelTrashTasteHighlights,
  title: 'Fear Factor is EASY',
  publishedAt: '2021-04-15T21:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoABHQvIEvnMs);

const video7ZSoy_LryPE: Video = {
  id: '7ZSoy-LryPE',
  channel: channelTrashTasteHighlights,
  title: "We Got thrown out of a Japanese Denny's",
  publishedAt: '2021-04-17T18:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video7ZSoy_LryPE);

const videohd7P14GJQ2E: Video = {
  id: 'hd7P14GJQ2E',
  channel: channelTrashTasteHighlights,
  title: 'Our Weirdest Tangent Yet',
  publishedAt: '2021-04-19T18:00:20Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videohd7P14GJQ2E);

const video4tmhP619Gpo: Video = {
  id: '4tmhP619Gpo',
  channel: channelTrashTasteHighlights,
  title: 'T posing for Japanese Grandmas',
  publishedAt: '2021-04-19T21:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video4tmhP619Gpo);

const videoMIcy_qfKN_E: Video = {
  id: 'MIcy_qfKN_E',
  channel: channelTrashTasteHighlights,
  title: 'Why Airplane Wifi is The Worst',
  publishedAt: '2021-04-20T18:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoMIcy_qfKN_E);

const videoloqZisOvwPY: Video = {
  id: 'loqZisOvwPY',
  channel: channelTrashTasteHighlights,
  title: "The Biggest Chad We've Ever Seen",
  publishedAt: '2021-04-20T19:00:19Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoloqZisOvwPY);

const videotixfshAxZ1U: Video = {
  id: 'tixfshAxZ1U',
  channel: channelTrashTasteHighlights,
  title: 'Peppa Pig Is the BEST Language Learning Resource',
  publishedAt: '2021-04-21T20:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videotixfshAxZ1U);

const videoFesezCGM36w: Video = {
  id: 'FesezCGM36w',
  channel: channelTrashTasteHighlights,
  title: "Anime Youtubers Don't Watch Anime",
  publishedAt: '2021-04-22T20:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoFesezCGM36w);

const videobHpxFKKilXk: Video = {
  id: 'bHpxFKKilXk',
  channel: channelTrashTasteHighlights,
  title: 'Are We Picky Gamers??',
  publishedAt: '2021-04-24T19:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videobHpxFKKilXk);

const videoYT4VmwXUJeg: Video = {
  id: 'YT4VmwXUJeg',
  channel: channelTrashTasteHighlights,
  title: 'Garnt Reveals His Taste in Video Games',
  publishedAt: '2021-04-24T20:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoYT4VmwXUJeg);

const videoUAovihzV73A: Video = {
  id: 'UAovihzV73A',
  channel: channelTrashTasteHighlights,
  title: 'Picking Games Because of the Box Art',
  publishedAt: '2021-04-25T21:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoUAovihzV73A);

const videokJt0E6u83xk: Video = {
  id: 'kJt0E6u83xk',
  channel: channelTrashTasteHighlights,
  title: 'Garnt Needs to Talk to Every NPC in a Game',
  publishedAt: '2021-04-26T19:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videokJt0E6u83xk);

const videotVaOl7J9jcE: Video = {
  id: 'tVaOl7J9jcE',
  channel: channelTrashTasteHighlights,
  title: 'Connor has the Most Surprising Taste in Games',
  publishedAt: '2021-04-27T19:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videotVaOl7J9jcE);

const videoHGbErAxzeBk: Video = {
  id: 'HGbErAxzeBk',
  channel: channelTrashTasteHighlights,
  title: 'Connor Used to be a Lifeguard',
  publishedAt: '2021-05-19T21:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoHGbErAxzeBk);

const videoTQC089mHHQI: Video = {
  id: 'TQC089mHHQI',
  channel: channelTrashTasteHighlights,
  title: 'How to Save Kids from Drowning',
  publishedAt: '2021-05-20T19:00:15Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoTQC089mHHQI);

const videoRC9CYxTv9Lg: Video = {
  id: 'RC9CYxTv9Lg',
  channel: channelTrashTasteHighlights,
  title: 'The Pandemic Lockdown in Japan is WEIRD',
  publishedAt: '2021-05-22T21:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoRC9CYxTv9Lg);

const videoIbrM6PF6r8s: Video = {
  id: 'IbrM6PF6r8s',
  channel: channelTrashTasteHighlights,
  title: 'Beginner Snowboarding Slopes are NOT for Beginners',
  publishedAt: '2021-05-26T19:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoIbrM6PF6r8s);

const videoBC8lqPYrXys: Video = {
  id: 'BC8lqPYrXys',
  channel: channelTrashTasteHighlights,
  title: "Connor's Privileged Life",
  publishedAt: '2021-05-26T21:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoBC8lqPYrXys);

const videoUfOAK1OawdI: Video = {
  id: 'UfOAK1OawdI',
  channel: channelTrashTasteHighlights,
  title: "Don't Drink FREE Coffee in Japan",
  publishedAt: '2021-05-27T20:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoUfOAK1OawdI);

const videomxeQrOVZd74: Video = {
  id: 'mxeQrOVZd74',
  channel: channelTrashTasteHighlights,
  title: 'Failing in Life to Succeed Later',
  publishedAt: '2021-05-27T21:00:31Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videomxeQrOVZd74);

const videohExr4Xj4_Jo: Video = {
  id: 'hExr4Xj4_Jo',
  channel: channelTrashTasteHighlights,
  title: 'The Trash Taste Awards: Intro of the Year',
  publishedAt: '2021-05-29T19:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videohExr4Xj4_Jo);

const video7SJ_koWmyjA: Video = {
  id: '7SJ_koWmyjA',
  channel: channelTrashTasteHighlights,
  title: 'The Trash Taste Awards: Hottest Take of the Year',
  publishedAt: '2021-05-29T20:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video7SJ_koWmyjA);

const videoz6DEZJp_tts: Video = {
  id: 'z6DEZJp-tts',
  channel: channelTrashTasteHighlights,
  title: 'The Trash Taste Awards: Most Out-of-context Clip',
  publishedAt: '2021-05-29T21:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoz6DEZJp_tts);

const videoOH8G16DTp8Q: Video = {
  id: 'OH8G16DTp8Q',
  channel: channelTrashTasteHighlights,
  title: 'The Trash Taste Awards: Screenshot of the Year',
  publishedAt: '2021-05-29T22:00:19Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoOH8G16DTp8Q);

const videoHpM7sStA5e0: Video = {
  id: 'HpM7sStA5e0',
  channel: channelTrashTasteHighlights,
  title: 'The Trash Taste Awards: Most Degenerate Moment',
  publishedAt: '2021-05-30T19:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoHpM7sStA5e0);

const videof68TwvMD0zw: Video = {
  id: 'f68TwvMD0zw',
  channel: channelTrashTasteHighlights,
  title: 'The Trash Taste Awards: Saltiest Moment of the Year',
  publishedAt: '2021-05-30T20:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videof68TwvMD0zw);

const videoGcBk8RaIbX0: Video = {
  id: 'GcBk8RaIbX0',
  channel: channelTrashTasteHighlights,
  title: 'The Trash Taste Awards: Most Monkey Moment',
  publishedAt: '2021-05-30T21:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoGcBk8RaIbX0);

const videorwrxicTNnVc: Video = {
  id: 'rwrxicTNnVc',
  channel: channelTrashTasteHighlights,
  title: 'The Trash Taste Awards: Best Story of the Year',
  publishedAt: '2021-05-30T22:00:14Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videorwrxicTNnVc);

const videotM4X2r5Wc3o: Video = {
  id: 'tM4X2r5Wc3o',
  channel: channelTrashTasteHighlights,
  title: 'The Trash Taste Awards: Best Complaining-about-America Moment',
  publishedAt: '2021-05-31T22:00:31Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videotM4X2r5Wc3o);

const videoMhUsxPd7oq8: Video = {
  id: 'MhUsxPd7oq8',
  channel: channelTrashTasteHighlights,
  title: 'The Trash Taste Awards: Meme of the Year',
  publishedAt: '2021-06-01T19:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoMhUsxPd7oq8);

const videoqFWhFFQK9Jo: Video = {
  id: 'qFWhFFQK9Jo',
  channel: channelTrashTasteHighlights,
  title: 'The Trash Taste Awards: Rant of the Year',
  publishedAt: '2021-06-02T20:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoqFWhFFQK9Jo);

const videoZbdBWY3qZ0o: Video = {
  id: 'ZbdBWY3qZ0o',
  channel: channelTrashTasteHighlights,
  title: 'The Trash Taste Awards: Best Argument',
  publishedAt: '2021-06-02T23:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoZbdBWY3qZ0o);

const videoZt3CipPu_cg: Video = {
  id: 'Zt3CipPu-cg',
  channel: channelTrashTasteHighlights,
  title: 'The Trash Taste Awards: Episode of the Year',
  publishedAt: '2021-06-03T23:00:15Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoZt3CipPu_cg);

const videoR_TbLDtGPjw: Video = {
  id: 'R-TbLDtGPjw',
  channel: channelTrashTasteHighlights,
  title: 'The JoJo Event was HORRIBLE',
  publishedAt: '2021-06-05T19:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoR_TbLDtGPjw);

const videowrnF_pJxH3Q: Video = {
  id: 'wrnF_pJxH3Q',
  channel: channelTrashTasteHighlights,
  title: 'Gamers are Superior to Anime Fans',
  publishedAt: '2021-06-05T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videowrnF_pJxH3Q);

const videoZLnUPKUuTXI: Video = {
  id: 'ZLnUPKUuTXI',
  channel: channelTrashTasteHighlights,
  title: 'Anime Needs More Awards Shows',
  publishedAt: '2021-06-05T21:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoZLnUPKUuTXI);

const videoE2hU_NMYB_U: Video = {
  id: 'E2hU-NMYB-U',
  channel: channelTrashTasteHighlights,
  title: 'How Much Food Can You Eat off the Ground??',
  publishedAt: '2021-06-06T20:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoE2hU_NMYB_U);

const videoR5_Itaxq7_I: Video = {
  id: 'R5_Itaxq7_I',
  channel: channelTrashTasteHighlights,
  title: 'Growing up with MegaUpload',
  publishedAt: '2021-06-07T21:00:17Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoR5_Itaxq7_I);

const videoBlWEssJc_4M: Video = {
  id: 'BlWEssJc_4M',
  channel: channelTrashTasteHighlights,
  title: 'Japanese Banks are a NIGHTMARE',
  publishedAt: '2021-06-08T21:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoBlWEssJc_4M);

const videoYXTjC16nR04: Video = {
  id: 'YXTjC16nR04',
  channel: channelTrashTasteHighlights,
  title: 'Getting a Credit Card in Japan is Near IMPOSSIBLE',
  publishedAt: '2021-06-09T19:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoYXTjC16nR04);

const videozSdRwy8x2Ms: Video = {
  id: 'zSdRwy8x2Ms',
  channel: channelTrashTasteHighlights,
  title: "Japan's Signature Stamps are Actually POINTLESS",
  publishedAt: '2021-06-09T20:00:24Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videozSdRwy8x2Ms);

const videoeENHO3Y5wN0: Video = {
  id: 'eENHO3Y5wN0',
  channel: channelTrashTasteHighlights,
  title: 'Doing Taxes in Japan is WORSE than in America',
  publishedAt: '2021-06-09T21:00:13Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoeENHO3Y5wN0);

const videowM7A5bwj_dA: Video = {
  id: 'wM7A5bwj-dA',
  channel: channelTrashTasteHighlights,
  title: 'Connor got the Sketchiest Moving Service',
  publishedAt: '2021-06-10T19:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videowM7A5bwj_dA);

const videoAFnng5lAXow: Video = {
  id: 'AFnng5lAXow',
  channel: channelTrashTasteHighlights,
  title: "Don't Withdraw Money from an ATM at Night in Japan",
  publishedAt: '2021-06-10T20:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoAFnng5lAXow);

const video5hhrarWW_QE: Video = {
  id: '5hhrarWW-QE',
  channel: channelTrashTasteHighlights,
  title: "Connor is Taking Joey's Fridge Without Consent",
  publishedAt: '2021-06-12T19:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video5hhrarWW_QE);

const videoBvS6iMkPM_g: Video = {
  id: 'BvS6iMkPM-g',
  channel: channelTrashTasteHighlights,
  title: 'Garnt Discovers What Cockroaches are Capable of',
  publishedAt: '2021-06-12T20:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoBvS6iMkPM_g);

const videoeyLRuSxyVn0: Video = {
  id: 'eyLRuSxyVn0',
  channel: channelTrashTasteHighlights,
  title: "Joey's Dad Decapitated a Fly",
  publishedAt: '2021-06-13T19:00:17Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoeyLRuSxyVn0);

const videoMyQo1Pa8_w: Video = {
  id: 'MyQo1Pa8--w',
  channel: channelTrashTasteHighlights,
  title: 'Soda is TOO fizzy.',
  publishedAt: '2021-06-14T19:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoMyQo1Pa8_w);

const videoPJMPaBztqTI: Video = {
  id: 'PJMPaBztqTI',
  channel: channelTrashTasteHighlights,
  title: 'What the Heck is Microwaved Tea???',
  publishedAt: '2021-06-15T19:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoPJMPaBztqTI);

const videocgV5VoUOKBs: Video = {
  id: 'cgV5VoUOKBs',
  channel: channelTrashTasteHighlights,
  title: 'The Easiest Way to Recognize an Australian',
  publishedAt: '2021-06-15T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videocgV5VoUOKBs);

const videoyIrJliWy7UQ: Video = {
  id: 'yIrJliWy7UQ',
  channel: channelTrashTasteHighlights,
  title: 'Dangerous Food Adds to the Thrill of Eating',
  publishedAt: '2021-06-15T21:00:17Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoyIrJliWy7UQ);

const videoWDji8jK_coM: Video = {
  id: 'WDji8jK-coM',
  channel: channelTrashTasteHighlights,
  title: 'Garnt JUST Discovered the Wonders of Nutella',
  publishedAt: '2021-06-16T21:00:22Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoWDji8jK_coM);

const video_XkTI9_gxRM: Video = {
  id: '-XkTI9-gxRM',
  channel: channelTrashTasteHighlights,
  title: "Joey's DISGUSTING Way of Eating Kit-Kat Bars",
  publishedAt: '2021-06-17T19:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video_XkTI9_gxRM);

const videon4uBRhcGeVM: Video = {
  id: 'n4uBRhcGeVM',
  channel: channelTrashTasteHighlights,
  title: 'Toblerone Broke our Hearts',
  publishedAt: '2021-06-17T20:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videon4uBRhcGeVM);

const videorsRvYrpEeQY: Video = {
  id: 'rsRvYrpEeQY',
  channel: channelTrashTasteHighlights,
  title: "Japan's INSANE Dessert Bars",
  publishedAt: '2021-06-17T21:00:13Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videorsRvYrpEeQY);

const videopG67DJbwerY: Video = {
  id: 'pG67DJbwerY',
  channel: channelTrashTasteHighlights,
  title: 'We Made Connor Read ℌệ𝔫𝔱ằ𝔦 for 12 Hours',
  publishedAt: '2021-06-19T19:00:13Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videopG67DJbwerY);

const videob9wuhGGiOwg: Video = {
  id: 'b9wuhGGiOwg',
  channel: channelTrashTasteHighlights,
  title: 'Dorei Usagi to Anthony: The Doujin with Every Tag',
  publishedAt: '2021-06-19T20:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videob9wuhGGiOwg);

const videougI5tc7STbI: Video = {
  id: 'ugI5tc7STbI',
  channel: channelTrashTasteHighlights,
  title: 'The Best Job a Man Can Have',
  publishedAt: '2021-06-19T21:00:30Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videougI5tc7STbI);

const videomMorxueQ9MI: Video = {
  id: 'mMorxueQ9MI',
  channel: channelTrashTasteHighlights,
  title: "Succubi's Supporter: The Gateway Doujin",
  publishedAt: '2021-06-20T19:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videomMorxueQ9MI);

const videocAsOsSmRX6E: Video = {
  id: 'cAsOsSmRX6E',
  channel: channelTrashTasteHighlights,
  title: 'The "Real" Ending to Oreimo is Uglier Than We Thought',
  publishedAt: '2021-06-20T21:00:18Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videocAsOsSmRX6E);

const videof4ccSfBUD30: Video = {
  id: 'f4ccSfBUD30',
  channel: channelTrashTasteHighlights,
  title: 'Garnt Loves it When Taboos are Broken',
  publishedAt: '2021-06-21T19:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videof4ccSfBUD30);

const video0fI2tmHxyiY: Video = {
  id: '0fI2tmHxyiY',
  channel: channelTrashTasteHighlights,
  title: 'Pisu Hame Scientifically Explains How To Create "Best Girl"',
  publishedAt: '2021-06-21T20:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video0fI2tmHxyiY);

const videoKMYbCPiH6bo: Video = {
  id: 'KMYbCPiH6bo',
  channel: channelTrashTasteHighlights,
  title: 'Connor Makes a Rare Exception',
  publishedAt: '2021-06-22T21:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoKMYbCPiH6bo);

const videoqYItJc6VKAQ: Video = {
  id: 'qYItJc6VKAQ',
  channel: channelTrashTasteHighlights,
  title: 'So... We Finally Read Metamorphosis',
  publishedAt: '2021-06-23T20:00:19Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoqYItJc6VKAQ);

const videoU0M6igHoOYc: Video = {
  id: 'U0M6igHoOYc',
  channel: channelTrashTasteHighlights,
  title: 'Garnt Discovers a New Fetish',
  publishedAt: '2021-06-23T21:00:18Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoU0M6igHoOYc);

const videoYJAFbRRaex4: Video = {
  id: 'YJAFbRRaex4',
  channel: channelTrashTasteHighlights,
  title: 'The Inspiration Behind Metamorphisis',
  publishedAt: '2021-06-24T19:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoYJAFbRRaex4);

const video55Vn_vyGK64: Video = {
  id: '55Vn_vyGK64',
  channel: channelTrashTasteHighlights,
  title: 'The Doujin Tier List',
  publishedAt: '2021-06-24T20:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video55Vn_vyGK64);

const videonoYSOJ7mq9M: Video = {
  id: 'noYSOJ7mq9M',
  channel: channelTrashTasteHighlights,
  title: 'How To Sleep on a Plane Correctly',
  publishedAt: '2021-06-26T20:00:23Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videonoYSOJ7mq9M);

const videov1dph3AJ_ck: Video = {
  id: 'v1dph3AJ-ck',
  channel: channelTrashTasteHighlights,
  title: 'Berserk is a Masterpiece',
  publishedAt: '2021-06-27T20:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videov1dph3AJ_ck);

const videowu7rCjgQ_o4: Video = {
  id: 'wu7rCjgQ-o4',
  channel: channelTrashTasteHighlights,
  title: 'We LOVE Anime Voice Acting',
  publishedAt: '2021-06-28T19:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videowu7rCjgQ_o4);

const videoIvu8HzwMkrs: Video = {
  id: 'Ivu8HzwMkrs',
  channel: channelTrashTasteHighlights,
  title: 'Is the Minions Movie an Anime??',
  publishedAt: '2021-06-28T20:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoIvu8HzwMkrs);

const videops_pneKJa5o: Video = {
  id: 'ps-pneKJa5o',
  channel: channelTrashTasteHighlights,
  title: 'Is Eden Going to be Any Good??',
  publishedAt: '2021-06-28T21:00:28Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videops_pneKJa5o);

const videoXjz7yIsCSjI: Video = {
  id: 'Xjz7yIsCSjI',
  channel: channelTrashTasteHighlights,
  title: 'Daniel Craig Almost Ruined a James Bond Movie',
  publishedAt: '2021-07-01T19:00:19Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoXjz7yIsCSjI);

const videoUqNSI74EB0U: Video = {
  id: 'UqNSI74EB0U',
  channel: channelTrashTasteHighlights,
  title: 'The Final Moments in the Old Trash Taste Studio',
  publishedAt: '2021-07-01T20:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoUqNSI74EB0U);

const videohtiMRs3ezfk: Video = {
  id: 'htiMRs3ezfk',
  channel: channelTrashTasteHighlights,
  title: 'Our Skincare Routines',
  publishedAt: '2021-07-03T19:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videohtiMRs3ezfk);

const videouh_mWy1UaW0: Video = {
  id: 'uh-mWy1UaW0',
  channel: channelTrashTasteHighlights,
  title: 'Trash Taste Held an Official Press Conference',
  publishedAt: '2021-07-03T21:00:14Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videouh_mWy1UaW0);

const videojRDpsLGQ9W8: Video = {
  id: 'jRDpsLGQ9W8',
  channel: channelTrashTasteHighlights,
  title: "Connor's Taxi Driver Tried to Bribe Him",
  publishedAt: '2021-07-04T19:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videojRDpsLGQ9W8);

const videoF57BWhkzFV8: Video = {
  id: 'F57BWhkzFV8',
  channel: channelTrashTasteHighlights,
  title: 'Garnt Short Circuited a Taxi Driver',
  publishedAt: '2021-07-04T22:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoF57BWhkzFV8);

const videoFADrH5jIHTs: Video = {
  id: 'FADrH5jIHTs',
  channel: channelTrashTasteHighlights,
  title: 'Connor Got His First Noise Complaint',
  publishedAt: '2021-07-05T20:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoFADrH5jIHTs);

const videoRiQKshWhRv4: Video = {
  id: 'RiQKshWhRv4',
  channel: channelTrashTasteHighlights,
  title: 'The Secret We Hide From our Moving Agency',
  publishedAt: '2021-07-05T21:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoRiQKshWhRv4);

const videojDVcIRUojwM: Video = {
  id: 'jDVcIRUojwM',
  channel: channelTrashTasteHighlights,
  title: "Garnt's INSANE Neighbor Story",
  publishedAt: '2021-07-06T19:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videojDVcIRUojwM);

const videozEXp1ELZRmg: Video = {
  id: 'zEXp1ELZRmg',
  channel: channelTrashTasteHighlights,
  title: "Connor's Cruel Punishment to his Roommates",
  publishedAt: '2021-07-06T20:00:15Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videozEXp1ELZRmg);

const video4GM_CriD1Dw: Video = {
  id: '4GM_CriD1Dw',
  channel: channelTrashTasteHighlights,
  title: "Stealing Your Parent's Credit Card",
  publishedAt: '2021-07-07T20:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video4GM_CriD1Dw);

const video1E9qyuOF3Dw: Video = {
  id: '1E9qyuOF3Dw',
  channel: channelTrashTasteHighlights,
  title: "Garnt's First Visit From the Tooth Fairy",
  publishedAt: '2021-07-07T21:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video1E9qyuOF3Dw);

const videoVWsjwGsldag: Video = {
  id: 'VWsjwGsldag',
  channel: channelTrashTasteHighlights,
  title: 'This Bible Story ANGERS Connor',
  publishedAt: '2021-07-08T19:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoVWsjwGsldag);

const videoFPARkS31esM: Video = {
  id: 'FPARkS31esM',
  channel: channelTrashTasteHighlights,
  title: 'Connor Gave a Speech to Kids About Being a YouTuber',
  publishedAt: '2021-07-08T20:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoFPARkS31esM);

const videofrOM2RZAjs0: Video = {
  id: 'frOM2RZAjs0',
  channel: channelTrashTasteHighlights,
  title: 'The One Thing We Regret NOT Doing as Teenagers',
  publishedAt: '2021-07-08T21:00:13Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videofrOM2RZAjs0);

const videonIPIXlRD08o: Video = {
  id: 'nIPIXlRD08o',
  channel: channelTrashTasteHighlights,
  title: 'Chris Collects His Award for Laziest Drip',
  publishedAt: '2021-07-10T19:00:11Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videonIPIXlRD08o);

const videoTAoZVhWrrLg: Video = {
  id: 'TAoZVhWrrLg',
  channel: channelTrashTasteHighlights,
  title: 'Joey and Chris Made a Song That Topped Music Charts',
  publishedAt: '2021-07-10T20:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoTAoZVhWrrLg);

const videogEeIxJpfC5c: Video = {
  id: 'gEeIxJpfC5c',
  channel: channelTrashTasteHighlights,
  title: 'Flying Over an Active Volcano is SCARY',
  publishedAt: '2021-07-10T21:00:19Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videogEeIxJpfC5c);

const videoZgASxdWdZbA: Video = {
  id: 'ZgASxdWdZbA',
  channel: channelTrashTasteHighlights,
  title: 'Trying to Find Good British Food in Japan',
  publishedAt: '2021-07-11T19:00:14Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoZgASxdWdZbA);

const videoL2torg_t0J4: Video = {
  id: 'L2torg_t0J4',
  channel: channelTrashTasteHighlights,
  title: 'Taking a Sulphur Bath is PAINFUL',
  publishedAt: '2021-07-11T21:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoL2torg_t0J4);

const video0yHcRYFduj4: Video = {
  id: '0yHcRYFduj4',
  channel: channelTrashTasteHighlights,
  title: 'How Chris Makes Journey Across Japan',
  publishedAt: '2021-07-12T20:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video0yHcRYFduj4);

const video_a6NVo3YFwk: Video = {
  id: '_a6NVo3YFwk',
  channel: channelTrashTasteHighlights,
  title: 'Chris Has Done EVERYTHING in Japan',
  publishedAt: '2021-07-13T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video_a6NVo3YFwk);

const videoOABBvoGGYX4: Video = {
  id: 'OABBvoGGYX4',
  channel: channelTrashTasteHighlights,
  title: 'Abroad in Japan Merch will be WEIRD',
  publishedAt: '2021-07-13T21:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoOABBvoGGYX4);

const video43AFqOZzcrU: Video = {
  id: '43AFqOZzcrU',
  channel: channelTrashTasteHighlights,
  title: 'Is Connor the Most Famous Welsh Person??',
  publishedAt: '2021-07-14T19:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video43AFqOZzcrU);

const videot6yIX2ftrSw: Video = {
  id: 't6yIX2ftrSw',
  channel: channelTrashTasteHighlights,
  title: 'Connor Fought a Herd of Rams Once',
  publishedAt: '2021-07-14T21:00:32Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videot6yIX2ftrSw);

const videoCUmlTYZvewA: Video = {
  id: 'CUmlTYZvewA',
  channel: channelTrashTasteHighlights,
  title: 'Garnt goes on a Rant about Swans',
  publishedAt: '2021-07-14T22:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoCUmlTYZvewA);

const videoCN_8KbQX_hc: Video = {
  id: 'CN_8KbQX_hc',
  channel: channelTrashTasteHighlights,
  title: "Joey's Bizarre Paranormal Experience",
  publishedAt: '2021-07-15T21:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoCN_8KbQX_hc);

const videod_pu5CrGLrw: Video = {
  id: 'd-pu5CrGLrw',
  channel: channelTrashTasteHighlights,
  title: 'Garnt Discovered the Secrets to Time Travel',
  publishedAt: '2021-07-15T22:00:30Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videod_pu5CrGLrw);

const video9iHeOJOiKF8: Video = {
  id: '9iHeOJOiKF8',
  channel: channelTrashTasteHighlights,
  title: "Japan's Thoughts on Foreigners During Lockdown",
  publishedAt: '2021-08-02T19:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video9iHeOJOiKF8);

const videoiCsExTV_OJg: Video = {
  id: 'iCsExTV_OJg',
  channel: channelTrashTasteHighlights,
  title: 'You Can Get Arrested in Japan for Modding a Video Game',
  publishedAt: '2021-08-02T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoiCsExTV_OJg);

const videodSiFhjbcTWw: Video = {
  id: 'dSiFhjbcTWw',
  channel: channelTrashTasteHighlights,
  title: "We're Going Back Home",
  publishedAt: '2021-08-03T19:00:11Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videodSiFhjbcTWw);

const video4eSxu5rT9K4: Video = {
  id: '4eSxu5rT9K4',
  channel: channelTrashTasteHighlights,
  title: 'Can You Smell Different Pollution Levels??',
  publishedAt: '2021-08-03T20:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video4eSxu5rT9K4);

const videoGUB_cBoe2xQ: Video = {
  id: 'GUB_cBoe2xQ',
  channel: channelTrashTasteHighlights,
  title: 'Who Steals GameCube Controllers from a Hospital??',
  publishedAt: '2021-08-05T19:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoGUB_cBoe2xQ);

const videoedXuXrYXdgU: Video = {
  id: 'edXuXrYXdgU',
  channel: channelTrashTasteHighlights,
  title: 'What are our Favorite Potato Chips??',
  publishedAt: '2021-08-05T21:00:30Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoedXuXrYXdgU);

const videolbwj2Z9wgQk: Video = {
  id: 'lbwj2Z9wgQk',
  channel: channelTrashTasteHighlights,
  title: 'Watching Movies Through Clips on YouTube',
  publishedAt: '2021-08-12T20:00:18Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videolbwj2Z9wgQk);

const videoj1MntiNqWn0: Video = {
  id: 'j1MntiNqWn0',
  channel: channelTrashTasteHighlights,
  title: 'What is the Best Martial Arts Movie',
  publishedAt: '2021-08-12T21:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoj1MntiNqWn0);

const videoX0N4zNx94iM: Video = {
  id: 'X0N4zNx94iM',
  channel: channelTrashTasteHighlights,
  title: 'Everybody Should Read One Punch Man',
  publishedAt: '2021-08-14T20:00:13Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoX0N4zNx94iM);

const video4x5wlJhVU9M: Video = {
  id: '4x5wlJhVU9M',
  channel: channelTrashTasteHighlights,
  title: 'Terra Formars is a Great Manga (but the anime sucks)',
  publishedAt: '2021-08-14T21:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video4x5wlJhVU9M);

const videoKBrknGYZRMg: Video = {
  id: 'KBrknGYZRMg',
  channel: channelTrashTasteHighlights,
  title: '"I\'m 14 and this is deep."',
  publishedAt: '2021-08-15T19:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoKBrknGYZRMg);

const videoBmv2XBJ1Rhg: Video = {
  id: 'Bmv2XBJ1Rhg',
  channel: channelTrashTasteHighlights,
  title: 'Vinland Saga Season Two Will Hit VERY Different',
  publishedAt: '2021-08-15T21:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoBmv2XBJ1Rhg);

const videofCtCoH4BZLA: Video = {
  id: 'fCtCoH4BZLA',
  channel: channelTrashTasteHighlights,
  title: 'Has Yu Yu Hakusho Aged Well??',
  publishedAt: '2021-08-16T20:00:18Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videofCtCoH4BZLA);

const videomZuPHEC8s_Q: Video = {
  id: 'mZuPHEC8s-Q',
  channel: channelTrashTasteHighlights,
  title: 'The Manga That Joey got his Avatar From',
  publishedAt: '2021-08-16T21:00:15Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videomZuPHEC8s_Q);

const videou2kla6YMFD0: Video = {
  id: 'u2kla6YMFD0',
  channel: channelTrashTasteHighlights,
  title: 'Beastars is a Modern Masterpiece',
  publishedAt: '2021-08-17T19:00:28Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videou2kla6YMFD0);

const videoVLKYRbhclKQ: Video = {
  id: 'VLKYRbhclKQ',
  channel: channelTrashTasteHighlights,
  title: 'Oyasumi Punpun is a BRUTAL Manga',
  publishedAt: '2021-08-17T20:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoVLKYRbhclKQ);

const videoSumqhsRaoF8: Video = {
  id: 'SumqhsRaoF8',
  channel: channelTrashTasteHighlights,
  title: 'How Can Someone Write Characters THIS Smart??',
  publishedAt: '2021-08-17T21:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoSumqhsRaoF8);

const videoSqBJJDGCSQA: Video = {
  id: 'SqBJJDGCSQA',
  channel: channelTrashTasteHighlights,
  title: 'Great Teacher Onizuka Turned Garnt into a Man',
  publishedAt: '2021-08-18T19:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoSqBJJDGCSQA);

const video1cMMUFMKGg0: Video = {
  id: '1cMMUFMKGg0',
  channel: channelTrashTasteHighlights,
  title: "Garnt Won't Shut Up About Domestic Girlfriend",
  publishedAt: '2021-08-19T19:00:31Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video1cMMUFMKGg0);

const videop3Rb2hPpVds: Video = {
  id: 'p3Rb2hPpVds',
  channel: channelTrashTasteHighlights,
  title: 'How Can You Make a Manga about Music??',
  publishedAt: '2021-08-19T21:00:14Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videop3Rb2hPpVds);

const video2iEEcI_RMjM: Video = {
  id: '2iEEcI_RMjM',
  channel: channelTrashTasteHighlights,
  title: 'Square Enix Took Over the Tokyo Olympics',
  publishedAt: '2021-08-21T20:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video2iEEcI_RMjM);

const videoZfmegorrKMw: Video = {
  id: 'ZfmegorrKMw',
  channel: channelTrashTasteHighlights,
  title: "What's Wrong with Pokemon Unite??",
  publishedAt: '2021-08-23T20:00:17Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoZfmegorrKMw);

const videooqMfB5kxqV0: Video = {
  id: 'oqMfB5kxqV0',
  channel: channelTrashTasteHighlights,
  title: 'Genshin Impact took over Twitch for a Day',
  publishedAt: '2021-08-23T21:00:31Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videooqMfB5kxqV0);

const videowKzlF_Emt7U: Video = {
  id: 'wKzlF_Emt7U',
  channel: channelTrashTasteHighlights,
  title: 'The Games That Hyped Us Up The Most',
  publishedAt: '2021-08-24T19:00:14Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videowKzlF_Emt7U);

const videocq5CKu6SIeU: Video = {
  id: 'cq5CKu6SIeU',
  channel: channelTrashTasteHighlights,
  title: "What's the Hype Around Video Game Press Conferences??",
  publishedAt: '2021-08-24T20:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videocq5CKu6SIeU);

const videoKhwTQx496Cs: Video = {
  id: 'KhwTQx496Cs',
  channel: channelTrashTasteHighlights,
  title: 'Should Pokemon Games be Harder??',
  publishedAt: '2021-08-24T21:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoKhwTQx496Cs);

const video7Zousytnv6w: Video = {
  id: '7Zousytnv6w',
  channel: channelTrashTasteHighlights,
  title: 'Garnt Figured out How to Beat The Red Ring of Death',
  publishedAt: '2021-08-25T20:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video7Zousytnv6w);

const videoCZbRCIN7Rkk: Video = {
  id: 'CZbRCIN7Rkk',
  channel: channelTrashTasteHighlights,
  title: 'The Worst Thing a Gamer Can Do',
  publishedAt: '2021-08-25T21:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoCZbRCIN7Rkk);

const video1JT1_e3Av8: Video = {
  id: '1JT1-_e3Av8',
  channel: channelTrashTasteHighlights,
  title: 'Is Jackass WORSE than YouTube Prank Channels??',
  publishedAt: '2021-08-26T19:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video1JT1_e3Av8);

const video1NUNGlAKW64: Video = {
  id: '1NUNGlAKW64',
  channel: channelTrashTasteHighlights,
  title: 'Will We Ever Start TikTok??',
  publishedAt: '2021-08-26T20:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video1NUNGlAKW64);

const videoz3BFgutkFTI: Video = {
  id: 'z3BFgutkFTI',
  channel: channelTrashTasteHighlights,
  title: 'Japanese Summers are KILLING US',
  publishedAt: '2021-08-29T19:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoz3BFgutkFTI);

const videoOwBd6XReft8: Video = {
  id: 'OwBd6XReft8',
  channel: channelTrashTasteHighlights,
  title: 'Getting Cancelled is just a YouTuber Vacation',
  publishedAt: '2021-08-30T19:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoOwBd6XReft8);

const videoBZS7jD7CYTg: Video = {
  id: 'BZS7jD7CYTg',
  channel: channelTrashTasteHighlights,
  title: 'Garnt Had a "Secret Source" to get Every Hollywood Movie',
  publishedAt: '2021-08-30T21:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoBZS7jD7CYTg);

const videoJNd7ETojUO4: Video = {
  id: 'JNd7ETojUO4',
  channel: channelTrashTasteHighlights,
  title: 'Watching Awkward Movie Scenes With Your Parents',
  publishedAt: '2021-08-31T19:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoJNd7ETojUO4);

const video0IjDRkY7I3E: Video = {
  id: '0IjDRkY7I3E',
  channel: channelTrashTasteHighlights,
  title: 'Watching "𝕋ℍ𝔼 𝔾𝕆𝕆𝔻 𝕊𝕋𝕌𝔽𝔽" With The Boys',
  publishedAt: '2021-08-31T20:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video0IjDRkY7I3E);

const videonX9NkfYB4J0: Video = {
  id: 'nX9NkfYB4J0',
  channel: channelTrashTasteHighlights,
  title: "Connor Can't Stop Watching LiveLeak Videos",
  publishedAt: '2021-09-01T19:00:13Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videonX9NkfYB4J0);

const videoB0_ko6ur3PY: Video = {
  id: 'B0_ko6ur3PY',
  channel: channelTrashTasteHighlights,
  title: "Garnt Realizes He's Getting Old",
  publishedAt: '2021-09-01T20:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoB0_ko6ur3PY);

const videorbtmjLZgV5Q: Video = {
  id: 'rbtmjLZgV5Q',
  channel: channelTrashTasteHighlights,
  title: 'The Great Australian Emu War',
  publishedAt: '2021-09-02T20:00:11Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videorbtmjLZgV5Q);

const videoZ9Xcweg0i3g: Video = {
  id: 'Z9Xcweg0i3g',
  channel: channelTrashTasteHighlights,
  title: "You Can't Throw Away Appliances in Japan",
  publishedAt: '2021-09-02T21:00:11Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoZ9Xcweg0i3g);

const videoDmurMD_LSC8: Video = {
  id: 'DmurMD_LSC8',
  channel: channelTrashTasteHighlights,
  title: "Sorry, We Don't Read Your Fan Mail",
  publishedAt: '2021-09-04T19:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoDmurMD_LSC8);

const videocTAntdHvbYw: Video = {
  id: 'cTAntdHvbYw',
  channel: channelTrashTasteHighlights,
  title: 'Why Trash Taste Will NEVER Have a Discord Server',
  publishedAt: '2021-09-04T21:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videocTAntdHvbYw);

const videoGyRXfWEnqHc: Video = {
  id: 'GyRXfWEnqHc',
  channel: channelTrashTasteHighlights,
  title: 'Our Honest Opinions on Paparazzi',
  publishedAt: '2021-09-05T19:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoGyRXfWEnqHc);

const videof0t77CD04_Y: Video = {
  id: 'f0t77CD04-Y',
  channel: channelTrashTasteHighlights,
  title: "You Can't Have Opinions on YouTube",
  publishedAt: '2021-09-05T21:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videof0t77CD04_Y);

const videoyxDcw_Dxj5M: Video = {
  id: 'yxDcw_Dxj5M',
  channel: channelTrashTasteHighlights,
  title: 'Why Negativity Gets More Views on YouTube',
  publishedAt: '2021-09-06T19:00:15Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoyxDcw_Dxj5M);

const video9A_2KiUJdw: Video = {
  id: '9A-_2KiUJdw',
  channel: channelTrashTasteHighlights,
  title: 'The Fate Fandom vs. The JoJo Fandom',
  publishedAt: '2021-09-06T20:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video9A_2KiUJdw);

const video_yC8_w_ptM: Video = {
  id: '_yC8_w-_ptM',
  channel: channelTrashTasteHighlights,
  title: 'Why Does Gatekeeping Still Exist??',
  publishedAt: '2021-09-06T21:00:11Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video_yC8_w_ptM);

const videor60x9FCh8LM: Video = {
  id: 'r60x9FCh8LM',
  channel: channelTrashTasteHighlights,
  title: 'Rediscovering Good YouTubers As You Get Older',
  publishedAt: '2021-09-07T19:00:13Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videor60x9FCh8LM);

const videoN_wxJ3X9R5Y: Video = {
  id: 'N-wxJ3X9R5Y',
  channel: channelTrashTasteHighlights,
  title: 'Is Wagyu Beef Overrated??',
  publishedAt: '2021-09-15T20:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoN_wxJ3X9R5Y);

const videoI_hAKIt96Og: Video = {
  id: 'I_hAKIt96Og',
  channel: channelTrashTasteHighlights,
  title: 'The Great Chicken Debate.',
  publishedAt: '2021-09-16T19:00:14Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoI_hAKIt96Og);

const video9AI0XxTDkw0: Video = {
  id: '9AI0XxTDkw0',
  channel: channelTrashTasteHighlights,
  title: 'Garnt got TROLLED by a Japanese Bank',
  publishedAt: '2021-09-18T19:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video9AI0XxTDkw0);

const videoAv_jbmBPEgw: Video = {
  id: 'Av-jbmBPEgw',
  channel: channelTrashTasteHighlights,
  title: 'The Biggest Scams in Japan',
  publishedAt: '2021-09-18T20:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoAv_jbmBPEgw);

const videoovgJVtQ0ef0: Video = {
  id: 'ovgJVtQ0ef0',
  channel: channelTrashTasteHighlights,
  title: 'How Can We Protect our Parents from Scammers??',
  publishedAt: '2021-09-19T19:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoovgJVtQ0ef0);

const videoqL181srGQyI: Video = {
  id: 'qL181srGQyI',
  channel: channelTrashTasteHighlights,
  title: 'We Thought our Manager Tried to Scam Us',
  publishedAt: '2021-09-19T20:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoqL181srGQyI);

const videouvtlwi7L_yQ: Video = {
  id: 'uvtlwi7L_yQ',
  channel: channelTrashTasteHighlights,
  title: 'Trash Taste Reacts to the FINAL Evangelion Movie',
  publishedAt: '2021-09-20T19:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videouvtlwi7L_yQ);

const videoXBqNzdolpRU: Video = {
  id: 'XBqNzdolpRU',
  channel: channelTrashTasteHighlights,
  title: "You SHOULDN'T Overanalyze Evangelion",
  publishedAt: '2021-09-21T19:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoXBqNzdolpRU);

const video_R_KPbNYumc: Video = {
  id: '_R_KPbNYumc',
  channel: channelTrashTasteHighlights,
  title: 'JK Rowling Made Harry Potter WAY TOO WEIRD',
  publishedAt: '2021-09-22T19:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video_R_KPbNYumc);

const videoOmQPjFMfbrU: Video = {
  id: 'OmQPjFMfbrU',
  channel: channelTrashTasteHighlights,
  title: 'Recycling in Japan is IMPOSSIBLE',
  publishedAt: '2021-09-22T20:00:13Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoOmQPjFMfbrU);

const video0aHiMoZfGBg: Video = {
  id: '0aHiMoZfGBg',
  channel: channelTrashTasteHighlights,
  title: "We're Constantly Testing the Limits of our Neighbors",
  publishedAt: '2021-09-23T19:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video0aHiMoZfGBg);

const videoSKp8mGOwWSg: Video = {
  id: 'SKp8mGOwWSg',
  channel: channelTrashTasteHighlights,
  title: 'What Even is "D R I P"??',
  publishedAt: '2021-09-23T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoSKp8mGOwWSg);

const videoyldok6lllIU: Video = {
  id: 'yldok6lllIU',
  channel: channelTrashTasteHighlights,
  title: 'The Weirdest Things Meilyne Has Seen Us Do',
  publishedAt: '2021-09-26T19:00:30Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoyldok6lllIU);

const video7o0QnBVd2hQ: Video = {
  id: '7o0QnBVd2hQ',
  channel: channelTrashTasteHighlights,
  title: 'Buffets Around the World are ALL Different',
  publishedAt: '2021-09-27T19:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video7o0QnBVd2hQ);

const videocRB4iNC1z_8: Video = {
  id: 'cRB4iNC1z-8',
  channel: channelTrashTasteHighlights,
  title: 'What our American Manager Thinks About our Opinions on America',
  publishedAt: '2021-09-27T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videocRB4iNC1z_8);

const videohEXHXtjJ_hY: Video = {
  id: 'hEXHXtjJ-hY',
  channel: channelTrashTasteHighlights,
  title: "Australia Doesn't Have ANY Cool History",
  publishedAt: '2021-09-27T21:00:32Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videohEXHXtjJ_hY);

const video2ZS7vyMMHPQ: Video = {
  id: '2ZS7vyMMHPQ',
  channel: channelTrashTasteHighlights,
  title: "Being British Isn't Cool Anymore",
  publishedAt: '2021-09-28T19:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video2ZS7vyMMHPQ);

const videoHx4J9R8Uvl4: Video = {
  id: 'Hx4J9R8Uvl4',
  channel: channelTrashTasteHighlights,
  title: 'Meilyne Loves $90 Coffee',
  publishedAt: '2021-09-29T21:00:19Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoHx4J9R8Uvl4);

const video8xnuSR4a38g: Video = {
  id: '8xnuSR4a38g',
  channel: channelTrashTasteHighlights,
  title: 'Frozen Fish VS. Fresh Fish',
  publishedAt: '2021-09-30T21:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video8xnuSR4a38g);

const video7Ovo7gl5hxk: Video = {
  id: '7Ovo7gl5hxk',
  channel: channelTrashTasteHighlights,
  title: 'Who is Chris Chan??',
  publishedAt: '2021-10-02T19:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video7Ovo7gl5hxk);

const videomBMJKW93tjk: Video = {
  id: 'mBMJKW93tjk',
  channel: channelTrashTasteHighlights,
  title: 'This is What NOT To Do at a Gamestore',
  publishedAt: '2021-10-04T19:00:13Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videomBMJKW93tjk);

const videoswUEiNIbROc: Video = {
  id: 'swUEiNIbROc',
  channel: channelTrashTasteHighlights,
  title: 'Chris Chan Lived in a TERRIBLE Home',
  publishedAt: '2021-10-04T20:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoswUEiNIbROc);

const videoauoM_MKBIUw: Video = {
  id: 'auoM_MKBIUw',
  channel: channelTrashTasteHighlights,
  title: "Chris Chan's Transitioning Period Wasn't Pretty",
  publishedAt: '2021-10-05T19:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoauoM_MKBIUw);

const videobNZQzZtTfRQ: Video = {
  id: 'bNZQzZtTfRQ',
  channel: channelTrashTasteHighlights,
  title: 'Is This The End for Chris Chan??',
  publishedAt: '2021-10-05T21:00:18Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videobNZQzZtTfRQ);

const videoU_W7TuAYtIs: Video = {
  id: 'U_W7TuAYtIs',
  channel: channelTrashTasteHighlights,
  title: "Chris Chan's STRANGE Upbringing",
  publishedAt: '2021-10-06T19:00:14Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoU_W7TuAYtIs);

const videoktKJwj_oh9w: Video = {
  id: 'ktKJwj-oh9w',
  channel: channelTrashTasteHighlights,
  title: 'The Man in the Pickle Suit',
  publishedAt: '2021-10-07T19:00:28Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoktKJwj_oh9w);

const videoT8_Yzb6geOU: Video = {
  id: 'T8-Yzb6geOU',
  channel: channelTrashTasteHighlights,
  title: 'PewDiePie is NEVER Coming to the Podcast Now',
  publishedAt: '2021-10-09T19:00:17Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoT8_Yzb6geOU);

const video5n6liZyS0Ow: Video = {
  id: '5n6liZyS0Ow',
  channel: channelTrashTasteHighlights,
  title: 'Why We Try to Avoid Discussing Politics',
  publishedAt: '2021-10-09T20:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video5n6liZyS0Ow);

const videoVbgOtncnvqg: Video = {
  id: 'VbgOtncnvqg',
  channel: channelTrashTasteHighlights,
  title: 'Sydney used to be EXTREMELY Patriotic',
  publishedAt: '2021-10-09T21:00:20Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoVbgOtncnvqg);

const videoj0fPsd2b2KI: Video = {
  id: 'j0fPsd2b2KI',
  channel: channelTrashTasteHighlights,
  title: 'One of the Biggest Tragedies in Welsh History',
  publishedAt: '2021-10-10T19:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoj0fPsd2b2KI);

const videoSOVymmtcnXI: Video = {
  id: 'SOVymmtcnXI',
  channel: channelTrashTasteHighlights,
  title: 'Connor Forgot to get a Visa to Enter the USA',
  publishedAt: '2021-10-10T20:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoSOVymmtcnXI);

const videodQw5Sl0iOOA: Video = {
  id: 'dQw5Sl0iOOA',
  channel: channelTrashTasteHighlights,
  title: 'Tourism in the UK Hits DIFFERENT',
  publishedAt: '2021-10-11T19:00:23Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videodQw5Sl0iOOA);

const videot_A1mMg1AtM: Video = {
  id: 't-A1mMg1AtM',
  channel: channelTrashTasteHighlights,
  title: 'Joey Likes to Troll his Friends who come to Japan',
  publishedAt: '2021-10-11T20:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videot_A1mMg1AtM);

const videorykpzN9jRo8: Video = {
  id: 'rykpzN9jRo8',
  channel: channelTrashTasteHighlights,
  title: 'Have We Gotten Recognized in our Home Countries??',
  publishedAt: '2021-10-12T19:00:13Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videorykpzN9jRo8);

const videoXBPxX_Irdgo: Video = {
  id: 'XBPxX_Irdgo',
  channel: channelTrashTasteHighlights,
  title: "The Reason why Connor doesn't wear a Shirt in Bed",
  publishedAt: '2021-10-12T20:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoXBPxX_Irdgo);

const video_spFXikEPzI: Video = {
  id: '_spFXikEPzI',
  channel: channelTrashTasteHighlights,
  title: 'You NEVER Get Used to the Earthquakes in Japan',
  publishedAt: '2021-10-13T19:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video_spFXikEPzI);

const videoDrX6cooF63s: Video = {
  id: 'DrX6cooF63s',
  channel: channelTrashTasteHighlights,
  title: 'Would Public Baths Work in the UK??',
  publishedAt: '2021-10-13T20:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoDrX6cooF63s);

const videoBM3H_URnmJ0: Video = {
  id: 'BM3H-URnmJ0',
  channel: channelTrashTasteHighlights,
  title: 'Garnt has Stinky Bug-infested Trash',
  publishedAt: '2021-10-14T20:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoBM3H_URnmJ0);

const videoA1DXPPUYn4o: Video = {
  id: 'A1DXPPUYn4o',
  channel: channelTrashTasteHighlights,
  title: 'Connor and Garnt went back to the UK',
  publishedAt: '2021-10-16T19:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoA1DXPPUYn4o);

const videohfsY8RLrJ48: Video = {
  id: 'hfsY8RLrJ48',
  channel: channelTrashTasteHighlights,
  title: 'The BIGGEST Difference Between Japan and England',
  publishedAt: '2021-10-16T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videohfsY8RLrJ48);

const videoVHAFudHRjZk: Video = {
  id: 'VHAFudHRjZk',
  channel: channelTrashTasteHighlights,
  title: 'Top Tier Restaurants in Japan are Cheaper than Expensive Restaurants in the UK',
  publishedAt: '2021-10-17T19:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoVHAFudHRjZk);

const videoaeNqty8Rwvo: Video = {
  id: 'aeNqty8Rwvo',
  channel: channelTrashTasteHighlights,
  title: "Connor's Airport Prank GONE WRONG",
  publishedAt: '2021-10-17T20:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoaeNqty8Rwvo);

const video9Sgi6PW1X_Y: Video = {
  id: '9Sgi6PW1X_Y',
  channel: channelTrashTasteHighlights,
  title: 'Travelling Back to Japan was like being Herded like Cattle',
  publishedAt: '2021-10-18T19:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video9Sgi6PW1X_Y);

const videoN7RXEA46mNA: Video = {
  id: 'N7RXEA46mNA',
  channel: channelTrashTasteHighlights,
  title: 'Connors Quarantine Hotel had Armed Guards',
  publishedAt: '2021-10-18T20:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoN7RXEA46mNA);

const videou_Bk4knViqg: Video = {
  id: 'u_Bk4knViqg',
  channel: channelTrashTasteHighlights,
  title: "Zedd's Controversial Quarantine Experience",
  publishedAt: '2021-10-19T20:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videou_Bk4knViqg);

const videoSkq_ih2239I: Video = {
  id: 'Skq-ih2239I',
  channel: channelTrashTasteHighlights,
  title: 'Connor did a Stream that Lasted 70 HOURS',
  publishedAt: '2021-10-20T20:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoSkq_ih2239I);

const videooCr0kW_dT8U: Video = {
  id: 'oCr0kW_dT8U',
  channel: channelTrashTasteHighlights,
  title: 'Should Garnt Grow a Beard??',
  publishedAt: '2021-10-21T19:00:32Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videooCr0kW_dT8U);

const videoDvNftusAibg: Video = {
  id: 'DvNftusAibg',
  channel: channelTrashTasteHighlights,
  title: 'Garnt Spent 2 Weeks Straight Playing Tales of Arise',
  publishedAt: '2021-10-21T20:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoDvNftusAibg);

const videoJl7cr9jaB0k: Video = {
  id: 'Jl7cr9jaB0k',
  channel: channelTrashTasteHighlights,
  title: "Sora's Announcement for Smash Bros Ultimate",
  publishedAt: '2021-10-21T21:00:17Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoJl7cr9jaB0k);

const videoQg_CxOTLzCQ: Video = {
  id: 'Qg_CxOTLzCQ',
  channel: channelTrashTasteHighlights,
  title: 'Chris Broad is a Boomer with Memes',
  publishedAt: '2021-10-23T19:00:13Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoQg_CxOTLzCQ);

const videoXilUi6Am010: Video = {
  id: 'XilUi6Am010',
  channel: channelTrashTasteHighlights,
  title: 'Japanese TikTok has "Questionable" Content',
  publishedAt: '2021-10-23T20:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoXilUi6Am010);

const videoVePyLGkZD2U: Video = {
  id: 'VePyLGkZD2U',
  channel: channelTrashTasteHighlights,
  title: 'Why Are YouTubers Paid This Much??',
  publishedAt: '2021-10-24T20:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoVePyLGkZD2U);

const videopQEVBm4g1HQ: Video = {
  id: 'pQEVBm4g1HQ',
  channel: channelTrashTasteHighlights,
  title: "This MASSIVE Twitch Leak wasn't Actually That Surprising",
  publishedAt: '2021-10-25T19:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videopQEVBm4g1HQ);

const videoACJmSmIOd4w: Video = {
  id: 'ACJmSmIOd4w',
  channel: channelTrashTasteHighlights,
  title: 'Talking About Our Problems is HARD, But We All Need To Do It',
  publishedAt: '2021-10-27T19:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoACJmSmIOd4w);

const videoJcfoT8fDA_k: Video = {
  id: 'JcfoT8fDA-k',
  channel: channelTrashTasteHighlights,
  title: 'What Your Pooping Techniques Say About Your Personality',
  publishedAt: '2021-10-27T20:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoJcfoT8fDA_k);

const videoFz2Zk01wleQ: Video = {
  id: 'Fz2Zk01wleQ',
  channel: channelTrashTasteHighlights,
  title: 'We Were All Lied to about "Healthy Foods"',
  publishedAt: '2021-10-31T19:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoFz2Zk01wleQ);

const videofHHwgrJUIZU: Video = {
  id: 'fHHwgrJUIZU',
  channel: channelTrashTasteHighlights,
  title: "Baki is CRAZIER than JoJo's Bizarre Adventure",
  publishedAt: '2021-10-31T20:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videofHHwgrJUIZU);

const videodsQt82YRxYs: Video = {
  id: 'dsQt82YRxYs',
  channel: channelTrashTasteHighlights,
  title: "Internet Cafe's in London are TOO EXPENSIVE",
  publishedAt: '2021-11-01T19:00:21Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videodsQt82YRxYs);

const videoNz0Zu8x_38w: Video = {
  id: 'Nz0Zu8x-38w',
  channel: channelTrashTasteHighlights,
  title: "The Moving Company Saw Sydney's WEIRD Stuff",
  publishedAt: '2021-11-01T20:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoNz0Zu8x_38w);

const videoMFwu6tGi4w8: Video = {
  id: 'MFwu6tGi4w8',
  channel: channelTrashTasteHighlights,
  title: 'Garnt went Fishing and Learnt an Important Life Lesson',
  publishedAt: '2021-11-02T20:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoMFwu6tGi4w8);

const videoBH4EbAigWSc: Video = {
  id: 'BH4EbAigWSc',
  channel: channelTrashTasteHighlights,
  title: 'Is It Stupid to Believe in Ghosts??',
  publishedAt: '2021-11-03T20:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoBH4EbAigWSc);

const videoUJAHex_FGps: Video = {
  id: 'UJAHex_FGps',
  channel: channelTrashTasteHighlights,
  title: 'Connor has an Existential Crisis in this Video',
  publishedAt: '2021-11-04T19:00:15Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoUJAHex_FGps);

const videoLqtXWoXrPko: Video = {
  id: 'LqtXWoXrPko',
  channel: channelTrashTasteHighlights,
  title: 'Chris Pratt will be Voicing Over Trash Taste',
  publishedAt: '2021-11-07T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoLqtXWoXrPko);

const videoQk6_T5_my6o: Video = {
  id: 'Qk6-T5_my6o',
  channel: channelTrashTasteHighlights,
  title: 'Garnt has Nobody to Talk About Anime with...',
  publishedAt: '2021-11-08T20:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoQk6_T5_my6o);

const videoTcegVWezsIc: Video = {
  id: 'TcegVWezsIc',
  channel: channelTrashTasteHighlights,
  title: 'Connor Actually has NO DRIP',
  publishedAt: '2021-11-09T21:00:18Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoTcegVWezsIc);

const videotSubotm6iQI: Video = {
  id: 'tSubotm6iQI',
  channel: channelTrashTasteHighlights,
  title: 'Can you REALLY Understand Culture??',
  publishedAt: '2021-11-11T19:00:31Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videotSubotm6iQI);

const videoXODRys_8_v8: Video = {
  id: 'XODRys_8-v8',
  channel: channelTrashTasteHighlights,
  title: 'The UK is NOT Doing Too Well Right Now...',
  publishedAt: '2021-11-11T20:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoXODRys_8_v8);

const videoEBXzfScjJUg: Video = {
  id: 'EBXzfScjJUg',
  channel: channelTrashTasteHighlights,
  title: 'The Power of the Internet is TOO MUCH',
  publishedAt: '2021-11-11T21:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoEBXzfScjJUg);

const videor_dsUnRxR6g: Video = {
  id: 'r-dsUnRxR6g',
  channel: channelTrashTasteHighlights,
  title: 'This is the HARDEST Thing About Being a VTuber',
  publishedAt: '2021-11-14T20:00:08Z',
  tags: [
    'Highlights',
    'Trash Taste Highlights',
    'This',
    'is',
    'the',
    'HARDEST',
    'Thing',
    'About',
    'Being',
    'VTuber',
  ],
};
channelTrashTasteHighlights.videos.push(videor_dsUnRxR6g);

const videoOV3tto12jC8: Video = {
  id: 'OV3tto12jC8',
  channel: channelTrashTasteHighlights,
  title: 'How Mori Calliope Learned to Stream',
  publishedAt: '2021-11-14T21:00:14Z',
  tags: [
    'Highlights',
    'Trash Taste Highlights',
    'How',
    'Mori',
    'Calliope',
    'Learned',
    'to',
    'Stream',
    'Mori Calliope',
  ],
};
channelTrashTasteHighlights.videos.push(videoOV3tto12jC8);

const videojExIPruwgIg: Video = {
  id: 'jExIPruwgIg',
  channel: channelTrashTasteHighlights,
  title: 'Garnt Picks Films to Watch by Looking For Memes',
  publishedAt: '2021-11-16T20:00:09Z',
  tags: [
    'Highlights',
    'Trash Taste Highlights',
    'Picks',
    'Films',
    'to',
    'Watch',
    'by',
    'Looking',
    'For',
    'Memes',
  ],
};
channelTrashTasteHighlights.videos.push(videojExIPruwgIg);

const videoin4J50kSjb0: Video = {
  id: 'in4J50kSjb0',
  channel: channelTrashTasteHighlights,
  title: 'What Anime does Mori Calliope Watch??',
  publishedAt: '2021-11-17T19:00:13Z',
  tags: [
    'Highlights',
    'Trash Taste Highlights',
    'What',
    'does',
    'Mori',
    'Calliope',
    'Mori Calliope',
    'Watch',
  ],
};
channelTrashTasteHighlights.videos.push(videoin4J50kSjb0);

const videovGSjkACBj1s: Video = {
  id: 'vGSjkACBj1s',
  channel: channelTrashTasteHighlights,
  title: "Why We Don't Watch Anime Anymore",
  publishedAt: '2021-11-20T19:00:11Z',
  tags: ['Highlights', 'Trash Taste Highlights', 'Has', 'Recent', 'Become', 'TOO', 'Generic'],
};
channelTrashTasteHighlights.videos.push(videovGSjkACBj1s);

const video2YkCAV4Yojs: Video = {
  id: '2YkCAV4Yojs',
  channel: channelTrashTasteHighlights,
  title: 'Trash Taste Needs Tech Support',
  publishedAt: '2021-11-20T20:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video2YkCAV4Yojs);

const videoT4n4RbJCQFk: Video = {
  id: 'T4n4RbJCQFk',
  channel: channelTrashTasteHighlights,
  title: 'Actors Who Are WAY TOO GOOD at their Jobs',
  publishedAt: '2021-11-21T19:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoT4n4RbJCQFk);

const videouxiKlSjJCNI: Video = {
  id: 'uxiKlSjJCNI',
  channel: channelTrashTasteHighlights,
  title: 'Is Online Anonymity Disappearing??',
  publishedAt: '2021-11-21T20:00:21Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videouxiKlSjJCNI);

const video5_MuqmbJR2s: Video = {
  id: '5_MuqmbJR2s',
  channel: channelTrashTasteHighlights,
  title: 'Hideo Kojima has the WEIRDEST Ideas',
  publishedAt: '2021-11-22T20:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video5_MuqmbJR2s);

const videolWLhPtLkPL4: Video = {
  id: 'lWLhPtLkPL4',
  channel: channelTrashTasteHighlights,
  title: 'Why You NEED to Eat Sea Urchin',
  publishedAt: '2021-11-23T20:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videolWLhPtLkPL4);

const videoRKXJWAFy32k: Video = {
  id: 'RKXJWAFy32k',
  channel: channelTrashTasteHighlights,
  title: 'Sending HORRIBLE Food Back in a Restaurant',
  publishedAt: '2021-11-24T20:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoRKXJWAFy32k);

const videoxvhdVetWrDc: Video = {
  id: 'xvhdVetWrDc',
  channel: channelTrashTasteHighlights,
  title: 'Why Japanese People Ignore the Laws',
  publishedAt: '2021-11-25T19:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoxvhdVetWrDc);

const videoxeKQBsCvnf0: Video = {
  id: 'xeKQBsCvnf0',
  channel: channelTrashTasteHighlights,
  title: 'What the Heck is "Guy Fawkes Day"??',
  publishedAt: '2021-11-28T20:00:20Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoxeKQBsCvnf0);

const videoXsvUAHyyEME: Video = {
  id: 'XsvUAHyyEME',
  channel: channelTrashTasteHighlights,
  title: 'We Get Angry over Measuring Units',
  publishedAt: '2021-11-29T19:00:23Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoXsvUAHyyEME);

const videoBr6NFgukXnE: Video = {
  id: 'Br6NFgukXnE',
  channel: channelTrashTasteHighlights,
  title: "The Most Expensive Gifts We've Ever Received",
  publishedAt: '2021-11-30T19:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoBr6NFgukXnE);

const videoKi7od5Wwhag: Video = {
  id: 'Ki7od5Wwhag',
  channel: channelTrashTasteHighlights,
  title: 'Using Hypnosis to Give the PERFECT Gift',
  publishedAt: '2021-11-30T20:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoKi7od5Wwhag);

const videoy7TQnfNS9kI: Video = {
  id: 'y7TQnfNS9kI',
  channel: channelTrashTasteHighlights,
  title: 'Is Japan Milking Anime a Little TOO MUCH??',
  publishedAt: '2021-12-01T20:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoy7TQnfNS9kI);

const videoyq68u5AL_ls: Video = {
  id: 'yq68u5AL-ls',
  channel: channelTrashTasteHighlights,
  title: "Who's is the Most Recognizable Anime Character??",
  publishedAt: '2021-12-02T19:00:18Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoyq68u5AL_ls);

const videocb2oPFleZTg: Video = {
  id: 'cb2oPFleZTg',
  channel: channelTrashTasteHighlights,
  title: 'Connor got a FANCY New Phone',
  publishedAt: '2021-12-04T19:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videocb2oPFleZTg);

const videoa2_ohEcx2J8: Video = {
  id: 'a2-ohEcx2J8',
  channel: channelTrashTasteHighlights,
  title: 'Garnt has a Problem with Closing his Google Chrome Tabs',
  publishedAt: '2021-12-05T19:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoa2_ohEcx2J8);

const videocjrNbs66nu0: Video = {
  id: 'cjrNbs66nu0',
  channel: channelTrashTasteHighlights,
  title: 'Weird Ways We Got Punished at School',
  publishedAt: '2021-12-05T20:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videocjrNbs66nu0);

const videokyQ6kZnHfgU: Video = {
  id: 'kyQ6kZnHfgU',
  channel: channelTrashTasteHighlights,
  title: 'Connor Paid $1000 for the Drip Goku Jacket',
  publishedAt: '2021-12-06T19:00:29Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videokyQ6kZnHfgU);

const videosA4yHOTQHjo: Video = {
  id: 'sA4yHOTQHjo',
  channel: channelTrashTasteHighlights,
  title: 'Sizes in Japan vs. Sizes in USA',
  publishedAt: '2021-12-06T20:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videosA4yHOTQHjo);

const videoecxf1AyOx_I: Video = {
  id: 'ecxf1AyOx_I',
  channel: channelTrashTasteHighlights,
  title: 'Will We Ever Do a Spicy Food Challenge??',
  publishedAt: '2021-12-07T19:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoecxf1AyOx_I);

const videolLiNqGX2ai4: Video = {
  id: 'lLiNqGX2ai4',
  channel: channelTrashTasteHighlights,
  title: 'Trying to Justify Why This Meme was a Good Investment',
  publishedAt: '2021-12-07T20:00:23Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videolLiNqGX2ai4);

const videovtPNIrmdnQg: Video = {
  id: 'vtPNIrmdnQg',
  channel: channelTrashTasteHighlights,
  title: 'So... We Watched Arcane.',
  publishedAt: '2021-12-08T19:00:32Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videovtPNIrmdnQg);

const videoNTicAwls_cA: Video = {
  id: 'NTicAwls-cA',
  channel: channelTrashTasteHighlights,
  title: "We Just Can't Keep Up with Superhero Movies",
  publishedAt: '2021-12-08T20:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoNTicAwls_cA);

const videoGsI4ddl7u6o: Video = {
  id: 'GsI4ddl7u6o',
  channel: channelTrashTasteHighlights,
  title: "Connor's Bizarre Food Company Complaints",
  publishedAt: '2021-12-09T20:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoGsI4ddl7u6o);

const videofqndAfwaivM: Video = {
  id: 'fqndAfwaivM',
  channel: channelTrashTasteHighlights,
  title: 'You Get Paid Just to go to Job Interviews in Japan',
  publishedAt: '2021-12-12T19:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videofqndAfwaivM);

const videowwxPd65eeDw: Video = {
  id: 'wwxPd65eeDw',
  channel: channelTrashTasteHighlights,
  title: "Joey Can't Figure out What Game Connor Has Played",
  publishedAt: '2021-12-18T20:00:22Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videowwxPd65eeDw);

const videoZC582mpO8zE: Video = {
  id: 'ZC582mpO8zE',
  channel: channelTrashTasteHighlights,
  title: 'Garnt Spent $500 on a FATE Statue',
  publishedAt: '2021-12-19T20:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoZC582mpO8zE);

const video8ODOus5Nr7A: Video = {
  id: '8ODOus5Nr7A',
  channel: channelTrashTasteHighlights,
  title: 'Joey Found Something that Could Beat Goku',
  publishedAt: '2021-12-19T21:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video8ODOus5Nr7A);

const videolIA4Bsz1hjM: Video = {
  id: 'lIA4Bsz1hjM',
  channel: channelTrashTasteHighlights,
  title: 'Joey Saw a Guy Spend $6,000 on Kirito Figures from SAO',
  publishedAt: '2021-12-20T21:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videolIA4Bsz1hjM);

const videoT_wDkdtNnHg: Video = {
  id: 'T-wDkdtNnHg',
  channel: channelTrashTasteHighlights,
  title: 'Connor Thinks He Definitely Bought an Evangelion Figure',
  publishedAt: '2021-12-21T20:00:14Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoT_wDkdtNnHg);

const videouQPT1RAFLac: Video = {
  id: 'uQPT1RAFLac',
  channel: channelTrashTasteHighlights,
  title: 'Connor Found a Figure From a Show NOBODY Has Seen',
  publishedAt: '2021-12-23T19:00:14Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videouQPT1RAFLac);

const videoqMM7LZ_O7YY: Video = {
  id: 'qMM7LZ-O7YY',
  channel: channelTrashTasteHighlights,
  title: 'Garnt Had to Ask for a Figure Recommendation and He Got...',
  publishedAt: '2021-12-23T20:00:28Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoqMM7LZ_O7YY);

const videoqITD_5nxueU: Video = {
  id: 'qITD_5nxueU',
  channel: channelTrashTasteHighlights,
  title: 'Garnt Just Bought a Gun',
  publishedAt: '2021-12-23T21:00:20Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoqITD_5nxueU);

const videoDjpZV_cIm_I: Video = {
  id: 'DjpZV-cIm-I',
  channel: channelTrashTasteHighlights,
  title: 'We Tried Michelin Star Ramen',
  publishedAt: '2021-12-26T19:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoDjpZV_cIm_I);

const video_P6WuWWhYG4: Video = {
  id: '-P6WuWWhYG4',
  channel: channelTrashTasteHighlights,
  title: 'In Japan, You Can Order McDonalds Workers to Smile',
  publishedAt: '2021-12-26T20:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video_P6WuWWhYG4);

const videortHwxdBaEoA: Video = {
  id: 'rtHwxdBaEoA',
  channel: channelTrashTasteHighlights,
  title: 'How Long Does It Take to Make a Gigguk Video??',
  publishedAt: '2021-12-27T19:00:31Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videortHwxdBaEoA);

const videoCMXdr1Ni2rY: Video = {
  id: 'CMXdr1Ni2rY',
  channel: channelTrashTasteHighlights,
  title: 'Are We Going to Quit Our Main Channels Soon??',
  publishedAt: '2021-12-27T20:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoCMXdr1Ni2rY);

const videonJ8HALDA8Rw: Video = {
  id: 'nJ8HALDA8Rw',
  channel: channelTrashTasteHighlights,
  title: 'Joey Discovers a New Hobby',
  publishedAt: '2021-12-29T19:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videonJ8HALDA8Rw);

const videon9UtOWNVOO4: Video = {
  id: 'n9UtOWNVOO4',
  channel: channelTrashTasteHighlights,
  title: "We Do Not Support NFT's",
  publishedAt: '2021-12-30T19:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videon9UtOWNVOO4);

const video4vnVpi3JxBM: Video = {
  id: '4vnVpi3JxBM',
  channel: channelTrashTasteHighlights,
  title: 'Connor Lost ALL of his YouTube Videos TWICE',
  publishedAt: '2022-01-01T19:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video4vnVpi3JxBM);

const videorZSTxA3MCnU: Video = {
  id: 'rZSTxA3MCnU',
  channel: channelTrashTasteHighlights,
  title: "YouTube's Copyright System is Getting Too Sussy",
  publishedAt: '2022-01-01T20:00:26Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videorZSTxA3MCnU);

const videoc0nVEvwRJ4g: Video = {
  id: 'c0nVEvwRJ4g',
  channel: channelTrashTasteHighlights,
  title: 'YouTube Did Us a Favor by Removing the Dislike Button',
  publishedAt: '2022-01-02T19:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoc0nVEvwRJ4g);

const videocTDKFut1NqI: Video = {
  id: 'cTDKFut1NqI',
  channel: channelTrashTasteHighlights,
  title: 'Garnt\'s "World Famous" Lasagna',
  publishedAt: '2022-01-03T19:00:13Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videocTDKFut1NqI);

const videoBomsweK2_70: Video = {
  id: 'BomsweK2_70',
  channel: channelTrashTasteHighlights,
  title: 'Japan Has Two Types of Pizzas...',
  publishedAt: '2022-01-03T20:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoBomsweK2_70);

const videofd_q6t3DDLE: Video = {
  id: 'fd-q6t3DDLE',
  channel: channelTrashTasteHighlights,
  title: 'The Great Pizza Debate of Trash Taste',
  publishedAt: '2022-01-04T19:00:29Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videofd_q6t3DDLE);

const video3WZu0DVX8yQ: Video = {
  id: '3WZu0DVX8yQ',
  channel: channelTrashTasteHighlights,
  title: "Garnt's EPIC Battle Against a Cockroach",
  publishedAt: '2022-01-05T19:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video3WZu0DVX8yQ);

const videoV5tIHpYBgSw: Video = {
  id: 'V5tIHpYBgSw',
  channel: channelTrashTasteHighlights,
  title: 'We Ate a Pizza with a Hot Dog Crust on the Show',
  publishedAt: '2022-01-06T19:00:15Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoV5tIHpYBgSw);

const videoV_y6F0JcHs4: Video = {
  id: 'V_y6F0JcHs4',
  channel: channelTrashTasteHighlights,
  title: 'Japan Loves Broccoli with Mayonnaise',
  publishedAt: '2022-01-06T20:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoV_y6F0JcHs4);

const video4wWa9EUMm7A: Video = {
  id: '4wWa9EUMm7A',
  channel: channelTrashTasteHighlights,
  title: 'Which Trash Taste Member has the Best YouTube Thumbnails??',
  publishedAt: '2022-01-15T19:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video4wWa9EUMm7A);

const videoPFGD9_jc6BM: Video = {
  id: 'PFGD9_jc6BM',
  channel: channelTrashTasteHighlights,
  title: 'Should We Wait 6 Years for Arcane Season 2??',
  publishedAt: '2022-01-16T19:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoPFGD9_jc6BM);

const video28mp6V1yAWQ: Video = {
  id: '28mp6V1yAWQ',
  channel: channelTrashTasteHighlights,
  title: 'The Trash Taste Special Nobody Got to See',
  publishedAt: '2022-01-17T20:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video28mp6V1yAWQ);

const videoOfMWyYd4_9k: Video = {
  id: 'OfMWyYd4_9k',
  channel: channelTrashTasteHighlights,
  title: 'We Went Camping in Japan and Almost Died',
  publishedAt: '2022-01-18T19:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoOfMWyYd4_9k);

const videorMiYBP3awn8: Video = {
  id: 'rMiYBP3awn8',
  channel: channelTrashTasteHighlights,
  title: 'Connor and Garnt Had to Cuddle for a Night to Survive',
  publishedAt: '2022-01-19T19:00:17Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videorMiYBP3awn8);

const videop245TNY0uvc: Video = {
  id: 'p245TNY0uvc',
  channel: channelTrashTasteHighlights,
  title: 'Should We Shave our Beards Off??',
  publishedAt: '2022-01-20T19:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videop245TNY0uvc);

const videoyMbpjkVbdkc: Video = {
  id: 'yMbpjkVbdkc',
  channel: channelTrashTasteHighlights,
  title: 'Why You Should Always Check Your Car Before Entering',
  publishedAt: '2022-01-20T20:00:11Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoyMbpjkVbdkc);

const video3AcqAlXD0ek: Video = {
  id: '3AcqAlXD0ek',
  channel: channelTrashTasteHighlights,
  title: "Do Kson's Parents Know That She's a Vtuber??",
  publishedAt: '2022-01-22T20:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video3AcqAlXD0ek);

const videonuBa6W5bzwA: Video = {
  id: 'nuBa6W5bzwA',
  channel: channelTrashTasteHighlights,
  title: 'Is Jujutsu Kaisen Overrated??',
  publishedAt: '2022-01-23T19:00:18Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videonuBa6W5bzwA);

const videoWbYEBGxVzqs: Video = {
  id: 'WbYEBGxVzqs',
  channel: channelTrashTasteHighlights,
  title: 'How to Deal with Backseaters on the Internet',
  publishedAt: '2022-01-25T19:00:23Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoWbYEBGxVzqs);

const videoAdjhCMveB6M: Video = {
  id: 'AdjhCMveB6M',
  channel: channelTrashTasteHighlights,
  title: 'Kson Throws Shade at the UK',
  publishedAt: '2022-01-27T19:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoAdjhCMveB6M);

const video7BAx_U9aw_w: Video = {
  id: '7BAx_U9aw_w',
  channel: channelTrashTasteHighlights,
  title: 'Why are Theme Parks so CREEPY??',
  publishedAt: '2022-01-27T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video7BAx_U9aw_w);

const videoWkvco5_zq6w: Video = {
  id: 'Wkvco5_zq6w',
  channel: channelTrashTasteHighlights,
  title: 'Crane Games are Forever Ruined for Us',
  publishedAt: '2022-01-29T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoWkvco5_zq6w);

const video_J1mhva5ap0: Video = {
  id: '_J1mhva5ap0',
  channel: channelTrashTasteHighlights,
  title: 'Trying to Figure out Which Anime Chris Should Watch',
  publishedAt: '2022-01-30T19:00:25Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video_J1mhva5ap0);

const videobcIGgUUKFeg: Video = {
  id: 'bcIGgUUKFeg',
  channel: channelTrashTasteHighlights,
  title: 'Someone Made an AI Program That Replicates Garnt',
  publishedAt: '2022-01-30T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videobcIGgUUKFeg);

const videoxrw5z1G63RY: Video = {
  id: 'xrw5z1G63RY',
  channel: channelTrashTasteHighlights,
  title: 'Chris got Water Tortured at a Massage Parlor',
  publishedAt: '2022-01-31T20:00:27Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoxrw5z1G63RY);

const videopLByHwd9dXw: Video = {
  id: 'pLByHwd9dXw',
  channel: channelTrashTasteHighlights,
  title: 'Chris Has a Better Studio Than Us',
  publishedAt: '2022-02-01T19:00:29Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videopLByHwd9dXw);

const videoTUbNTpW2690: Video = {
  id: 'TUbNTpW2690',
  channel: channelTrashTasteHighlights,
  title: "The WORST Medical Experiences We've Had",
  publishedAt: '2022-02-01T20:00:14Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoTUbNTpW2690);

const videoZfhKFwpnsuA: Video = {
  id: 'ZfhKFwpnsuA',
  channel: channelTrashTasteHighlights,
  title: 'Chris Looks Like a Boomer Wearing a Hoodie',
  publishedAt: '2022-02-02T20:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoZfhKFwpnsuA);

const videoq2EgPJs9FUM: Video = {
  id: 'q2EgPJs9FUM',
  channel: channelTrashTasteHighlights,
  title: "We Diss on America Because We're Jealous",
  publishedAt: '2022-02-03T19:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoq2EgPJs9FUM);

const videoGq70CMzKsTE: Video = {
  id: 'Gq70CMzKsTE',
  channel: channelTrashTasteHighlights,
  title: "Joey's Amazing Comeback at a Japanese Policeman",
  publishedAt: '2022-02-03T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoGq70CMzKsTE);

const videoDfqAy05XCyA: Video = {
  id: 'DfqAy05XCyA',
  channel: channelTrashTasteHighlights,
  title: 'How to be a Modern Day Online Entrepreneur',
  publishedAt: '2022-02-05T20:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoDfqAy05XCyA);

const videoOem9c8zTjeI: Video = {
  id: 'Oem9c8zTjeI',
  channel: channelTrashTasteHighlights,
  title: 'Have Pokémon Games Gotten WAY TOO EASY??',
  publishedAt: '2022-02-08T19:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoOem9c8zTjeI);

const videokIaXjFNKnK4: Video = {
  id: 'kIaXjFNKnK4',
  channel: channelTrashTasteHighlights,
  title: 'Why is Every Anime Set in a High School??',
  publishedAt: '2022-02-09T19:00:13Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videokIaXjFNKnK4);

const videokHeQ4QA0QiA: Video = {
  id: 'kHeQ4QA0QiA',
  channel: channelTrashTasteHighlights,
  title: 'So, We Watched Mushoku Tensei...',
  publishedAt: '2022-02-09T20:00:25Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videokHeQ4QA0QiA);

const videoTlHaD7YE1MM: Video = {
  id: 'TlHaD7YE1MM',
  channel: channelTrashTasteHighlights,
  title: 'The Twitch "TV Meta" is Absolutely Ridiculous',
  publishedAt: '2022-02-10T19:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoTlHaD7YE1MM);

const video5T0DK2yS4Z0: Video = {
  id: '5T0DK2yS4Z0',
  channel: channelTrashTasteHighlights,
  title: "Joey's Reality Shifts During an Episode",
  publishedAt: '2022-02-12T20:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video5T0DK2yS4Z0);

const videoeI3dP9MLN5U: Video = {
  id: 'eI3dP9MLN5U',
  channel: channelTrashTasteHighlights,
  title: 'Our Weird Experience with a Gaming Bar in the UK',
  publishedAt: '2022-02-13T20:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoeI3dP9MLN5U);

const video7uJcn2zr1Ek: Video = {
  id: '7uJcn2zr1Ek',
  channel: channelTrashTasteHighlights,
  title: 'Is Attack On Titan Going To Be Worth It In The End??',
  publishedAt: '2022-02-14T19:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video7uJcn2zr1Ek);

const videoqudK8drQYs0: Video = {
  id: 'qudK8drQYs0',
  channel: channelTrashTasteHighlights,
  title: "You Can't Escape Demon Slayer in Japan",
  publishedAt: '2022-02-14T20:00:13Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoqudK8drQYs0);

const video8WN5EPU3EME: Video = {
  id: '8WN5EPU3EME',
  channel: channelTrashTasteHighlights,
  title: "Connor Can't Stop Playing Jump King",
  publishedAt: '2022-02-16T19:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video8WN5EPU3EME);

const videopJznOUi69hs: Video = {
  id: 'pJznOUi69hs',
  channel: channelTrashTasteHighlights,
  title: 'Joey Begs Garnt NOT to Play Final Fantasy XIV Online',
  publishedAt: '2022-02-16T20:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videopJznOUi69hs);

const videoa7sLPTE09vI: Video = {
  id: 'a7sLPTE09vI',
  channel: channelTrashTasteHighlights,
  title: 'The Boys Argue Over Extinct Bananas',
  publishedAt: '2022-02-17T19:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoa7sLPTE09vI);

const videoZ9TuT_CIX80: Video = {
  id: 'Z9TuT_CIX80',
  channel: channelTrashTasteHighlights,
  title: "Connor Compares Garnt's Wedding to Jujutsu Kaisen",
  publishedAt: '2022-02-19T19:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoZ9TuT_CIX80);

const videopy6N2gRI6jk: Video = {
  id: 'py6N2gRI6jk',
  channel: channelTrashTasteHighlights,
  title: 'Is The Anime Community Toxic Now??',
  publishedAt: '2022-02-20T19:00:14Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videopy6N2gRI6jk);

const video0A8LIrgAesQ: Video = {
  id: '0A8LIrgAesQ',
  channel: channelTrashTasteHighlights,
  title: 'Drama Culture Was a Mistake',
  publishedAt: '2022-02-20T20:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video0A8LIrgAesQ);

const videoP7BPn_IUCEg: Video = {
  id: 'P7BPn-IUCEg',
  channel: channelTrashTasteHighlights,
  title: "You Can't Be Friends with EVERY YouTuber You Meet",
  publishedAt: '2022-02-21T19:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoP7BPn_IUCEg);

const videoq184NQEvltY: Video = {
  id: 'q184NQEvltY',
  channel: channelTrashTasteHighlights,
  title: 'When a Fan thought Joey was Gigguk',
  publishedAt: '2022-02-21T20:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoq184NQEvltY);

const videoSTIGFhFbU3Y: Video = {
  id: 'STIGFhFbU3Y',
  channel: channelTrashTasteHighlights,
  title: 'Whats our Names? Wrong Answers Only.',
  publishedAt: '2022-02-22T19:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoSTIGFhFbU3Y);

const videoc7aDCDd_WEg: Video = {
  id: 'c7aDCDd_WEg',
  channel: channelTrashTasteHighlights,
  title: 'Our Parents had WEIRD Hobbies',
  publishedAt: '2022-02-23T19:00:20Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoc7aDCDd_WEg);

const video0ViBQljiQ5E: Video = {
  id: '0ViBQljiQ5E',
  channel: channelTrashTasteHighlights,
  title: 'Watching Pokemon is a Life Hack',
  publishedAt: '2022-02-23T20:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video0ViBQljiQ5E);

const videog_GRzoOcMRo: Video = {
  id: 'g-GRzoOcMRo',
  channel: channelTrashTasteHighlights,
  title: 'The Dreams That Have Changed Our Lives',
  publishedAt: '2022-03-01T19:00:14Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videog_GRzoOcMRo);

const videoHvEKz4CQq2w: Video = {
  id: 'HvEKz4CQq2w',
  channel: channelTrashTasteHighlights,
  title: 'Learning to Lucid Dream Every Time You Sleep',
  publishedAt: '2022-03-01T20:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoHvEKz4CQq2w);

const videoZ7KcRKtYLg0: Video = {
  id: 'Z7KcRKtYLg0',
  channel: channelTrashTasteHighlights,
  title: 'Our WORST Sleep Paralysis Experiences',
  publishedAt: '2022-03-02T19:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoZ7KcRKtYLg0);

const videoDWGuZPTIbn4: Video = {
  id: 'DWGuZPTIbn4',
  channel: channelTrashTasteHighlights,
  title: "Connor Doesn't Sleep-Talk, He Sleep-Screams",
  publishedAt: '2022-03-03T19:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoDWGuZPTIbn4);

const videomhrmU2Hqtnk: Video = {
  id: 'mhrmU2Hqtnk',
  channel: channelTrashTasteHighlights,
  title: 'Joey Almost Pissed in his Parents Room while Sleepwalking',
  publishedAt: '2022-03-03T20:00:11Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videomhrmU2Hqtnk);

const videoB7SDc_z1LHU: Video = {
  id: 'B7SDc_z1LHU',
  channel: channelTrashTasteHighlights,
  title: 'Connor Talks About His Favorite Beeps and Boops',
  publishedAt: '2022-03-05T19:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoB7SDc_z1LHU);

const videoRJYjBDQ39cc: Video = {
  id: 'RJYjBDQ39cc',
  channel: channelTrashTasteHighlights,
  title: 'Garnt Was Lead Guitarist in a Rock Band',
  publishedAt: '2022-03-07T19:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoRJYjBDQ39cc);

const videovZYQU8kIFUQ: Video = {
  id: 'vZYQU8kIFUQ',
  channel: channelTrashTasteHighlights,
  title: 'Garnt got Sydney because He Texted Her "The Killers" Lyrics',
  publishedAt: '2022-03-07T20:00:25Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videovZYQU8kIFUQ);

const videoHvI_egcspFo: Video = {
  id: 'HvI_egcspFo',
  channel: channelTrashTasteHighlights,
  title: 'Garnts Trash Taste in Anime Music',
  publishedAt: '2022-03-08T19:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoHvI_egcspFo);

const videoSJXcVGNH8Kc: Video = {
  id: 'SJXcVGNH8Kc',
  channel: channelTrashTasteHighlights,
  title: 'Joey Explains Why He Loves "Midwest Emo" Music',
  publishedAt: '2022-03-10T19:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoSJXcVGNH8Kc);

const video0Jl2m_3_ws: Video = {
  id: '0Jl2m_3__ws',
  channel: channelTrashTasteHighlights,
  title: 'We Had VERY Different Physical Education Classes',
  publishedAt: '2022-03-16T21:30:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video0Jl2m_3_ws);

const videoiLipiqqjzDk: Video = {
  id: 'iLipiqqjzDk',
  channel: channelTrashTasteHighlights,
  title: 'Connor Almost Sunk a Sailboat',
  publishedAt: '2022-03-17T18:30:28Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoiLipiqqjzDk);

const videoHagzSkkxmqI: Video = {
  id: 'HagzSkkxmqI',
  channel: channelTrashTasteHighlights,
  title: 'How Connor Got Extorted in a Driving School',
  publishedAt: '2022-03-17T20:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoHagzSkkxmqI);

const videorWPq_VjNVKY: Video = {
  id: 'rWPq_VjNVKY',
  channel: channelTrashTasteHighlights,
  title: "Craziest Weather Phenomena We've Witnessed Fire Tornados",
  publishedAt: '2022-03-21T21:00:32Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videorWPq_VjNVKY);

const videoIaQgUeWMZ7s: Video = {
  id: 'IaQgUeWMZ7s',
  channel: channelTrashTasteHighlights,
  title: 'Would You ACTUALLY Want to be Immortal??',
  publishedAt: '2022-03-22T20:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoIaQgUeWMZ7s);

const videoV9ZxWhkq_1w: Video = {
  id: 'V9ZxWhkq-1w',
  channel: channelTrashTasteHighlights,
  title: 'Connor is Deathly Afraid of Deers',
  publishedAt: '2022-03-22T21:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoV9ZxWhkq_1w);

const videoHhU5eMLKkyE: Video = {
  id: 'HhU5eMLKkyE',
  channel: channelTrashTasteHighlights,
  title: 'Garnt Eats Cereal with Water',
  publishedAt: '2022-03-23T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoHhU5eMLKkyE);

const videoQuuePJucPBY: Video = {
  id: 'QuuePJucPBY',
  channel: channelTrashTasteHighlights,
  title: 'Connor Almost Died Trying to Impress a Date',
  publishedAt: '2022-03-24T20:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoQuuePJucPBY);

const videoJLEAVMA_Ul8: Video = {
  id: 'JLEAVMA_Ul8',
  channel: channelTrashTasteHighlights,
  title: 'Lifehacks That Are ACTUALLY Useful',
  publishedAt: '2022-03-24T20:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoJLEAVMA_Ul8);

const videoTIP_HkeJRCo: Video = {
  id: 'TIP-HkeJRCo',
  channel: channelTrashTasteHighlights,
  title: 'EVERYTHING Has Turned Into Reality TV',
  publishedAt: '2022-03-27T20:00:47Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoTIP_HkeJRCo);

const videoaCF6XB8wHdU: Video = {
  id: 'aCF6XB8wHdU',
  channel: channelTrashTasteHighlights,
  title: 'We Found The Most Wholesome Community on the Internet',
  publishedAt: '2022-03-28T19:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoaCF6XB8wHdU);

const videocIbM9qjXtSU: Video = {
  id: 'cIbM9qjXtSU',
  channel: channelTrashTasteHighlights,
  title: "Joey Can't Get a Haircut Without People Freaking Out",
  publishedAt: '2022-03-29T19:00:30Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videocIbM9qjXtSU);

const videoJbqrwGvYr4U: Video = {
  id: 'JbqrwGvYr4U',
  channel: channelTrashTasteHighlights,
  title: 'You Can\'t Call Anime "Mid" Anymore',
  publishedAt: '2022-03-30T19:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoJbqrwGvYr4U);

const videoC88oDkOwiz8: Video = {
  id: 'C88oDkOwiz8',
  channel: channelTrashTasteHighlights,
  title: 'What is the Greatest Reality TV Show Ever Made??',
  publishedAt: '2022-03-31T19:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoC88oDkOwiz8);

const videoEuLjbP6_GUc: Video = {
  id: 'EuLjbP6_GUc',
  channel: channelTrashTasteHighlights,
  title: 'Is Getting Bit by Bullet Ants Good For You??',
  publishedAt: '2022-04-05T19:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoEuLjbP6_GUc);

const videonM2YnfcDu0U: Video = {
  id: 'nM2YnfcDu0U',
  channel: channelTrashTasteHighlights,
  title: 'RIDICULOUS "Life Hacks" That Our Parents Made Us Believe',
  publishedAt: '2022-04-05T20:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videonM2YnfcDu0U);

const videocxQMmQYTLgY: Video = {
  id: 'cxQMmQYTLgY',
  channel: channelTrashTasteHighlights,
  title: "Video Game Graphics Haven't Changed Since the PS3",
  publishedAt: '2022-04-06T21:00:25Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videocxQMmQYTLgY);

const videoPtXvtJTX708: Video = {
  id: 'PtXvtJTX708',
  channel: channelTrashTasteHighlights,
  title: 'Joey Sweats Through His Face',
  publishedAt: '2022-04-09T19:00:15Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoPtXvtJTX708);

const video1BkxzMq6gBo: Video = {
  id: '1BkxzMq6gBo',
  channel: channelTrashTasteHighlights,
  title: "Connor's Apartment Stinks and We Don't Know Why",
  publishedAt: '2022-04-10T19:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video1BkxzMq6gBo);

const videowbwP_G1dt_c: Video = {
  id: 'wbwP-G1dt_c',
  channel: channelTrashTasteHighlights,
  title: 'Can We Get Garnt to Put His Hand in a Box of Bees??',
  publishedAt: '2022-04-10T20:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videowbwP_G1dt_c);

const videoPOxg6MMDuuc: Video = {
  id: 'POxg6MMDuuc',
  channel: channelTrashTasteHighlights,
  title: 'What Did The Extinct Giant Tortoise REALLY Taste Like??',
  publishedAt: '2022-04-11T19:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoPOxg6MMDuuc);

const videorYqUcD4B9zg: Video = {
  id: 'rYqUcD4B9zg',
  channel: channelTrashTasteHighlights,
  title: "The Most We've Cried Over a Piece of Fiction",
  publishedAt: '2022-04-13T19:00:30Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videorYqUcD4B9zg);

const videoIz_lLgefK74: Video = {
  id: 'Iz-lLgefK74',
  channel: channelTrashTasteHighlights,
  title: 'Connor Used to be an INSANE Achievement Hunter',
  publishedAt: '2022-04-13T20:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoIz_lLgefK74);

const videoUhmDetq3gNo: Video = {
  id: 'UhmDetq3gNo',
  channel: channelTrashTasteHighlights,
  title: 'We Survived a MASSIVE Earthquake in Japan',
  publishedAt: '2022-04-19T21:00:11Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoUhmDetq3gNo);

const videoDoIYV7rQ12I: Video = {
  id: 'DoIYV7rQ12I',
  channel: channelTrashTasteHighlights,
  title: 'The Aftermath of The Trash Taste 24 Hour Charity Stream',
  publishedAt: '2022-04-23T19:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoDoIYV7rQ12I);

const videot4F_pS9sg94: Video = {
  id: 't4F_pS9sg94',
  channel: channelTrashTasteHighlights,
  title: 'Why Does Every Restaurant Have a Secret Menu??',
  publishedAt: '2022-04-24T19:00:13Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videot4F_pS9sg94);

const videoJUbpJ5BHC4c: Video = {
  id: 'JUbpJ5BHC4c',
  channel: channelTrashTasteHighlights,
  title: 'Joey is Starting to Appreciate Spicy Food',
  publishedAt: '2022-04-24T20:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoJUbpJ5BHC4c);

const videoZ38lJK7W6EY: Video = {
  id: 'Z38lJK7W6EY',
  channel: channelTrashTasteHighlights,
  title: "Garnt was THAT Roommate You Didn't Want to Have",
  publishedAt: '2022-04-25T19:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoZ38lJK7W6EY);

const videoZkAGYaR28ts: Video = {
  id: 'ZkAGYaR28ts',
  channel: channelTrashTasteHighlights,
  title: 'Why was Boba Tea Ever Popular??',
  publishedAt: '2022-04-25T20:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoZkAGYaR28ts);

const videoy0kI20RzryI: Video = {
  id: 'y0kI20RzryI',
  channel: channelTrashTasteHighlights,
  title: "Themed Cafes in Japan Don't Put Effort into the Food",
  publishedAt: '2022-04-26T19:00:14Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoy0kI20RzryI);

const videoiHlf_W4ge6E: Video = {
  id: 'iHlf_W4ge6E',
  channel: channelTrashTasteHighlights,
  title: "Garnt's Street is Ruled by a Granny Mafia",
  publishedAt: '2022-04-27T19:00:26Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoiHlf_W4ge6E);

const videoUAMHFvqgjKc: Video = {
  id: 'UAMHFvqgjKc',
  channel: channelTrashTasteHighlights,
  title: "Where's the Line Between Smart and Edgy Anime??",
  publishedAt: '2022-04-28T19:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoUAMHFvqgjKc);

const videoQcPgZoCReNI: Video = {
  id: 'QcPgZoCReNI',
  channel: channelTrashTasteHighlights,
  title: "Anime Age Doesn't Make Sense",
  publishedAt: '2022-04-28T20:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoQcPgZoCReNI);

const videoyxzSMMJN8Rg: Video = {
  id: 'yxzSMMJN8Rg',
  channel: channelTrashTasteHighlights,
  title: 'Garnt had an Incest Marriage Interview',
  publishedAt: '2022-05-07T19:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoyxzSMMJN8Rg);

const videos2G0M18wTFU: Video = {
  id: 's2G0M18wTFU',
  channel: channelTrashTasteHighlights,
  title: 'The Trash Taste Wedding Special',
  publishedAt: '2022-05-08T19:00:24Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videos2G0M18wTFU);

const videoK_ZmtynQfjs: Video = {
  id: 'K-ZmtynQfjs',
  channel: channelTrashTasteHighlights,
  title: 'We Are An Actual Fire Hazard',
  publishedAt: '2022-05-09T20:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoK_ZmtynQfjs);

const videon1E9Hr4DI_U: Video = {
  id: 'n1E9Hr4DI_U',
  channel: channelTrashTasteHighlights,
  title: 'Trash Taste Are Officially Going to Anime Expo 2022',
  publishedAt: '2022-05-10T19:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videon1E9Hr4DI_U);

const videoAqrS_knRHKY: Video = {
  id: 'AqrS-knRHKY',
  channel: channelTrashTasteHighlights,
  title: 'Connor HATES the New Doctor Strange Film',
  publishedAt: '2022-05-10T20:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoAqrS_knRHKY);

const video1pYu3mNDKjc: Video = {
  id: '1pYu3mNDKjc',
  channel: channelTrashTasteHighlights,
  title: 'The BEST Shows to Watch RIGHT NOW',
  publishedAt: '2022-05-11T19:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video1pYu3mNDKjc);

const videoPbZUhLkDV6w: Video = {
  id: 'PbZUhLkDV6w',
  channel: channelTrashTasteHighlights,
  title: 'Will Elden Ring be Game of the Year??',
  publishedAt: '2022-05-12T19:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoPbZUhLkDV6w);

const video6yInZQqdudw: Video = {
  id: '6yInZQqdudw',
  channel: channelTrashTasteHighlights,
  title: 'Why Do Japanese People Do THIS On Their Phones??',
  publishedAt: '2022-05-14T19:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video6yInZQqdudw);

const videoXWC6CN0yTpA: Video = {
  id: 'XWC6CN0yTpA',
  channel: channelTrashTasteHighlights,
  title: 'Why Do Melons Need To Be Massaged??',
  publishedAt: '2022-05-14T20:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoXWC6CN0yTpA);

const videoySADPDDZ9qs: Video = {
  id: 'ySADPDDZ9qs',
  channel: channelTrashTasteHighlights,
  title: 'Garnt and Connor Paved The Way for Daidus',
  publishedAt: '2022-05-14T21:00:32Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoySADPDDZ9qs);

const videoTu8ExAzQmTo: Video = {
  id: 'Tu8ExAzQmTo',
  channel: channelTrashTasteHighlights,
  title: 'How Daidus Makes His Videos',
  publishedAt: '2022-05-16T19:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoTu8ExAzQmTo);

const videoH7NQKe4jX4o: Video = {
  id: 'H7NQKe4jX4o',
  channel: channelTrashTasteHighlights,
  title: "The Secret Behind Daidus' Face Reveal",
  publishedAt: '2022-05-18T19:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoH7NQKe4jX4o);

const video4cNd8V4afiM: Video = {
  id: '4cNd8V4afiM',
  channel: channelTrashTasteHighlights,
  title: 'How Daidus Met Connor',
  publishedAt: '2022-05-19T19:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video4cNd8V4afiM);

const videoT1lkoDTsMf0: Video = {
  id: 'T1lkoDTsMf0',
  channel: channelTrashTasteHighlights,
  title: 'Daidus Managed To Be a Worse PC Builder Than Joey',
  publishedAt: '2022-05-19T20:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoT1lkoDTsMf0);

const videocaZRgUOrEbw: Video = {
  id: 'caZRgUOrEbw',
  channel: channelTrashTasteHighlights,
  title: 'Hot Take of the Year and Out Of Context Clips',
  publishedAt: '2022-05-21T20:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videocaZRgUOrEbw);

const videoRQfCpd8hqXg: Video = {
  id: 'RQfCpd8hqXg',
  channel: channelTrashTasteHighlights,
  title: 'The Best Screengrab and Our Most Degenerate Moment',
  publishedAt: '2022-05-22T19:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoRQfCpd8hqXg);

const videowQdse_WGwRI: Video = {
  id: 'wQdse_WGwRI',
  channel: channelTrashTasteHighlights,
  title: 'The Best and Laziest Drip Award Goes To You Know Who...',
  publishedAt: '2022-05-24T20:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videowQdse_WGwRI);

const videoZP9RxI72Fh8: Video = {
  id: 'ZP9RxI72Fh8',
  channel: channelTrashTasteHighlights,
  title: "The Video That Changed Emirichu's Life",
  publishedAt: '2022-05-28T20:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoZP9RxI72Fh8);

const videoLlkMbe4E84Y: Video = {
  id: 'LlkMbe4E84Y',
  channel: channelTrashTasteHighlights,
  title: 'There are Two Types of Female YouTubers...',
  publishedAt: '2022-05-29T19:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoLlkMbe4E84Y);

const videoZuPiQNJr4l4: Video = {
  id: 'ZuPiQNJr4l4',
  channel: channelTrashTasteHighlights,
  title: 'Swearing in Videos: Guys vs. Girls',
  publishedAt: '2022-05-29T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoZuPiQNJr4l4);

const videoOTXfjKgq_Ro: Video = {
  id: 'OTXfjKgq-Ro',
  channel: channelTrashTasteHighlights,
  title: 'Getting a Visa to Japan is like The Hunger Games',
  publishedAt: '2022-05-30T19:00:14Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoOTXfjKgq_Ro);

const videoXa2ksTK61iE: Video = {
  id: 'Xa2ksTK61iE',
  channel: channelTrashTasteHighlights,
  title: 'How To Memorize Japanese Kanji',
  publishedAt: '2022-05-30T20:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoXa2ksTK61iE);

const videoJHHohZrCGVg: Video = {
  id: 'JHHohZrCGVg',
  channel: channelTrashTasteHighlights,
  title: 'Japanese Doctors NEVER Speak English',
  publishedAt: '2022-05-31T19:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoJHHohZrCGVg);

const video4Vd9tk3C3nU: Video = {
  id: '4Vd9tk3C3nU',
  channel: channelTrashTasteHighlights,
  title: 'Joey Trolls a Girl by Pretending to Not Speak Japanese',
  publishedAt: '2022-05-31T20:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video4Vd9tk3C3nU);

const video8bPOpjH91sQ: Video = {
  id: '8bPOpjH91sQ',
  channel: channelTrashTasteHighlights,
  title: "Emirichu's Anime Taste Gets Roasted by Trash Taste",
  publishedAt: '2022-06-02T19:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video8bPOpjH91sQ);

const videoWI4PzGFYFsA: Video = {
  id: 'WI4PzGFYFsA',
  channel: channelTrashTasteHighlights,
  title: 'We All Used to be Edgelords who Loved Edgy Anime',
  publishedAt: '2022-06-02T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoWI4PzGFYFsA);

const videoMyAgUISEuQk: Video = {
  id: 'MyAgUISEuQk',
  channel: channelTrashTasteHighlights,
  title: "Emirichu's Weird Viewing Habits",
  publishedAt: '2022-06-02T21:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoMyAgUISEuQk);

const video9XtnIwDK1zU: Video = {
  id: '9XtnIwDK1zU',
  channel: channelTrashTasteHighlights,
  title: "Making Fun of Connor's Keyboard Choices",
  publishedAt: '2022-06-06T20:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video9XtnIwDK1zU);

const videoCIVscIWuGwU: Video = {
  id: 'CIVscIWuGwU',
  channel: channelTrashTasteHighlights,
  title: 'Teachers Tried to Convince Connor That He Had Dyslexia',
  publishedAt: '2022-06-07T19:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoCIVscIWuGwU);

const videojA2BT6GgvUw: Video = {
  id: 'jA2BT6GgvUw',
  channel: channelTrashTasteHighlights,
  title: "Garnt's Doctor Tried to Steal $30,000 From Him",
  publishedAt: '2022-06-07T20:00:13Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videojA2BT6GgvUw);

const videoaBGL21os0Xk: Video = {
  id: 'aBGL21os0Xk',
  channel: channelTrashTasteHighlights,
  title: "We're Going to be Switching Studios",
  publishedAt: '2022-06-08T19:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoaBGL21os0Xk);

const videoGJEEkYAQ6XE: Video = {
  id: 'GJEEkYAQ6XE',
  channel: channelTrashTasteHighlights,
  title: "Joey Was Trapped in Canada for 5 Days and Couldn't Escape",
  publishedAt: '2022-06-08T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoGJEEkYAQ6XE);

const video_DyBwVg9CHU: Video = {
  id: '_DyBwVg9CHU',
  channel: channelTrashTasteHighlights,
  title: "Garnt's Airline Wanted Him to Pay an Extra $4,000",
  publishedAt: '2022-06-09T19:00:11Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video_DyBwVg9CHU);

const videowG5JkR_0tfA: Video = {
  id: 'wG5JkR-0tfA',
  channel: channelTrashTasteHighlights,
  title: 'Going Full Karen',
  publishedAt: '2022-06-09T20:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videowG5JkR_0tfA);

const videoAhNM68Lc_s8: Video = {
  id: 'AhNM68Lc-s8',
  channel: channelTrashTasteHighlights,
  title: 'We Moved to London',
  publishedAt: '2022-06-11T20:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoAhNM68Lc_s8);

const videof4tsdQPg28Y: Video = {
  id: 'f4tsdQPg28Y',
  channel: channelTrashTasteHighlights,
  title: "The Weirdest Things We've Signed at Anime Cons",
  publishedAt: '2022-06-13T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videof4tsdQPg28Y);

const videoC978tq8Ar9E: Video = {
  id: 'C978tq8Ar9E',
  channel: channelTrashTasteHighlights,
  title: "The WORST Time Garnt Could've Been Recognized",
  publishedAt: '2022-06-14T19:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoC978tq8Ar9E);

const videoPFlEDGBJx8E: Video = {
  id: 'PFlEDGBJx8E',
  channel: channelTrashTasteHighlights,
  title: 'The Weirdest Fan Interactions We Had in London',
  publishedAt: '2022-06-15T19:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoPFlEDGBJx8E);

const video2rroz58hIho: Video = {
  id: '2rroz58hIho',
  channel: channelTrashTasteHighlights,
  title: "Joey FINALLY Ate His First Tesco's Meal Deal",
  publishedAt: '2022-06-16T19:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video2rroz58hIho);

const videohlHjtklnbrc: Video = {
  id: 'hlHjtklnbrc',
  channel: channelTrashTasteHighlights,
  title: 'Kevin Met The Boys Because He Was a Gigguk Fan',
  publishedAt: '2022-06-20T19:00:17Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videohlHjtklnbrc);

const videoDopNvCjRh2o: Video = {
  id: 'DopNvCjRh2o',
  channel: channelTrashTasteHighlights,
  title: "Metamorphosis Should've Been EVEN MORE Depressing",
  publishedAt: '2022-06-25T19:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoDopNvCjRh2o);

const videorw4HZLVeVQI: Video = {
  id: 'rw4HZLVeVQI',
  channel: channelTrashTasteHighlights,
  title: "Why Doesn't Japan Copyright Strike Parody ℌệ𝔫𝔱ằ𝔦??",
  publishedAt: '2022-06-27T20:00:11Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videorw4HZLVeVQI);

const videoDr9_I_0G95g: Video = {
  id: 'Dr9_I-0G95g',
  channel: channelTrashTasteHighlights,
  title: 'Overdone Tropes in ℌệ𝔫𝔱ằ𝔦',
  publishedAt: '2022-06-28T19:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoDr9_I_0G95g);

const videoWqXCT3Nr3tI: Video = {
  id: 'WqXCT3Nr3tI',
  channel: channelTrashTasteHighlights,
  title: 'Professional ℌệ𝔫𝔱ằ𝔦 Artist Rates The Best Tags',
  publishedAt: '2022-06-29T20:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoWqXCT3Nr3tI);

const videoB2LviFCBTos: Video = {
  id: 'B2LviFCBTos',
  channel: channelTrashTasteHighlights,
  title: 'This ℌệ𝔫𝔱ằ𝔦 Artists Favorite Anime Might Surprise You...',
  publishedAt: '2022-06-30T19:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoB2LviFCBTos);

const video_EL21uSveIo: Video = {
  id: '_EL21uSveIo',
  channel: channelTrashTasteHighlights,
  title: 'Jacksepticeye is a Better Anime Analyst Than Us',
  publishedAt: '2022-07-05T18:00:25Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video_EL21uSveIo);

const videoKqsC0zZsPJw: Video = {
  id: 'KqsC0zZsPJw',
  channel: channelTrashTasteHighlights,
  title: 'How Jacksepticeye Ended Up in Free Guy',
  publishedAt: '2022-07-05T19:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoKqsC0zZsPJw);

const videoJLYRwQZM9c4: Video = {
  id: 'JLYRwQZM9c4',
  channel: channelTrashTasteHighlights,
  title: 'Brighton is the Los Angeles of England',
  publishedAt: '2022-07-06T20:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoJLYRwQZM9c4);

const video3BAYsuK64Vs: Video = {
  id: '3BAYsuK64Vs',
  channel: channelTrashTasteHighlights,
  title: 'Jacksepticeye Spent 4 Months To Go On Tour',
  publishedAt: '2022-07-07T18:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video3BAYsuK64Vs);

const video9Pra7HvIMs4: Video = {
  id: '9Pra7HvIMs4',
  channel: channelTrashTasteHighlights,
  title: 'This Airline Lost $50,000 Worth of our Filming Equipment',
  publishedAt: '2022-07-09T20:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video9Pra7HvIMs4);

const videoy_R8xMNN0Q4: Video = {
  id: 'y_R8xMNN0Q4',
  channel: channelTrashTasteHighlights,
  title: 'Connor Wants to Live in America',
  publishedAt: '2022-07-10T20:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoy_R8xMNN0Q4);

const videoS3_vpTFYr0c: Video = {
  id: 'S3-vpTFYr0c',
  channel: channelTrashTasteHighlights,
  title: "The Biggest Highlights from Garnt's Wedding",
  publishedAt: '2022-07-13T20:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoS3_vpTFYr0c);

const videodSm9uWNu5ZQ: Video = {
  id: 'dSm9uWNu5ZQ',
  channel: channelTrashTasteHighlights,
  title: 'LilyPichu Voiced Adult Cartoons for Connor',
  publishedAt: '2022-07-19T19:00:38Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videodSm9uWNu5ZQ);

const videoTxIViQmKXvI: Video = {
  id: 'TxIViQmKXvI',
  channel: channelTrashTasteHighlights,
  title: 'Lilypichu Likes Instant Ramen More Than Actual Ramen',
  publishedAt: '2022-07-19T21:00:11Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoTxIViQmKXvI);

const videogr8JE_hSoFc: Video = {
  id: 'gr8JE-hSoFc',
  channel: channelTrashTasteHighlights,
  title: 'Lilypichu is Coping Hard',
  publishedAt: '2022-07-20T20:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videogr8JE_hSoFc);

const videok06vIMFbMK4: Video = {
  id: 'k06vIMFbMK4',
  channel: channelTrashTasteHighlights,
  title: 'Michael is the Only One Without an Engineering Degree',
  publishedAt: '2022-07-24T19:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videok06vIMFbMK4);

const videovdaPo8MoC_o: Video = {
  id: 'vdaPo8MoC_o',
  channel: channelTrashTasteHighlights,
  title: 'Michael Reeves Talks about his Favorite Anime',
  publishedAt: '2022-07-26T19:00:21Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videovdaPo8MoC_o);

const videojcduMNuFB9g: Video = {
  id: 'jcduMNuFB9g',
  channel: channelTrashTasteHighlights,
  title: 'YouTubers HATE Living in Los Angeles',
  publishedAt: '2022-07-26T20:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videojcduMNuFB9g);

const videouhYhHkqoEf8: Video = {
  id: 'uhYhHkqoEf8',
  channel: channelTrashTasteHighlights,
  title: "The WEIRDEST Thing Michael's Trainer Told Him to Stop Doing",
  publishedAt: '2022-07-27T19:00:31Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videouhYhHkqoEf8);

const videotcGLs5eN0sc: Video = {
  id: 'tcGLs5eN0sc',
  channel: channelTrashTasteHighlights,
  title: 'How Much Does Anthony Padilla Cut From His Interviews??',
  publishedAt: '2022-07-30T19:00:19Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videotcGLs5eN0sc);

const videotsq1bhOToCY: Video = {
  id: 'tsq1bhOToCY',
  channel: channelTrashTasteHighlights,
  title: 'Anthony Padilla Quit College After Only Making SIX Videos',
  publishedAt: '2022-07-31T19:00:18Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videotsq1bhOToCY);

const videokOCyneOICLw: Video = {
  id: 'kOCyneOICLw',
  channel: channelTrashTasteHighlights,
  title: 'People Used to Break Into The Smosh House',
  publishedAt: '2022-08-01T19:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videokOCyneOICLw);

const videoJTaYNQgu5KM: Video = {
  id: 'JTaYNQgu5KM',
  channel: channelTrashTasteHighlights,
  title: 'Smosh: The Movie was a MASSIVE Success and Failure',
  publishedAt: '2022-08-02T19:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoJTaYNQgu5KM);

const videoiyte5BUSOTM: Video = {
  id: 'iyte5BUSOTM',
  channel: channelTrashTasteHighlights,
  title: 'How Anthony Padilla Kept Himself Relevant on YouTube',
  publishedAt: '2022-08-03T19:00:31Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoiyte5BUSOTM);

const videoCHP0BzrsRDk: Video = {
  id: 'CHP0BzrsRDk',
  channel: channelTrashTasteHighlights,
  title: 'Should Every YouTuber Have a TikTok??',
  publishedAt: '2022-08-04T19:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoCHP0BzrsRDk);

const videozmrTJhbmzgk: Video = {
  id: 'zmrTJhbmzgk',
  channel: channelTrashTasteHighlights,
  title: 'ProZD Has NEVER Made a YouTube Thumbnail',
  publishedAt: '2022-08-06T20:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videozmrTJhbmzgk);

const video3z9DdmF8IjY: Video = {
  id: '3z9DdmF8IjY',
  channel: channelTrashTasteHighlights,
  title: "Getting Rejected from Voice Acting Roles Because You're a YouTuber",
  publishedAt: '2022-08-07T19:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video3z9DdmF8IjY);

const video_pQ0aSN4MRs: Video = {
  id: '_pQ0aSN4MRs',
  channel: channelTrashTasteHighlights,
  title: 'My Anime List vs. Anime News Network',
  publishedAt: '2022-08-09T19:00:20Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video_pQ0aSN4MRs);

const videoXNpPKdo2P6U: Video = {
  id: 'XNpPKdo2P6U',
  channel: channelTrashTasteHighlights,
  title: 'Should You Skip ALL Game Cutscenes??',
  publishedAt: '2022-08-11T19:00:15Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoXNpPKdo2P6U);

const videoz7Wx9w1tjn4: Video = {
  id: 'z7Wx9w1tjn4',
  channel: channelTrashTasteHighlights,
  title: "Connor Sleeps on a Plane like it's about to Crash",
  publishedAt: '2022-08-15T19:00:21Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoz7Wx9w1tjn4);

const videoGsK_bYcxjyE: Video = {
  id: 'GsK_bYcxjyE',
  channel: channelTrashTasteHighlights,
  title: 'We Ate at the WORST Italian Restaurant in America',
  publishedAt: '2022-08-16T19:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoGsK_bYcxjyE);

const videodcZrGrkvCts: Video = {
  id: 'dcZrGrkvCts',
  channel: channelTrashTasteHighlights,
  title: 'The British Boys Freak Out Over Weird Australian Animals',
  publishedAt: '2022-08-16T20:00:18Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videodcZrGrkvCts);

const videoY_9uzySKewQ: Video = {
  id: 'Y-9uzySKewQ',
  channel: channelTrashTasteHighlights,
  title: 'Connor Drank a Three Litre Beer at Medieval Times',
  publishedAt: '2022-08-17T19:00:10Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoY_9uzySKewQ);

const videoW12CoNAckgc: Video = {
  id: 'W12CoNAckgc',
  channel: channelTrashTasteHighlights,
  title: 'Australian Sarcasm made Sydney Smash Tim Tams',
  publishedAt: '2022-08-17T20:00:15Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoW12CoNAckgc);

const videoGq9WVLMRvJA: Video = {
  id: 'Gq9WVLMRvJA',
  channel: channelTrashTasteHighlights,
  title: 'Chocolate Flavored Foods Make Connor SICK',
  publishedAt: '2022-08-18T19:00:06Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoGq9WVLMRvJA);

const videoYO9vqqzpVdk: Video = {
  id: 'YO9vqqzpVdk',
  channel: channelTrashTasteHighlights,
  title: 'The Trash Taste Orange Hating Debate',
  publishedAt: '2022-08-18T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoYO9vqqzpVdk);

const videovxSFvN1tU7o: Video = {
  id: 'vxSFvN1tU7o',
  channel: channelTrashTasteHighlights,
  title: "Becoming The World's Most Famous Cosplayer Overnight",
  publishedAt: '2022-08-20T19:00:17Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videovxSFvN1tU7o);

const videoYIgC1oJurXc: Video = {
  id: 'YIgC1oJurXc',
  channel: channelTrashTasteHighlights,
  title: 'Conventions Used To Be THE WORST For Cosplayers',
  publishedAt: '2022-08-22T20:00:19Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoYIgC1oJurXc);

const videoeq86j656sXE: Video = {
  id: 'eq86j656sXE',
  channel: channelTrashTasteHighlights,
  title: 'The Surprisingly BIZARRE Hobbies of Jessica Nigri',
  publishedAt: '2022-08-23T20:00:19Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoeq86j656sXE);

const videoaTUeg7zuznQ: Video = {
  id: 'aTUeg7zuznQ',
  channel: channelTrashTasteHighlights,
  title: 'Jessica Nigri Got Scared with a Bomb Threat',
  publishedAt: '2022-08-24T19:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoaTUeg7zuznQ);

const videoj356X3_3bV4: Video = {
  id: 'j356X3-3bV4',
  channel: channelTrashTasteHighlights,
  title: 'Trash Taste has a New Mascot',
  publishedAt: '2022-08-25T19:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoj356X3_3bV4);

const videoaYvnbgVL6gk: Video = {
  id: 'aYvnbgVL6gk',
  channel: channelTrashTasteHighlights,
  title: 'Joey Discovered He Was Allergic to Cats in the WORST Way',
  publishedAt: '2022-08-25T20:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoaYvnbgVL6gk);

const videobvk3_6eOD60: Video = {
  id: 'bvk3-6eOD60',
  channel: channelTrashTasteHighlights,
  title: 'Asking Ludwig if Switching to YouTube was Worth It',
  publishedAt: '2022-08-27T19:00:23Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videobvk3_6eOD60);

const videoJ7LhIuEQEA8: Video = {
  id: 'J7LhIuEQEA8',
  channel: channelTrashTasteHighlights,
  title: 'Ludwig Admits He Planned To Stream For Only 5 Years',
  publishedAt: '2022-08-27T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoJ7LhIuEQEA8);

const video_KAxb4PQZFg: Video = {
  id: '-KAxb4PQZFg',
  channel: channelTrashTasteHighlights,
  title: 'Ludwig was Scared that the YouTube CEO Watches His Podcast',
  publishedAt: '2022-08-28T19:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video_KAxb4PQZFg);

const videoPWiB4SQ28yg: Video = {
  id: 'PWiB4SQ28yg',
  channel: channelTrashTasteHighlights,
  title: "Ludwig Isn't Even the Most Famous YouTuber from his School",
  publishedAt: '2022-08-28T20:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoPWiB4SQ28yg);

const video8ZVAcXCFfHs: Video = {
  id: '8ZVAcXCFfHs',
  channel: channelTrashTasteHighlights,
  title: "Joey Was Denied Entry to a Restaurant Because He Couldn't Speak French",
  publishedAt: '2022-08-29T19:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video8ZVAcXCFfHs);

const videoZWDLItdBUa0: Video = {
  id: 'ZWDLItdBUa0',
  channel: channelTrashTasteHighlights,
  title: "British People Can't Name Food Correctly",
  publishedAt: '2022-08-29T20:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoZWDLItdBUa0);

const videoj00pktohWQg: Video = {
  id: 'j00pktohWQg',
  channel: channelTrashTasteHighlights,
  title: 'Ludwig Used to be a Top Employee at Apple',
  publishedAt: '2022-08-30T19:00:27Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoj00pktohWQg);

const videowORSSUnOqi0: Video = {
  id: 'wORSSUnOqi0',
  channel: channelTrashTasteHighlights,
  title: 'Ludwig Actually Has Good Anime Taste',
  publishedAt: '2022-08-30T20:00:30Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videowORSSUnOqi0);

const videocXIPqnAXvC8: Video = {
  id: 'cXIPqnAXvC8',
  channel: channelTrashTasteHighlights,
  title: 'Ludwig Absolutely Demonetizes This Video',
  publishedAt: '2022-09-01T19:00:20Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videocXIPqnAXvC8);

const videobt7ylrM2Mz4: Video = {
  id: 'bt7ylrM2Mz4',
  channel: channelTrashTasteHighlights,
  title: 'Why are Japanese People Still Wearing Masks??',
  publishedAt: '2022-09-04T19:00:21Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videobt7ylrM2Mz4);

const videoehPiORCJvWc: Video = {
  id: 'ehPiORCJvWc',
  channel: channelTrashTasteHighlights,
  title: "Do We Appreciate Chores Now That We're Older??",
  publishedAt: '2022-09-05T19:00:13Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoehPiORCJvWc);

const videoIdaFm_xvyTo: Video = {
  id: 'IdaFm-xvyTo',
  channel: channelTrashTasteHighlights,
  title: 'Connor Regrets Using His Hands for Labor Work',
  publishedAt: '2022-09-05T20:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoIdaFm_xvyTo);

const videoA4wFv4NbEWE: Video = {
  id: 'A4wFv4NbEWE',
  channel: channelTrashTasteHighlights,
  title: 'The Difficulty of Getting Breakfast in Japan',
  publishedAt: '2022-09-06T19:00:03Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoA4wFv4NbEWE);

const video3bR2fYqltgI: Video = {
  id: '3bR2fYqltgI',
  channel: channelTrashTasteHighlights,
  title: 'This Movie Got EVERYTHING Right (Everything Everywhere All At Once)',
  publishedAt: '2022-09-07T20:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video3bR2fYqltgI);

const videoL_oQYEe5ZsM: Video = {
  id: 'L_oQYEe5ZsM',
  channel: channelTrashTasteHighlights,
  title: 'We Found a Subscription Service that Manages Your Subscription Services',
  publishedAt: '2022-09-08T20:00:04Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoL_oQYEe5ZsM);

const videoeG7_P_e3OU8: Video = {
  id: 'eG7_P-e3OU8',
  channel: channelTrashTasteHighlights,
  title: "Making Fun of Pokimane's Accent",
  publishedAt: '2022-09-10T15:00:19Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoeG7_P_e3OU8);

const videoWGaUx8hJfYE: Video = {
  id: 'WGaUx8hJfYE',
  channel: channelTrashTasteHighlights,
  title: 'Living in a Content Creator House is HORRIBLE',
  publishedAt: '2022-09-10T20:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoWGaUx8hJfYE);

const videoUHVJAsPJqrQ: Video = {
  id: 'UHVJAsPJqrQ',
  channel: channelTrashTasteHighlights,
  title: 'Why Did Streamers Pirate Full Episodes of Avatar on Stream??',
  publishedAt: '2022-09-15T19:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoUHVJAsPJqrQ);

const videoxfUOik5ooVE: Video = {
  id: 'xfUOik5ooVE',
  channel: channelTrashTasteHighlights,
  title: "What is Pokimane's Favorite Anime??",
  publishedAt: '2022-09-15T20:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoxfUOik5ooVE);

const videoinEsEYOL6SE: Video = {
  id: 'inEsEYOL6SE',
  channel: channelTrashTasteHighlights,
  title: 'Connor and Chris Got Into a BIG FIGHT',
  publishedAt: '2022-09-21T19:00:14Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoinEsEYOL6SE);

const videobIYm0tH96XE: Video = {
  id: 'bIYm0tH96XE',
  channel: channelTrashTasteHighlights,
  title: 'Google Maps Made Joey Break Traffic Laws',
  publishedAt: '2022-09-21T20:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videobIYm0tH96XE);

const videohNwHn3QRp10: Video = {
  id: 'hNwHn3QRp10',
  channel: channelTrashTasteHighlights,
  title: 'Connor Fights the Boys Over TV Settings',
  publishedAt: '2022-09-22T20:00:20Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videohNwHn3QRp10);

const videoap1IMhLh2GQ: Video = {
  id: 'ap1IMhLh2GQ',
  channel: channelTrashTasteHighlights,
  title: "William Osman's Honest Thoughts About Anime",
  publishedAt: '2022-09-24T19:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoap1IMhLh2GQ);

const video1l2ynyqhi3I: Video = {
  id: '1l2ynyqhi3I',
  channel: channelTrashTasteHighlights,
  title: 'Anime is Getting Harder To Watch',
  publishedAt: '2022-09-24T20:00:00Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video1l2ynyqhi3I);

const videotui2nqy1Dqk: Video = {
  id: 'tui2nqy1Dqk',
  channel: channelTrashTasteHighlights,
  title: 'How Dangerous is it to Work with Radiation??',
  publishedAt: '2022-09-27T19:00:30Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videotui2nqy1Dqk);

const videoZFY77KqkKCk: Video = {
  id: 'ZFY77KqkKCk',
  channel: channelTrashTasteHighlights,
  title: "Who's the Most DANGEROUS YouTuber??",
  publishedAt: '2022-09-27T20:00:18Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoZFY77KqkKCk);

const videoPpGwyLHs_fw: Video = {
  id: 'PpGwyLHs-fw',
  channel: channelTrashTasteHighlights,
  title: 'William Osman Talks About his House Fire Incident',
  publishedAt: '2022-09-28T19:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoPpGwyLHs_fw);

const videoV_VFXpjhUKI: Video = {
  id: 'V-VFXpjhUKI',
  channel: channelTrashTasteHighlights,
  title: 'Connor Got Stopped at American TSA For Wholesome Reasons',
  publishedAt: '2022-09-29T19:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoV_VFXpjhUKI);

const video4SLRbcYaL0c: Video = {
  id: '4SLRbcYaL0c',
  channel: channelTrashTasteHighlights,
  title: 'We Have The WORST Opinions on Star Wars',
  publishedAt: '2022-10-01T16:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video4SLRbcYaL0c);

const videopEKztfua7Zw: Video = {
  id: 'pEKztfua7Zw',
  channel: channelTrashTasteHighlights,
  title: 'Live-Action Animated Movies are All TERRIBLE',
  publishedAt: '2022-10-01T17:00:33Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videopEKztfua7Zw);

const videoOxPQFn9eUzE: Video = {
  id: 'OxPQFn9eUzE',
  channel: channelTrashTasteHighlights,
  title: 'Joey Met Adam Savage from The Mythbusters',
  publishedAt: '2022-10-02T16:00:28Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoOxPQFn9eUzE);

const video_KKg3mxYphw: Video = {
  id: '_KKg3mxYphw',
  channel: channelTrashTasteHighlights,
  title: 'The Time Garnt and Connor Sneaked into Vidcon',
  publishedAt: '2022-10-02T17:00:16Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video_KKg3mxYphw);

const videoksWrpe5ZYBU: Video = {
  id: 'ksWrpe5ZYBU',
  channel: channelTrashTasteHighlights,
  title: "TikTok STILL Doesn't Have the Reach of YouTube",
  publishedAt: '2022-10-03T16:00:24Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoksWrpe5ZYBU);

const videobf2a9Q3UUuc: Video = {
  id: 'bf2a9Q3UUuc',
  channel: channelTrashTasteHighlights,
  title: 'What is the BEST Movie Based Games??',
  publishedAt: '2022-10-04T16:00:19Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videobf2a9Q3UUuc);

const videoSjSa1_Ug5Zo: Video = {
  id: 'SjSa1_Ug5Zo',
  channel: channelTrashTasteHighlights,
  title: 'Why is NOBODY Talking About The Newest JoJo Anime??',
  publishedAt: '2022-10-05T16:00:17Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoSjSa1_Ug5Zo);

const videoW_5Dxzgh3RQ: Video = {
  id: 'W-5Dxzgh3RQ',
  channel: channelTrashTasteHighlights,
  title: 'The Quality of Documentaries has Fallen Off',
  publishedAt: '2022-10-06T16:00:22Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoW_5Dxzgh3RQ);

const videoxODPsb6hGqA: Video = {
  id: 'xODPsb6hGqA',
  channel: channelTrashTasteHighlights,
  title: 'What Does "M.E.T.A." Even Mean??',
  publishedAt: '2022-10-06T17:00:40Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoxODPsb6hGqA);

const videoRdwFppER5kk: Video = {
  id: 'RdwFppER5kk',
  channel: channelTrashTasteHighlights,
  title: 'Why NileRed has SO MANY VIDEOS About Pee',
  publishedAt: '2022-10-08T19:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoRdwFppER5kk);

const video_SzAd_krEL4: Video = {
  id: '_SzAd_krEL4',
  channel: channelTrashTasteHighlights,
  title: 'How Playing with Fire Almost Burnt Down the Neighbours House',
  publishedAt: '2022-10-08T20:00:07Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video_SzAd_krEL4);

const videooK3JniVt_Ys: Video = {
  id: 'oK3JniVt_Ys',
  channel: channelTrashTasteHighlights,
  title: 'Getting Scared of Explosions After ALMOST Blowing Up From One',
  publishedAt: '2022-10-09T19:00:22Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videooK3JniVt_Ys);

const video_xCZZJqnPUc: Video = {
  id: '-xCZZJqnPUc',
  channel: channelTrashTasteHighlights,
  title: 'NileRed Burned Himself with Acid While Recording a Video',
  publishedAt: '2022-10-09T20:00:01Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video_xCZZJqnPUc);

const videoP1Iq38srrmM: Video = {
  id: 'P1Iq38srrmM',
  channel: channelTrashTasteHighlights,
  title: 'Asking the Government Permission to make Uranium Glass',
  publishedAt: '2022-10-10T19:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoP1Iq38srrmM);

const videocC6hJJlqeV0: Video = {
  id: 'cC6hJJlqeV0',
  channel: channelTrashTasteHighlights,
  title: 'How Easy Is It ACTUALLY To Make Meth??',
  publishedAt: '2022-10-10T20:00:09Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videocC6hJJlqeV0);

const videozsJd5_gerJ8: Video = {
  id: 'zsJd5_gerJ8',
  channel: channelTrashTasteHighlights,
  title: 'NileRed Offered Us PURE Capsaicin and we ALMOST DIED',
  publishedAt: '2022-10-11T19:00:21Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videozsJd5_gerJ8);

const videoOkiNcOcS4z4: Video = {
  id: 'OkiNcOcS4z4',
  channel: channelTrashTasteHighlights,
  title: 'The REAL Scientific Way to Dispose a Dead Body',
  publishedAt: '2022-10-11T20:00:12Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoOkiNcOcS4z4);

const videoFAPeFmWmYQo: Video = {
  id: 'FAPeFmWmYQo',
  channel: channelTrashTasteHighlights,
  title: 'Buying Something SO SUS The Government Comes After You',
  publishedAt: '2022-10-12T19:00:05Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoFAPeFmWmYQo);

const video5mkIXf4eRqY: Video = {
  id: '5mkIXf4eRqY',
  channel: channelTrashTasteHighlights,
  title: 'We Found a Channel That Can PERFECTLY Impersonate You',
  publishedAt: '2022-10-12T20:00:02Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(video5mkIXf4eRqY);

const videoGQqmn1KGMxg: Video = {
  id: 'GQqmn1KGMxg',
  channel: channelTrashTasteHighlights,
  title: 'Listening To Your Own Voice Ruined His Life',
  publishedAt: '2022-10-13T19:00:08Z',
  tags: ['Highlights', 'Trash Taste Highlights'],
};
channelTrashTasteHighlights.videos.push(videoGQqmn1KGMxg);

export const channelTrashTasteShorts: Channel = {
  id: 'UCPohHVcDqBMmRLpUFwthAng',
  name: 'Trash Taste Shorts',
  videos: [],
};

// Channel Trash Taste Shorts Videos
const videoj7DEWhLvIlc: Video = {
  id: 'j7DEWhLvIlc',
  channel: channelTrashTasteShorts,
  title: "Don't Drink And Camp",
  publishedAt: '2022-03-12T17:00:56Z',
};
channelTrashTasteShorts.videos.push(videoj7DEWhLvIlc);

const videoPEfgH8cgrD0: Video = {
  id: 'PEfgH8cgrD0',
  channel: channelTrashTasteShorts,
  title: 'CUDDLE ME NOW',
  publishedAt: '2022-03-13T16:00:09Z',
};
channelTrashTasteShorts.videos.push(videoPEfgH8cgrD0);

const videoCQp_VivA20A: Video = {
  id: 'CQp-VivA20A',
  channel: channelTrashTasteShorts,
  title: 'Scared Peeless',
  publishedAt: '2022-03-14T16:00:09Z',
};
channelTrashTasteShorts.videos.push(videoCQp_VivA20A);

const videopysPiDN9JqM: Video = {
  id: 'pysPiDN9JqM',
  channel: channelTrashTasteShorts,
  title: "Connor's Past Videos",
  publishedAt: '2022-03-15T16:00:33Z',
};
channelTrashTasteShorts.videos.push(videopysPiDN9JqM);

const videoRtygW9YqkwA: Video = {
  id: 'RtygW9YqkwA',
  channel: channelTrashTasteShorts,
  title: "Don't Try This At Home",
  publishedAt: '2022-03-16T16:00:11Z',
};
channelTrashTasteShorts.videos.push(videoRtygW9YqkwA);

const videonpaaO9ulByI: Video = {
  id: 'npaaO9ulByI',
  channel: channelTrashTasteShorts,
  title: "Calli's Favorite YouTuber",
  publishedAt: '2022-03-17T16:00:28Z',
  tags: ['Calliope mori', 'calliope', 'mori calliope', 'mori', 'calli mori', 'calli'],
};
channelTrashTasteShorts.videos.push(videonpaaO9ulByI);

const videoDxijaCDCdA4: Video = {
  id: 'DxijaCDCdA4',
  channel: channelTrashTasteShorts,
  title: 'The VTuber Setup',
  publishedAt: '2022-03-18T16:00:07Z',
  tags: ['Calliope mori', 'calliope', 'mori calliope', 'mori', 'calli mori', 'calli'],
};
channelTrashTasteShorts.videos.push(videoDxijaCDCdA4);

const videoE1902o3am2M: Video = {
  id: 'E1902o3am2M',
  channel: channelTrashTasteShorts,
  title: "Calli's Biggest Flaw",
  publishedAt: '2022-03-19T16:00:05Z',
  tags: ['Calliope mori', 'calliope', 'mori calliope', 'mori', 'calli mori', 'calli'],
};
channelTrashTasteShorts.videos.push(videoE1902o3am2M);

const videoc9cWpbecUEs: Video = {
  id: 'c9cWpbecUEs',
  channel: channelTrashTasteShorts,
  title: 'Life Outside of VTubing',
  publishedAt: '2022-03-20T16:00:12Z',
  tags: ['Calliope mori', 'calliope', 'mori calliope', 'mori', 'calli mori', 'calli'],
};
channelTrashTasteShorts.videos.push(videoc9cWpbecUEs);

const videokHogiogJtAM: Video = {
  id: 'kHogiogJtAM',
  channel: channelTrashTasteShorts,
  title: 'Chris Broad is a LoL Fan?',
  publishedAt: '2022-03-21T16:00:32Z',
  tags: ['abroad in japan', 'chris abroad', 'Chris abroad in japan'],
};
channelTrashTasteShorts.videos.push(videokHogiogJtAM);

const videohOfuY7N15Zc: Video = {
  id: 'hOfuY7N15Zc',
  channel: channelTrashTasteShorts,
  title: 'Fear of Planes',
  publishedAt: '2022-03-22T16:00:16Z',
  tags: ['abroad in japan', 'chris abroad', 'Chris abroad in japan'],
};
channelTrashTasteShorts.videos.push(videohOfuY7N15Zc);

const videoGYmDtjL9W6o: Video = {
  id: 'GYmDtjL9W6o',
  channel: channelTrashTasteShorts,
  title: '#1 Most Popular Welsh Person CDawgVA',
  publishedAt: '2022-03-23T16:00:12Z',
  tags: ['abroad in japan', 'chris abroad', 'Chris abroad in japan'],
};
channelTrashTasteShorts.videos.push(videoGYmDtjL9W6o);

const videoZL76abwdDE8: Video = {
  id: 'ZL76abwdDE8',
  channel: channelTrashTasteShorts,
  title: 'Chris Wins $150 from Connor',
  publishedAt: '2022-03-24T16:00:13Z',
  tags: ['abroad in japan', 'chris abroad', 'Chris abroad in japan'],
};
channelTrashTasteShorts.videos.push(videoZL76abwdDE8);

const videoUyFyECQ8zTc: Video = {
  id: 'UyFyECQ8zTc',
  channel: channelTrashTasteShorts,
  title: 'This character can beat Goku??',
  publishedAt: '2022-03-25T16:00:28Z',
};
channelTrashTasteShorts.videos.push(videoUyFyECQ8zTc);

const video_3K63_gnyBM: Video = {
  id: '-3K63-gnyBM',
  channel: channelTrashTasteShorts,
  title: "Connor's Saucy VA Performance",
  publishedAt: '2022-03-26T16:00:00Z',
};
channelTrashTasteShorts.videos.push(video_3K63_gnyBM);

const video2Zq517j6NwM: Video = {
  id: '2Zq517j6NwM',
  channel: channelTrashTasteShorts,
  title: 'Favorite VTubers',
  publishedAt: '2022-03-27T16:00:02Z',
};
channelTrashTasteShorts.videos.push(video2Zq517j6NwM);

const videolJSurbTaQDg: Video = {
  id: 'lJSurbTaQDg',
  channel: channelTrashTasteShorts,
  title: 'The Five Guys Experience',
  publishedAt: '2022-03-28T16:00:39Z',
};
channelTrashTasteShorts.videos.push(videolJSurbTaQDg);

const video4Z57hAyaRSA: Video = {
  id: '4Z57hAyaRSA',
  channel: channelTrashTasteShorts,
  title: 'Joey the Language God',
  publishedAt: '2022-03-29T16:00:02Z',
};
channelTrashTasteShorts.videos.push(video4Z57hAyaRSA);

const videoKUpINqQv6yM: Video = {
  id: 'KUpINqQv6yM',
  channel: channelTrashTasteShorts,
  title: 'Sleep Walking as a Kid',
  publishedAt: '2022-03-30T16:00:10Z',
};
channelTrashTasteShorts.videos.push(videoKUpINqQv6yM);

const videoo2suCtanpV0: Video = {
  id: 'o2suCtanpV0',
  channel: channelTrashTasteShorts,
  title: "Garnt's 10kg Bonkers",
  publishedAt: '2022-03-31T16:00:32Z',
};
channelTrashTasteShorts.videos.push(videoo2suCtanpV0);

const video6R2939TaQXw: Video = {
  id: '6R2939TaQXw',
  channel: channelTrashTasteShorts,
  title: 'Our Favorite Memes',
  publishedAt: '2022-04-01T16:00:07Z',
};
channelTrashTasteShorts.videos.push(video6R2939TaQXw);

const video9gVIUbk42R0: Video = {
  id: '9gVIUbk42R0',
  channel: channelTrashTasteShorts,
  title: 'r/ItReallyHappened',
  publishedAt: '2022-04-02T16:00:04Z',
};
channelTrashTasteShorts.videos.push(video9gVIUbk42R0);

const videonmutK9IPo_g: Video = {
  id: 'nmutK9IPo-g',
  channel: channelTrashTasteShorts,
  title: 'The New Cool',
  publishedAt: '2022-04-03T16:00:32Z',
};
channelTrashTasteShorts.videos.push(videonmutK9IPo_g);

const videomUXwUZnlSE4: Video = {
  id: 'mUXwUZnlSE4',
  channel: channelTrashTasteShorts,
  title: 'It Takes Him How Long!?',
  publishedAt: '2022-04-04T16:00:22Z',
};
channelTrashTasteShorts.videos.push(videomUXwUZnlSE4);

const videosNIvYWHQ2fs: Video = {
  id: 'sNIvYWHQ2fs',
  channel: channelTrashTasteShorts,
  title: 'Halloween Traditions',
  publishedAt: '2022-04-05T16:00:35Z',
};
channelTrashTasteShorts.videos.push(videosNIvYWHQ2fs);

const videoTN_O_YSd2O0: Video = {
  id: 'TN-O-YSd2O0',
  channel: channelTrashTasteShorts,
  title: 'The Only Thing That Can Beat IronMouse',
  publishedAt: '2022-04-06T16:00:31Z',
};
channelTrashTasteShorts.videos.push(videoTN_O_YSd2O0);

const videoSKwXbcIDH4k: Video = {
  id: 'SKwXbcIDH4k',
  channel: channelTrashTasteShorts,
  title: 'Cool Guy Garnt',
  publishedAt: '2022-04-07T16:00:50Z',
};
channelTrashTasteShorts.videos.push(videoSKwXbcIDH4k);

const videopTW3xM4KJ04: Video = {
  id: 'pTW3xM4KJ04',
  channel: channelTrashTasteShorts,
  title: 'Connor LOSES',
  publishedAt: '2022-04-08T16:00:34Z',
};
channelTrashTasteShorts.videos.push(videopTW3xM4KJ04);

const videoW_SBFizTdyI: Video = {
  id: 'W-SBFizTdyI',
  channel: channelTrashTasteShorts,
  title: "Garnt's WORST Fan Experience",
  publishedAt: '2022-04-09T16:00:14Z',
};
channelTrashTasteShorts.videos.push(videoW_SBFizTdyI);

const videoMz0pfsMr5Tc: Video = {
  id: 'Mz0pfsMr5Tc',
  channel: channelTrashTasteShorts,
  title: 'TERRIBLE Air BnB',
  publishedAt: '2022-04-10T16:00:13Z',
};
channelTrashTasteShorts.videos.push(videoMz0pfsMr5Tc);

const video5aITbgMuj1c: Video = {
  id: '5aITbgMuj1c',
  channel: channelTrashTasteShorts,
  title: 'The boys HARSSED over BLB',
  publishedAt: '2022-04-11T16:00:02Z',
};
channelTrashTasteShorts.videos.push(video5aITbgMuj1c);

const videogEDCiyCd2Hw: Video = {
  id: 'gEDCiyCd2Hw',
  channel: channelTrashTasteShorts,
  title: "Garnt's Secret For Learning Japanese",
  publishedAt: '2022-04-12T16:00:19Z',
  tags: ['asacoco'],
};
channelTrashTasteShorts.videos.push(videogEDCiyCd2Hw);

const videoVAwUbzaN8cE: Video = {
  id: 'VAwUbzaN8cE',
  channel: channelTrashTasteShorts,
  title: 'Cr1TiKaL Said WHAT',
  publishedAt: '2022-04-13T16:00:24Z',
  tags: ['Cr1TiKaL', 'critical', 'Jojo', 'jojo bizarre adventure'],
};
channelTrashTasteShorts.videos.push(videoVAwUbzaN8cE);

const videoLIdBsMpZl0s: Video = {
  id: 'LIdBsMpZl0s',
  channel: channelTrashTasteShorts,
  title: 'Connor Meets Connor',
  publishedAt: '2022-04-14T16:00:22Z',
};
channelTrashTasteShorts.videos.push(videoLIdBsMpZl0s);

const videoG7wKr4IXhbs: Video = {
  id: 'G7wKr4IXhbs',
  channel: channelTrashTasteShorts,
  title: 'Connor faints over WHAT?',
  publishedAt: '2022-04-15T16:00:08Z',
};
channelTrashTasteShorts.videos.push(videoG7wKr4IXhbs);

const videoYvavA2I5RfA: Video = {
  id: 'YvavA2I5RfA',
  channel: channelTrashTasteShorts,
  title: "Garnt Isn't A Gamer",
  publishedAt: '2022-04-16T16:00:30Z',
};
channelTrashTasteShorts.videos.push(videoYvavA2I5RfA);

const videoH5gLUn_wsRs: Video = {
  id: 'H5gLUn-wsRs',
  channel: channelTrashTasteShorts,
  title: 'React Andy',
  publishedAt: '2022-04-17T16:00:08Z',
};
channelTrashTasteShorts.videos.push(videoH5gLUn_wsRs);

const videoCREsxmNAfAk: Video = {
  id: 'CREsxmNAfAk',
  channel: channelTrashTasteShorts,
  title: 'Garnt and Joey Used to HATE Each Other',
  publishedAt: '2022-04-18T16:00:12Z',
};
channelTrashTasteShorts.videos.push(videoCREsxmNAfAk);

const videoxjuD8ScmFkE: Video = {
  id: 'xjuD8ScmFkE',
  channel: channelTrashTasteShorts,
  title: 'Connor Was an Angry Child',
  publishedAt: '2022-04-19T16:00:25Z',
};
channelTrashTasteShorts.videos.push(videoxjuD8ScmFkE);

const videoEfShqFGgv2o: Video = {
  id: 'EfShqFGgv2o',
  channel: channelTrashTasteShorts,
  title: 'Banned From the Anime Club',
  publishedAt: '2022-04-20T16:00:09Z',
};
channelTrashTasteShorts.videos.push(videoEfShqFGgv2o);

const videoLct0fT0UpEA: Video = {
  id: 'Lct0fT0UpEA',
  channel: channelTrashTasteShorts,
  title: 'Joey is an ANIME VOICE ACTOR?',
  publishedAt: '2022-04-21T16:00:09Z',
  tags: ['shorts', 'podcast highlights', 'trash taste highlights'],
};
channelTrashTasteShorts.videos.push(videoLct0fT0UpEA);

const video7uxM5opssbw: Video = {
  id: '7uxM5opssbw',
  channel: channelTrashTasteShorts,
  title: 'Garnt Gets HIT',
  publishedAt: '2022-04-22T16:00:07Z',
  tags: ['shorts', 'podcast highlights', 'trash taste highlights'],
};
channelTrashTasteShorts.videos.push(video7uxM5opssbw);

const videoiwmfO5THmPE: Video = {
  id: 'iwmfO5THmPE',
  channel: channelTrashTasteShorts,
  title: 'SpongeBob and Chill',
  publishedAt: '2022-04-23T16:00:21Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoiwmfO5THmPE);

const video1CPRDMuCPiM: Video = {
  id: '1CPRDMuCPiM',
  channel: channelTrashTasteShorts,
  title: 'Editors SAVE YouTubers',
  publishedAt: '2022-04-24T16:00:00Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(video1CPRDMuCPiM);

const video9J_Qo1QNN_o: Video = {
  id: '9J_Qo1QNN_o',
  channel: channelTrashTasteShorts,
  title: 'Joey Strikes a Pose',
  publishedAt: '2022-04-25T16:00:09Z',
  tags: ['shorts', 'podcast highlights', 'trash taste highlights'],
};
channelTrashTasteShorts.videos.push(video9J_Qo1QNN_o);

const videoJwPRpBayf0E: Video = {
  id: 'JwPRpBayf0E',
  channel: channelTrashTasteShorts,
  title: 'Lady Beard is a VOICE ACTOR?',
  publishedAt: '2022-04-26T16:00:09Z',
  tags: ['shorts', 'podcast highlights', 'trash taste highlights'],
};
channelTrashTasteShorts.videos.push(videoJwPRpBayf0E);

const videoywqnk0PG9Ys: Video = {
  id: 'ywqnk0PG9Ys',
  channel: channelTrashTasteShorts,
  title: 'Connor Throws It Back',
  publishedAt: '2022-04-27T16:00:37Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoywqnk0PG9Ys);

const videoiNzO8BgFKvw: Video = {
  id: 'iNzO8BgFKvw',
  channel: channelTrashTasteShorts,
  title: 'Japanese Cinemas are SERIOUS',
  publishedAt: '2022-04-28T16:00:32Z',
  tags: ['shorts', 'podcast highlights', 'trash taste highlights'],
};
channelTrashTasteShorts.videos.push(videoiNzO8BgFKvw);

const videoQrv15X9lew8: Video = {
  id: 'Qrv15X9lew8',
  channel: channelTrashTasteShorts,
  title: 'Connor VS Jelly',
  publishedAt: '2022-04-29T16:00:26Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoQrv15X9lew8);

const videonBck_bSoMUg: Video = {
  id: 'nBck_bSoMUg',
  channel: channelTrashTasteShorts,
  title: 'How do you follow manga fights?',
  publishedAt: '2022-04-30T16:00:32Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videonBck_bSoMUg);

const videoMukLpSb2_Rc: Video = {
  id: 'MukLpSb2-Rc',
  channel: channelTrashTasteShorts,
  title: 'Connor the Janga MASTER',
  publishedAt: '2022-05-01T16:00:09Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoMukLpSb2_Rc);

const videoJlbnCfc7P4E: Video = {
  id: 'JlbnCfc7P4E',
  channel: channelTrashTasteShorts,
  title: 'Movie Theaters in Japan are DIFFERNT',
  publishedAt: '2022-05-02T16:00:07Z',
  tags: ['shorts', 'podcast highlights', 'trash taste highlights'],
};
channelTrashTasteShorts.videos.push(videoJlbnCfc7P4E);

const videovmDkfwmQt9g: Video = {
  id: 'vmDkfwmQt9g',
  channel: channelTrashTasteShorts,
  title: 'Trash Taste Matrix',
  publishedAt: '2022-05-03T16:00:27Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videovmDkfwmQt9g);

const videomkcGkCcrjDc: Video = {
  id: 'mkcGkCcrjDc',
  channel: channelTrashTasteShorts,
  title: 'Garnt Draws a Dong',
  publishedAt: '2022-05-04T16:00:33Z',
  tags: ['shorts', 'podcast highlights', 'trash taste highlights'],
};
channelTrashTasteShorts.videos.push(videomkcGkCcrjDc);

const video0hdAkEM6A78: Video = {
  id: '0hdAkEM6A78',
  channel: channelTrashTasteShorts,
  title: 'Connor The Choke Goat',
  publishedAt: '2022-05-05T16:00:01Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(video0hdAkEM6A78);

const video7Wa49XBrMzA: Video = {
  id: '7Wa49XBrMzA',
  channel: channelTrashTasteShorts,
  title: 'Kson is a PART SKIPPER?',
  publishedAt: '2022-05-06T16:00:03Z',
  tags: ['shorts', 'podcast highlights', 'trash taste highlights', 'Kson', 'Kson Vtuber'],
};
channelTrashTasteShorts.videos.push(video7Wa49XBrMzA);

const video3KtSVGOruQc: Video = {
  id: '3KtSVGOruQc',
  channel: channelTrashTasteShorts,
  title: "Connor's Cringey Email To Joey",
  publishedAt: '2022-05-07T16:00:02Z',
  tags: ['shorts', 'podcast highlights', 'trash taste highlights'],
};
channelTrashTasteShorts.videos.push(video3KtSVGOruQc);

const videoBsWhrhV0QiU: Video = {
  id: 'BsWhrhV0QiU',
  channel: channelTrashTasteShorts,
  title: 'Connor Was In A SAMSUNG AD?',
  publishedAt: '2022-05-08T16:00:05Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoBsWhrhV0QiU);

const videoIQ6iTd2VuMQ: Video = {
  id: 'IQ6iTd2VuMQ',
  channel: channelTrashTasteShorts,
  title: 'Garnt Laughs At Beer',
  publishedAt: '2022-05-09T16:00:15Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoIQ6iTd2VuMQ);

const videoU51PMY2veBI: Video = {
  id: 'U51PMY2veBI',
  channel: channelTrashTasteShorts,
  title: 'Connor Is A JoJo Connoisseur',
  publishedAt: '2022-05-10T16:00:11Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoU51PMY2veBI);

const videoZ1xp0XpsxaY: Video = {
  id: 'Z1xp0XpsxaY',
  channel: channelTrashTasteShorts,
  title: 'Connor Taste Podcast',
  publishedAt: '2022-05-11T16:00:16Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoZ1xp0XpsxaY);

const videor6IPt8cXnUM: Video = {
  id: 'r6IPt8cXnUM',
  channel: channelTrashTasteShorts,
  title: 'Life Hack that DOES NOT WORK',
  publishedAt: '2022-05-12T16:00:22Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videor6IPt8cXnUM);

const videoSBDy04x1W04: Video = {
  id: 'SBDy04x1W04',
  channel: channelTrashTasteShorts,
  title: "Connor's INSANE anime rankings",
  publishedAt: '2022-05-13T16:00:26Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoSBDy04x1W04);

const videoAdsUgjgZmZo: Video = {
  id: 'AdsUgjgZmZo',
  channel: channelTrashTasteShorts,
  title: "Aki's PISSED",
  publishedAt: '2022-05-14T16:00:08Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoAdsUgjgZmZo);

const videowbgCfo4skVM: Video = {
  id: 'wbgCfo4skVM',
  channel: channelTrashTasteShorts,
  title: 'Low Graphics Brain',
  publishedAt: '2022-05-15T16:00:26Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videowbgCfo4skVM);

const video17LDfgxz22c: Video = {
  id: '17LDfgxz22c',
  channel: channelTrashTasteShorts,
  title: 'Taste Trash Castpod',
  publishedAt: '2022-05-16T16:00:00Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(video17LDfgxz22c);

const videoIQMhcpyVwAc: Video = {
  id: 'IQMhcpyVwAc',
  channel: channelTrashTasteShorts,
  title: "CHRIS DOESN'T OWN HOODIES",
  publishedAt: '2022-05-17T16:00:15Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoIQMhcpyVwAc);

const videoR_pZvM1mT_Q: Video = {
  id: 'R_pZvM1mT-Q',
  channel: channelTrashTasteShorts,
  title: 'GIGGUK is SUPERHUMAN',
  publishedAt: '2022-05-18T16:00:13Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoR_pZvM1mT_Q);

const video9cVwuhK1Szk: Video = {
  id: '9cVwuhK1Szk',
  channel: channelTrashTasteShorts,
  title: 'High School In Movies are DIFFERNT',
  publishedAt: '2022-05-19T16:00:07Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(video9cVwuhK1Szk);

const videoeKJdmqTrbxA: Video = {
  id: 'eKJdmqTrbxA',
  channel: channelTrashTasteShorts,
  title: 'The LadyBeard Podcast',
  publishedAt: '2022-05-20T16:00:19Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoeKJdmqTrbxA);

const videotsQ5yHAruiY: Video = {
  id: 'tsQ5yHAruiY',
  channel: channelTrashTasteShorts,
  title: 'KAYAKING GETS ROWDY',
  publishedAt: '2022-05-21T16:00:35Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videotsQ5yHAruiY);

const videoGN_plN9jRJY: Video = {
  id: 'GN_plN9jRJY',
  channel: channelTrashTasteShorts,
  title: 'Trash Taste In A Nutshell',
  publishedAt: '2022-05-22T16:00:18Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoGN_plN9jRJY);

const videonhE2o3eaXQQ: Video = {
  id: 'nhE2o3eaXQQ',
  channel: channelTrashTasteShorts,
  title: 'Japan LOVES Music From The West',
  publishedAt: '2022-05-23T16:00:25Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videonhE2o3eaXQQ);

const videomQl2iStr5_s: Video = {
  id: 'mQl2iStr5_s',
  channel: channelTrashTasteShorts,
  title: 'Backseating Grandmaster',
  publishedAt: '2022-05-24T16:00:22Z',
  tags: ['shorts', 'podcast highlights', 'trash taste highlights', 'Kson', 'Kson Vtuber'],
};
channelTrashTasteShorts.videos.push(videomQl2iStr5_s);

const videoW_GGnRV2cVI: Video = {
  id: 'W_GGnRV2cVI',
  channel: channelTrashTasteShorts,
  title: 'Mr GiggukWide',
  publishedAt: '2022-05-25T16:00:29Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoW_GGnRV2cVI);

const videosRNial6FTJI: Video = {
  id: 'sRNial6FTJI',
  channel: channelTrashTasteShorts,
  title: "Connor DOESN'T WATCH ANIME",
  publishedAt: '2022-05-26T16:00:24Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videosRNial6FTJI);

const video6UI_14CXT7A: Video = {
  id: '6UI_14CXT7A',
  channel: channelTrashTasteShorts,
  title: 'Connor And His Internet Humor',
  publishedAt: '2022-05-27T16:00:08Z',
  tags: ['shorts', 'podcast highlights', 'trash taste highlights', 'Kson', 'Kson Vtuber'],
};
channelTrashTasteShorts.videos.push(video6UI_14CXT7A);

const videovGoT7PzEyfc: Video = {
  id: 'vGoT7PzEyfc',
  channel: channelTrashTasteShorts,
  title: 'Garnt Reliving The Cycling Special',
  publishedAt: '2022-05-28T16:00:34Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videovGoT7PzEyfc);

const videoEXl_PlFQI8M: Video = {
  id: 'EXl-PlFQI8M',
  channel: channelTrashTasteShorts,
  title: 'Reddit VS The Dark Web',
  publishedAt: '2022-05-29T16:00:06Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoEXl_PlFQI8M);

const videoWhOt2t2v_9w: Video = {
  id: 'WhOt2t2v_9w',
  channel: channelTrashTasteShorts,
  title: "Joey's NOT theanimeman",
  publishedAt: '2022-05-30T16:00:28Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoWhOt2t2v_9w);

const video9JSTsIUm_Xs: Video = {
  id: '9JSTsIUm_Xs',
  channel: channelTrashTasteShorts,
  title: 'BEST WAY TO LEARN MAHJONG',
  publishedAt: '2022-05-31T16:00:08Z',
  tags: ['shorts', 'podcast highlights', 'trash taste highlights', 'Kson', 'Kson Vtuber'],
};
channelTrashTasteShorts.videos.push(video9JSTsIUm_Xs);

const videoz4or4xvIjhg: Video = {
  id: 'z4or4xvIjhg',
  channel: channelTrashTasteShorts,
  title: 'The Joey Taste Podcast',
  publishedAt: '2022-06-01T16:00:38Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoz4or4xvIjhg);

const videokniHk3IlKZo: Video = {
  id: 'kniHk3IlKZo',
  channel: channelTrashTasteShorts,
  title: 'Dads ROADRAGE',
  publishedAt: '2022-06-02T16:00:37Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videokniHk3IlKZo);

const videomdcM0Inp9L8: Video = {
  id: 'mdcM0Inp9L8',
  channel: channelTrashTasteShorts,
  title: 'LIFE HACKS GONE WRONG',
  publishedAt: '2022-06-03T16:00:25Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videomdcM0Inp9L8);

const videoEyTbCNHE1Ww: Video = {
  id: 'EyTbCNHE1Ww',
  channel: channelTrashTasteShorts,
  title: 'Gigguk is GARNT???',
  publishedAt: '2022-06-04T16:00:08Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoEyTbCNHE1Ww);

const videollf3iGFg2Yo: Video = {
  id: 'llf3iGFg2Yo',
  channel: channelTrashTasteShorts,
  title: 'The Boys Talk About Cracks?',
  publishedAt: '2022-06-05T16:00:18Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videollf3iGFg2Yo);

const videocrK0SV23NOM: Video = {
  id: 'crK0SV23NOM',
  channel: channelTrashTasteShorts,
  title: 'Joeys Forbidden Love',
  publishedAt: '2022-06-06T16:00:29Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videocrK0SV23NOM);

const videoH_4tl9wh388: Video = {
  id: 'H-4tl9wh388',
  channel: channelTrashTasteShorts,
  title: 'Garnt actually PLAYS GAMES!?',
  publishedAt: '2022-06-07T16:00:13Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoH_4tl9wh388);

const videoTDT7Mx62_8k: Video = {
  id: 'TDT7Mx62-8k',
  channel: channelTrashTasteShorts,
  title: 'Connors Skill Shot',
  publishedAt: '2022-06-08T16:00:14Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoTDT7Mx62_8k);

const videoAx5WEK_pDr8: Video = {
  id: 'Ax5WEK_pDr8',
  channel: channelTrashTasteShorts,
  title: 'Dads be like part 2',
  publishedAt: '2022-06-09T16:00:10Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videoAx5WEK_pDr8);

const videoHuTvoeF88sU: Video = {
  id: 'HuTvoeF88sU',
  channel: channelTrashTasteShorts,
  title: 'Joey And His Silly Questions',
  publishedAt: '2022-06-10T16:00:10Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoHuTvoeF88sU);

const videoEpNBs_GWuCI: Video = {
  id: 'EpNBs-GWuCI',
  channel: channelTrashTasteShorts,
  title: 'How Mahjong REALLY IS',
  publishedAt: '2022-06-11T16:00:11Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoEpNBs_GWuCI);

const videoQQG5qZ_snI8: Video = {
  id: 'QQG5qZ_snI8',
  channel: channelTrashTasteShorts,
  title: 'Why Emirichu Left School',
  publishedAt: '2022-06-12T16:00:10Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videoQQG5qZ_snI8);

const videoiNW8kU6ueZA: Video = {
  id: 'iNW8kU6ueZA',
  channel: channelTrashTasteShorts,
  title: 'Chris and Connor Come Out',
  publishedAt: '2022-06-13T16:00:20Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoiNW8kU6ueZA);

const videovvHH0xj_R04: Video = {
  id: 'vvHH0xj_R04',
  channel: channelTrashTasteShorts,
  title: "Emirichu's AMV",
  publishedAt: '2022-06-14T16:00:36Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videovvHH0xj_R04);

const videoohmsa3q2CTg: Video = {
  id: 'ohmsa3q2CTg',
  channel: channelTrashTasteShorts,
  title: 'Trash Taste Flowchart',
  publishedAt: '2022-06-15T16:00:27Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoohmsa3q2CTg);

const video9UEFYnmQeR8: Video = {
  id: '9UEFYnmQeR8',
  channel: channelTrashTasteShorts,
  title: 'Double the SPEED',
  publishedAt: '2022-06-16T16:00:05Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(video9UEFYnmQeR8);

const video7ymfTRveo30: Video = {
  id: '7ymfTRveo30',
  channel: channelTrashTasteShorts,
  title: "Garnt Didn't Know",
  publishedAt: '2022-06-17T16:00:10Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(video7ymfTRveo30);

const videoLEoe_n0Miw0: Video = {
  id: 'LEoe-n0Miw0',
  channel: channelTrashTasteShorts,
  title: 'Joey The Hannah Montana',
  publishedAt: '2022-06-18T16:00:09Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videoLEoe_n0Miw0);

const video_zJ2cdHQcxA: Video = {
  id: '_zJ2cdHQcxA',
  channel: channelTrashTasteShorts,
  title: 'Connor VS Peppers',
  publishedAt: '2022-06-19T16:00:30Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(video_zJ2cdHQcxA);

const videoSAZSSTVBoos: Video = {
  id: 'SAZSSTVBoos',
  channel: channelTrashTasteShorts,
  title: 'Why Does He SIP like that!?',
  publishedAt: '2022-06-20T16:00:15Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoSAZSSTVBoos);

const videoD4raHsej2zA: Video = {
  id: 'D4raHsej2zA',
  channel: channelTrashTasteShorts,
  title: 'Poop Tangent',
  publishedAt: '2022-06-21T16:00:08Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videoD4raHsej2zA);

const video4vnNxwqHdTM: Video = {
  id: '4vnNxwqHdTM',
  channel: channelTrashTasteShorts,
  title: '(men speaking)',
  publishedAt: '2022-06-22T16:00:04Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(video4vnNxwqHdTM);

const video9znflE_vIc8: Video = {
  id: '9znflE-vIc8',
  channel: channelTrashTasteShorts,
  title: 'Emirichu Gets Stereotyped',
  publishedAt: '2022-06-23T16:00:29Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(video9znflE_vIc8);

const videoszP8ZAAZ0Go: Video = {
  id: 'szP8ZAAZ0Go',
  channel: channelTrashTasteShorts,
  title: 'Level 1 Grant Vs Level 100 Garnt',
  publishedAt: '2022-06-24T16:00:42Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoszP8ZAAZ0Go);

const videoRu0TqRgw850: Video = {
  id: 'Ru0TqRgw850',
  channel: channelTrashTasteShorts,
  title: 'Teamwork Makes The Dream Work',
  publishedAt: '2022-06-25T16:00:46Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videoRu0TqRgw850);

const videoCFyOfUqykiU: Video = {
  id: 'CFyOfUqykiU',
  channel: channelTrashTasteShorts,
  title: 'Emirichu Trying To Get Her Visa',
  publishedAt: '2022-06-26T16:00:41Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videoCFyOfUqykiU);

const videomoNaytvMMTg: Video = {
  id: 'moNaytvMMTg',
  channel: channelTrashTasteShorts,
  title: 'When Connor Has An Opinion',
  publishedAt: '2022-06-27T16:00:42Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videomoNaytvMMTg);

const videorzQh9o7_mRU: Video = {
  id: 'rzQh9o7_mRU',
  channel: channelTrashTasteShorts,
  title: 'Building PCs Is Scary',
  publishedAt: '2022-06-28T16:00:37Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videorzQh9o7_mRU);

const videoWXjT_7l7esw: Video = {
  id: 'WXjT_7l7esw',
  channel: channelTrashTasteShorts,
  title: 'Why Is He So Sad??',
  publishedAt: '2022-06-29T16:00:46Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoWXjT_7l7esw);

const videorFQHGOpxppg: Video = {
  id: 'rFQHGOpxppg',
  channel: channelTrashTasteShorts,
  title: "Connor's Master Disguise!",
  publishedAt: '2022-06-30T16:00:34Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videorFQHGOpxppg);

const videoIHOP_NiTHf8: Video = {
  id: 'IHOP-NiTHf8',
  channel: channelTrashTasteShorts,
  title: 'Daidus Bucket List',
  publishedAt: '2022-07-01T16:00:11Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videoIHOP_NiTHf8);

const videoS2rADMRd8oI: Video = {
  id: 'S2rADMRd8oI',
  channel: channelTrashTasteShorts,
  title: 'Do You Know The Meaning?',
  publishedAt: '2022-07-02T16:00:14Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoS2rADMRd8oI);

const videojHIfwTQEkvA: Video = {
  id: 'jHIfwTQEkvA',
  channel: channelTrashTasteShorts,
  title: '"We Speak English"',
  publishedAt: '2022-07-03T16:00:17Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videojHIfwTQEkvA);

const videoQRxmqLOaTXQ: Video = {
  id: 'QRxmqLOaTXQ',
  channel: channelTrashTasteShorts,
  title: 'Cons Are Like Dead Rising Now',
  publishedAt: '2022-07-04T16:00:13Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videoQRxmqLOaTXQ);

const videonJ4l3CsiWr8: Video = {
  id: 'nJ4l3CsiWr8',
  channel: channelTrashTasteShorts,
  title: 'People In Japan Do This On The Phone!?',
  publishedAt: '2022-07-05T16:00:24Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videonJ4l3CsiWr8);

const videos1cqptebomw: Video = {
  id: 's1cqptebomw',
  channel: channelTrashTasteShorts,
  title: 'The Famous "Memer"',
  publishedAt: '2022-07-06T16:00:29Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videos1cqptebomw);

const videoUWz7CoOYDpY: Video = {
  id: 'UWz7CoOYDpY',
  channel: channelTrashTasteShorts,
  title: 'Real Name For Connors Illness',
  publishedAt: '2022-07-07T16:00:29Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videoUWz7CoOYDpY);

const video8fUZzRrUH4E: Video = {
  id: '8fUZzRrUH4E',
  channel: channelTrashTasteShorts,
  title: '"Oh Yeah! I... Don\'t Know You"',
  publishedAt: '2022-07-08T16:00:04Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(video8fUZzRrUH4E);

const videoFKIDHADhNTU: Video = {
  id: 'FKIDHADhNTU',
  channel: channelTrashTasteShorts,
  title: 'Daidus Greeting',
  publishedAt: '2022-07-09T16:00:08Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videoFKIDHADhNTU);

const videoP8MZ5F5DHcc: Video = {
  id: 'P8MZ5F5DHcc',
  channel: channelTrashTasteShorts,
  title: 'Connor vs Cab Driver',
  publishedAt: '2022-07-10T16:00:25Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videoP8MZ5F5DHcc);

const videoweN8_tTgyT0: Video = {
  id: 'weN8-tTgyT0',
  channel: channelTrashTasteShorts,
  title: 'The Con Experience',
  publishedAt: '2022-07-11T16:00:42Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videoweN8_tTgyT0);

const videodZSwd0wclCU: Video = {
  id: 'dZSwd0wclCU',
  channel: channelTrashTasteShorts,
  title: 'The Boys Get Got With A Gift',
  publishedAt: '2022-07-12T16:00:17Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videodZSwd0wclCU);

const videol4YZNKwPY40: Video = {
  id: 'l4YZNKwPY40',
  channel: channelTrashTasteShorts,
  title: 'Connor\'s "Master Piece"',
  publishedAt: '2022-07-13T16:00:26Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videol4YZNKwPY40);

const videopy4aBT4_6pY: Video = {
  id: 'py4aBT4-6pY',
  channel: channelTrashTasteShorts,
  title: 'What Metamorphosis Was Missing',
  publishedAt: '2022-07-14T16:00:29Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videopy4aBT4_6pY);

const videojE6nA8kNZ_M: Video = {
  id: 'jE6nA8kNZ-M',
  channel: channelTrashTasteShorts,
  title: 'The Doujin Artist Thought Process',
  publishedAt: '2022-07-15T16:00:34Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videojE6nA8kNZ_M);

const videoRiNcKZGAk9g: Video = {
  id: 'RiNcKZGAk9g',
  channel: channelTrashTasteShorts,
  title: 'Why Does He Name His MUSIC LIKE THAT!?',
  publishedAt: '2022-07-16T16:00:17Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoRiNcKZGAk9g);

const videoLYfwdqa15UM: Video = {
  id: 'LYfwdqa15UM',
  channel: channelTrashTasteShorts,
  title: 'The Boys Actually Have VANILLA TASTE',
  publishedAt: '2022-07-17T16:00:12Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoLYfwdqa15UM);

const videozBfrdcG6rOk: Video = {
  id: 'zBfrdcG6rOk',
  channel: channelTrashTasteShorts,
  title: 'Reading Doujins For The Plot (REAL)',
  publishedAt: '2022-07-18T16:00:43Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videozBfrdcG6rOk);

const videovBzfWtazZ_c: Video = {
  id: 'vBzfWtazZ_c',
  channel: channelTrashTasteShorts,
  title: 'Sydney Jebaits A Fan',
  publishedAt: '2022-07-19T16:00:40Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(videovBzfWtazZ_c);

const videoV4cwBjN0u5Y: Video = {
  id: 'V4cwBjN0u5Y',
  channel: channelTrashTasteShorts,
  title: 'How Doujins Handle Censorship',
  publishedAt: '2022-07-20T16:00:18Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoV4cwBjN0u5Y);

const video_O0tdBTV6bg: Video = {
  id: '-O0tdBTV6bg',
  channel: channelTrashTasteShorts,
  title: 'Skill Issue With Doujins',
  publishedAt: '2022-07-21T16:00:00Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(video_O0tdBTV6bg);

const video9d_aM_C_tnI: Video = {
  id: '9d-aM_C-tnI',
  channel: channelTrashTasteShorts,
  title: 'Joey From The Anime Zone',
  publishedAt: '2022-07-22T16:00:11Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(video9d_aM_C_tnI);

const video0QWEX5m2fXY: Video = {
  id: '0QWEX5m2fXY',
  channel: channelTrashTasteShorts,
  title: 'Doujin Artists Spare Time',
  publishedAt: '2022-07-23T16:00:00Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(video0QWEX5m2fXY);

const videoK2kK_mZqQg0: Video = {
  id: 'K2kK-mZqQg0',
  channel: channelTrashTasteShorts,
  title: 'Doujin Artists Favorite Manga',
  publishedAt: '2022-07-24T16:00:11Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoK2kK_mZqQg0);

const video4d_SumPiyqU: Video = {
  id: '4d_SumPiyqU',
  channel: channelTrashTasteShorts,
  title: 'Connor Burned By Fan',
  publishedAt: '2022-07-25T16:00:04Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'emirichu',
    'trash taste emirichu',
  ],
};
channelTrashTasteShorts.videos.push(video4d_SumPiyqU);

const videozkTqn4bBsM4: Video = {
  id: 'zkTqn4bBsM4',
  channel: channelTrashTasteShorts,
  title: 'Connors Thoughts On Metamorphosis',
  publishedAt: '2022-07-26T16:00:41Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videozkTqn4bBsM4);

const videoXW_0P751FEw: Video = {
  id: 'XW-0P751FEw',
  channel: channelTrashTasteShorts,
  title: 'Are You Into That?',
  publishedAt: '2022-07-27T16:00:16Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoXW_0P751FEw);

const videotZpJlVBEfQg: Video = {
  id: 'tZpJlVBEfQg',
  channel: channelTrashTasteShorts,
  title: 'Daily Uploads For 5 Years',
  publishedAt: '2022-07-28T16:00:41Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'jacksepticeye',
    'jacksepticeye trash taste',
    'jacksepticeye podcast',
  ],
};
channelTrashTasteShorts.videos.push(videotZpJlVBEfQg);

const videoPTmfolKumlE: Video = {
  id: 'PTmfolKumlE',
  channel: channelTrashTasteShorts,
  title: 'How Jacksepticeye Met Ryan Reynolds',
  publishedAt: '2022-07-29T16:00:24Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'jacksepticeye',
    'jacksepticeye trash taste',
    'jacksepticeye podcast',
  ],
};
channelTrashTasteShorts.videos.push(videoPTmfolKumlE);

const videondt32P8P4ag: Video = {
  id: 'ndt32P8P4ag',
  channel: channelTrashTasteShorts,
  title: 'The Doujin Workspace',
  publishedAt: '2022-07-30T16:00:34Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videondt32P8P4ag);

const videoMbpO66LDvz8: Video = {
  id: 'MbpO66LDvz8',
  channel: channelTrashTasteShorts,
  title: "Jacksepticeye's Dedication To YouTube",
  publishedAt: '2022-07-31T16:00:14Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'jacksepticeye',
    'jacksepticeye trash taste',
    'jacksepticeye podcast',
  ],
};
channelTrashTasteShorts.videos.push(videoMbpO66LDvz8);

const video84JwJvovjDA: Video = {
  id: '84JwJvovjDA',
  channel: channelTrashTasteShorts,
  title: "Jacksepticeye's Favorite Anime Is FMA",
  publishedAt: '2022-08-01T16:00:06Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'jacksepticeye',
    'jacksepticeye trash taste',
    'jacksepticeye podcast',
  ],
};
channelTrashTasteShorts.videos.push(video84JwJvovjDA);

const videoFmPxDQoI7pA: Video = {
  id: 'FmPxDQoI7pA',
  channel: channelTrashTasteShorts,
  title: 'Astrology Is Classism',
  publishedAt: '2022-08-02T16:00:07Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(videoFmPxDQoI7pA);

const videobq9GPLD5kV4: Video = {
  id: 'bq9GPLD5kV4',
  channel: channelTrashTasteShorts,
  title: "Jacksepticeye's Favorite Manga",
  publishedAt: '2022-08-03T16:00:21Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'jacksepticeye',
    'jacksepticeye trash taste',
    'jacksepticeye podcast',
  ],
};
channelTrashTasteShorts.videos.push(videobq9GPLD5kV4);

const videou5UgEtsmtG0: Video = {
  id: 'u5UgEtsmtG0',
  channel: channelTrashTasteShorts,
  title: "Jacksepticeye's IS A GAMER",
  publishedAt: '2022-08-04T16:00:38Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'jacksepticeye',
    'jacksepticeye trash taste',
    'jacksepticeye podcast',
  ],
};
channelTrashTasteShorts.videos.push(videou5UgEtsmtG0);

const videoNS9pJhj4_jY: Video = {
  id: 'NS9pJhj4-jY',
  channel: channelTrashTasteShorts,
  title: "LilyPichu Doesn't Watch Movies",
  publishedAt: '2022-08-05T16:00:14Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(videoNS9pJhj4_jY);

const videotKKNztBfiqo: Video = {
  id: 'tKKNztBfiqo',
  channel: channelTrashTasteShorts,
  title: "Jacksepticeye's Is an ACTOR!?",
  publishedAt: '2022-08-06T16:00:27Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'jacksepticeye',
    'jacksepticeye trash taste',
    'jacksepticeye podcast',
  ],
};
channelTrashTasteShorts.videos.push(videotKKNztBfiqo);

const videom5aFlR9gCHs: Video = {
  id: 'm5aFlR9gCHs',
  channel: channelTrashTasteShorts,
  title: 'What Jacksepticeye Is Doing AFTER YOUTUBE',
  publishedAt: '2022-08-07T16:00:21Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'jacksepticeye',
    'jacksepticeye trash taste',
    'jacksepticeye podcast',
  ],
};
channelTrashTasteShorts.videos.push(videom5aFlR9gCHs);

const videoAoYxCXApqBs: Video = {
  id: 'AoYxCXApqBs',
  channel: channelTrashTasteShorts,
  title: 'LilyPichu READS SPOILERS ON PURPOSE',
  publishedAt: '2022-08-08T16:00:09Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(videoAoYxCXApqBs);

const video4xj_hWFdRbo: Video = {
  id: '4xj-hWFdRbo',
  channel: channelTrashTasteShorts,
  title: 'Why Jujutsu Kaisen IS NOT MID',
  publishedAt: '2022-08-09T16:00:05Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'jacksepticeye',
    'jacksepticeye trash taste',
    'jacksepticeye podcast',
  ],
};
channelTrashTasteShorts.videos.push(video4xj_hWFdRbo);

const videoTg9IYHELJXw: Video = {
  id: 'Tg9IYHELJXw',
  channel: channelTrashTasteShorts,
  title: "You Don't Need To Be A Weeb To Like Anime",
  publishedAt: '2022-08-10T16:00:13Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'jacksepticeye',
    'jacksepticeye trash taste',
    'jacksepticeye podcast',
  ],
};
channelTrashTasteShorts.videos.push(videoTg9IYHELJXw);

const videoQL63incvheg: Video = {
  id: 'QL63incvheg',
  channel: channelTrashTasteShorts,
  title: 'Among Us',
  publishedAt: '2022-08-11T16:00:13Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(videoQL63incvheg);

const videoWCo_byy_XfM: Video = {
  id: 'WCo-byy-XfM',
  channel: channelTrashTasteShorts,
  title: 'Michael Reeves is NOT AN ENGINEER',
  publishedAt: '2022-08-12T16:00:27Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts', 'micheal reeves'],
};
channelTrashTasteShorts.videos.push(videoWCo_byy_XfM);

const videoAxLqb4w4JGI: Video = {
  id: 'AxLqb4w4JGI',
  channel: channelTrashTasteShorts,
  title: 'Jacksepticeye was sent WHAT IN THE MAIL',
  publishedAt: '2022-08-13T16:00:06Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'jacksepticeye',
    'jacksepticeye trash taste',
    'jacksepticeye podcast',
  ],
};
channelTrashTasteShorts.videos.push(videoAxLqb4w4JGI);

const videonVzLfcHoctY: Video = {
  id: 'nVzLfcHoctY',
  channel: channelTrashTasteShorts,
  title: 'How Much Anthony Padilla Cuts From His Interviews',
  publishedAt: '2022-08-14T16:00:25Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts', 'anthony padilla'],
};
channelTrashTasteShorts.videos.push(videonVzLfcHoctY);

const videoSys5gv7_370: Video = {
  id: 'Sys5gv7_370',
  channel: channelTrashTasteShorts,
  title: 'Connor Meets A YouTuber Uber Driver',
  publishedAt: '2022-08-15T16:00:14Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(videoSys5gv7_370);

const videoAQTrhtIZE2g: Video = {
  id: 'AQTrhtIZE2g',
  channel: channelTrashTasteShorts,
  title: "Jacksepticeye's Experience With Vidcon",
  publishedAt: '2022-08-16T16:00:05Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'jacksepticeye',
    'jacksepticeye trash taste',
    'jacksepticeye podcast',
  ],
};
channelTrashTasteShorts.videos.push(videoAQTrhtIZE2g);

const video7hSdxjA8UiA: Video = {
  id: '7hSdxjA8UiA',
  channel: channelTrashTasteShorts,
  title: 'Engineering Degrees In America SUCK',
  publishedAt: '2022-08-17T16:00:04Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts', 'micheal reeves'],
};
channelTrashTasteShorts.videos.push(video7hSdxjA8UiA);

const videoRiFHKtW7n1c: Video = {
  id: 'RiFHKtW7n1c',
  channel: channelTrashTasteShorts,
  title: "Anthony Padilla's Thoughts On The Smosh Movie",
  publishedAt: '2022-08-18T16:00:13Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts', 'anthony padilla'],
};
channelTrashTasteShorts.videos.push(videoRiFHKtW7n1c);

const videos8X9bcHzoTQ: Video = {
  id: 's8X9bcHzoTQ',
  channel: channelTrashTasteShorts,
  title: 'Connor STRUGGLES TO VOICE ACT?',
  publishedAt: '2022-08-19T16:00:41Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(videos8X9bcHzoTQ);

const video1baEpNPbvQE: Video = {
  id: '1baEpNPbvQE',
  channel: channelTrashTasteShorts,
  title: 'Best Kind Of Uber Driver',
  publishedAt: '2022-08-20T16:00:03Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts', 'micheal reeves'],
};
channelTrashTasteShorts.videos.push(video1baEpNPbvQE);

const videoQoHaohZcElc: Video = {
  id: 'QoHaohZcElc',
  channel: channelTrashTasteShorts,
  title: 'What Anthony Padilla Is Doing Next',
  publishedAt: '2022-08-21T16:00:09Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts', 'anthony padilla'],
};
channelTrashTasteShorts.videos.push(videoQoHaohZcElc);

const videoOPeE_HwSAkM: Video = {
  id: 'OPeE_HwSAkM',
  channel: channelTrashTasteShorts,
  title: "LilyPichu's TERRIBLE Voice Acting Audition",
  publishedAt: '2022-08-22T16:00:12Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(videoOPeE_HwSAkM);

const videoEWKvg02k_m8: Video = {
  id: 'EWKvg02k_m8',
  channel: channelTrashTasteShorts,
  title: 'Michael Reeves Favorite Anime',
  publishedAt: '2022-08-23T16:00:09Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts', 'micheal reeves'],
};
channelTrashTasteShorts.videos.push(videoEWKvg02k_m8);

const video9evFzBSyQm4: Video = {
  id: '9evFzBSyQm4',
  channel: channelTrashTasteShorts,
  title: 'Why Does Anime Have To Be So Weird',
  publishedAt: '2022-08-24T16:00:05Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(video9evFzBSyQm4);

const videocFb_u4NTt6o: Video = {
  id: 'cFb_u4NTt6o',
  channel: channelTrashTasteShorts,
  title: 'DDR is INTENSE',
  publishedAt: '2022-08-25T16:00:32Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(videocFb_u4NTt6o);

const videoJRxGGCA_Zsc: Video = {
  id: 'JRxGGCA_Zsc',
  channel: channelTrashTasteShorts,
  title: 'Anthony Padilla And The Corporate Vampire',
  publishedAt: '2022-08-26T16:00:23Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts', 'anthony padilla'],
};
channelTrashTasteShorts.videos.push(videoJRxGGCA_Zsc);

const video6v4pyTlYapM: Video = {
  id: '6v4pyTlYapM',
  channel: channelTrashTasteShorts,
  title: 'ProZD Has NEVER Made A YT Thumbnail',
  publishedAt: '2022-08-27T16:00:07Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(video6v4pyTlYapM);

const video6ENS_yyYg4M: Video = {
  id: '6ENS_yyYg4M',
  channel: channelTrashTasteShorts,
  title: 'Angry Meilyne',
  publishedAt: '2022-08-28T16:00:05Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(video6ENS_yyYg4M);

const videoCCJlzsnwpKQ: Video = {
  id: 'CCJlzsnwpKQ',
  channel: channelTrashTasteShorts,
  title: "Don't Voice Act In A Gacha Game",
  publishedAt: '2022-08-29T16:00:08Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(videoCCJlzsnwpKQ);

const videoJBFjZ18CS3A: Video = {
  id: 'JBFjZ18CS3A',
  channel: channelTrashTasteShorts,
  title: 'Jessica Nigri Speedran Her IronMouse Cosplay',
  publishedAt: '2022-08-30T16:00:08Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(videoJBFjZ18CS3A);

const video4GFvwTLpj7c: Video = {
  id: '4GFvwTLpj7c',
  channel: channelTrashTasteShorts,
  title: 'ProZDs Dream VA Role',
  publishedAt: '2022-08-31T16:00:07Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(video4GFvwTLpj7c);

const videoRJm46qaLMWc: Video = {
  id: 'RJm46qaLMWc',
  channel: channelTrashTasteShorts,
  title: 'Garnt Draws IronMouse',
  publishedAt: '2022-09-01T16:00:17Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(videoRJm46qaLMWc);

const videouYg3C8qBrxo: Video = {
  id: 'uYg3C8qBrxo',
  channel: channelTrashTasteShorts,
  title: "LilyPichu's Favorite Game",
  publishedAt: '2022-09-02T16:00:39Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(videouYg3C8qBrxo);

const videoC7XwGpaYiMQ: Video = {
  id: 'C7XwGpaYiMQ',
  channel: channelTrashTasteShorts,
  title: 'Anthony Padilla Quit College After 6 Videos',
  publishedAt: '2022-09-03T16:00:06Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts', 'anthony padilla'],
};
channelTrashTasteShorts.videos.push(videoC7XwGpaYiMQ);

const videog9n2gtvJnos: Video = {
  id: 'g9n2gtvJnos',
  channel: channelTrashTasteShorts,
  title: "Getting Rejected From VA Roles Because You're A YouTuber",
  publishedAt: '2022-09-04T16:00:32Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(videog9n2gtvJnos);

const video4WOKpmYkLPY: Video = {
  id: '4WOKpmYkLPY',
  channel: channelTrashTasteShorts,
  title: "Garnt Doesn't Know This 10/10 Show",
  publishedAt: '2022-09-05T16:00:02Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(video4WOKpmYkLPY);

const videowBl_zyppt78: Video = {
  id: 'wBl_zyppt78',
  channel: channelTrashTasteShorts,
  title: 'Trash Taste Are The PowerPuff Girls',
  publishedAt: '2022-09-06T16:00:24Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(videowBl_zyppt78);

const videor2A8EMIaN_g: Video = {
  id: 'r2A8EMIaN-g',
  channel: channelTrashTasteShorts,
  title: 'Connor Gets The Boys',
  publishedAt: '2022-09-07T16:00:37Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(videor2A8EMIaN_g);

const videonirWkuI6gqI: Video = {
  id: 'nirWkuI6gqI',
  channel: channelTrashTasteShorts,
  title: 'American Pizza vs Italian Pizza',
  publishedAt: '2022-09-08T16:00:34Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videonirWkuI6gqI);

const videoCSSSFj03C_w: Video = {
  id: 'CSSSFj03C_w',
  channel: channelTrashTasteShorts,
  title: 'Cosplaying Is NOT EASY',
  publishedAt: '2022-09-09T16:00:09Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoCSSSFj03C_w);

const videoWLi_9KVA_S8: Video = {
  id: 'WLi-9KVA-S8',
  channel: channelTrashTasteShorts,
  title: 'Being A YouTuber Is Like Being In High School',
  publishedAt: '2022-09-10T16:00:19Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(videoWLi_9KVA_S8);

const videoSMXaki13aGU: Video = {
  id: 'SMXaki13aGU',
  channel: channelTrashTasteShorts,
  title: 'Ludwig Gets Us BANNED',
  publishedAt: '2022-09-11T16:00:16Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'ludwig',
    'ludwig ahgren',
    'ludwig trash taste',
    'the yard',
    'the yard podcast',
    'ludwig podcast',
  ],
};
channelTrashTasteShorts.videos.push(videoSMXaki13aGU);

const video3ulAnGEryM0: Video = {
  id: '3ulAnGEryM0',
  channel: channelTrashTasteShorts,
  title: 'Jessica Nigri Is A VOICE ACTOR TOO',
  publishedAt: '2022-09-12T16:00:02Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(video3ulAnGEryM0);

const videoyZ3lHtjkif0: Video = {
  id: 'yZ3lHtjkif0',
  channel: channelTrashTasteShorts,
  title: 'Jessica Nigri Wanted To Be A Manager!?',
  publishedAt: '2022-09-13T16:00:37Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoyZ3lHtjkif0);

const videoUt2TrEdDGNo: Video = {
  id: 'Ut2TrEdDGNo',
  channel: channelTrashTasteShorts,
  title: "We Don't Plan Episodes Of Trash Taste",
  publishedAt: '2022-09-14T16:00:32Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts', 'anthony padilla'],
};
channelTrashTasteShorts.videos.push(videoUt2TrEdDGNo);

const videotBbhj61ObnQ: Video = {
  id: 'tBbhj61ObnQ',
  channel: channelTrashTasteShorts,
  title: 'Ludwig Has More Employees THAN TRASH TASTE!?',
  publishedAt: '2022-09-15T16:00:35Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'ludwig',
    'ludwig ahgren',
    'ludwig trash taste',
    'the yard',
    'the yard podcast',
    'ludwig podcast',
  ],
};
channelTrashTasteShorts.videos.push(videotBbhj61ObnQ);

const videoo7aT40P7UBc: Video = {
  id: 'o7aT40P7UBc',
  channel: channelTrashTasteShorts,
  title: "Jessica Nigri's First Cosplay",
  publishedAt: '2022-09-16T16:00:40Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoo7aT40P7UBc);

const video11ZsiGMwi8M: Video = {
  id: '11ZsiGMwi8M',
  channel: channelTrashTasteShorts,
  title: "Jessica Nigri's Nightmare Panel",
  publishedAt: '2022-09-17T16:00:01Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(video11ZsiGMwi8M);

const videoWvfLGgh66_I: Video = {
  id: 'WvfLGgh66_I',
  channel: channelTrashTasteShorts,
  title: 'ProZDs Secret Anime Gem',
  publishedAt: '2022-09-18T16:00:15Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'lilypichu',
    'lilypichu podcast',
    'lilypichu trash taste',
  ],
};
channelTrashTasteShorts.videos.push(videoWvfLGgh66_I);

const videoDp00bv6RVQk: Video = {
  id: 'Dp00bv6RVQk',
  channel: channelTrashTasteShorts,
  title: 'Ludwig Is NOT The Biggest YouTuber From His School',
  publishedAt: '2022-09-19T16:00:07Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'ludwig',
    'ludwig ahgren',
    'ludwig trash taste',
    'the yard',
    'the yard podcast',
    'ludwig podcast',
  ],
};
channelTrashTasteShorts.videos.push(videoDp00bv6RVQk);

const videoOR4BwqGQ_sU: Video = {
  id: 'OR4BwqGQ_sU',
  channel: channelTrashTasteShorts,
  title: "Jessica Nigri's Special Hobby",
  publishedAt: '2022-09-20T16:00:24Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoOR4BwqGQ_sU);

const videoE_C6p68DO2U: Video = {
  id: 'E-C6p68DO2U',
  channel: channelTrashTasteShorts,
  title: "We're Getting Old",
  publishedAt: '2022-09-21T16:00:07Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoE_C6p68DO2U);

const videoj4fcynuFeM8: Video = {
  id: 'j4fcynuFeM8',
  channel: channelTrashTasteShorts,
  title: 'Flying Sucks In America',
  publishedAt: '2022-09-22T16:00:26Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoj4fcynuFeM8);

const videoCyRtpteA0B4: Video = {
  id: 'CyRtpteA0B4',
  channel: channelTrashTasteShorts,
  title: 'Ludwigs First Anime',
  publishedAt: '2022-09-23T16:00:18Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'ludwig',
    'ludwig ahgren',
    'ludwig trash taste',
    'the yard',
    'the yard podcast',
    'ludwig podcast',
  ],
};
channelTrashTasteShorts.videos.push(videoCyRtpteA0B4);

const video9a6zg3_bhs4: Video = {
  id: '9a6zg3_bhs4',
  channel: channelTrashTasteShorts,
  title: 'Why We Started Trash Taste',
  publishedAt: '2022-09-25T16:00:06Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(video9a6zg3_bhs4);

const videoF8bHZ2_Sx_4: Video = {
  id: 'F8bHZ2_Sx-4',
  channel: channelTrashTasteShorts,
  title: 'How Do You Sleep On Planes',
  publishedAt: '2022-09-26T16:00:14Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoF8bHZ2_Sx_4);

const videovatNZ6Q6cHk: Video = {
  id: 'vatNZ6Q6cHk',
  channel: channelTrashTasteShorts,
  title: "Why We Don't Have A Content House",
  publishedAt: '2022-09-28T16:00:43Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videovatNZ6Q6cHk);

const videoUibnU4kKXbo: Video = {
  id: 'UibnU4kKXbo',
  channel: channelTrashTasteShorts,
  title: 'Will Twitch Survive Against YouTube?',
  publishedAt: '2022-09-29T16:00:15Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'ludwig',
    'ludwig ahgren',
    'ludwig trash taste',
    'the yard',
    'the yard podcast',
    'ludwig podcast',
  ],
};
channelTrashTasteShorts.videos.push(videoUibnU4kKXbo);

const videolteFW4GqtKM: Video = {
  id: 'lteFW4GqtKM',
  channel: channelTrashTasteShorts,
  title: 'When Do We Stop?',
  publishedAt: '2022-09-30T16:00:37Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'ludwig',
    'ludwig ahgren',
    'ludwig trash taste',
    'the yard',
    'the yard podcast',
    'ludwig podcast',
  ],
};
channelTrashTasteShorts.videos.push(videolteFW4GqtKM);

const videorPOeIVuwXxU: Video = {
  id: 'rPOeIVuwXxU',
  channel: channelTrashTasteShorts,
  title: 'The Boys Get Special Hats',
  publishedAt: '2022-10-01T16:00:28Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videorPOeIVuwXxU);

const videooW4yDjFf3zc: Video = {
  id: 'oW4yDjFf3zc',
  channel: channelTrashTasteShorts,
  title: 'Streaming Live Events Is HARD',
  publishedAt: '2022-10-02T16:00:26Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'ludwig',
    'ludwig ahgren',
    'ludwig trash taste',
    'the yard',
    'the yard podcast',
    'ludwig podcast',
  ],
};
channelTrashTasteShorts.videos.push(videooW4yDjFf3zc);

const videoBfXfrJAL7WI: Video = {
  id: 'BfXfrJAL7WI',
  channel: channelTrashTasteShorts,
  title: 'Streamer Retirement Is Becoming A React Andy',
  publishedAt: '2022-10-03T16:00:07Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'ludwig',
    'ludwig ahgren',
    'ludwig trash taste',
    'the yard',
    'the yard podcast',
    'ludwig podcast',
  ],
};
channelTrashTasteShorts.videos.push(videoBfXfrJAL7WI);

const videoXUwBgGUZLAU: Video = {
  id: 'XUwBgGUZLAU',
  channel: channelTrashTasteShorts,
  title: 'How Joey Found Out He Was Allergic To Cats',
  publishedAt: '2022-10-04T16:00:22Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts'],
};
channelTrashTasteShorts.videos.push(videoXUwBgGUZLAU);

const videod4NL3AiTjsY: Video = {
  id: 'd4NL3AiTjsY',
  channel: channelTrashTasteShorts,
  title: 'Online Vs Real Chess',
  publishedAt: '2022-10-05T16:00:20Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'ludwig',
    'ludwig ahgren',
    'ludwig trash taste',
    'the yard',
    'the yard podcast',
    'ludwig podcast',
  ],
};
channelTrashTasteShorts.videos.push(videod4NL3AiTjsY);

const videoKE7nKFTkB5U: Video = {
  id: 'KE7nKFTkB5U',
  channel: channelTrashTasteShorts,
  title: 'Ludwig Will Stop Streaming In 5 Years',
  publishedAt: '2022-10-06T16:00:20Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'ludwig',
    'ludwig ahgren',
    'ludwig trash taste',
    'the yard',
    'the yard podcast',
    'ludwig podcast',
  ],
};
channelTrashTasteShorts.videos.push(videoKE7nKFTkB5U);

const videoL3kjm8dsKf4: Video = {
  id: 'L3kjm8dsKf4',
  channel: channelTrashTasteShorts,
  title: "You Don't Do Things By Hand? CRINGE",
  publishedAt: '2022-10-07T16:00:14Z',
  tags: ['podcast highlights', 'trash taste highlights', 'shorts', 'the yard'],
};
channelTrashTasteShorts.videos.push(videoL3kjm8dsKf4);

const videoIuMz2MRRhRI: Video = {
  id: 'IuMz2MRRhRI',
  channel: channelTrashTasteShorts,
  title: 'Ludwig FELL OFF',
  publishedAt: '2022-10-08T16:00:10Z',
  tags: [
    'podcast highlights',
    'trash taste highlights',
    'shorts',
    'ludwig',
    'ludwig ahgren',
    'ludwig trash taste',
    'the yard',
    'the yard podcast',
    'ludwig podcast',
  ],
};
channelTrashTasteShorts.videos.push(videoIuMz2MRRhRI);

// Exports
export const channels: Channel[] = [
  channelTrashTaste,
  channelTrashTasteAfterDark,
  channelTrashTasteHighlights,
  channelTrashTasteShorts,
];
export const guests: Guest[] = [
  guestAbroadinJapan,
  guestakidearest,
  guestDaidus,
  guestEmirichu,
  guestGenoSamuel,
  guestIronmouse,
  guestjacksepticeye,
  guestJessicaNigri,
  guestKenArto,
  guestKevinPenkin,
  guestKson,
  guestLadybeard,
  guestLilyPichu,
  guestLudwig,
  guestMichaelReeves,
  guestMoriCalliope,
  guestNano,
  guestNileRed,
  guestNoriyaro,
  guestPokimane,
  guestProZD,
  guestReinaScully,
  guestShibuyaKaho,
  guestShindoL,
  guestShuUchida,
  guestsydsnap,
  guestWilliamOsman,
];
