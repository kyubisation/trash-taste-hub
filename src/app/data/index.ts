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
  chapters: {
    0: 'Intro, Garnts birthday and wine.',
    324: 'Living in Japan in quarantine.',
    434: 'Why they went to live to Japan.',
    734: 'Traveling.',
    946: 'Going to the Crunchyroll anime awards.',
    1032: 'Getting offered to live in Japan.',
    1322: 'Moving to Japan because of anime and watching anime on Japan.',
    1393: 'Getting offered to live in Japan (again).',
    1460: 'Not getting into a routine and exploring Japan.',
    1509: 'Visas in Japan and finding an apartment in Japan.',
    1884: 'Applying for a visa in Japan.',
    2093: 'Connor losing his passport and more advice for getting a visa in Japan.',
    2435: 'Degrees and xenophobia in Japan.',
    2783: 'Getting the police called on them and more xenophobia.',
    3018: 'buisness in Japan and everything being too serious.',
    3313: '"Key-fee" and paying too much for rent.',
    3472: 'Convenience stores.',
    3700: 'Tradition in web design in Japan.',
    3778: 'Eating out and food prices.',
    4075: 'Dumb products, weight loss and cherries.',
    4352: 'Sweets, bread, cheese and nato.',
    4584: 'Fish and japanese food culture.',
    4772: 'Difficulties of not being able to speak/read japanese.',
    5161: 'Problems Connor had after just moving in.',
    5256: 'Thoughts about Akihabara.',
    5409: 'Amazon, Gumtree and more Akihabara thoughts.',
    5528: 'Connors used fridge.',
    5808: 'The reactions of people of Connor and Garnt moving.',
    5947: 'Anitubers coming to Japan.',
    6017: 'Buisness in Japan.',
    6074: 'Experiencing things and getting life skills.',
    6126: 'The language barrier.',
    6239: 'Time they are going to stay.',
    6380: 'Garnts company party story.',
    6530: 'Outro.',
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
  chapters: {
    0: 'Who is Nano',
    298: "Nano's Wikipedia",
    420: 'Why Nano started making music',
    590: 'Nico Nico',
    903: 'Nico Nico vs YouTube',
    1013: 'How long to create OP music',
    1129: 'First time in a music studio',
    1439: 'Where has Nano performed',
    1553: 'Anime conventions',
    1651: 'ExpressVPN',
    1746: 'Who does Nano want to cosplay',
    1876: 'What constitutes a good OP',
    2065: 'Anime music vs JPOP',
    2120: 'Karaoke',
    2315: 'How anime affected other music',
    2437: 'Hiding your face',
    2602: 'Biggest crowd',
    2754: 'Performing in America vs Japan',
    2927: 'Mistakes on the stage',
    3165: 'Custom Cast',
    3253: 'Idol culture',
    3618: 'Identity crisis',
    3799: 'Controlling your artist image',
    3946: 'Signatures',
    4504: 'Coming to live in Japan',
    4704: 'Japanese education system',
    4959: 'MackWeldon',
    5064: 'Born in the wrong generation',
    5361: 'Is Japan a utopia?',
    5435: 'Macha',
    5582: 'Public transport',
    5695: 'Food',
    5897: 'Rehearsals',
    6214: 'Who owns the rights to anime OPs',
    6399: 'How it felt hearing yourself on TV',
    6496: 'Working in the industry',
    6585: 'Who does Nano like',
    6698: "Nano's YouTube career",
    7137: 'Outro',
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
  chapters: {
    0: 'Intro',
    47: 'Dangerous caves',
    496: 'Climbing in high places',
    679: 'Extreme activities',
    784: 'Where our fears came from',
    863: 'Connor used to be claustrophobic',
    975: 'A fascinating fear',
    1065: "Joey's fear of heights",
    1135: 'A fear that came from anime',
    1237: 'We want to press RED BUTTONS!',
    1331: 'Insane bus driver story',
    1492: 'Joey saw lightning up close',
    1631: 'Honey',
    1731: "Joey's classmates cricket accident",
    1842: 'Connor passed out in sex ed',
    2014: 'Sex ed was weird',
    2259: "Connor's teacher was a chad",
    2349: 'Babies come out of bellybuttons',
    2526: 'Connor cut his own hair',
    2601: 'Joey used to fear toilets',
    2782: 'How Garnt learned about lying',
    2824: 'How Joey learned about lying',
    2914: 'Among us is difficult for us',
    3041: 'Twitch content is popping off',
    3194: 'Learning how to commentate live',
    3287: 'Having siblings',
    3423: 'Consoles we owned as children',
    3549: 'Connor was addicted to his gameboy',
    3697: 'Garnt went to an unofficial Nintendo store',
    3793: 'Trading games with other kids',
    3903: 'Connor mastered the art of the deal',
    4089: 'Garnt used to hustle hard',
    4189: 'Joey printed his own Yu-Gi-Oh Cards',
    4384: 'Card unboxings are amazing',
    4508: 'Streaming on Twitch',
    4665: 'Our mentality towards working',
    4835: 'The bane of any streamer',
    5076: 'The Attack on Titan segment',
    5206: 'Bookwalker',
    5279: 'Spoiler culture',
    5474: 'Are memes spoilers?',
    5746: 'Anime dedicated forums',
    5825: 'Discussing anime as it airs',
    6232: 'Last time we got spoiled on something',
    6425: 'The spoilers that everyone should know',
    6632: "We're tired, bye",
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
  chapters: {
    0: 'intro',
    64: 'convenience stores in japan',
    237: 'fried chicken',
    667: 'chicken nuggets',
    782: 'skewered meat',
    889: 'ashley',
    909: 'cheap sake',
    1104: 'korokke',
    1216: 'spring roll',
    1346: 'mexican food in japan',
    1508: "Harry's",
    1671: 'gyudon',
    1830: 'snacks',
    2106: 'sausages',
    2245: 'sandwiches',
    2708: 'onigiri',
    3029: 'seafood sticks',
    3162: 'Bokksu',
    3280: 'meats',
    3331: 'pickled plums',
    3570: 'dried fish',
    3690: 'sugar snack',
    3857: 'cookies',
    4103: 'mini ramen',
    4218: 'a weird snack',
    4357: 'castella',
    4437: 'popcorn',
    4506: 'sugary baguette',
    4575: "lawson's chocolates",
    4899: 'almond cookies',
    4983: 'sweet potato kit kat',
    5061: 'pretz',
    5124: 'gaba',
    5271: 'ramune candy',
    5342: 'choco baby',
    5398: 'umaibo',
    5509: 'cheese',
    5643: 'even more sweets',
    5917: 'the best kit kat',
    6010: 'wasabi sticks',
    6143: 'macha',
    6250: 'garnts life changes',
    6437: 'ranking the stores',
    6916: 'tasty outro',
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
  chapters: {
    0: 'Frail intro',
    36: 'Revisiting the cycling special',
    306: "Why Garnt didn't put the chain back on",
    463: 'The logistics of filming a special',
    615: 'We see through the lies of movies',
    700: 'IRL streamers',
    869: 'Feeling awkward in public',
    1008: 'Fake confidence during a stream',
    1074: 'Are streamers actually nice people',
    1112: 'The next step to IRL streaming',
    1148: 'The weirdest challenge on YouTube',
    1319: 'Garnt and Joey toy collab',
    1386: 'How is this allowed on YT',
    1439: "The most cursed stuff we've seen on YT",
    1541: "It's just a prank bro",
    1691: 'Ritual',
    1761: 'Adressing the monk pictures',
    1935: 'Having the talk with your parents',
    2193: 'Joey banned his dad from his socials',
    2371: 'Internet privacy',
    2495: 'Interviews with the paparazzi',
    2595: 'Blues Clues',
    2683: 'Genetics',
    2731: "Believing you're the exception",
    3066: 'Accepting your future',
    3238: 'Being bald',
    3294: 'Having your entire life recorded',
    3408: 'EJAS',
    3520: 'Storing your virtual existence',
    3617: "Garnt's thug look",
    3870: 'Suits are fun',
    4002: "Men's fashion",
    4284: 'Japan has optimized shirts',
    4360: "Japan's technology is hit or miss",
    4574: 'People are embarassing',
    4842: 'The Waffle House Index',
    4896: 'Zombie movies are not realistic',
    5118: 'Social skills after isolation',
    5305: 'Wearing masks',
    5355: 'Will cons become more hygenic',
    5480: 'Hand sanitizers',
    5685: 'Future conventions',
    5732: 'Post Malone x Pokemon',
    5900: 'Crowds make or break an event',
    6146: 'The future of chess',
    6473: 'Forgetting what you learned',
    6648: 'We thank you',
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
  chapters: {
    0: 'Fire intro',
    61: 'Aki reveals her name',
    73: 'YouTuber wikis are unreliable',
    181: 'Garnt socializes',
    242: 'Who is Akidearest',
    350: 'Are we anime YouTubers',
    454: 'Aki used to do analytical content',
    543: 'How Aki and Joey met',
    567: 'Skoolgirl101',
    744: 'Aki reaches out to Joey',
    898: 'Joey was trapped in Canada',
    1019: 'The longest Skype calls',
    1119: 'The AX experience',
    1308: 'Being jealous of American culture',
    1419: 'Parents love YouTubers',
    1535: 'Our parents give us feedback',
    1610: 'Liquid IV',
    1699: 'Starting YouTube',
    2005: 'Our perspective on grinding',
    2085: 'YouTubers and self worth',
    2227: 'Fake friends',
    2396: 'Collabing',
    2541: 'Eye contact',
    2681: 'People need to introduce their friends',
    2715: 'The handshake',
    2813: "Connor had drinner with Aki's family",
    3016: 'Food is the answer to everything',
    3079: 'Commenting on weight',
    3239: 'Military school',
    3944: 'Getting messages from people in your past',
    4028: 'School reunions',
    4331: 'Moving away from your birth country',
    4449: 'Aki used to have an accent',
    4505: 'British history and culture',
    4579: 'Accents',
    4733: 'The Welsh Dragon',
    4835: 'Connor is in a clan',
    4976: 'Joey trolls his friends',
    5053: 'Blowing up on YouTube',
    5286: 'Expanding your content',
    5438: 'True Crime',
    5809: 'Netflix documentaries',
    6343: 'How deep is the True Crime world',
    6618: 'Criminal psychology',
    6769: 'Reality and entertainment has combined',
    7005: 'Cancel culture',
    7362: 'The YouTube persona',
    7450: 'The need to know everything',
    7610: 'YouTube views matter',
    7810: "What does Aki's future hold",
    7864: 'Joey brings the outro',
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
  chapters: {
    0: 'Connor shits on his phone',
    64: 'Jeopardy',
    112: 'Gameshows we watched growing up',
    175: 'Deal or no deal',
    269: 'British gameshows',
    325: 'Prize pools',
    403: 'Favorite gameshow',
    478: 'Golden Balls',
    729: 'Millionaire Hot Seat',
    808: 'Weakest Link',
    917: 'Reckless Ben',
    1031: 'Talent shows are insane',
    1101: '90 Day Fiancee',
    1370: 'American vs British Reality TV',
    1419: "Don't Tell the Bride",
    1603: 'ExpressVPN',
    1688: 'Organizing a wedding',
    1928: 'Thai weddings',
    2191: 'Connor gets stopped by the police',
    2600: 'Biggest games in japan',
    2644: 'Dead games',
    2682: 'Popular games',
    2892: 'Deepfakes',
    3581: 'Worrying about everything',
    4085: 'YouTuber boxing matches',
    4336: 'Are YouTubers ruining sports',
    4634: 'Boring sports',
    4792: 'Sports we want to try',
    4934: 'The Olympics',
    5089: 'Watching sports games',
    5337: 'Sumo',
    5395: 'Talking about America',
    5505: 'Obscure sports',
    5734: 'Robot Wars',
    5828: 'Gladiators',
    5951: 'Unbeatable Banzuke',
    6024: 'Best reality TV concept',
    6277: 'Derren Brown',
    6668: 'David Blaine',
    6872: 'Fear Factor',
    7114: 'Derren Brown special',
    7357: 'Thanking the most important people',
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
  chapters: {
    0: 'Smashing intro',
    62: "It's Ladybeard",
    92: "Getting shushed at Denny's",
    144: 'Pranking convenience store workers',
    259: 'Who is Ladybeard',
    400: 'Why Ladybeard left Australia',
    506: 'Working in Hong Kong',
    554: 'Getting into wrestling',
    727: 'Moving to Japan',
    766: 'The system of wrestling',
    893: 'How Ladybeard became a crossdresser',
    1039: 'Being the object of attention',
    1164: 'Becoming the top wrestler in Hong Kong',
    1390: 'Pro wrestling entries',
    1532: 'Becoming a metal singer',
    1857: 'Ladybaby',
    2201: 'Harrys',
    2319: 'The shower curtain story',
    2602: 'Being in a pop group',
    2762: 'Babybeard',
    2959: 'Auditions for Babybeard',
    3269: 'A fake ad',
    3310: 'Ladybeards audience',
    3406: 'Getting recognized',
    3458: 'T-posing for a grandma',
    3580: 'Ladybeards future goals',
    3689: 'How to pronounce Gigguk',
    3738: "You can't sing on YouTube",
    3809: 'Working a normal job',
    3971: 'Honey',
    4069: 'Long flights',
    4313: 'Reading books',
    4440: 'Hobbies',
    4493: 'Work as a hobby',
    4600: 'Working out is weird',
    4640: 'Chad',
    4830: 'Getting into martial arts',
    4979: 'How long to learn a martial art',
    5076: 'The usefulness of martial arts',
    5144: 'MMA',
    5283: 'Easiest martial art to learn',
    5329: 'Being a stuntman',
    5681: 'Pro wrestling',
    5754: 'Wrestling injuries',
    6059: 'Playing with fire',
    6217: 'The Ladybeard Podcast',
    6338: 'Peppa the Pig',
    6404: 'Learning Japanese',
    6999: 'Ladybeard is a voice actor',
    7327: "Connor's weird voice acting gig",
    7508: 'Accents in voice acting',
    7801: "Anime we're currently watching",
    7938: 'Watching manly anime',
    8125: 'The Anime Man name is a lie',
    8254: 'Being the content',
    8324: 'Transitioning beyond anime content',
    8525: 'Stunt driving',
    8661: 'The awesome life of Ladybeard',
    8738: 'Chad outro',
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
  chapters: {
    0: 'Rise up gamers',
    192: "Garnt can't complete games",
    313: 'Joey likes shiny new things',
    431: 'Remembering is hard',
    471: 'What video games we expect Garnt to play',
    529: "Garnt's 3x3",
    562: 'Anime games',
    613: 'Garnt hates turn-based battles',
    660: 'Persona 5 is a banger',
    748: 'Tales of Symphonia',
    910: 'More Persona 5',
    1035: 'Hype fatigue',
    1159: 'Replaying comfort games',
    1270: 'Legend of Zelda',
    1347: 'Super Mario Sunshine',
    1408: 'Ocarina of Time is overrated',
    1486: "Majora's Mask",
    1561: 'Super Mario',
    1707: 'Garnt has vanilla anime taste',
    1733: 'Gears of War',
    1922: "You can't have fun in multiplayer",
    2074: 'Talking to your teammates',
    2155: "Garnt doesn't want to play the best Metal Gear",
    2205: 'Theme Park World',
    2373: 'Box art',
    2485: 'Garnt loves the cutscenes',
    2573: 'Interacting with every NPC',
    2647: 'Mass Effect lore',
    2767: 'The Silent Hill drama',
    2891: 'Gaming FOMO',
    3125: 'Garnt was a Fifa pro',
    3431: 'Fifa Ultimate is worse than gatcha games',
    3574: 'The pay-to-win experience',
    3716: 'Gaming tournaments are expensive',
    3774: "Connor's 3x3",
    3816: 'Super Mario Strikers',
    4026: 'Batallion Wars',
    4182: 'Guitar Hero',
    4347: 'Rhythm games',
    4534: 'Sonic Riders',
    4724: 'Black Ops 2',
    4830: 'Metal Slug',
    4884: 'Contra',
    4943: 'Mega Man',
    5035: 'Battletoads',
    5161: 'Time Crisis',
    5526: 'Arcade games',
    5766: 'Apex Legends vs League of Legends',
    5980: 'Meeting up with online friends',
    6088: 'Halo Wars',
    6203: 'RTS games',
    6301: "Joey's 3x3",
    6345: 'Super Mario World',
    6414: 'Clannad',
    6462: 'Eating bricks',
    6532: 'SSX Tricky',
    6640: 'Pokemon Silver',
    6762: 'Kirby',
    6835: 'Animal Crossing',
    7000: 'Sims voice acting projects',
    7039: 'Garnt gets burned by Animal Crossing',
    7246: 'Games where you collect stuff',
    7461: 'Terraria vs Minecraft',
    7584: "Games we didn't have room to include",
    7979: 'Joey slams another outro',
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
  chapters: {
    0: 'Connor is the host today',
    40: 'Reina Scully joins the party',
    140: 'Who is Reina Scully?',
    223: 'SourceFed',
    703: 'Why Reina left SourceFed',
    788: 'Anime Club',
    1013: 'Reina brought anime knowledge to YouTube',
    1221: 'Anime fans are brutal',
    1364: 'Reinas life after SourceFed',
    1594: 'Getting a job for Philip DeFranco',
    1696: 'Ritual',
    1752: 'Starting work at Crunchyroll',
    1984: 'Being the face of Crunchyroll',
    2097: 'Interning for a YouTube channel',
    2159: 'Being camera shy',
    2306: 'Joey ignores Reina during a stream',
    2482: 'Leaving a stream open accidentally',
    2532: 'Streaming with friends',
    2679: 'Connor almost got doxed',
    2865: 'LA is intense',
    2966: "Reina didn't own her own channel",
    3168: 'Being proud of your own videos',
    3275: 'Why Reina left Crunchyroll',
    3394: 'Leaving LA',
    3455: 'Bokksu',
    3539: 'Reinas life in Japan',
    3768: 'Feeling isolated',
    3831: 'Why Reina moved to Japan',
    3986: 'Being the cool uncles',
    4285: 'Why does Japan censor everything',
    4464: 'Japanese TV is great for inspiration',
    4636: 'Silent Library',
    4733: 'The Inbetweeners',
    4790: 'Japanese TV has no chill',
    4848: 'Manscaped',
    4971: 'British TV adaptations',
    5014: 'Anime we grew up with',
    5079: 'Being an Asian in school',
    5389: 'Mandatory food segment',
    5699: 'The most 5/10 ramen ever',
    5803: 'The sketchy part of Japan',
    5898: 'Sherlock Holmes x Detective Conan',
    6057: 'Toonami',
    6188: 'Reina draws X-Files fan art',
    6360: 'Hosting a food show',
    6600: 'Voice acting',
    6695: 'Streaming setup',
    6859: 'Worst things to do during a stream',
    7087: 'Guessing our net worth',
    7157: 'Monetizing our hobbies',
    7276: 'Japan has the best aesthetic',
    7380: "UK's aesthetic",
    7710: 'Joey gets pranked by a bird',
    7754: 'Recreating sounds',
    7837: 'Japans dialect is huge',
    8103: 'Weird British words',
    8292: 'Reina brought us gifts, yay!',
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
  chapters: {
    0: 'Poopoo intro',
    97: 'YouTube is removing the dislike counter',
    196: 'YouTube Heroes was a thing',
    217: 'Why does YouTube secretly change stuff',
    345: 'Dislikes are important',
    485: 'YouTube has made good changes',
    697: 'Comments that are turned off',
    721: 'Getting ratioed',
    825: 'Instagram stops showing the amount of likes',
    889: 'Twitter is its own ecosystem',
    998: 'Every platform is its own bubble',
    1078: "Removing options doesn't remove the problem",
    1239: 'Ending cancel culture',
    1432: 'The copyright system has improved',
    1539: 'Demonetization is weird',
    1600: 'YouTube comments got really good',
    1672: 'ExpressVPN',
    1760: 'What feedback would we give to YouTube',
    1896: 'Getting in contact with YouTube is impossible',
    2056: 'Our videos are being ranked by views',
    2160: 'Underperforming videos',
    2506: 'Mental health and creativity',
    2671: 'Nobody understands the algorithm',
    2780: 'Mack Weldon',
    2850: 'Proving our worth to YouTube',
    2924: 'Putting numbers of parts in video titles',
    2953: 'The lore of Trash Taste',
    3122: 'Connor the VTuber magnet',
    3274: '3D people collabing with VTubers',
    3594: 'The future of VTubing',
    3711: 'Being able to meet your fans',
    4015: 'Streaming seems fun',
    4063: 'Twitch is broken',
    4166: "Ludwig's subathon",
    4235: 'Getting cancelled during your sleep',
    4505: 'Ludwig made the Truman Show real',
    4685: "Will anyone ever top Ludwig's subathon",
    4741: 'Twitch plays Pokémon',
    4845: 'LiquidIV',
    4909: 'Sporting events with Twitch chat',
    5001: 'The chaos that was Twitch plays Pokemon',
    5152: 'Creativity in streaming',
    5287: 'Original ideas on YouTube',
    5392: 'Stuff that does well on Twitch',
    5556: 'Watching Twitch on mobile',
    5645: 'Do we watch Youtube as a job',
    5830: 'Copying other peoples content',
    6351: "Things we can't get over",
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
  chapters: {
    0: 'Tasty intro',
    50: 'The power of Grant',
    74: 'We took a 3 week break',
    138: 'What is there to talk about',
    184: 'Journey Across Japan: Lost Islands',
    278: "Japan's British Town",
    423: 'British culture',
    514: 'Joey went on a trip with Chris',
    584: 'Connor learns a new word',
    630: 'Speedrunning tourism',
    691: 'Places to visit in Japan',
    879: "Google knows where we've been",
    1097: "The prefectures Joey's visited",
    1252: 'Japans coffee is bad',
    1652: 'Honey',
    1734: 'Espresso is amazing',
    1875: 'We really needed an espresso machine',
    2034: 'Japan really is a tea society',
    2158: 'Fish & Chips',
    2320: 'What can you do in England',
    2454: 'Judging towns based on their pint prices',
    2542: "All you can drink izakaya's",
    2679: 'Coming around to liking wine',
    2910: 'Wine in Japan',
    3005: 'Hangover tier list',
    3137: 'Making mini-games out of drinking',
    3274: 'The Kamikaze Shot',
    3414: "Harry's",
    3497: 'Getting old',
    3562: 'Garnts first wine tasting event',
    3778: 'Fancy restaurants',
    3853: 'Hangover tier list recap',
    3881: 'Meilyne experiments on Garnt',
    4026: 'Evian made us beautiful',
    4134: 'Bracelets that help you lose fat',
    4187: 'Bad before and after pictures',
    4300: 'Chicken and broccoli diet works',
    4395: 'Trying to lose weight',
    4510: 'Self-improvement',
    4733: 'Enjoying food',
    4783: 'Connors worst Uber Eats experience',
    4946: 'Garnt managed to get spicy food in Japan',
    5073: 'Connor and Garnt got some really spicy food',
    5199: 'The allure of spicy food',
    5402: 'Crunchyroll',
    5468: 'Connors older brother pranks his family',
    5719: 'The spiciest thing Joeys had',
    5816: 'Spice high',
    5896: 'Garnt tries ghost pepper extract',
    6281: 'Connor used to be a lifeguard',
    6983: 'How to save kids from drowning',
    7087: 'Garnt almost drowned',
    7363: 'Joeys funnest pool experience',
    7415: 'Finding a place to swim in Japan is hard',
    7476: 'How often do people shit in a pool',
    7555: 'The downsides of being shortsighted in a pool',
    7829: 'Peeing in the pool',
    7911: 'See you next Friday',
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
  chapters: {
    0: 'Meilyne time',
    49: "Stuff that's left behind when moving house",
    161: 'Throwing away trash in Japan',
    296: "The little things we don't think about in our house",
    428: 'Sydney has a lot of weird stuff',
    595: 'Missing a YouTube upload',
    696: 'Lockdown in Japan',
    735: 'Golden Week',
    818: 'Japanese government gave you money to travel during lockdown',
    1118: 'Dreaming about the lockdown ending',
    1195: 'We crave beans and toast',
    1296: 'People make everything political',
    1365: 'UK is opening up',
    1539: "Garnt and Joey's camping adventure",
    1641: 'Bokksu',
    1704: 'Garnt buys a battery bank',
    2049: 'Camping areas in Japan',
    2211: 'Buying wood for a fire',
    2327: 'Camping in Japan is fully regulated',
    2439: 'Setting up a tent',
    2650: 'Starting a fire',
    2806: 'Connor goes camping',
    2971: 'Activities during camping',
    3031: 'Kayaking in the ocean',
    3188: 'Service stations in Japan',
    3314: 'Garnt has a ton of paperwork',
    3410: 'Gamersupps',
    3493: 'Connor and Garnt go snowboarding',
    4018: 'Snowboarding on a beginners slope',
    4229: 'Learning snowboarding at a young age',
    4317: 'Getting the hang on snowboarding',
    4469: 'Garnt tries to jump with a snowboard',
    4862: 'Connor shows off his snowboarding skills',
    5018: "Garnt's second day of snowboarding",
    5156: 'Manscaped',
    5230: "Garnt couldn't get himself up",
    5354: 'Snowboarding vs skiing',
    5492: 'How long to learn snowboarding',
    5560: 'Why Connor stopped skiing',
    5884: 'The whitest activities anyone can do',
    5985: 'The weirdest ski resort',
    6343: "We're too privileged for bad coffee",
    6466: "Don't trust free coffee",
    6591: 'Getting a coffee machine changes your life',
    6741: 'Food cooked during camping tastes the best',
    6776: 'Oh no',
    6916: "Connor realizes he doesn't want to be a peasant",
    7002: 'The money mindset',
    7923: 'Connor leaves the podcast',
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
  chapters: {
    0: 'Welcome to Trash Taste Awardw',
    97: 'Our 1 year anniversary',
    263: 'Reflecting on the past year',
    442: 'Categories',
    540: 'Best Intro',
    949: 'Hot Take of the Year',
    1458: 'Atsuko',
    1540: 'Best Hot Take of the Year',
    1648: 'Best Out-Of-Context Clip',
    1950: 'Screengrab of the Year',
    2242: 'Most Degenerate Moment',
    2581: 'Most Saltiest Moment',
    2916: 'Most Monkey Moment',
    3288: 'Best Story',
    3742: 'Biggest Clown',
    3887: 'Biggest Chad',
    4075: 'Best Nickname',
    4343: 'Best Complaining-About-America Moment',
    4849: 'Best Meme',
    5255: 'Best Tangent',
    5565: 'Best TT Special Moment',
    5983: 'Best Drip',
    6110: 'Laziest Drip',
    6434: 'Best TT Animated',
    6707: 'Best Rant',
    7081: 'Best catchphrase',
    7259: 'Guest of the Year',
    7611: 'Best Argument',
    7875: 'Best TT Special',
    8121: 'Best TT Moment',
    8309: 'Best Fan Art',
    8509: 'Our thoughts going into Trash Taste',
    8840: 'Best Trash Taste Episode',
    9403: 'Best People',
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
  chapters: {
    0: 'Joey moistens the boys',
    57: 'The JOJO Event',
    289: 'Paying $40 for an event',
    448: 'Who uses auto generated subtitles for a professional event',
    655: 'The JoJo anime Twitter account responded to the haters',
    776: 'Reasons to pirate',
    914: 'Gamers have risen up',
    1143: 'Buying anime merch',
    1310: 'We need more anime events',
    1509: 'Honey',
    1583: 'Award shows',
    1674: 'Tenet',
    1802: 'How many movies do we watch',
    1964: 'Eating food from the floor',
    2264: 'Holding a baby',
    2372: "The Oscars aren't that good",
    2903: 'Anime in the Oscars',
    3000: 'Watching movies online',
    3173: "Watching movies when we're younger",
    3269: 'LiquidIV',
    3346: 'Discussing internet speeds',
    3538: 'Watching in SD vs HD',
    3662: 'Renting movies off of YouTube',
    3824: 'Megaupload',
    3955: 'Internet in the university',
    4030: 'Getting internet in Japan',
    4529: 'SIM cards in Japan',
    4774: 'Japanese banks',
    5181: 'Getting a debit/credit card in Japan',
    5481: 'Bank apps are rare in Japan',
    5608: 'We actually love Japan',
    5695: 'Giving away very personal information',
    5793: 'Moving in Japan',
    5932: 'Signatures vs stamps',
    6027: 'The battle of the Joshes',
    6126: 'Convenient online systems',
    6189: 'Freelancing in Japan is close to impossible',
    6243: 'Forms need to be filled perfectly',
    6389: 'Moving in Japan is a week long process',
    6787: 'Tipping culture',
    6888: 'Trying to withdraw money from Japanese ATMs',
    7242: 'People who live rent free in our heads',
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
  chapters: {
    0: 'A savage intro',
    33: "Joey's been building furniture",
    64: 'The most annoying furniture to build',
    159: "Connor's cockroach infested fridge and washing machine",
    406: 'Garnts first run in with a cockroach',
    902: 'Joeys dad is a chad',
    1209: 'Worst furniture to build',
    1337: 'Sleeping on the floor',
    1424: 'How to get some good sleep',
    1554: 'Getting out of the bed',
    1658: 'ExpressVPN',
    1741: 'Hydration',
    1766: 'Peeing',
    1972: 'Making drinking fun',
    2093: 'Carbonated drinks',
    2271: 'Getting milk at McDonalds',
    2394: 'Tea from Starbucks',
    2519: 'Tea in UK',
    2633: 'American kettles',
    2709: 'Tea variety',
    2948: 'Americans vs tea',
    3040: 'Connor abandoned the kettle',
    3180: 'Microwaving tea',
    3288: 'Connors brother made him tea',
    3435: "Harry's",
    3531: 'How to recognize an aussie',
    3712: 'Creepie crawlies',
    3958: 'Poisonous food',
    4211: 'Weird online challenges',
    4500: 'Pasties',
    4612: 'School food',
    4743: 'Connor was nice to the cafeteria ladies',
    4874: 'Best part of the school dinner',
    5056: 'Hustling for cheese strings',
    5186: 'Lunchables',
    5285: 'Garnt discovers Nutella',
    5497: 'Viscous breakfast spreads',
    5625: 'Peanut Butter',
    5732: 'Sharing snacks',
    5774: 'Joey ruins Kit Kats',
    5962: 'The Toblerone debacle',
    6181: "Terry's Chocolate Orange",
    6319: 'Jaffa Cakes',
    6377: 'Chocolate overload',
    6540: 'Our favorite cakes',
    6676: 'Dessert bars',
    6763: 'The vibes are important',
    6937: 'People who eat Kit Kats correctly',
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
  chapters: {
    0: 'Watch on Patreon to see EVERYTHING',
    45: 'This is a wine episode',
    58: 'Bois forced Connor to read',
    221: "What we're covering today",
    277: 'Dorei Usagi to Anthony',
    334: 'What Connor thought of reading Doujins',
    546: 'Story in doujins',
    571: 'Connor tries explaining the story of Dorei Usagi to Anthony',
    672: 'Why did Joey pick this doujin',
    744: 'The premise of Dorei Usagi to Anthony',
    1004: 'The weird ending of Dorei Usagi to Anthony',
    1331: 'The conclusion to Dorei Usagi to Anthony',
    1395: 'The art style Dorei Usagi to Anthony',
    1420: 'The author of Dorei Usagi to Anthony',
    1582: "Inma no Mikata! | Succubi's Supporter!",
    1631: "The story of Succubi's Supporter!",
    1681: 'GamerSupps',
    1737: 'The best job in the world for a man',
    1775: 'The best artist for drawing BJ scenes',
    1817: 'How well doujins translate into adult anime',
    1942: 'Why Garnt picked this doujin',
    2246: "Connors final thoughts on Succubi's Supporter!",
    2355: 'Queen Bee',
    2427: 'The macaron analogy',
    2537: 'Juunengo no Jinsei Soudan',
    2721: 'The story of Juunengo no Jinsei Soudan',
    3352: 'Garnt needs spice with his animation',
    3402: 'GAMERSupps',
    3461: 'Breaking taboos',
    3662: 'Why this is Garnts favorite parody doujin',
    3905: 'Peace Hame / Say Cheese',
    4134: 'The story of Peace Hame/Say Cheese',
    4469: 'Making you wait for it',
    4643: 'Connor thought this doujin was 10/10',
    4674: 'Watching adult anime for the story',
    4700: 'The bois finally agree on something',
    4799: 'NTR is the future',
    5046: 'Top searched terms on PH',
    5111: 'Seikatsu Shuukan',
    5161: 'The story of Seikatsu Shuukan',
    5234: 'GAMERSUPPS',
    5382: 'The worst trope',
    5468: 'Connor makes an exception',
    5789: 'Connors thoughts on Seikatsu Shuukan',
    5904: 'Why did Joey recommend Seikatsu Shuukan',
    6018: 'Kyoushi to Seito to',
    6255: 'The story of Kyoushi to Seito to',
    6400: 'Getting whiplash from a doujin',
    6857: 'Kyoushi to Seito to is a 7/10',
    6927: 'Metamorphosis',
    7061: 'The story of Metamorphosis',
    7469: 'Is Metamorphosis a masterpiece',
    7697: 'Garnt had something awoken inside him',
    7842: 'The final chapter of Metamorphosis',
    7891: 'God tier facial expressions',
    7988: 'Connor is tired of reading doujins',
    8183: 'The inspiration behind Metamorphosis',
    8469: 'Connors feelings after reading Metamorphosis',
    8659: 'The monke finally had to read',
    8697: 'Doujin tier list',
    8871: 'The loveliest degenerates',
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
  chapters: {
    0: 'Intro manoeuvre',
    39: "We're finally moving out",
    124: 'Plane seating',
    448: 'Sleeping on a plane',
    806: 'Crying babies on planes',
    887: 'Noise cancelling headphones',
    1028: 'The sun hurts',
    1322: 'Bokksu',
    1373: 'Berserk',
    1437: 'Hiatuses',
    1522: 'Paying our respects to Berserk',
    2151: 'Overworking',
    2403: 'Castlevania on Netflix',
    2559: 'Voice acting in anime',
    2903: 'The Minions movie is anime',
    3104: 'Vessi',
    3173: 'Eden',
    3355: 'Getting lost in translation',
    3861: 'Yasuke',
    4099: 'Eighty-Six',
    4189: 'The Way of the Househusband',
    4508: 'Acting in Japan',
    4593: 'Korean movies are awesome',
    4664: 'Japanese acting is reminiscent of anime',
    4790: 'Japanese dramas',
    4855: 'Cinematography',
    5033: 'Animation VS story',
    5078: 'Campy shows',
    5292: 'Musicals',
    5625: 'Actors who hate their own movies',
    5674: 'Daniel Craig is sabotaging James Bond films',
    6044: 'Anime musicals',
    6187: 'Season 1 is coming to a close',
    7011: 'People who are sticking around for season 2',
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
  chapters: {
    0: 'Season 2 starts now',
    62: 'Talking about our new set',
    183: 'Skincare',
    434: 'Acne',
    553: 'Short hair vs long hair',
    637: 'Figuring out our haircuts',
    703: 'Good TikTok memes be bussin',
    855: 'Social media tries too hard',
    927: 'Twitters new features',
    973: 'Are we turning into boomers',
    1018: 'We were in a press conference',
    1753: 'Switching studios was more time consuming than anticipated',
    1820: 'ExpressVPN',
    1896: 'Connors Crazy Taxi adventure',
    2380: 'The service industry in Japan',
    2592: 'Taxi lifehack',
    2765: "Garnt should've just said yes to the taxi driver",
    3035: 'Moving in Japan',
    3246: 'Connor got a noise complaint',
    3485: "We don't actually film that much inside our homes",
    3614: "Garnt's neighbor from hell",
    4270: 'Connor turned off the internet on his housemates',
    4482: 'Mack Weldon',
    4544: 'Connor stole from his housemates',
    4722: 'Exposing our thieving past',
    4809: 'Joey was so angry he accidentally stole a candy',
    4899: 'Connor tried to game a store',
    4960: "The worst thing Garnt's ever done",
    5128: 'The trust system in Japan',
    5285: 'Who steals their parents credit cards',
    5426: 'Garnt gets visited by the tooth fairy',
    5520: 'The worst Bible story',
    5973: 'Teachers remember too much',
    6046: 'Honey',
    6110: 'Connor did a talk about YouTube',
    6555: 'Going to study in a foreign country',
    7048: 'Leaving League',
    7131: 'People who love taking opportunities',
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
  chapters: {
    0: 'Apex Raid of Shadows',
    20: "Chris's drip",
    407: 'Trash Taste webtoon',
    506: 'Internet slang',
    626: 'Too Much Volcano',
    855: 'Journey Across Japan',
    1156: 'Scary plane flight',
    1362: 'Chris is a scaredy-cat',
    1586: 'Apari',
    1661: 'The breakfast debacle',
    2023: 'British food in Japan',
    2139: 'What Chris misses about England',
    2251: 'Architecture',
    2522: 'Taking a sulfur bath',
    2732: 'Denkiburo',
    2833: "Chris's near death experience",
    3058: 'Chris tries skiing',
    3155: 'Climbing mount Fuji',
    3283: 'What content will Chris do now',
    3419: "Japan's most active volcano",
    3527: 'How to make the ultimate series in a week',
    3616: 'Abandoned islands in Japan',
    3716: 'Honkai Impact',
    3795: 'Drinks are popped',
    3839: 'Connor went to the dentist',
    3925: 'The Japan dentist experience',
    4079: 'Chris loves e-sports',
    4101: 'Rate My Takeaway',
    4234: "Chris's favorite video games",
    4349: 'Chris used to do fencing',
    4414: 'Taekwondo',
    4468: "Chris wasn't prepared to climb Mount Fuji",
    4905: 'Chris has done everything',
    5063: 'Filming concerts in Japan',
    5142: 'Abroad in Japan merch',
    5246: 'Is wearing kimono cultural appropriation',
    5418: 'Garnt got Thai jozud',
    5533: 'Chris is actually Welsh',
    5657: 'Connor is one of the most famous Welsh people',
    5722: 'Crunchyroll',
    5786: 'Getting verified on Twitter',
    5972: 'Connor had no sense of danger',
    6102: 'Death by cattle',
    6193: 'Garnt goes off on swans',
    6370: 'Dangerous animals',
    6529: 'Ghost Wolf',
    6688: 'Ghosts',
    6739: 'UFOs',
    6883: "Joey's paranormal experience",
    7090: 'Our brains are kind of dumb',
    7318: "Curb your son's wife",
    7416: 'Chris won $150 from Connor',
    7472: 'People fighting',
    7546: 'Garnt learned how to time travel',
    7962: 'Thank you Barry',
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
  chapters: {
    0: "Don't cheat on your husband",
    21: "We're exhausted our backlog",
    40: 'Recent topics',
    138: 'Influencer crypto scams',
    691: 'Being the face of YouTube',
    876: 'Getting our vaccine shots',
    1420: 'Bokksu',
    1468: 'Invincible was amazing',
    1664: 'Comic book adaptations',
    1776: 'Records of Ragnarok',
    1948: 'Adapting a manga',
    2039: "Connor's worst take yet",
    2231: 'The art in anime',
    2325: 'When a story becomes predictable',
    2525: 'One-Punch Man season 2 vs season 1',
    2659: 'Mob Psycho 100 has top tier story',
    2754: 'The future of One-Punch Man',
    2832: 'Will Chainsaw Man live up to the hype',
    2964: 'Trese',
    3038: 'Odd Taxi',
    3213: "Wonder Egg Priority didn't deliver",
    3416: 'Promised Neverland season 2',
    3480: 'Live action posters',
    3565: 'Why are JAV only 480p',
    3679: 'Coco graduated',
    4051: 'The politics in vtubing',
    4229: 'The future of Hololive',
    4487: 'Male vtubers',
    4621: 'What makes a popular streamer',
    5141: 'Trendsetters',
    5234: 'Dhar Mann is dominating YouTube',
    5456: 'Arcade Craniacs',
    5590: 'Connor summarizes a Dharr Mann video',
    5724: 'Joey visited Nintendo World',
    5965: 'Nintendo gamified an amusement park',
    6278: 'The best attraction at Nintendo World',
    6461: 'Themed foods',
    6621: 'Voice acting in amusement parks',
    6828: 'The best part of Nintendo World',
    6892: 'The most important topic of this podcast',
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
  chapters: {
    0: 'Voicing an intro',
    24: 'Our official first guest in the new studio',
    88: 'Joey went to the same school as Shu',
    242: 'Chasing the voice acting dream',
    341: 'The many faces of Shu Uchida',
    469: 'Dropping out of school to become a VA',
    970: 'Voice Acting in Japan is strict',
    1027: 'Voice Acting schools',
    1438: 'Crunchyroll',
    1509: "Shu's first role",
    1619: 'How parents feel about voice acting',
    1775: 'Every parent knows each other',
    2024: 'The childhood friend trope',
    2362: 'How to practice for voice acting',
    2668: 'Voice acting animals',
    2828: 'Manscaped',
    2896: 'The process of auditioning in Japan',
    3054: 'Auditioning together with a famous actor',
    3083: 'The process of dubbing anime in English',
    3117: 'How many auditions does it take to land a role',
    3211: 'How has the pandemic changed auditioning',
    3442: 'The recording session',
    3749: 'Redoing lines in front of your colleagues',
    3922: 'Watching the shows you voice in',
    4048: 'Joey tried to do a New York accent',
    4237: 'American accents',
    4426: 'Bad English in anime',
    4546: 'Getting recognized for voice work',
    4616: 'Advice for aspiring voice actors',
    4807: 'Voice actors in Japan are celebrities',
    4864: 'Big social media following helps with VA',
    4932: 'Non-native Japanese VA',
    5109: 'Voice acting and vtubers',
    5302: 'Getting starstruck',
    5511: "Shu's YouTube videos",
    5541: 'Australian slang',
    5623: "Shu's favorite YouTube channels",
    5715: 'Animal channels on YouTube',
    5849: 'Making YouTube videos',
    6000: 'Doing sponsor segments',
    6041: "Shu's favorite anime",
    6267: 'Researching voice actors',
    6339: 'Voice CDs',
    6573: "Shu's VA career",
    6664: 'Going to fan events',
    7000: 'Our lovely patrons',
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
  chapters: {
    0: 'The worst superpower',
    64: 'Anime Tube',
    807: 'The golden age of streaming',
    985: 'Kickstarter',
    1266: 'Anime Tube testimonials',
    1341: 'Honey',
    1418: 'Reviews on websites',
    1547: 'The quality of beds',
    1736: 'Memory foam has no bounce',
    1844: 'Water bread',
    1900: 'Pillow talk',
    2073: 'Staying in hospitals',
    2265: 'Snowball fight gone wrong',
    2383: 'Joey got his knob flicked',
    2447: "Garnt's near death experience",
    2504: 'Connor almost broke his back on a trampoline',
    2598: 'Japan is back in lockdown',
    2796: "Japan's discriminating against foreigners",
    3164: "Younger generation isn't interested in politics",
    3264: 'Nintendo makes the laws',
    3489: 'Big companies in Japan do their own thing',
    3716: 'Preparing to go back home',
    3988: 'Every country smells different',
    4368: 'Nostril hair length',
    4445: 'Mouth breathers',
    4837: 'Superstition',
    5202: 'The body starts falling apart at 30',
    5257: 'Kidney stones',
    5440: 'Hospitals hit different',
    5647: 'Wanting to go to a hospital',
    5818: 'Candy',
    5997: 'Listing out chips',
    6415: "People who don't breath through their mouths",
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
  chapters: {
    0: 'Content starts now',
    50: 'Our 3x3 of movies',
    278: "Garnt's 3x3",
    509: 'Garnt gushes over Confessions',
    819: 'The 40-Year-Old Virgin',
    1036: 'Sacha Baron Cohen is a genius',
    1232: 'Kung Fu Hustle',
    1354: 'Martial arts movies',
    1404: 'Rush Hour',
    1576: 'Memento',
    1860: 'Punishing Gray Raven',
    1940: 'Edgar Wright',
    2298: 'The Matrix',
    2413: 'Star Wars and Lord of the Rings',
    2940: 'People who ruin movies',
    3066: 'We have mugs',
    3170: "Joey's 3x3",
    3260: 'Gangster movies',
    3454: 'Apocalypse Now',
    3804: "The King's Speech",
    3986: 'Bruce Almighty',
    4028: 'Akira Kurosawa',
    4338: 'One Cut of the Dead',
    4548: 'Gladiator',
    4588: 'Zach Snyder',
    4700: 'Austin Powers',
    4868: 'Will Ferrell',
    4963: 'Comedy movies',
    5142: 'Trainspotting',
    5456: "Connor's 3x3",
    5481: 'Now this is powerful',
    5506: 'Tokyo Drift',
    5792: 'Shrek',
    5983: 'Quentin Tarantino',
    6451: 'Adam Sandler',
    6626: 'Leonardo DiCaprio',
    6736: 'Tom Hanks',
    6856: 'Willy Wonka',
    6882: 'The Truman Show',
    6975: 'No Country for Old Men',
    7076: 'Watching clips from movies on YouTube',
    7250: 'Martial Arts Films',
    8222: 'People who watch movies',
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
  chapters: {
    0: 'start',
    46: 'Cyberpunk intro',
    242: 'Death Note one shot',
    286: 'Physical manga',
    527: "Connor's 3x3",
    613: 'You Are My Princess',
    689: 'Black Butler',
    1247: 'One-Punch Man',
    1748: 'ExpressVPN',
    1823: 'Terra Formars',
    2166: 'Gantz',
    2495: 'Edgy manga',
    2750: 'Deadman Wonderland',
    2797: "JoJo's Bizarre Adventure",
    3207: 'Vinland Saga',
    3520: 'Claymore',
    3669: 'Characters with ranks',
    3748: 'Eyeshield 21',
    3952: 'Bookwalker',
    4045: "Joey's 3x3",
    4210: 'Joey got scammed',
    4317: 'Yu Yu Hakusho',
    4821: 'Slam Dunk',
    5087: 'Black Cat',
    5455: "Anime doesn't have endings",
    5575: 'Beastars',
    5882: 'Ichigo 100%',
    6061: 'Uzumaki',
    6162: 'Oyasumi Punpun',
    6626: 'Shonen Jump is king',
    6842: 'Manscaped',
    6929: "Garnt's 3x3",
    6981: 'The Breaker',
    7243: 'Kingdom',
    7512: 'Writing smart characters',
    7750: 'Great Teacher Onizuka',
    8102: 'Psyren',
    8575: 'Love Hina',
    8874: 'Domestic Girlfriend',
    9230: '20th Century Boys',
    9538: 'Beck',
    9914: 'Berserk',
    10517: 'People with great taste in manga',
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
  chapters: {
    0: 'MUGS',
    45: 'Welcome',
    146: 'Our second vaccine shots',
    369: 'Watching the Olympics',
    794: 'Are we patriotic?',
    1232: 'Olympics and anime music',
    1387: 'The opening of the Olympics',
    1717: "Sonic's appearance in the Olympics",
    1810: 'Apari',
    1892: 'Japanese weather is too much for the Olympics',
    2205: 'Who won the Olympics',
    2310: 'American football',
    2370: 'Superbowl',
    2478: 'TV ads',
    3077: "Dragons' Den",
    3407: 'Bokksu',
    3471: 'Pokémon Unite',
    3772: 'Microtransactions in Pokémon games',
    3892: 'Genshin update stream on Twitch',
    4123: "Don't pre-order games",
    4625: 'Press conferences for games',
    4858: 'Difficulty in video games',
    5292: 'Accessibility in games',
    5629: 'Zenmarket',
    5720: 'Xbox Adaptive Controller',
    5893: 'Game consoles that failed us',
    6120: 'Memory cards',
    6417: 'The day Garnt almost snapped',
    6601: 'The worst genre of online videos',
    6897: 'Jackass',
    7167: 'Weird TikTok trends',
    7778: 'Will we start TikTok accounts',
    7901: 'The good type of TikTokkers',
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
  chapters: {
    0: "It's too hot",
    64: 'Summer vs winter',
    606: 'Mech Arena',
    792: 'Enjoying the sun',
    869: 'Hanami',
    1201: 'The boys stayed at an Airbnb',
    1498: 'Combining drinks',
    1638: 'Quitting energy drinks',
    1760: 'Caring about your body',
    1854: 'Taking a break from YouTube',
    2269: 'Streaming your comfort games',
    2481: 'Horror movies',
    2704: 'Samuel was the OG',
    2925: 'Old internet websites',
    3052: 'Annihilation',
    3176: "Garnt's childhood was filled with movies",
    3379: 'Nicolas Cage movies',
    3599: 'Horror movie DVD covers',
    3685: 'Joey realizes he hates horror films',
    3722: 'Parents always walk in at the worst times',
    3914: 'Watching stuff with your lads',
    4477: 'Heath Ledger',
    4581: 'Cicadas',
    4966: 'Liveleak',
    5182: 'Our brains are turning into mush',
    5462: 'What color was the dress',
    5530: 'Losing your hearing with age',
    5715: 'Garnt misses the beach',
    5789: 'Mosquitoes',
    6094: 'Emu War',
    6419: 'Winter in Australia',
    6584: 'Getting rid of appliances in Japan',
    7080: "People who probably aren't fans of this heat",
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
  chapters: {
    0: "We're not good",
    33: 'Talking about weather',
    137: 'Reading fan mail',
    647: 'Fans as friends',
    1047: 'Managing a Discord server',
    1306: "Pewdiepie doesn't know us",
    1352: 'Papparazzi',
    1677: 'ExpressVPN',
    1730: 'YouTube comments',
    1949: 'Doing YouTube as a job',
    2190: 'Boys supporting boys',
    2323: 'Defensive fandoms',
    2538: 'Having an opinion on YouTube',
    2711: 'Negativity brings the views',
    3090: 'Being a Fate fan',
    3362: 'Jojo fandom',
    3620: 'Gatekeeping',
    4078: 'Mack Weldon',
    4163: 'Spotting fake anime fans',
    4487: 'Rediscovering creators',
    4858: 'Connor is ready to box',
    4954: 'Will we stop the podcast if the views decline',
    5255: 'Adapting your content with the times',
    5468: 'Understanding how virality works',
    5758: 'Casey Neistat is Limitless',
    6028: 'What is good content',
    6438: 'Drama channels',
    6695: 'Honey',
    6788: 'Passion projects',
    7237: 'Obsessing over specific things',
    7775: 'Japan is full of niche things',
    8150: 'Japanese zoom calls',
    8306: 'People who support us through the clickbait',
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
  chapters: {
    0: "You're not ready for what's to come",
    39: 'Our bodies are giving up already',
    300: 'Working in a coffee shop',
    358: 'Drinking coffee',
    580: 'Working outside of your room',
    1027: 'Toilet breaks',
    1197: 'Sitting down to pee',
    1313: 'Garnt is a shitting wizard',
    1555: 'Bokksu',
    1621: 'Cushioned toilet seats',
    1786: 'Connor loves buying candles',
    2252: 'Homemade soaps',
    2448: 'Salt flavored toothpaste',
    2625: 'How we feel about massages',
    2802: 'Going to a sauna',
    3151: 'The best onsen in Tokyo is being shut down',
    3292: 'The little pebbles of doom',
    3364: 'Having fish eat your feet',
    3482: 'Taking a spa day',
    3618: 'The perfect vacation',
    3662: 'Trying to camp during a typhoon',
    3936: 'Buying beverages with your mates',
    4515: 'Is fishing even fun',
    4734: 'Boating',
    4893: 'Wagyu beef is overrated',
    5208: "Expensive foods aren't that good",
    5513: 'Fried chicken culture',
    5631: 'The Great Boneless Debate',
    5954: 'All chicken tastes the same',
    6085: 'Optimal skin to meat ratio',
    6338: 'Chicken thighs',
    6480: 'Finally Googling facts',
    6536: "We all make mistakes and it's fine",
    6698: 'Chicken debate is finally settling down',
    6915: 'What type of chicken gang are you',
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
  chapters: {
    0: 'A musky intro',
    42: 'Garnt goes to the bank',
    487: 'Printing stuff in Japan',
    815: 'Garnt got trolled by a bank',
    946: 'Scams in Japan',
    1574: 'Trolling scammers',
    1741: 'Protecting parents from scams',
    1918: 'Girl Gun Cafe',
    1994: 'We thought Meilyne tried to scam us',
    2175: 'YouTube scams are getting too real',
    2487: 'Scams on Facebook',
    2717: 'The new Evangelion film',
    3088: 'The watch order of Evangelion',
    3239: 'The last Evangelion films hit different',
    3443: 'Getting into Evangelion',
    3691: 'Storytelling in Evangelion',
    4064: 'Hatsune Miku Kabuki',
    4159: 'Watch parties on Twitch',
    4229: 'Our reaction to the ending of the new Eva film',
    4589: 'Overanalyzing Evangelion',
    4875: 'The Toy Story franchise',
    5321: 'Modern Disney animated films',
    5505: 'Refusing to learn',
    5643: 'Harry Potter is getting weird',
    6069: 'Recycling in Japan',
    6405: 'Dealing with noise complaints',
    6984: 'Changing of the seasons',
    7259: 'Japanese drip',
    7666: 'What is drip',
    8244: 'People with real drip',
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
  chapters: {
    0: 'The worst fear',
    59: 'Can we say "Female"',
    207: 'Strangest thing Meilyne has seen us do',
    513: 'Meilyne is a professional food reviewer',
    1130: 'Looking at restaurant menus on Google',
    1344: 'Debating jelly as a dessert',
    1843: 'Genshin Impact',
    1972: 'Conquering buffets',
    2674: "Meilyne's thoughts on our rants about America",
    3045: 'Studying history in school',
    3639: 'Cooking classes',
    3699: 'Manscaped',
    3767: 'Americans',
    4105: "UK isn't cool anymore",
    4375: 'Our first phones',
    4487: 'Meilyne the gamer',
    4578: "Meilyne's 3D husband vs her 2D husbands",
    5082: 'Nigerian beef stew',
    5233: 'Learning how to cook',
    5361: 'Meilyne the YouTuber',
    5522: 'Videos Meilyne likes to watch',
    5760: 'Meilyne the weeb',
    5849: 'Meilyne the food enjoyer',
    6471: 'Welsh food',
    6554: 'Tea',
    6808: "Microwaving food that shouldn't be microwaved",
    6913: 'The most expensive coffee',
    7013: 'Coffee YouTubers',
    7331: 'Boba is funny',
    7695: 'Steak',
    8224: 'BBQ',
    8660: 'Bussin people',
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
  chapters: {
    0: 'Disclaimer',
    36: 'Geno Samuel',
    72: 'Chris Chan',
    199: 'The documentary',
    354: 'Who is Chris Chan',
    580: 'Being a Christorian',
    724: 'The process of making an episode',
    838: 'The Chris Cinematic Universe',
    1111: 'The start',
    1530: 'The Trolling Arc',
    1916: 'Honey',
    1981: 'Private Villa of Corrupted Citizens',
    2238: 'High school gal pals',
    2460: 'Game store Arc',
    2968: 'Home Arc',
    3542: 'How much is cut from an episode',
    3705: 'The transformation',
    4189: 'Different Dimensions Arc',
    4432: 'Money issues',
    4600: 'The morality behind making a documentary',
    4660: 'Final Gear',
    4725: 'The Mother Arc',
    5235: 'Is this the end of the story',
    5423: 'Raising Chris',
    5924: 'Sonichu comics',
    6223: 'The Idea Guys Saga',
    6331: 'Pickle suit man',
    6522: 'Liquid Chris',
    6960: 'Sonic and My Little Pony',
    7163: 'Geno in Japan',
    7611: "Geno's future",
    7987: 'Thank you for your support',
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
  chapters: {
    0: 'Bickering from the get-go',
    122: "What this episode could've been",
    187: 'Our take on politics',
    547: 'Keeping up with world news',
    974: 'Sydney was mad patriotic',
    1484: 'ExpressVPN',
    1569: 'Are we mad patriotic',
    1642: 'Welsh history lesson',
    1769: 'Getting mentioned as a small nation',
    1992: 'Joey gets deported',
    2097: "Connor didn't get a visa to visit USA",
    2291: 'Which passport is the best',
    2386: 'Tourism in the UK',
    2943: 'Joey trolls friends who visit him',
    3028: 'Is Akihabara overhyped',
    3105: 'Getting recognized in Japan',
    3220: 'Crunchyroll',
    3296: 'Getting recognized in the UK',
    3619: 'Dressing for work at home',
    3874: 'Shirt on or off',
    4188: 'Reacting to earthquakes',
    4743: 'In the case of an earthquake',
    5080: 'Natural disasters',
    5234: 'Weird cultural things',
    5703: 'Getting poisoned',
    6024: 'Bokksu',
    6109: "We're leaving for 6 weeks",
    6222: 'Chores',
    6605: 'Garnt has stinky trash',
    7023: 'Fabric softener is OP',
    7108: "What we'll do after the break",
    7419: 'The best fans',
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
  chapters: {
    0: 'We need coffee',
    37: 'Little babymen',
    78: 'Garnt and Connor went to the UK',
    252: 'Drinking with your parents',
    511: 'Connor won a chess game',
    634: 'Connors notes on the UK',
    777: 'Vending machines are amazing',
    965: 'Wearing masks',
    1313: 'Ordering food has become easier',
    1418: 'Japanese food is superb',
    1631: 'Expensive restaurants in Japan vs UK',
    1710: 'The price difference of alcohol',
    1782: 'Good and bad fast food',
    1894: 'Getting back into Japan',
    2349: 'Connor pranks an airport',
    2598: 'We were herded like cattle',
    2804: 'The wellness check',
    2891: 'Spit tests',
    2985: 'The mobile apps do not work properly',
    3050: 'Quarantine experience after arriving in Japan',
    3244: 'Connor befriends an old Japanese man',
    3357: 'The quarantine hotel',
    3551: 'Connors hotel room',
    3800: 'Food in the hotel',
    3927: 'Garnt brought a bag of instant ramen',
    4020: 'Garnts hotel experience',
    4736: "Connor couldn't stand being locked up",
    4935: 'Leaving the hotel',
    5098: 'The chad that is Zed',
    5247: 'Different kinds of restrictions',
    5550: 'Restrictions are loosening in Japan',
    5725: 'Quarantining at home',
    5804: 'Connor did a 70 hour stream',
    6168: 'Our editor is a machine',
    6407: 'Manscaped',
    6474: "We've gotten old",
    6583: 'Garnts existential crisis',
    6684: "Birthday gifts don't work when you're older",
    6754: 'Having to show your ID',
    6835: 'How much does the beard change your age',
    7000: "We're finally talking about anime",
    7188: 'Tales of Arise',
    7658: 'Connors opinion on turn-based combat',
    7881: 'Sora in Smash',
    8108: 'Connor randomly brings up a weird meme',
    8167: 'Joey brings back the original topic',
    8253: "Well, it's been fun",
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
  chapters: {
    0: "You Don't have to understand the memes",
    270: 'Chris is a boomer',
    318: "We don't understand our taste in humor",
    447: "Memes don't last at all",
    621: 'TikTok in Japan',
    1140: 'TikTok trends',
    1283: 'Couchguy',
    1493: "We're being overanalyzed",
    1674: "Harry's",
    1754: 'You need to preface everything',
    1995: 'Peoples reaction to our drip topic',
    2219: 'Income and work relationship',
    2416: 'Good skill is expensive',
    2662: "YouTube doesn't have any job security",
    2838: 'Twitch leak',
    3149: 'YouTubers are relatable unlike celebrities',
    3269: 'Earning money from YouTube',
    3369: 'The necessity of talking about ad rates',
    3611: 'Honey',
    3680: 'You have to grind YouTube to make it',
    3896: 'Garnt worked at the BBC',
    3965: 'Keeping up with the changes to stay relevant',
    4076: 'The bois have "changed"',
    4411: "We've fallen off",
    4596: 'Garnt met a Pokémon dealer',
    4757: 'Why is Logan Paul opening other peoples Pokémon cards',
    5179: 'Why watch our podcast instead of an actual film',
    5335: 'Men find it hard to talk to each other',
    5941: 'Time as a resource',
    6066: 'Connor has been haunted by this question',
    6352: 'Connors weirdest toilet adventures',
    6551: "Connor's Yakuza mission",
    6815: 'Japan is weird',
    6923: 'The reason why Garnt is against bidets',
    7064: 'Toilets that are just a hole in the ground',
    7250: 'Toilet experience so bad that Connor threw up',
    7412: "We're done with poop stories",
    7457: 'Normal poopers',
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
  chapters: {
    0: 'Joey has changed',
    58: 'Connor signed up for a gym membership',
    258: 'Cancelling stuff in Japan is easy',
    564: 'You need to check out of ryokans at 9am',
    926: 'Is breakfast just sugar',
    1421: 'The snacks of our childhood',
    1708: 'Baki is more intense than Jojo',
    2610: 'Watching anime in the gym',
    2791: 'Esports',
    3258: 'Moving companies seeing our weird stuff',
    3896: 'Settling down',
    3975: 'The children of Japan',
    4159: 'Garnt went fishing',
    4829: 'Hobbies',
    4966: 'Garnt has a house now',
    5176: 'The rush hour in Tokyo never ends',
    5380: "Japan doesn't have 4 seasons",
    5448: "Garnt isn't used to living in a house",
    5694: 'Paranormal activity',
    6876: 'Connor gets existential',
    7606: 'Garnts new addiction',
    7831: 'Connor is infatuated with bidets',
    7905: 'People who fancy bidets',
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
  chapters: {
    0: 'You made it',
    60: 'Dune',
    411: 'Looking at movie reviews',
    718: 'The Last Duel',
    832: 'Changing your opinion based on others',
    903: 'Daniel Craig likes smooching',
    1206: 'The impact of celebrities for a movie',
    1440: 'Everybody knows The Rock',
    1607: 'Celebrity culture',
    1738: 'People dislike Chris Pratt now',
    1878: 'The Mario movie',
    2034: 'Having a movie theater at home',
    2205: 'ExpressVPN',
    2281: 'The Matrix',
    2614: 'Keanu Reeves is awesome',
    2694: 'Garnt realized that he likes anime',
    2902: 'Connor watched 86',
    3353: 'Should we do a monthly anime watching club',
    3503: 'Garnt struggles with decorating his room',
    3799: 'The aesthetic of wall scrolls',
    3987: 'Glass is heavy',
    4087: 'Joey needs the limited edition stuff',
    4211: 'Where do you put a huge figurine',
    4339: "Connor's JoJo merch obsession",
    4452: "Connor's drip is a lie",
    4647: 'The S-Tier socks',
    4938: 'Honey',
    5006: 'Watching anime with subtitles',
    5297: 'Text can be terrifying',
    5409: 'Learning a new language',
    5685: 'Managing your time',
    5814: 'Waking up early might be good',
    5944: "We can't stay up late anymore",
    6176: 'Big announcement',
    6227: 'Can you understand culture',
    7008: 'Is Connor fake Welsh',
    7089: 'The great UK debate',
    7501: "UK doesn't have any truck drivers",
    7815: 'Crazy people are everywhere',
    8177: 'The power of the internet',
    8412: 'The elegant people',
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
  chapters: {
    0: 'Pop pop, babymen are here',
    87: 'Mori is now a veteran',
    335: 'Sleeping during streaming',
    551: 'The most difficult rap',
    880: "Mori's favorite streams",
    1072: 'How to come up with stream ideas',
    1273: "Mori's attending a convention",
    1493: 'Connor loves Gorilla Tag',
    1716: 'The hardest thing about being a vtuber',
    1970: "Video description doesn't matter",
    2129: 'How Mori learned streaming',
    2571: 'Jump King',
    2773: "Mori's favorite content to make",
    2954: 'The gang is confused by basic English',
    3149: "There's always an expert in the chat",
    3254: 'Streaming on Twitch vs YouTube',
    3524: 'People overanalyzing vtubers',
    3772: 'Zenmarket',
    3841: 'Streaming takes too much energy',
    4211: 'Working on the go',
    4655: 'Stream lingo',
    4896: 'Adam Sandler',
    5084: 'Memes get Garnt to watch films',
    5372: 'The Squid Game dub',
    5606: 'What Mori watches in her free time',
    5975: 'Learning Japanese through anime',
    6224: "Mori's life since the last episode",
    6714: "What would Mori be doing if she wasn't a vtuber",
    7011: 'The rivalry between vtubers',
    7419: 'Being an indie vtuber VS being managed',
    7637: "Mori's future plans",
    7851: 'Bone or boneless',
    7958: "Please don't go to our Patreon",
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
  chapters: {
    0: 'This is like Squid Game',
    130: 'Anime has become too generic',
    399: 'The absolute state of isekai',
    630: 'Voices in anime',
    963: 'Garnt is ascending to become a speedster',
    1309: 'We need tech support',
    2130: 'Will we get online courses to become content creators',
    2378: 'Bokksu',
    2451: 'We actually discuss Squid Game',
    2662: 'Actors vs people they portray',
    3101: 'Society has changed',
    3331: 'The power of anonymity',
    3806: 'Online communities',
    4350: "We're easily influenced",
    4831: 'Hideo Kojima has the best name ideas',
    5126: 'Bad Japanese food',
    5198: 'Joey goes off against olives',
    5608: 'Manscaped',
    5682: 'Trying sea urchin',
    6109: 'Garnt swallows two sacks',
    6261: 'Grossed out by food',
    6547: 'Getting a wrong order in a restaurant',
    6905: 'Eating wings on a date',
    7083: 'Elbows on the table',
    7173: 'Having tattoos in Japan',
    7384: 'Robert Downey Jr. had a hard time coming to Japan',
    7486: "Ignoring laws in Japan isn't expensive",
    8009: 'This is society',
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
  chapters: {
    0: 'Thanksgiving starts now',
    136: 'Dates of holidays',
    364: 'Taking a vacation in Japan',
    733: 'UK used to have the weirdest holidays',
    822: 'Holidays in the USA',
    926: 'Joey used to throw eggs at buildings',
    1359: 'Babbel',
    1412: 'Stores had to stop selling eggs on Halloween',
    1509: 'Joey got spooked on 4th of July',
    1623: 'Guy Fawkes Day',
    1789: 'Easter',
    1835: 'Thai holidays',
    2065: 'Welsh holidays',
    2152: 'What era were we born in',
    2260: 'Dating methods',
    2503: 'Imperial vs metric',
    3126: "Harry's",
    3184: 'How we feel about giving gifts',
    3342: 'The idea behind a gift',
    3452: 'Gifting money',
    3610: 'Finding a perfect gift',
    3865: 'Sucking at shopping',
    3989: 'Gift giving as an adult',
    4224: 'Our most expensive gifts',
    4526: 'Lazy gifts',
    4661: 'Optimizing gifting',
    4976: "Japan's weather is sussy",
    5044: 'Minions are huge in Japan',
    5229: 'Merch collaborations in Japan',
    5494: 'Honey',
    5572: 'Putting anime characters on anything',
    5862: 'Pokémon is insanely huge',
    6256: 'Most successful franchises',
    6505: 'Most recognizable anime character',
    6887: 'Pachinko is OP at making money',
    7144: 'Trash Taste x YOU',
  },
  tags: ['We', "Don't", 'Understand', 'Public', 'Holidays', '76'],
};
channelTrashTaste.videos.push(videopWdHBCvah1Y);

const videoauxlYK_n2zw: Video = {
  id: 'auxlYK_n2zw',
  channel: channelTrashTaste,
  title: 'Trash Taste Tech Tips | Trash Taste Episode #77',
  publishedAt: '2021-12-03T20:00:00Z',
  chapters: {
    0: "We're out of coffee",
    43: 'Connor got a new phone',
    528: 'Finding the right tech to buy',
    689: "Japan doesn't like OnePlus",
    880: 'Smartwatches',
    1123: 'Removing useful functions from new phones',
    1412: "Garnt can't close his Chrome tabs",
    1619: 'You never want to get an email from YouTube',
    1738: 'The man who knows what he wants',
    1898: 'Apari',
    1962: "Visiting a school shouldn't be scary",
    2176: 'School punishments',
    2376: 'Connor bought drip',
    2581: 'Japans second-hand hits different',
    3029: 'Yahoo auction in Japan is exclusive',
    3098: 'Difference in sizes between Japan and USA',
    3693: 'Cosori',
    3769: 'Connor loves them wings',
    3906: 'Spicy food challenge',
    4432: 'The drip jacket has historical value',
    4630: 'What is the most popular meme',
    4884: 'Our favorite memes',
    5069: 'Honey',
    5146: 'Arcane',
    5599: 'Garnt saw KDA debut',
    5699: 'Everything about League of Legends is good asides from the game',
    5901: "New films that we've watched",
    6011: 'Robert Pattinson kinda slaps',
    6194: 'THE Suicide Squad',
    6322: 'Superhero franchises are getting too big',
    6617: "What we're going to watch for sure",
    6705: 'Going to the cinema',
    6827: 'Hans Zimmer is the god of bass',
    6949: 'When food products change ingredients',
    7198: 'Connor called a food company to get answers',
    7599: 'Min maxing procrastination',
    7890: "We're starving, no joke",
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
  chapters: {
    0: 'Trash Taste x Apari merch',
    141: 'We have a guest',
    211: 'Being a host',
    269: 'Turkish origins',
    358: 'Bartering in Japan',
    450: 'Being introverted',
    699: 'Growing up in a different country',
    887: 'Garnt is the dad figure',
    1044: 'Working at a pizza place',
    1581: 'This episode was planned a long time ago',
    1719: 'ExpressVPN',
    1794: 'You get paid for applying to host positions',
    2346: 'The appeal of host clubs',
    2653: 'Standing out as a host',
    2999: 'The host tier list',
    3295: 'Turkish taxi mafia',
    3447: 'The most interesting clients',
    3594: 'The most famous host',
    3889: 'Experiencing life',
    4116: 'A 60-year old client',
    4299: 'How to become the top host',
    4521: 'Do hosts have an issue with alcohol',
    5063: 'The social fetish',
    5250: 'The political aspect of host clubs',
    5715: 'The history of host clubs',
    5885: 'Bokksu',
    5977: 'Differences between newer and older clubs',
    6086: "What happens when you're a bad host",
    6471: 'Discrimination in host clubs',
    6601: 'How is the clientele so rich',
    6898: 'Champagne pyramids are expensive',
    7195: 'Favorite vtubers',
    7309: 'Freelancing as a host',
    7511: 'How to keep your client',
    7787: 'Being a host is becoming more popular',
    8449: 'Drinking with friends',
    8579: 'Speedrunning Twitch ban',
    8754: 'The future of host clubs',
    8882: "Who we'd buy a drink for",
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
  chapters: {
    0: '2 Weeks Left',
    87: 'This is a special episode',
    129: 'Figure Special Version 2',
    838: 'Rashinban',
    1163: 'Garnt tries to find a figure from a game Connor has played',
    1555: 'Joey splurged on Persona 5',
    1886: "Connor's first JoJo figure",
    2025: 'Garnt buys a lewd figure from one of his favorite artists',
    2190: 'Joey reps Akira',
    2338: 'Connor bought a lewd figure as well',
    2534: 'Garnt bought a statue',
    2838: 'Joey found a figure that can beat Goku',
    3130: "Connor had to buy a figure that wasn't from an anime",
    3376: 'Astop',
    3417: 'Garnt gets tactical with his shopping',
    3546: 'Joey buys a Fist of the North Star figure',
    3635: "Connor's JoJo collection increases",
    3713: 'Garnt just started buying waifus',
    3991: "Connor's JoJo spree",
    4159: 'Garnt bought a Black Goku',
    4392: 'Joey buys a figure from the last anime season',
    4634: 'Connor bought something other than JoJo',
    4958: 'Joey spotted a wild Kirito appreciator',
    5062: 'Amiami',
    5081: 'Joey bought a figure from an incestuous series',
    5348: 'Garnt was forced to buy this figure',
    5626: 'Connor had to figure out anime that Joey watched in 2021',
    6046: 'The boys bought Among Us merch',
    6474: 'Garnt got legs of steel',
    6539: 'Buying random figures',
    6695: 'Joey had trouble finding this specific figure',
    6782: 'Connor bought the bike from Akira',
    7017: 'Showing off some more cool figures',
    7284: "Connor had to figure out an anime the boys haven't seen",
    7662: 'Mandarake',
    7808: 'Joey delved into Garnts FGO habits',
    8051: 'Garnt got the safest figure recommendation',
    8431: 'Garnt bought a sick Gundam figure',
    8572: 'Joey got massively ripped off',
    8913: "Connor's final challenge",
    9002: 'Garnt really surprises the boys',
    9245: 'Revealing the scores',
    9452: 'How all of this was even possible',
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
  chapters: {
    0: 'Your final chance',
    70: 'Where we learn new words',
    231: 'We desperately need assistants',
    619: 'Joey discovered to-do lists',
    803: 'Waiting for the country to open up',
    977: 'We ate Michelin star ramen',
    1381: "Expensive sushi isn't that much better",
    1777: 'Chefs who enjoy their work',
    1909: 'You can order a smile from McDonalds in Japan',
    2303: 'Shadowverse',
    2365: 'Where we lived before',
    2580: 'Food places in our previous location',
    2720: 'Garnt burnt out',
    2848: 'Trash Taste is our priority',
    3074: 'How long Garnt takes to make videos',
    3703: 'Second channels are a blessing',
    3991: 'Having high standards for the main channel',
    4197: 'New Years promises',
    4419: 'Trash Taste specials',
    4574: 'Manscaped',
    4645: 'Our biggest regrets',
    4928: 'Christmas in Australia',
    5344: 'Connors parents want to visit Japan',
    5573: 'Christmas foods',
    5738: 'Joey became old',
    6200: 'Building furniture',
    6344: 'Gardens are cool but...',
    6649: 'Children as workforce',
    6832: "Let's talk about NFTs",
    7533: 'Happy end of the year',
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
  chapters: {
    0: 'Japanese coffee',
    34: 'Joey got a haircut',
    102: 'Talking about current events',
    192: 'Our New Year promises',
    306: "Joey's channel got almost shut down",
    512: 'Connors troubles with YouTube copyright system',
    826: "Connor didn't learn from his first mistake",
    1246: 'How companies abuse the copyright system',
    1522: 'Copyright Armageddon',
    1718: 'Ayylien',
    1785: 'The dislike button',
    2311: 'Likes on Instagram',
    2390: 'The reason behind hiding the dislike button',
    2607: "Garnt's world famous lasagna",
    2929: 'Garnt leveled up his lasagna skills for Meilyne',
    3221: 'Cooking is fun when you don\t have to clean',
    3315: 'A day old lasagna is better than a fresh one',
    3457: 'What type of pizza is the best pizza',
    3576: 'Having a hotdog in the crust',
    3701: 'The two types of pizza in Japan',
    3857: 'Honey',
    3926: 'Connor explains why he loves American pizza',
    4146: 'Japanese sushi vs American sushi',
    4491: 'Garnt thinks all the bread tastes the same',
    4798: 'All rice tastes the same',
    5106: 'Bokksu',
    5191: 'Sydney stabs Garnt in the back',
    5260: 'Garnt fought a cockroach with a mousepad',
    5535: 'The epic battle',
    5981: 'Connor has an issue with doves',
    6080: "The surprising conclusion to Garnt's cockroach story",
    6182: 'The hotdog pizza arrived',
    6403: 'How many different tastes does a food need',
    6616: 'Getting a pizza in Japan',
    6767: 'Being brought up on a certain kind of food',
    6866: 'Broccoli with mayonnaise',
    7047: 'Can you eat one dish infinitely',
    7212: 'Everybody agrees on how bussin this episode was',
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
  chapters: {
    0: 'We almost perished',
    186: 'Taking thumbnail photos',
    453: 'Who has the best YouTube thumbnails',
    575: 'Being proud of your work',
    699: 'Should they have waited with making Game of Thrones',
    945: 'It takes too much time to make good stuff',
    1357: "An animation that's been in the making for 40 years",
    1558: "The most we've spent on our projects",
    1784: 'Joeys longest project',
    1903: 'Trash Taste specials take forever',
    2202: 'Our plans for this years specials',
    2408: 'Express VPN',
    2473: 'We went camping',
    2881: 'Our camping trip was stacked out',
    3160: 'Preparing the camping site and grilling',
    3609: 'We had some fire safety issues',
    3818: 'We set a gas lighter on fire',
    4069: 'The beer almost froze',
    4170: 'Garnt had to cuddle Connor',
    4491: "Connor couldn't handle the cold",
    4636: "Garnt's fear of pissing in the woods",
    4857: 'Connor and Nabi snoring',
    4966: 'The air was so cold it hurt to breathe',
    5105: 'Garnt was scammed out of warmth',
    5296: 'Garnt used his engineering degree',
    5433: 'Camping summary',
    5496: 'People throwing hot water on themselves',
    5699: "Harry's",
    5771: 'Beards are weird',
    6251: 'Garnt has to check under the car each time',
    6614: "Joey's irrational fear",
    6663: 'Fears from our childhoods',
    6971: 'Garnt got introduced to horror films by his cousin',
    7179: 'Darkness scares us',
    7395: "People who aren't easily scared",
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
  chapters: {
    0: 'Kson has joined the party',
    87: 'Why switch from 3D to 2D',
    195: 'Who is Kson',
    323: 'How long to make a cosplay',
    401: 'Getting both English and Japanese viewers',
    661: "Do Ksons parents know what she's doing",
    907: 'Vtubers have taken over the world',
    1187: 'What games does Kson play',
    1325: 'Minecraft',
    1532: 'We finally talk about anime',
    1894: "Kson's favorite anime",
    2250: 'NSYNC made Kson want to become a vtuber',
    2361: 'Protective parents',
    2844: 'Why stream on YouTube',
    2992: 'Honey',
    3059: 'Kson watched the wrong Jojo',
    3346: 'Gundam',
    3674: 'Levels of crafting',
    3917: 'Gunpla',
    4048: 'Backseating during streams',
    4112: 'Understanding Mahjong',
    4385: 'Favorite types of streams',
    4584: 'Subnautica',
    4819: 'You can poop in Arc',
    5080: 'Getting a manager',
    5177: 'Indie vtubers',
    5522: 'Did Kson want to become a vtuber',
    5768: 'How Kson got into cosplaying',
    6004: 'Western memes vs Japanese memes',
    6405: 'Favorite memes',
    6653: "Kson's plans for this year",
    6875: 'Going to anime conventions',
    7020: 'Kson picks a fight with the UK',
    7206: 'Theme parks',
    7794: 'Kson started watching anime in university',
    7995: 'UK is actually dope',
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
  chapters: {
    0: 'Chris the affable',
    102: 'Chris the Santa',
    265: 'Connor got a poker set',
    442: "Japan doesn't allow gambling",
    788: 'How we feel about crane games',
    1211: "Chris goes for Joey's job",
    1510: 'Boys try picking a good anime for Chris to watch',
    1873: 'Dune looked great',
    2077: 'Arcane again',
    2141: 'Our thoughts on Star Wars',
    2392: 'Using departed actors in films',
    2651: 'AI tries recreating Garnts voice',
    2830: 'Gigguk 2.0 has arrived',
    2900: 'Chris and Connor adventures',
    2966: 'Taking for Granted',
    3022: 'Sacrificing your body for content',
    3097: 'Wacky Weekend has taken us places',
    3381: 'Chris got waterboarded',
    3465: 'Connor got a massage',
    3627: 'Garnt got a massage',
    3743: 'Chris is finally verified',
    3803: 'Highlight of the year',
    4240: 'Bokksu',
    4319: "Chris doesn't understand musical instruments",
    4384: "Chris's new amazing studio",
    4664: 'Chris also has a second channel',
    4771: 'Making your health into content',
    4930: "Chris's endoscopy adventures",
    5081: 'Connor and Garnt got a funky Covid test',
    5128: 'Cleaning your ears',
    5299: 'Garnt tells a story about Sydney',
    5427: 'Should you clean your ears',
    5568: 'Corona necklaces',
    5676: 'Western films take a while to arrive in Japan',
    5870: 'Connor goes to the cinema randomly',
    6002: 'Hamster Squid Game',
    6162: 'Japan blasts weird music',
    6267: 'Chris tries to put on a hoodie',
    6420: 'Goals for 2022',
    6479: 'Chris being in our special',
    6530: 'Chris wants to travel outside of Japan',
    6726: 'Dangerous video ideas',
    6945: 'Manscaped',
    7011: 'Mukbang and professional eaters',
    7411: 'Why we diss on America as much',
    7735: 'Hotels in London suck',
    7857: 'Chris got locked in an Airbnb',
    8016: 'Joey played an Uno reverse card on the Japanese police',
    8194: "Connor can't tell the difference between Japanese military and old people",
    8506: 'Chris got a ticket for speeding',
    8610: 'The entire podcast needs to be reshot',
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
  chapters: {
    0: 'The reality of this podcast',
    91: "Garnt found out that he's his own worst enemy",
    140: 'Expensive honey',
    332: 'Expensive salt',
    368: 'Poop coffee beans',
    649: 'Making money online as an entrepreneur',
    1134: 'Ski resorts in Japan speak mostly English',
    1500: "Garnt wasn't built for such low temperatures",
    1777: 'Princess Connect',
    1859: 'Slipping some onsen water in your mouth',
    2027: 'Different levels of slopes',
    2573: 'Our accidents on the slopes',
    3085: 'Conclusion of our winter trip',
    3582: 'Honey',
    3645: 'Garnt tried a Pokémon game',
    4092: 'Games have lowered their difficulty',
    4584: 'Atlus games',
    4792: 'The high school setting in anime',
    5162: "It's easy to connect with anime because it's not real",
    5395: 'Connor watched Mushoku Tensei',
    6153: "Why haven't you all subscribed to our second channels",
    6200: 'Connor is changing up his schedule',
    6389: 'The TV Meta on Twitch',
    7266: 'The Patreon Meta',
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
  chapters: {
    0: "You wouldn't steal a podcast",
    82: 'The seating matters',
    193: 'Short people get the middle seat',
    410: "Joey discovers he isn't 6 feet",
    824: 'Tiny bathrooms',
    1091: 'ExpressVPN',
    1157: 'Themed bars in Japan',
    1424: 'How smaller bars survive with only a couple customers',
    1716: 'Connor and Chris kept eating too much',
    1977: "Other bars we've been to",
    2078: 'Bar culture in Australia',
    2288: 'Gaming bars in UK',
    2743: 'Bokksu',
    2800: 'Attack on Titan is amazing',
    3180: "We're looking forward to the culmination of AoT",
    3519: 'Boyhood',
    3736: 'Demon Slayer is amazing',
    3923: 'Why so many people enjoy Demon Slayer',
    4289: "Harry's",
    4353: "All of Joey's relatives watch Demon Slayer",
    4476: 'Demon Slayer is inescapable in Japan',
    4769: 'Anime films',
    4967: 'The hype surrounding Chainsaw Man is insane',
    5037: 'This concludes anime talk',
    5218: 'Joey finished 13 Sentinels in 3 days',
    5711: 'Connor played Jump King for 4 days straight',
    6318: 'Joey begs Garnt not to play Final Fantasy Online',
    6601: "Garnt tried to play Final Fantasy but couldn't",
    6927: 'Garnt is looking into getting a PS5',
    7073: 'Potato shortage in Japan',
    7310: 'Connor lusts for the extinct bananas',
    7828: 'Interfering with nature',
    8017: 'The least scary thing',
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
  chapters: {
    0: 'We are bringing the bass',
    52: 'Joey got cancelled',
    103: 'Multi-layered dramas',
    246: 'Saying something is "okay" actually means it\'s bad',
    386: 'Jujutsu Kaisen vs a wedding',
    522: 'Our hot takes are becoming more widespread',
    862: 'People taking us out of context',
    962: 'The anime community has changed',
    1122: "Why people get annoyed over Joey's takes",
    1242: 'How to deal with online hate',
    1390: 'Teaching parents how to deal with people being mean to us',
    1618: 'Honey',
    1702: "It's good to vent to each other",
    1927: 'Drama culture',
    2349: 'Comments from long-term fans hit different',
    2476: 'Becoming friends with YouTubers',
    2934: 'The weirdest part about meeting an online friend',
    3158: 'Connors cringiest interaction',
    3304: 'A fan confused Joey with Garnt',
    3435: 'When fans mess up',
    3497: 'Connor got mistaken for the author of Goblin Slayer',
    3640: 'Garnt got mistaken for Super Eyepatch Wolf',
    3781: 'Remembering specific topics fans ask about',
    3899: 'Magic spoon',
    3993: 'Let this be the year of the anime conventions',
    4168: 'Getting called by our usernames',
    4382: 'How people have butchered our real names',
    4748: 'Weird names that people have',
    4976: 'Anime conventions in Australia',
    5151: 'Drinking at conventions',
    5242: "Getting dragged to see stuff you don't care about by your parents",
    5546: 'Connor picked his room when he was 2',
    5745: 'Garnt watched Pokémon instead of meditating',
    6078: 'Remembering the stuff we watch',
    6138: 'Song lyrics',
    6439: 'Making a music episode',
    6819: 'People who listen to lyrics...maybe',
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
  chapters: {
    0: 'Garnt has forgotten how to podcast',
    49: "Why we haven't recorded for 3 weeks",
    613: 'Being ill is a state of mind',
    931: 'Appetite while sick',
    1196: "Connor says that food poisoning isn't an illness",
    2206: 'Honkai Impact 3rd',
    2288: "Connor doesn't like hospitals",
    2460: 'Hospital and dentist smells',
    2610: 'How often we visit the dentist',
    2924: 'Riding in an ambulance',
    3273: 'Fever dreams',
    3558: 'Dreams that change your life',
    3974: 'Flow of time in a dream',
    4328: 'ExpressVPN',
    4395: 'Lucid dreaming',
    5065: 'Sleep paralysis',
    5428: 'Visualizing your surroundings in a dream',
    6059: 'Manscaped',
    6136: 'Sleep talking & walking',
    6628: 'Sleep pissing & shitting',
    7350: 'Analyze our dreams',
    7397: 'People who have awesome dreams',
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
  chapters: {
    0: '24-Hour stream',
    67: 'The process of picking best song',
    426: "Connor's 3x3",
    495: 'Parcels',
    746: 'Biffy Clyro',
    835: 'Using your native accent to sing',
    1086: 'Tame Impala',
    1131: 'Weebcore',
    1317: 'Weeknd',
    1485: 'Comedy music',
    1674: 'Epic atmospheric music',
    1777: 'City pop',
    1863: 'YouTube recommends good music',
    1941: 'Bandai Spirits',
    2023: "Connor's music phase",
    2149: "Garnt's 3x3",
    2276: 'Kooks',
    2462: 'Garnt played guitar in a band',
    3527: 'Connor learns about music',
    3734: 'Bradio',
    3884: 'Muse',
    4086: 'The Killers',
    4392: 'MJ',
    4738: 'Anime-like music',
    4989: 'Daft Punk',
    5192: 'AM',
    5247: 'FLCL',
    5561: 'Magic Spoon',
    5638: "Joey's 3x3",
    5741: 'Ozzy Osbourne',
    5879: 'Led Zeppelin',
    6019: 'Pink Floyd',
    6398: 'Radiohead',
    6504: 'Getting emotional over music',
    6698: 'Tool',
    6837: 'MF Doom',
    6998: 'Tangerine Dream',
    7144: 'Nick Drake',
    7321: 'Depressing music',
    7402: 'Midwest emo',
    7779: 'Jun Maeda',
    8163: 'People who have good taste in music',
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
  chapters: {
    0: 'Charity time',
    67: "Joey is forced to solve a Rubik's cube",
    119: 'Garnt took back his promise on FF14',
    207: "Connor's addicted to difficult games",
    472: 'Difference between having a challenge and speedrunning',
    626: 'Enjoying games on stream vs off stream',
    907: 'Our thoughts on Pokémon Arceus',
    1283: 'Garnt picks games based on reviews',
    1486: 'What is so inviting about MMORPGs',
    1941: 'ExpressVPN',
    2011: "We're into Wordle now",
    2323: 'Babble Royale',
    2466: 'Does wanting to play golf make us boomers',
    2884: 'How Garnt became the chosen one of golf',
    3172: 'How to start with golf',
    3270: 'Bokksu',
    3341: 'Baseball increases your charisma',
    3463: 'We had very different physical education classes',
    3596: 'Sports days',
    3839: 'Joey and Connor share stories about pissing themselves',
    3998: "Connor can't stop himself from being too competitive",
    4169: 'Joey had 4 different sports days in Australia',
    4372: 'Getting reprimanded for outside school activities',
    4451: 'Connors school building had 2 different schools',
    4569: 'Boys will be boys',
    4737: 'Connor was a master sailor',
    5137: 'School trips',
    5295: 'Budgeting your lunch money',
    5701: 'Bookwalker',
    5772: 'The movies lied to us',
    5836: 'Learning how to drive a car',
    6027: 'Different stages of drivers licenses',
    6107: 'Connors arduous driving school journey',
    6373: 'Garnt started his driving experience in Thailand',
    6486: 'Driving instructors are weird',
    6602: 'Connor got extorted',
    6963: "Garnt's first driving experience gave him a shock",
    7187: 'How Connor flipped his friends ATV',
    7414: 'Driving motorbikes',
    7635: 'We need more extreme sports',
    7849: 'Avid extreme sports fans',
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
  chapters: {
    0: 'Garnt got stuck in a snowstorm',
    271: "Sydney wasn't prepared for the snow",
    574: 'Joey was in a dust storm',
    783: 'Fire storms are crazy',
    909: 'There was a storm in the UK',
    1039: "There's nothing dangerous in the UK",
    1214: 'Controlled bush fires',
    1366: 'Joey almost got bit by the most venomous ant',
    1714: 'Fish that looks like a stone',
    1805: "Harry's",
    1872: 'Jellyfish',
    2188: 'Eternal life',
    2316: 'How long would you like to live',
    2514: "Garnt's grandma is a chad",
    2589: 'The animals we fear the most',
    2975: 'Bears',
    3158: 'What we think is the strongest animal',
    3375: 'Call of Antia',
    3447: 'The most dangerous things were we all along',
    3483: 'The biggest animal we could take on',
    3649: 'Joey used to have a parrot',
    3912: 'Connor built a PC',
    4261: 'Garnt has started eating breakfast',
    4423: 'Cereal without milk',
    4575: 'How healthy is cereal',
    4830: 'Japanese bread is expensive',
    5145: 'Putting bread in the freezer',
    5315: 'Ice in your beer',
    5400: 'Where do you put your eggs',
    5657: "Garnt can't stop chewing on ice",
    5711: 'Connor swallowed a huge ice cube on a date',
    6154: 'The types of ice we like to eat',
    6497: 'Drinks in plastic bags',
    6859: 'The hack you need to use during a work interview',
    7045: 'Lifehacks',
    7559: 'People who maybe drink water',
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
  chapters: {
    0: 'Has internet gotten worse',
    391: 'The year when internet started going downhill',
    644: 'Have politics been too gamified',
    1193: 'Being the smart kid in class',
    1369: 'Savages everywhere',
    1589: 'Honey',
    1654: 'The chillest community',
    2224: 'Joey has risen anew',
    2985: 'Jujutsu Kaisen is just okay',
    3380: 'The word "mid" is being overused',
    3872: 'How we define mid shows',
    4185: "Child actors who've gone into artsy movies",
    4421: 'Trash television',
    4549: 'Pawn Stars',
    4667: 'Storage Wars',
    4781: 'Reality TV shows that we used to watch',
    5339: 'Manscaped',
    5406: 'Taking part in a reality show',
    5482: 'Social media is the new reality TV',
    5605: 'YouTube is what TV used to be',
    5781: 'Top tier people',
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
  chapters: {
    0: 'People who work with animals are surprisingly happy',
    195: 'Putting on gloves filled with ants',
    423: 'Superstitious beliefs',
    644: 'Science vs magic',
    963: 'Eating oranges while sick',
    1057: 'Putting wasabi on a wound',
    1187: 'Salt on wounds',
    1345: 'Idioms and superstition',
    1576: 'Having your life flash before your eyes',
    1763: 'Raid Shadow Legends',
    1830: 'Garnt fixed his mouth ulcers with salt',
    2013: 'Why we believe that pseudoscience works',
    2143: "We can't proceed long term events",
    2249: 'NFT dating app',
    2388: 'NFTs are getting a bad rep',
    2587: 'Influencers who use NFTs to get rich',
    2734: 'NFT perception in Japan',
    2856: 'That one part in Tenet',
    3118: "Why people don't have legs in the metaverse",
    3278: 'VR Chat',
    3357: 'Buying land in the Metaverse',
    3530: 'Getting motion sick in VR',
    3647: 'How is Metaverse going to work',
    3886: "VR isn't easy enough to set up",
    4150: 'Evolution of graphics in video games',
    4462: 'Where can video game graphics even advance to',
    4902: 'Fully immersive virtual reality',
    5021: 'The future of VR',
    5123: 'Snoop Dogg joined Faze',
    5416: 'Celebrities who started streaming',
    5531: 'Gordon Ramsay is on the internet',
    5670: "Why every reality TV show doesn't post their stuff on YouTube",
    5901: 'Netflix is spewing out reality TV shows',
    5971: 'Murder documentaries',
    6078: 'Ads in awkward places',
    6198: 'Different ways to approach talking about murder',
    6279: 'Are these documentaries weird as entertainment',
    6408: 'Are we consuming the content wrong',
    6524: 'People who try to solve the crimes themselves',
    6719: 'Morbid curiosity',
    7033: 'Reddit 50-50',
    7115: "People who's job is to go over internet content",
    7217: 'Bright spots',
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
  chapters: {
    0: "There definitely wasn't an intro before this",
    189: 'Coughing and pooping at the same time',
    291: 'Japan only has two seasons',
    387: 'We are sweaty bois',
    514: 'Air conditioner vs a fan',
    661: "The reason why Connor's apartment smelled",
    822: 'Pigeons outwitted Garnt',
    931: 'Joey woke up to opossums doing their thing',
    974: 'Reflective things against doves',
    1032: 'Foxes sound like screaming kids',
    1115: 'Connor had an ant and mice infestation',
    1288: 'Garnt is afraid of bees',
    1418: 'Can we make Garnt put his hand in a box of bees',
    1637: 'Hornets vs bees',
    1760: 'Ants can take a liquid form',
    1840: 'Kangaroos are massive',
    1961: 'Bunnies are ruining Australia',
    2202: 'Rabbits are too cute',
    2345: 'Giant tortoises were too tasty',
    2784: 'People only care about cute or cool animals',
    3004: 'ExpressVPN',
    3071: 'Getting rid of wasps nests',
    3144: 'Bigger spiders are less scary than small ones',
    3237: 'Connor had tiny roommates',
    3381: 'Joey had termites',
    3482: 'People who clean homes after the resident has passed away',
    3698: 'Garnt had an interesting Airbnb experience',
    3812: 'When should you write a will',
    4032: 'Releasing videos post mortem',
    4210: 'Sad stories in anime',
    4437: "It's hard to make empathetic stories revolving death",
    4665: 'Joey felt empty',
    4865: 'A piece of media that has made us cry the most',
    5097: 'Bois talk about crying',
    5483: "Connor can't stop talking about Batman",
    5666: "Harry's",
    5728: 'Batman The Animated Series',
    5823: 'Batman Arkham Asylum',
    5879: 'Connor was an achievement hunter',
    6304: 'Fishing mini-games',
    6482: 'Joey is really into mahjong',
    6667: 'Garnt loves bridge',
    6779: 'Is mahjong and bridge an old person game',
    6870: "Chess isn't interesting to watch",
    7073: 'Go',
    7165: "Sport games that we don't know the rules of",
    7273: 'Some sports are better to watch than others',
    7520: 'People who love milk',
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
  chapters: {
    0: 'Our most useless skills',
    128: "Solving a Rubik's cube",
    294: 'Joey mastered the kendama',
    475: "Connor ruined his Harry Potter Rubik's cube",
    633: 'Our go to party tricks',
    711: 'Connor clicks his wrists',
    735: 'Joey makes his signature sound',
    818: 'Garnt sent money to a magic company',
    948: 'Joey learnt how to backflip',
    1070: 'Connor wants to master the umbrella trick',
    1125: "Are there people who don't own pens",
    1234: 'Unidentified Mysterious Animals',
    1589: 'The earthquake in Japan',
    1774: 'The earthquake signal',
    1855: 'Honey',
    1926: 'The RPG item sound',
    2006: "Garnt's entire street lost electricity",
    2346: 'Connor was in a basement during the earthquake',
    2487: "It wasn't Joey's first rodeo",
    2659: 'Comprehending the earthquake rating scale',
    3059: 'USA has the most volcanoes',
    3157: 'Are we prepared for a disaster',
    3498: 'Surviving a nuclear bomb',
    3879: 'Getting hit by an atom',
    4078: 'Bokksu',
    4137: 'Could we survive a zombie apocalypse',
    4613: 'The youth is more prepared than us',
    4794: 'Should Trash Taste get a bunker',
    4953: 'Tree houses look cool',
    5057: 'Who could survive the longest',
    5265: 'Could we last on a deserted island',
    5377: 'Drinking your piss',
    5589: 'The time Nathan For You almost broke character',
    5722: 'What 3 items would we take to a deserted island',
    6316: 'Would you move to a house where someone died',
    6701: 'When does a new home turn into your actual home',
    6995: 'Connor figured out how to live the good life',
    7084: 'Man caves',
    7258: 'Garnt wants to be in a prison',
    7417: 'Old folks home',
    7579: 'People who can still decide',
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
  chapters: {
    0: 'Thoughts on the 24-hour stream',
    490: "Everybody's playing Jump King",
    979: 'How are Japanese websites so bad',
    1341: 'Secret menus in restaurants',
    1883: 'ExpressVPN',
    1954: 'Our friend took over a bar',
    2084: 'The secret Japanese menu',
    2272: 'Spicy food',
    2701: 'Rice is more popular than you think',
    3318: 'Vesync',
    3384: 'The first time Connor tried boba',
    3709: 'Why is boba tea so popular',
    3879: 'Japanese food needs to be aesthetic but not good',
    4110: "Theme cafe's don't respect the themes",
    4496: 'Making noise in Japan',
    4676: "Garnt's street is controlled by old lady thugs",
    4944: 'Sorting trash is a nightmare',
    5628: 'Our monthly anime talk',
    6476: "Anime characters age don't mesh with their personality",
    6943: 'Censoring in anime',
    7213: 'Ranking of Kings',
    7372: 'NFT bad',
    7568: "People who don't conform",
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
  chapters: {
    0: 'Is black paint heavier than white paint',
    402: 'This episode has a theme',
    690: 'POV You just arrived in Japan',
    1241: 'Get Suica',
    1366: 'Akihabara is pretty dope',
    1817: 'You can pilot a mecha in an arcade',
    2051: 'Athletic Greens',
    2109: 'Weeb stuff outside of Akihabara',
    2378: 'Karaoke is the most fun thing to do in Japan',
    2959: 'Onsens',
    3476: 'Ryokans',
    3783: 'Avoid bars where people invite you in',
    3902: 'Ikebukuro',
    4345: 'Hokkaido',
    4570: 'Hakodate',
    4831: 'Should you visit Kyoto',
    5029: 'Okinawa has beaches Joey can appreciate',
    5190: 'People come for anime and stay for the food',
    5322: 'Garnt prefers conveyor belt sushi over restaurant sushi',
    5456: 'Should people try Wagyu beef',
    5604: 'Chicken meat',
    5712: 'Underrated food',
    6041: 'Tonkatsu is god-tier',
    6222: 'Just try all the foods',
    6287: 'Conbini food',
    6527: 'Where to go if you have more time',
    6691: 'Seeing mount Fuji',
    6807: 'Getting around Tokyo',
    6970: 'Kyushu',
    7062: 'The wine capital of Japan',
    7180: 'Where to go if you like sake',
    7359: 'Theme parks',
    7474: 'Closing words about Japan',
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
  chapters: {
    0: 'Garnt left us',
    348: 'Are Sydney and Garnt related',
    600: 'Marrying in a church',
    721: 'Garnt got a marriage beta run',
    1002: 'The most fun part about a wedding',
    1125: 'Wedding sizes',
    1324: 'Lining up at a wedding',
    1423: 'Wedding politics',
    1566: 'Trash Taste wedding special',
    1789: 'Joey is finally visiting England',
    1981: 'Amazing bars in the UK',
    2434: "What Joey's been up to",
    2592: "Remembering the best places you've been to",
    2805: 'Golden Week is upon us',
    3010: "What Connor's been up to",
    3131: 'Garnt got recognized by a bartender',
    3433: 'We are a fire hazard',
    3765: 'Convention gone wrong',
    4073: "Harry's",
    4139: 'We are going to AX',
    4298: 'The anituber meetup',
    4454: 'Talking to fans',
    4679: 'Garnt experiences a Tesla',
    4806: 'Connor got shit in a friends tesla',
    5026: 'The new Doctor Strange film',
    5370: 'Marvel fatigue',
    5532: 'Severance',
    5838: 'Spy x Family',
    6356: 'Elden Ring',
    6676: 'Metal Gear Rising Revengeance',
    6873: 'The Steam Deck',
    7009: 'A Pokémon game that is finally challenging',
    7127: 'Modding Games',
    7275: 'VR time',
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
  chapters: {
    0: 'Bowing when on the phone',
    165: 'Who is Daidus',
    296: 'Daidus has never been to Japan',
    593: 'American vs Japanese workers',
    925: 'You buy fruit in Japan to flex',
    1310: 'The experience of moving to Japan',
    1558: 'Garnt optimized coming to Japan',
    1702: 'Honey',
    1769: 'Garnt and Connor were the beta testers',
    1876: 'Feeling helpless like a baby',
    2003: 'Daidus lost his rent money because of his shoes',
    2124: 'The word you need to use in your sentences',
    2280: 'The cults in Japan',
    2461: 'Daidus likes the low calorie beer',
    2706: 'Motivation to work',
    2762: 'First reactions of Tokyo',
    2827: 'Ramen in a cup vs in a packet',
    3074: 'Daidus learnt 3D animation in university',
    3278: 'Passing your work to someone else',
    3425: 'The process of making a Daidus video',
    3624: 'Not working has ceased to be an option',
    3988: 'YouTube really shoves your video performance in your face',
    4181: 'Bokksu',
    4245: 'Taking on sponsors used to be taboo',
    4615: 'Watching content at 2x the speed',
    5211: 'The bidet course',
    5335: 'Japanese bathtubs need to exist all over the world',
    5568: 'Daidus blows the guys away with his wiping habits',
    5744: "Daidus's face reveal",
    6345: 'The future of story time animation',
    6572: 'How Daidus blew up',
    6819: 'The first time Daidus met Connor',
    7036: 'Daidus tells a story',
    7159: 'You never stop building furniture',
    7330: 'Daidus built a PC worse than Joey',
    7494: "Daidus's Japan bucket list",
    7576: "Daidus's advice on moving abroad",
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
  chapters: {
    0: 'Welcome to the Awardw show',
    126: 'TT Studio',
    181: 'This podcast has too many episodes',
    300: 'TT After Dark',
    405: 'TT awardw',
    537: 'Nomination categories',
    744: 'Hot Take of the Year',
    1120: 'Best OOC Clip',
    1452: 'Screen Grab of the Year',
    1780: 'Most Degenerate Moment',
    2121: 'ExpressVPN',
    2185: 'Saltiest Moment',
    2625: 'Most Monke Moment',
    3096: 'Best Story',
    3463: 'Biggest Clown',
    3656: 'Biggest Chad',
    3821: 'Honey',
    3881: 'Best Nickname',
    4062: 'Best Complaining-About-America Moment',
    4300: 'Best Meme',
    4615: 'Fans\' "They Actually Talked About Anime" Award',
    4885: 'Best Tangent',
    5203: 'Best Drip',
    5397: 'Manscaped',
    5458: 'Laziest Drip',
    5623: 'Best Rant',
    5795: 'Best Argument',
    6068: 'Worst Food Take',
    6223: 'Best Poop Moment',
    6516: 'Most Privileged Moment',
    6832: 'The "I Made It the Fuck Up" Award',
    7120: 'Best TTAD Episode',
    7314: 'Dumbest Quiz Answer',
    7625: 'Moment of the Year',
    7932: 'Best TT Episode',
    8199: 'Thoughts on TT Season 2',
    8355: 'What to expect in TT Season 3',
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
  chapters: {
    0: 'Emily is here',
    97: 'Connor is the reason why Emily moved to Japan',
    277: 'Deer at Nara park are vicious',
    478: 'Comparing your skills to other artists',
    804: 'Emily studied to be a teacher',
    935: "The animated music video that changed Emily's life",
    1139: 'Telling your parents you do YouTube for a living',
    1449: "Emily's first videos",
    1595: 'Joining the story time community',
    1675: 'Gaining 2 million subscribers in 2 years',
    1902: "Emily's friend who didn't want to talk to her until she was famous",
    2133: 'Female Youtubers are put into 2 boxes',
    2347: 'Twitter went crazy over a pic of Sydney',
    2449: 'People forget that YouTubers have a private life',
    2535: 'Swearing in videos, guys vs girls',
    2869: 'Old friends who wanted to talk when you became big',
    3081: 'Getting a visa was like The Hunger Games',
    3200: 'Trying to differentiate people',
    3373: 'Japanese locals think Emily is one of them',
    3505: 'How to memorize kanji',
    3686: 'Coffee has arrived',
    3951: 'Japanese locals love to teach you Japanese',
    4087: 'The delivery guy ignored Daidus to talk to Emily',
    4233: "Japanese can talk in English but won't talk in it unless you do as well",
    4635: 'People who speak every language',
    4729: 'Connor was annoyed that a guy at a strip club was vibing',
    4824: 'Joey trolled a girl by pretending to not speak Japanese',
    4913: 'Talking behind a tourists back',
    5147: 'Joey has to reserve all the tables',
    5487: 'Places Emily wants to visit in Japan',
    5538: 'Japanese strawberries',
    5674: 'Fruit baskets are insanely expensive',
    5846: 'Japanese strawberries are crazy big',
    6053: 'Having an actual sleep schedule',
    6164: 'Teamfight Tactics',
    6418: 'Counterside',
    6481: 'Connor gushes even more about TFT',
    6652: "Emily's favorite character in League",
    6743: "Emily's thoughts on Jujutsu Kaisen",
    7070: 'Emily explains her anime taste',
    7500: 'Baki and Jojo',
    7735: 'Daidus likes drama',
    7846: 'Understanding anime films',
    8078: 'When They Cry',
    8252: 'Being an edge lord',
    8342: 'Connor loves Katanagatari',
    8428: 'Emily has decided to consume more content',
    8690: 'Enjoying chill anime',
    8989: 'Look at Emily',
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
  chapters: {
    0: 'We are actually leaving',
    168: 'Joey hid a secret from the guys',
    474: 'Graphic design is hard',
    681: 'Keyboard sounds',
    937: 'The tenkeyless debate begins',
    1093: 'Connor likes to take his keyboards with him on trips',
    1891: 'Headphones',
    2145: 'Honey',
    2209: 'Monitor refresh rate',
    2378: 'Picking the right sounding keys',
    2556: 'Garnt got diagnosed with ADHD',
    2855: 'Connor was convinced as a child that he has dyslexia',
    3164: 'Diagnosing your child',
    3492: 'Many people ignore mental health',
    3687: 'Self diagnosing',
    3789: 'Bad experience with doctors',
    3967: 'Connor would rather be sick than have his voice threatened',
    4089: "We'll be filming abroad for a while",
    4379: 'Gaining weight',
    4494: 'How much underwear do you need for vacations',
    4747: 'Connor scammed an airline',
    4973: "Joey almost couldn't leave Canada",
    5268: "Garnt's airline demanded $4000 from him",
    5995: 'Have we ever gone full Karen',
    6092: "Garnt couldn't talk his way through a bouncer",
    6462: "Joey's manager went anti-Karen",
    6661: 'Paying bouncers has its upsides and downsides',
    6971: "Don't be a Karen but know a Karen",
    7077: "People who aren't Karen's",
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
  chapters: {
    0: 'We have a new studio',
    81: 'We went to MCM London',
    323: 'The scale of anime cons',
    425: 'The scale of game cons',
    547: 'Our MCM London experience',
    753: 'First Trash Taste panel ever',
    1124: 'Stop being cringe',
    1680: "We'll be prepared next time",
    1849: 'MCM signing',
    1921: 'Connor had a Mission Impossible-esque plan',
    2384: 'Having a bodyguard',
    2464: 'Getting gifts from fans',
    2552: "Garnt's perfect disguise idea",
    2793: 'Cosplayers',
    2878: 'Signing death notes',
    3015: 'Special gifts',
    3160: 'Signing weird things',
    3373: 'Getting recognized outside the MCM',
    3864: 'CDawgZVA',
    4032: 'The worst time to get noticed',
    4345: 'Being in the UK',
    4461: 'Weird interaction',
    5305: "London's new Elizabeth line",
    5399: 'The bakery that changes you',
    5591: 'Meal deals',
    5827: 'Garnt and bread',
    6009: 'Spending money in the UK',
    6257: "That's been this episode",
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
  chapters: {
    0: 'Kevin the Lad',
    103: 'Getting to work on Made in Abyss',
    397: 'Working for a Japanese company',
    534: 'Connor is right with beeps and the boops',
    745: 'How did Kevin learn Japanese',
    1154: 'Normal Kevin vs Aussie Kevin',
    1522: 'Naming music tracks',
    1775: 'Getting commissions for anime music',
    1944: 'How Kevin started making anime music',
    2354: 'How Kevin met the boys',
    3315: "Kevin's creative process",
    3673: 'Can you know if a song will become a banger',
    4163: 'Finding a good recording spot',
    4380: 'The Tower of God soundtrack',
    4943: 'Kevin has mastered many musical instruments',
    5671: 'Composing during covid',
    5887: 'The Star Wars Visions soundtrack',
    6564: 'Manscaped',
    6624: "What's next for Kevin?",
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
  chapters: {
    0: 'The spiciest guest',
    151: "Metamorphosis should've been even more depressing",
    494: 'Has being from the states affected the creative process',
    578: "ShindoL didn't expect Metamorphosis to be memed so much",
    842: 'How to start drawing eromanga in Japan',
    1145: 'Doujins by ShindoL',
    1567: 'Honey',
    1642: 'A day in the life of an eromangaka',
    1762: 'How the Japanese audience reacted to Metamorphosis',
    1825: 'Amount of story vs anything else',
    2128: 'Least favorite tropes in manga',
    2186: 'The amount of research that goes into eromanga',
    2286: 'How doujins avoid Japanese copyright rules',
    2846: 'Trends in manga that are overdone',
    3333: 'Doing a normal manga',
    3497: 'Going from eromanga to manga',
    3691: 'How many doujin artists can do it for a living',
    3791: 'The main way to make a living from drawing',
    3966: 'Censoring',
    4130: 'Rules for what needs to be censored',
    4529: 'Bokksu',
    4609: 'Joey asks a legitimate question',
    4989: "ShindoL's favorite tags",
    5480: "How ShindoL's colleagues feel about his work",
    5756: 'Tippsy Sake',
    5844: 'ShindoL is a massive souls fan',
    5963: 'Manga that ShindoL likes',
    6154: 'Hours lost to gaming',
    6237: 'Pursuing hobbies outside of work',
    6286: 'Battle manga',
    6621: 'We are enlightened',
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
  chapters: {
    16: "Who's Jacksepticeye",
    269: 'Jack is a YouTube boomer',
    459: 'Being a caricature of yourself',
    619: "Let's talk anime",
    904: 'Anime that blew your mind',
    1126: "Sean's favorite anime",
    1446: "Sean's trip to Japan",
    1639: 'Voice acting in video games',
    1922: 'PCSpecialist',
    1967: 'Being yourself',
    2184: 'Doing daily uploads',
    2648: 'The insane reach of Jacksepticeye',
    3106: 'Weird fan interactions',
    3550: 'Takarazuka',
    3747: 'Weather in Japan',
    3936: 'Sean speaks Korean',
    4458: 'Top of the Mornin coffee',
    4802: 'Moving to Brighton',
    5280: "Sean's favorite dishes",
    5464: 'Touring',
    5912: 'Planning the show',
    6131: 'ADHD gang unite',
    6453: 'Tailoring your performance',
    6613: "When the jokes don't land",
    6723: 'The Trash Taste Experience',
    6936: 'The future of YouTube content creation',
    7157: 'Sean is the ultimate gamer',
    7303: 'What Sean wants to do now',
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
  chapters: {
    0: 'Welcome to our new studio',
    87: 'Our equipment is lost',
    178: 'Garnt had the worst airline experience',
    542: "Garnt can't catch a break",
    839: 'Running around in circles for your baggage',
    1123: 'Amazon delivery in the States vs Japan',
    1499: 'Whining about America',
    1671: 'First time in LA for a long period of time',
    1756: 'Joey caught Covid',
    1864: "You can't walk anywhere in Los Angeles",
    2017: 'Garnt and Sydney had a sketchy Airbnb',
    2161: 'Connor wants to live in LA',
    2243: "Garnt's wedding had the best vibes",
    2424: 'Meilyne went ham on the open bar',
    2733: 'Garnt had to sleep on the floor',
    2907: 'Garnt getting hyped for the wedding',
    3220: "Sydney walked down to Guts' theme",
    3557: 'The biggest meme during Grants wedding',
    3786: 'Recreating the ending of Evangelion',
    4008: 'Planning the little details',
    4222: 'Joey was pissed over cultural appropriation',
    4281: 'Meilyne is straight up unhinged',
    4416: 'Karen was fast',
    4588: 'Joey saved his mate',
    4713: 'Mudan got given work during the wedding',
    4805: "Garnt's mom went ham",
    4893: 'Joey has some sick moves',
    5030: "There's a GoPro with footage from the wedding",
    5220: 'Joey forgot his shoes',
    5358: 'Getting to see the Stonehenge',
    5519: 'The race of the ducks',
    5639: 'The most British thing to do',
    5722: 'Bookwalker',
    5790: "Connor met Garnt's parents",
    5915: 'British food was better than we remembered',
    5981: 'Connor streamed with Chris',
    6187: 'British accents are crazy',
    6571: 'Getting represented in anime',
    6658: 'Wales has a branding issue',
    7062: 'The biggest history buffs',
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
  chapters: {
    0: 'Trash Taste Tour announcement',
    50: 'Trash Taste has been taken over again',
    315: 'Reading spoilers before watching the show',
    611: "It's Morbin time",
    881: 'MBTI types',
    1194: 'What does Lilypichu do',
    1316: 'How to get into OfflineTV',
    1489: 'Fan dubbing other peoples stuff',
    1520: 'How OfflineTV formed',
    1595: 'Living in a content house with friends',
    1633: 'Honey',
    1697: "Lily's earlier collabs with the boys",
    1892: 'Making voice acting content',
    2315: 'Going to Japan',
    2345: 'What Powerpuff girls are we',
    2501: 'Connor is a child',
    2655: 'You can walk in Japan',
    2923: 'Getting useless tech',
    3100: 'British food is messed up',
    3679: "Lily's hottest food take",
    3866: 'Gacha games can suck you dry',
    4377: 'ExpressVPN',
    4436: 'Valorant',
    4529: 'Talking to others in video games',
    4598: 'Lily likes League',
    4802: 'People who take arcades seriously',
    4925: 'Beating your friends in Smash',
    5137: 'Talking trash',
    5337: 'The worst characters in League',
    5597: 'The ultimate gamer is still a human',
    5817: "Nobody wants to say they're a YouTuber",
    6149: 'Bloodline',
    6214: '10 years streaming',
    6425: "Lily can't stop sucking up content",
    6536: 'The craze of Wordle',
    6719: 'The best era of YouTube',
    6839: 'Doing accents in voice acting',
    7138: 'Michael Reeves will be on next, spoilers I guess',
    7343: 'Lily was the best host',
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
  chapters: {
    0: "Let's talk stocks",
    67: 'Who is Michael Reeves',
    192: 'Michael dropped out of university',
    396: 'Schools have too much filler',
    536: 'Learning through YouTube videos',
    685: 'Where does Michael get ideas for his videos',
    925: 'Michael loves electricity',
    1096: 'Electroboom',
    1258: 'Creator Clash',
    1923: 'Connor tried boxing',
    2132: 'YouTube boxing scene is evolving',
    2431: 'Gamersupps',
    2497: 'Jellied eels is some bussin food',
    2893: 'Michael talks about anime',
    3116: 'Michael pops a bottle',
    3160: 'OfflineTV bought a Boston Dynamics dog',
    3231: "Michael's going to Japan",
    3564: 'Getting equipment in Japan vs LA',
    3815: 'Michaels thoughts on living in LA',
    4029: 'Joey got approached by a person in the subway',
    4198: "Michael's YouTube beginning",
    4483: 'Nutting before boxing',
    4753: 'Connor misses the bidet',
    5038: 'Who even eats breakfast',
    5171: 'The Hawaii life',
    5344: 'The boys want to buy a castle',
    5537: 'British food',
    5623: 'Manscaped',
    5687: 'Asian restaurants',
    5832: 'Google review ratings',
    5927: 'LA food',
    6103: "Natural things aren't always good",
    6456: 'Everything in Japan is famous',
    6983: 'Combinis',
    7246: 'Hotdog stalls',
    7346: 'Wrapping up',
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
  chapters: {
    0: 'Trash Taste is going on tour',
    37: 'Outtakes',
    89: 'The OG of YouTube is here',
    120: 'Who is Anthony Padilla',
    288: 'How Anthony dives into his interviews',
    642: 'I Spent a Day With Pony Players',
    759: 'Embarrassed doing things without cameras',
    1106: 'Being intrusive',
    1194: 'Why did Anthony start the interview series',
    1301: 'Scripting interviews',
    1548: 'Getting people to be comfortable on camera',
    1702: 'People behind the scenes',
    1832: 'Having people that depend on the performance of your videos',
    2138: 'Quitting college for YouTube',
    2531: 'Getting paid for making videos',
    2957: 'Being the most subscribed channel on YouTube',
    3239: 'Mail Time with Smosh',
    3553: 'Bokksu',
    3620: 'Defy Media',
    4002: 'Getting tired of Smosh',
    4386: 'Smosh the Movie',
    5126: "Anthony Padilla's adventures",
    5296: 'Tippsy Sake',
    5364: 'The golden era of YouTube',
    5605: 'The secret to staying relevant',
    6304: 'Constantly learning from newcomers',
    6514: 'TikTok',
    6937: 'Getting burnt out',
    7027: 'How long can YouTube be a career',
    7423: "What's next for Anthony",
    7606: "People who enjoy what they're doing",
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
  chapters: {
    0: 'Intro',
    26: 'We found a guest with a lower voice than Connor',
    103: 'Visiting Japan',
    196: 'Crane games',
    472: 'ProZD has good anime taste',
    586: "Who's ProZD",
    912: 'ProZD has never made a thumbnail',
    1162: 'Becoming a voice actor',
    1436: 'Is social media presence important for voice actors',
    1712: 'Honey',
    1773: "YouTubers don't get enough respect",
    1914: 'Working in live-action',
    2121: 'Working with motion capture',
    2265: 'The roles we dream of acting in',
    2451: 'ProZD is a board game fanatic',
    2542: 'The best board games to play',
    2731: 'How did the board game hobby start',
    2897: 'Games that everybody can get into',
    3167: 'Niche vs obscure anime',
    3333: 'Haruhi Suzumiya',
    3592: 'My Anime List vs Anime News Network',
    4106: 'Comparing the top 10 anime',
    4329: 'Do you need to watch every episode to form a review',
    4889: 'Our favorite obscure anime',
    5336: 'How ProZD met Connor',
    5645: 'Watching media at double the speed',
    6013: 'Skipping cutscenes',
    6719: 'Watching the show you voice act in',
    7014: 'Matching lip flaps',
    7132: 'Reading the tutorial for a game',
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
  chapters: {
    0: "We're back in Japan",
    74: 'Talking about the tour',
    550: "We're getting a tour bus",
    848: 'Who the show will be for',
    1272: 'ExpressVPN',
    1341: "We've been travelling a lot",
    1512: 'The flight from LA to Miami',
    1778: 'How to sleep on a plane',
    2369: 'Joey and Connor went to Miami',
    2537: "We couldn't stop talking to each other",
    2807: 'Being motivated to do more content',
    2923: 'How we enjoyed the LA experience',
    3026: 'The worst meal we had in LA',
    3896: "You can't book tables in LA",
    4051: 'HiDive',
    4130: 'We went to Australia',
    4381: 'How do koalas still exist',
    4558: 'Being surprised by ibises',
    4714: 'Connor went to medieval times',
    4976: 'Joey paid 18 dollars for a can of beer',
    5017: 'Garnt told the bouncer to look at his Wikipedia page',
    5215: 'Australian sarcasm',
    5472: 'Everyone likes chocolate biscuits',
    5593: 'Chocolate flavored stuff makes Connor sick',
    6041: 'Sorbet',
    6143: 'The orange debate',
    6621: 'The worst fruit',
    6846: 'You can make more room for dessert',
    7009: 'Gaslighting Connor',
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
  chapters: {
    0: 'The Cosplay Goddess is here',
    134: 'How Jessica got her start with cosplay',
    208: "Let's talk drinks",
    395: 'Jessica used to work in a vineyard',
    496: 'Getting famous overnight',
    651: 'Entering Lollipop Chainsaw cosplay competition',
    867: 'The cosplay scene when Jessica started',
    1060: "Jessica's mother taught her how to sew",
    1125: 'The most difficult cosplay',
    1175: 'Deciding what to cosplay',
    1266: 'Voice acting Super Sonico',
    1529: 'Going to therapy',
    1632: 'The process of making cosplay',
    1736: 'Apari',
    1800: 'Making the Ironmouse cosplay',
    1959: 'Joey went to a photoshoot with Jessica',
    2180: 'Aki almost drowned',
    2411: 'Connor tried cosplaying himself',
    2569: 'Posing is difficult',
    2765: 'Jessica brought us hats',
    2912: "Conventions didn't use to have much rules",
    3205: 'Using conventions as an excuse to travel',
    3340: 'Going to 30 conventions in a single year',
    3402: 'Italian vs American pizza',
    3495: 'Bokksu',
    3566: 'How many conventions has Jessica been to',
    3890: 'Jessica had a documentary done about her',
    4246: 'Garnt left mid stream and debated whether to return',
    4407: 'Jessica wants to make a hobbit Airbnb',
    4518: 'Our busiest year yet',
    4751: 'Having different hobbies',
    4946: 'TikTok has changed everything',
    5174: "Jessica's insane convention stories",
    5304: "A guy bought Jessica's address off the internet",
    5560: "Amouranth's story",
    5628: 'We need bodyguards',
    5776: 'Tippsy',
    5840: 'We had to get our own security for AX',
    5987: "Conventions don't understand the power of influencers",
    6095: "We're going on a tour",
    6257: 'Trash Taste gets a dog',
    6621: 'Sydney wanted to feed homeless dogs',
    6918: 'Joey got cat allergies after his second cat',
    7159: "Garnt and Sydney got some love from their neighbor's cat",
    7246: 'Joey tried to pet a kangaroo',
    7394: 'CGI films',
    7561: 'Come back next week',
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
  chapters: {
    0: 'Test tour',
    27: 'Who is Ludwig',
    227: 'Will YouTube win the streaming wars',
    344: 'Reaction videos',
    444: 'The streaming meta',
    574: 'Chess',
    725: 'Connor kept beating his dad in chess',
    806: "YouTubers who've fallen off",
    1083: "Ludwig's 5 year plan",
    1244: 'The Subathon',
    1536: 'Streaming events',
    1666: 'ExpressVPN',
    1734: 'Ludwig has tons of employees',
    1868: 'Why stream on Twitch and not on YouTube',
    1953: 'Going from Twitch to YouTube',
    2014: "The CEO of YouTube went on Ludwig's podcast",
    2215: 'Preparing for the podcast with Susan',
    2334: 'Ludwig shows his tattoo',
    2523: "Ludwig hasn't visited Japan",
    2714: 'The heat in Japan is unbearable',
    2801: "What is Ludwig's home town known for",
    2852: "Ludwig isn't even the most popular YouTuber of his school",
    2950: 'Garnt talks about Brighton',
    3014: "Connor is angry he wasn't invited to a documentary about Welsh YouTubers",
    3180: 'Ludwig went to the UK',
    3387: 'PCSpecialist',
    3447: "Kettles aren't a joke",
    3556: 'French people',
    3672: 'English breakfast',
    3826: 'North vs South England',
    4111: 'Food in different countries',
    4454: 'Beer',
    4650: 'Having blood from different nationalities',
    4788: 'Travelling with parents',
    4955: 'Smash',
    5257: 'Working at Apple',
    5469: 'How Ludwig became a weeb',
    5624: 'Finally talking about anime',
    6627: 'Manscaped',
    6695: 'Even more anime',
    6907: 'How much do others opinions change your thoughts on anime',
    7245: 'Gordon Ramsay ruined Mr. Beasts video',
    7362: 'Adult cartoons',
    7600: 'How to be a productivity machine',
    7769: 'Ludwig had a weird interaction with QTCinderella',
    7970: 'Absolutely family friendly content',
    8099: 'Anime and Manga',
    8430: 'Bye',
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
  chapters: {
    0: 'We are soft',
    51: 'Garnt is playing with waifus',
    122: 'Reacclimating to Japan',
    325: 'Wearing shorts in public',
    573: 'Joey has a hole in his boxers',
    846: 'How Garnt knows when to wash his clothes',
    1073: "Garnt doesn't like housework",
    1378: 'Ironing clothes',
    1666: 'Honey',
    1728: 'Owning a dishwasher',
    2261: 'Connor is sad about a café',
    2376: 'Uber Eats in the States is goated',
    2556: 'Customizing your order in Uber Eats',
    2766: 'What type of chocolate is our favorite',
    3300: 'Thor Love and Thunder',
    3496: 'Top Gun',
    3525: 'Batman',
    3821: 'Sonic 2',
    3964: 'Marvel films',
    4116: 'End of the world films',
    4458: 'Tom Cruise does some insane stunts',
    4812: 'Everything Everywhere All At Once',
    5021: 'The new Matrix',
    5160: 'John Wick',
    5213: 'Having proper representation in a movie',
    5558: 'The meme of Breaking Bad',
    5684: 'The Boys',
    5854: 'Invincible',
    5921: 'SpongeBob Squarepants',
    6213: 'Too many subscription services',
    6433: 'Pay a monthly fee to heat your seats',
    6788: "We're a part of the problem",
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
  chapters: {
    0: 'Trash Taste Tour!',
    27: 'How to call Pokimane',
    200: 'The American accent',
    678: "How it's like living in LA",
    823: 'Living in content creator houses',
    1036: 'Twitch has changed dramatically',
    1176: 'Dealing with toxic online culture',
    1505: 'Being the top female streamer',
    1811: 'ExpressVPN',
    1875: 'Pushing the boyfriend/girlfriend experience',
    2175: 'The simp movement',
    2336: 'People who push the envelope',
    2523: 'Profiting from problems',
    2721: 'The crazy articles written about Pokimane',
    3119: 'The price of having fame',
    3448: "Pokimane's apology videos",
    3610: 'Taking down videos',
    3852: 'Being mad for the sake of being mad',
    3921: 'Among Us has changed us',
    4011: 'Fortnite',
    4092: "Connor doesn't like Valorant",
    4198: 'The next Twitch meta',
    4447: 'Adding narrative to your stream',
    4784: 'IRL streams',
    4886: 'Pokimane went to Korea',
    5129: 'Filming in public spaces',
    5237: 'Would Pokimane live in Korea',
    5298: "Harry's",
    5363: 'Streaming vs making YouTube videos',
    5455: 'Streaming in Japan',
    5560: 'Arcades',
    5756: 'Connor is too competitive',
    6056: 'Recent rumors about Pokimane',
    6211: 'The Pokimane vtuber controversy',
    6473: 'Watching TV shows on stream',
    7020: 'React content',
    7156: "Pokimane's favorite anime",
    7689: 'Insane reactions',
    7925: 'The green circle',
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
  chapters: {
    0: 'Plushies',
    16: 'How does one work',
    159: 'Garnt finally has a schedule',
    369: 'Connor did a charity cycleathon',
    796: 'Managing the stream while cycling',
    1043: 'Choosing a bike',
    1238: 'Making cycling entertaining',
    1452: 'Prepping for the cycleathon',
    1697: 'Having chat with you',
    1914: 'Cycling is scary',
    2205: 'Cycling makes you fit',
    2331: 'Honkai Impact 3rd',
    2398: 'Accommodation while cycling',
    2633: 'Connors bike recommendation',
    3175: 'Weather while cycling',
    3359: 'Doing even crazier streams',
    3534: 'Arguing with Chris',
    3937: 'Cycleathon overall',
    4180: 'Big streams in the future',
    4532: 'Google maps is a liar',
    4788: 'Bokksu',
    4894: 'Sigur Rós',
    5402: 'Films made for the cinema',
    5599: 'TV default settings',
    6086: 'Live shows vs recorded shows',
    6471: 'Sitcoms',
    6781: 'Musicals',
    7096: 'Rakugo',
    7475: "That's all folks",
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
  chapters: {
    0: 'Garbage Flavor',
    117: "We don't talk about anime",
    188: 'The Trash Taste branding',
    373: "William's favorite anime",
    1023: 'Easiest way to get people into anime',
    1434: 'The first anime William watched',
    1533: 'Good sci-fi anime',
    1770: 'William is a mad scientist',
    2028: 'Getting an engineering degree',
    2534: 'Buying books for university',
    2943: 'Helping Mr. Beast on the Squid Game video',
    3516: 'Everything went wrong',
    3850: 'Would William do it again',
    4071: 'Why William posts so rarely',
    4415: 'PCSpecialist',
    4474: 'Working with radiation',
    4745: 'Safety is important',
    4882: "Who's the most dangerous YouTuber",
    5192: 'Has William been scared for his life',
    5439: 'FPS Russia',
    5641: 'MythBusters',
    5755: 'Safety precautions',
    5861: 'Having your house burn down',
    6352: 'How much do our parents watch our videos',
    6640: "William loves Japan because it's like Disney Land",
    6866: 'Australia is white trash America',
    7020: 'Rules are weird sometimes',
    7180: 'Connor got stopped by the TSA',
    7485: 'Border Patrol is intense',
    7771: 'Drinking at the airport',
    7876: 'Connor had someone smoke in his plane',
    8112: 'The absolute state of people on a plane',
    8386: 'Shoutout to turtles',
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
  chapters: {
    0: 'The prequels',
    370: 'The OG trilogy',
    554: 'The new trilogy',
    595: 'Harrison Ford',
    760: 'Disney',
    970: 'Animation to live action',
    1361: 'Meeting a celebrity in the wild',
    1831: 'Honey',
    1905: 'Meeting the creator of Death Note',
    2040: 'Traditional vs internet celebrities',
    2162: 'We got smuggled into Vidcon',
    2587: 'Vidcon vultures',
    2851: 'Social platform reach',
    3120: 'Short content revenue',
    3773: 'VR as the future',
    3925: 'DVD discs',
    4165: 'Movie related games',
    4872: 'Movies',
    5044: 'Problem with show binging',
    5388: 'Documentary',
    6095: 'TV after midnight',
    6270: 'Niche nature documentaries',
    6489: 'M.E.T.A',
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
  chapters: {
    0: 'Nile Red does the thing',
    48: 'YouTubers who Connor is scared to be in prison with',
    116: 'Nigel and pee',
    360: 'Tolerant neighbors',
    420: 'Everything started with fire',
    645: 'Having a smoke bomb go off in your house',
    774: "The one time Nigel's mom got angry",
    940: 'Almost causing a wildfire',
    1318: 'Getting scared of explosives',
    1414: 'Almost losing your hand',
    1566: 'Taking your blowtorch to school',
    1738: 'Making flash powder',
    1921: 'ExpressVPN',
    1981: 'How much experience does Nigel have',
    2330: 'How safe is everything actually',
    2527: 'Getting acid on your arm while filming',
    2611: 'Lube',
    2821: 'Being on a watch list',
    2924: 'Calling the government about using uranium',
    3228: 'Chemical leak',
    3309: "Having certification doesn't matter",
    3427: 'Bromium',
    3617: 'Making meth',
    3900: 'Being refused to sell chemicals',
    4049: 'The differences between forms of chemistry',
    4219: "Nigel didn't really like Chemistry in school",
    4424: 'Making pure capsaicin',
    4761: 'How accurate is Breaking Bad',
    5017: 'Getting rid of a body',
    5284: 'Connor is looking for the perfect strat',
    5609: 'Being checked up on by the government',
    6180: 'Being impersonated',
    6605: 'Copyrighting your voice',
    6840: 'Why Nile Red videos can take months to edit',
    7101: 'Listening to your own voice messed him up',
    8014: 'Greg',
    8127: 'People who blew up stuff when they were little',
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
  chapters: {
    0: 'Why are we still getting demonetized',
    50: 'Japanese restaurants panic when you have a normal portion size',
    510: 'Coffee is usually brought after the meal',
    749: "Domino's Pizza didn't succeed in Italy",
    935: 'Did England invent football',
    1048: 'The oldest sport in the world',
    1188: 'Rise up fellow herbivores',
    1389: 'GamerSupps',
    1461: "Listening to people you don't agree with",
    1615: 'Haka',
    1835: 'Wales has some interesting traditions',
    2107: 'Garnt has started to appreciate Thai culture',
    2232: "What's your bloodline",
    2603: 'Feeding children your culture',
    2740: 'Would Connor teach Welsh to his child',
    3004: 'Who understands culture better',
    3215: 'Accent shifting',
    3478: 'PC Specialist',
    3546: 'Herbivores',
    3600: 'Vegetarian culture in Japan',
    4017: 'Yuzu is too powerful',
    4195: 'The worst citrus fruit',
    4406: 'Sakura flavor',
    4491: 'Every sakura tree is a clone of each other',
    4642: 'Weddings in Japan dropped because of vtubers',
    4758: 'How can japan fix its baby problems',
    4883: 'Love is Blind',
    5217: 'Being too shy to take off your mask',
    5612: "Japan's mask culture",
    5790: "Japan's economy is having an oopsie",
    6029: "Japan is still announcing it's daily number of cases",
    6148: 'The public consensus on talking about the pandemic',
    6568: 'Just tough it out',
    6710: 'Our fellow alpha herbivores',
  },
};
channelTrashTaste.videos.push(videoUUnX3gdpTSw);

export const latestTrashTaste = videoUUnX3gdpTSw;

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
  chapters: {
    0: 'Intro',
    556: 'Speedrunning',
    701: 'Games During Free Time',
    800: 'Why Twitch instead of YouTube',
    849: 'How Topics Are Brought Up',
    943: 'League of Legends',
    1053: 'Connor Toxic Gamer',
    1113: 'Casual Games and Being Challenged',
    1492: 'Live Podcasts?',
    1518: 'PewDiePie Vtuber',
    1550: 'Composers and Artists',
    1591: 'Dream Guest',
    1673: 'Kevin Penkin',
    1707: 'PO Box',
    1801: 'Pranks',
    1837: 'Talking About Streams and Ideas',
    1868: 'Intern',
    1913: 'Behind The Scenes',
    1965: 'Fast Food',
    2060: 'Attack on Titan',
    2186: 'Trash Taste Specials',
    2310: 'Mario Party',
    2364: 'Coomers',
    2568: 'Cyberpunk 2077',
    2883: 'Cyberpunk Gay Reddit Thread',
    3020: 'Warm Beer',
    3092: 'Cyberpunk Gay Reddit Thread (continued)',
    3289: 'Anime or Manga Recommendation Segment?',
    3335: 'Anime Winter 2021',
    3695: 'Connor Normie',
    3829: 'Horimiya and Camera Change',
    3892: 'Being Friends with Yourself',
    3970: 'Best Beer',
    4020: 'Germany',
    4100: 'Best Beer (continued)',
    4205: 'Not Friends?',
    4299: 'YouTube House',
    4440: 'Relationships',
    4702: 'Garnt and Sydney',
    4808: 'Relationships (continued)',
    4990: 'Age',
    5108: 'Chris Broad',
    5134: 'Prince Andrew',
    5250: 'Royal Family',
    5488: 'National Anthem',
    5669: 'Patriotic',
    5722: 'Welsh Flag',
    5843: 'Best Flag?',
    6462: 'Primary Colors',
    6562: 'Public Service Announcement',
    6602: 'Best Flag? (continued)',
    6649: 'Outro',
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
  chapters: {
    0: 'Hype intro',
    55: 'Wet stuff',
    133: "We're streaming regularly now",
    295: 'Our favorite speedruns to watch',
    413: 'The new Eva movie',
    803: 'Must go-to restaurants in Tokyo',
    850: 'Trash Taste mascot',
    927: 'Has Connor started One Piece?',
    952: 'Favorite kanji',
    1031: 'Nier:Automata',
    1207: 'Devil is a Part-Timer S2',
    1317: 'Devil May Cry',
    1413: 'New Shonen Jump manga titles',
    1670: 'Having remote guests',
    1812: 'Nagatoro',
    1917: 'Kaiju no 8 vs Pacific Rim',
    1970: 'Godzilla',
    2226: 'Apex Legends',
    2497: 'Games that are movies',
    2602: 'The perfect game for Garnt',
    2657: 'Gatcha',
    3131: 'Auto-play in games',
    3550: 'How guests get on TT',
    3625: 'Getting into Apex',
    3783: 'Cancelling Maid Dragon',
    3833: 'Survival adventure Games',
    4036: 'Video games',
    4109: 'Tyler1',
    4172: 'Getting into a game',
    4263: 'Dead by Daylight',
    4359: 'Monster Hunter',
    4412: 'Vibing',
    4497: 'Shouting is fun',
    4586: 'Redo of a Healer',
    4913: 'Re:Zero S2P2',
    4946: 'Wonder Egg Priority',
    4978: 'Anime of the year',
    5094: 'Demon Slayer movie',
    5130: 'Anime movies',
    5204: 'Trash Taste in a nutshell',
    5534: 'The Burger King tweet',
    5776: 'Plant based burgers',
    5870: 'Subway',
    6083: 'The refill culture',
    6124: 'Soda',
    6195: 'Food labels',
    6374: 'The metric system',
    6482: 'Different measuring systems',
    6782: 'Pints are the best unit',
    6986: 'Beer',
    7452: 'Outro',
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
  chapters: {
    0: 'Alexa, do the intro',
    61: 'Wine',
    196: 'Destroyed figurines',
    244: "Connor's meme picture",
    292: 'Joey pervs on a figurine',
    330: 'Trash Taste Anniversary',
    641: "Connor can't have his drip",
    684: 'The vtuber rabbithole',
    791: 'Streaming is intense',
    904: "We're becoming hot tub streamers",
    1143: 'Australian things',
    1302: 'We have a new studio',
    1351: 'Ladybeard drained us',
    1490: 'Wrestling with Ladybeard',
    1680: 'Preparing drinks',
    1954: 'Dab break',
    2001: 'Cleaning up our mess',
    2126: 'Talking about anime?',
    2335: "Don't Toy With Me, Miss Nagatoro",
    2526: 'Uzaki-chan and Umaru-chan',
    2658: 'The way of the house husband',
    2831: 'Cromartie High School',
    2880: 'J.C. Staff',
    3133: 'Even more anime talk',
    3294: "Words that we've never heard of",
    3492: 'Joey is smart',
    3675: 'What we do with spare rubber bands',
    3805: 'Taxi vs Train in Tokyo',
    3909: 'Connor blows off Garnt',
    4182: 'Taking the taxi in Japan',
    4323: 'Vivy',
    4494: 'Indian curry x Zorball',
    4744: 'Joey shows his drip',
    4774: 'Garnt speaks American',
    4820: 'Are we going to play Apex',
    5020: "We're doing a special stream soon",
    5071: 'The hot tub streamer is still better than us',
    5125: 'Peer pressure',
    5243: 'Will Connor play Fate',
    5292: 'Our thoughts on Star Wars',
    5352: 'Our top 3 anime leaders',
    5470: 'Apex vs League',
    5508: 'Heroes of the Storm',
    5549: 'Monster Hunter Rise',
    5610: 'Plans with our new studio',
    5775: 'Future specials',
    5934: 'Tenga time',
    6014: 'The future of Tengas',
    6065: 'Philips Hue',
    6113: 'Dungeons and Dragons',
    6352: 'Podcast length',
    6530: "Justice League Snyder's cut",
    6603: 'Superhero films',
    6718: 'How long should our podcasts be',
    6795: 'Avengers',
    6919: 'Wrapping it up',
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
  chapters: {
    0: 'Gamer intro',
    84: 'The final stream in this studio',
    223: 'Twitch lingo',
    299: 'Snakes',
    390: 'Garnt went clubbing',
    501: 'This is a livestream',
    663: 'Tiermaker',
    906: 'PC building competition',
    1042: 'Rhode Island',
    1183: 'Idaho',
    1303: 'Maine',
    1516: 'North Dakota',
    1685: 'Connecticut',
    1933: 'Alaska',
    2044: 'Wyoming',
    2243: 'Virginia',
    2810: 'Alabama and Florida',
    3016: 'Arizona',
    3116: 'Arkansas',
    3258: 'Delaware',
    3389: 'Indiana',
    3458: 'Iowa',
    3540: 'Maryland',
    3779: 'Michigan',
    3998: 'Montana',
    4065: 'New Hampshire',
    4202: 'New Mexico',
    4276: 'Oklahoma',
    4384: 'Pennsylvania',
    4481: 'South Carolina',
    4664: 'Texas',
    4827: 'Wisconsin',
    4892: 'Colorado',
    4967: 'Louisiana',
    5122: 'Minnesota',
    5169: 'Absolute State Flags',
    5742: 'Ohio',
    5921: 'Speedrunning the rest of the flags',
    6287: 'We finished the tier list',
    6517: 'Fondest memory of this studio',
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
  chapters: {
    0: 'Our new set',
    207: 'Building the Attack on Titan statue',
    1040: 'Answering questions',
    1536: 'Trash Taste guests',
    1679: 'We finished the statue',
    1844: 'Fixing audio issues',
    2016: "Connor's PC got manhandled",
    2166: 'Gushing over the statue',
    2298: 'Anime x fashion collabs',
    2512: 'Getting a new phone',
    2820: 'Going back home',
    3111: 'Existential crisis',
    3234: 'Can YouTube be a stable job',
    3756: 'Food price in Japan',
    4003: 'Trash Taste specials',
    4422: 'Chess tournament',
    4905: 'Ancestry & 23andMe',
    5106: 'Cousins',
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
  chapters: {
    0: 'We are now brighter',
    44: 'Our first sponsored stream',
    228: 'Manga awards',
    454: 'Manga awards 2020 winners',
    673: 'Winners of 2019 and 2018',
    807: 'Manga award nominees 2021',
    1230: 'Print manga 3rd place',
    1598: 'Print manga 2nd place',
    2021: 'Print manga winner',
    2510: 'Digital manga 3rd place',
    2706: 'Digital manga 2nd place',
    3032: 'Digital manga winner',
    3509: 'Honorable mentions',
    4639: 'Final thoughts',
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
  chapters: {
    0: 'Spelling bee',
    54: 'Hello every single one of you',
    171: 'On the topic of current news',
    301: 'We are so relatable',
    366: 'Bring back FB gaming posts',
    501: 'Weirdly colored stuff',
    920: 'Windows are life',
    1126: 'Reading Twitch chat',
    1391: 'Daddy Bookwalker',
    1554: 'The rules of the game show',
    1835: 'Question 1',
    2059: 'Question 2',
    2465: 'Question 3',
    2656: 'Question 4',
    2922: 'Question 5',
    3300: 'Question 6',
    3924: 'Question 7',
    4489: 'Question 8',
    4868: 'Question 9',
    5205: 'Connor eats a ghost pepper',
    5304: 'Question 10',
    5874: 'Question 11',
    6092: 'Question 12',
    6543: 'Question 13',
    6824: 'Question 14',
    7143: 'Question 15',
    7640: 'Ad time',
    7733: 'Joey brings us the winnings',
    8091: 'Big things ahead',
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
  chapters: {
    0: 'Where do we look',
    62: 'Joey is a spelling bee expert',
    295: 'Reading words is weird',
    344: 'Handling the spice',
    523: 'Weird food',
    978: 'Can you mess up mashed potatoes',
    1183: 'Easiest dish to cook',
    1240: 'The spelling bee starts',
    1318: 'Round 1',
    1520: 'Round 2',
    1720: 'Round 3',
    2047: 'Round 4',
    2259: 'Round 5',
    2478: 'Round 6',
    2729: 'Round 7',
    3062: 'Round 8',
    3315: 'Round 9',
    3843: 'Round 10',
    4393: 'Round 11',
    4858: 'Round 12',
    5463: 'Round 13',
    6452: 'Round 14',
    7369: 'Round 15',
    7911: 'The results',
    8137: 'Spelling donations',
    8243: 'New games to play',
    8518: 'A big announcement',
    8756: "Let's Raid",
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
  chapters: {
    0: 'Our adventure with Uber Eats',
    261: "It's the America topic again",
    344: 'We have snacks',
    453: 'Which country has the best snacks',
    575: 'Why is dried fruit named differently',
    1163: 'Lying to get into university',
    1870: "Garnt's exam story",
    2544: 'Takis',
    2891: 'The salt debate',
    3104: 'Twinkies',
    3388: 'Rap snacks',
    3590: 'Fruit Gushers',
    4013: 'Rap Snacks again',
    4165: 'Caramel Apple Pops',
    4573: 'Rice Krispies Treats',
    4723: 'Pop tarts',
    5130: 'What is pizza',
    5494: 'Goldfish',
    5683: 'No really, what constitutes as pizza',
    5803: 'Pumpkin Spice Snaps',
    6008: 'Meilyne showed her true colors',
    6243: 'Flamin Hot Mac n Cheese',
    6731: 'Chicken in a Biskit',
    7217: 'Thanking the most important people',
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
  chapters: {
    0: 'Welcome Pickle Ricks',
    110: "What we're doing today",
    680: 'How many words do we know',
    885: 'You could work for us',
    1011: 'Guests on After Dark',
    1110: 'Kadokawa',
    1371: 'Rare items',
    1929: 'Warm up',
    2022: 'Writing our names in Japanese',
    2617: 'Mountain',
    2756: 'Japan',
    2934: 'Writing numbers',
    3349: 'Person',
    3545: 'Fire',
    3837: 'Up & down',
    4103: 'Left & right',
    4354: 'Man & woman',
    4859: 'House',
    5153: 'Teacher',
    5392: 'Little sister',
    5772: 'Karate Kid',
    6024: 'The day of birth',
    6143: 'Hobby',
    6515: 'Testing Joey',
    6625: 'Outside',
    6763: 'Dog',
    6903: 'Tuesday',
    7037: 'Cheap',
    7406: 'Tanaka',
    7608: 'Name',
    7856: 'Colors',
    8652: 'The results',
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
  chapters: {
    0: 'Not like this',
    24: 'Welcome',
    63: 'Boys & Chris',
    154: "What we're doing today",
    386: 'British beer',
    477: 'Australian beer',
    566: 'Japanese beer',
    723: 'Favorite beer of Trash Taste',
    871: 'Different beers',
    1084: 'Liking beer for the first time',
    1376: 'Everything is falling apart',
    1526: 'Anime',
    2024: 'Ramen stream when?',
    2204: 'Corona (beer)',
    2710: 'Heineken',
    3094: 'Chang',
    3476: 'Dreher',
    3846: '333',
    4254: 'Guinness',
    4939: 'Estrella',
    5277: 'Budweiser',
    5708: 'Miller',
    6020: 'Bintang',
    6445: 'Yebisu',
    6898: 'Budvar & Weissbier',
    7194: 'Best & worst',
    7567: 'Niche subreddits',
    7813: 'Outro',
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
  chapters: {
    0: 'Za Warudo',
    41: 'Accidentally going live',
    82: 'Shawarma',
    156: 'The plan',
    417: 'Mental arithmetic',
    632: 'Cosori',
    956: 'JoJo Stone Ocean',
    1308: 'Miyazaki',
    1614: 'Movie Directors',
    1735: 'Countdown',
    2030: 'Round 1',
    2245: 'Round 1.1',
    2455: 'Round 1.2',
    2937: 'Round 1.3',
    3239: 'Round 2',
    3554: 'Round 2.1',
    3890: 'Round 2.2',
    4575: 'Round 2.3',
    5048: 'Why is there no Countdown in other countries',
    5245: 'Round 3',
    5587: 'Round 3.1',
    5773: 'Round 3.2',
    6567: 'Round 3.3',
    6867: 'Final round',
    7019: 'Results',
    7352: 'Future plans',
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
  chapters: {
    0: 'The drip council is here',
    129: "We're doing a quiz about this year",
    270: 'A viewer sent us a stream idea',
    456: 'What we remember about 2021',
    537: 'Streaming watching a show',
    636: 'Cosori',
    944: 'This chicken be bussin',
    1232: 'Getting emails from YouTube',
    1360: 'The Big Fat Quiz of the Year',
    1564: 'Question 1',
    1898: 'Question 2',
    2240: 'Question 3',
    2483: 'Question 4',
    2573: 'Question 5',
    2913: 'Question 6',
    3037: 'Question 7',
    3242: 'Question 8',
    3476: 'Question 9',
    3784: 'Question 10',
    4066: 'Question 11',
    4324: 'Question 12',
    4523: 'Half-time',
    4821: 'Question 13',
    5278: 'Question 14',
    5655: 'Question 15',
    5806: 'Question 16',
    6003: 'Question 17',
    6196: 'Question 18',
    6383: 'Question 19',
    6671: 'Question 20',
    6812: 'Question 21',
    6919: 'Question 22',
    7039: 'Question 23',
    7345: 'Bonus question 1',
    7526: 'Bonus question 2',
    7709: 'Bonus question 3',
    7880: 'Bonus question 4',
    8000: 'Final Question',
    8121: 'Final thoughts',
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
  chapters: {
    0: 'Daddy Aorus',
    48: "Today's mission",
    110: 'Giveaway',
    312: 'Trash Taste Merch',
    368: 'Expectations',
    502: "Bois' setup",
    1009: 'Submissions',
    1058: 'Good submission 1',
    1451: 'Good submission 2',
    1730: 'Good submission 3',
    2172: 'Good submission 4',
    2522: 'Good submission 5',
    2642: 'Good submission 6',
    2945: 'Funny submissions',
    3304: 'Bad submissions',
    3411: 'Bad submission 1',
    3705: 'Bad submission 2',
    4030: 'Bad submission 3',
    4322: 'Bad submission 4',
    4539: 'Bad submission 5',
    4911: 'Bad submission 6',
    5086: 'Bad submission 7',
    5419: 'Half-time',
    5510: 'Bad submission 8',
    5863: 'Bad submission 9',
    6163: 'Bad submission 10',
    6526: 'Ranking',
    7461: 'Conclusion',
    8191: 'Winner',
    8596: 'You made this episode work',
    8646: 'Announcement',
    8836: 'Outro',
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
  chapters: {
    0: 'Happy Tree Day',
    50: 'Figure episode',
    242: 'Score so far',
    370: 'Akihabara video 2021',
    465: 'Figures',
    1190: 'Favorite Jojo figure',
    1297: 'Ass',
    1374: 'Bookwalker',
    1820: 'Top stream in the world!',
    1985: 'Fate statue & Akira bike',
    2331: 'Contentious points',
    2512: 'Figure closest to $69',
    2791: 'Figure from the highest rated MAL series',
    3051: 'Most spent on a non-figure',
    3153: 'Most expensive figure',
    3315: 'Cosori',
    3501: 'Figure closest to $420',
    3702: 'Most figures bought from anime original movie',
    3864: 'Most spent on one series',
    3963: 'The most spent in one store',
    4014: 'Most hentai figures bought',
    4073: 'Who spent a total of closest to $3333',
    4704: 'Most figures bought',
    4762: 'Most cheapest figure bought',
    4848: 'Eating chicken and listening to Sydney',
    5048: 'Duplicate characters bought',
    5551: 'Votes',
    5691: 'Joey didn\'t shout "I love incest"',
    5826: 'Is Demon Slayer a recent anime',
    6067: 'Connor Dio figure duplicates',
    6265: 'Is Goku black same as black Goku?',
    6614: 'Can Joeys figure beat Goku',
    6807: 'Are all among us characters same?',
    7479: 'Connors Eva is an Eva?',
    7809: 'Points to grab',
    7855: 'Most degenerate figure',
    7990: 'Best overall haul',
    8083: 'Best figure',
    8243: 'Worst figure & loser',
    8404: 'Final score',
    8442: 'Punishment',
    9153: 'Thank you',
    9346: 'What more to come',
    9402: 'Outro',
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
  chapters: {
    0: "We're back from vacation",
    119: 'Revision',
    365: 'University',
    603: 'Uni debt',
    660: 'Owning a credit card',
    854: 'Longest time without taking a dump',
    1222: "Are we smarter than 10 year old's",
    1559: 'Talking about the show',
    1784: 'Question 1',
    2182: 'Question 2',
    2842: 'Question 3',
    3011: 'Question 4',
    3298: 'Question 5',
    3507: 'Question 6',
    3639: 'Question 7',
    3989: 'Question 8',
    4160: 'Question 9',
    4309: 'Question 10',
    4739: 'Question 11',
    4938: 'Question 12',
    5266: 'Question 13',
    5494: 'The Red Sea',
    5750: 'Question 14',
    5858: 'Question 15',
    5986: 'Question 16',
    6132: 'Question 17',
    6283: 'Question 18',
    6470: 'Question 19',
    6673: 'Question 20',
    6824: 'Question 21',
    6985: 'Question 22',
    7220: 'Question 23',
    7384: 'Last question',
    7652: 'Results',
    7763: "What we're doing next week",
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
  chapters: {
    0: 'Cat noises ASMR',
    68: 'What is Uno?',
    438: 'Fan mail',
    530: 'Uno Piece',
    614: 'Rules',
    767: 'Game one start',
    2836: 'Game one end',
    2915: 'Meilyne joins the battle',
    3099: 'New rules',
    3370: 'Game two start',
    3938: 'Game two end',
    4106: 'Even more rules added',
    4221: 'Game three start',
    6826: "Camera commit aliven't",
    7201: 'Meilyne feet',
    7279: 'Game continues',
    8524: 'Game three end',
    8629: 'Results',
    8667: 'Meilyne defends herself about the cooking special',
    8829: 'Meilyne the cat whisperer',
    9231: "What we're doing next week",
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
  chapters: {
    0: 'Why we missed a few streams',
    108: 'Wordle',
    413: 'Rage games',
    942: 'Todays activity',
    1150: 'Cosori',
    1496: 'History',
    1674: 'TT awardw 2',
    1757: 'World history quiz',
    1874: 'Question 1',
    2167: 'Question 2',
    2372: 'Question 3',
    2753: 'Question 4',
    2920: 'Question 5',
    3071: 'Question 6',
    3288: 'Question 7',
    3458: 'Question 8',
    3673: 'PP break',
    3919: 'Question 9',
    4249: 'Question 10',
    4541: 'Question 11',
    4787: 'Question 12',
    5051: 'Question 13',
    5196: 'Question 14',
    5329: 'Question 15',
    5572: 'Question 16',
    5682: 'Question 17',
    5920: 'Question 18',
    6063: 'Question 19',
    6253: 'Question 20',
    6402: 'Question 21',
    6540: 'Question 22',
    6721: 'Results',
    6801: 'Thoughts',
    6985: 'I soil myself',
    7079: "What we're doing next week?",
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
  chapters: {
    0: 'Just smile and wave',
    62: "What's the plan for today?",
    155: 'Fate figure must go (sad GUNT noises)',
    302: 'Elden Ring',
    377: 'Stream moments',
    620: 'Difficult games',
    793: 'NieR anime',
    945: 'Old games',
    1294: 'Famous sound effects',
    1729: 'Building a statue',
    2674: 'Tippsy Sake',
    3055: 'Food tasting',
    3500: 'Spice',
    3672: 'Japan seafood',
    3863: 'Cocktail',
    3989: 'Canned food',
    4263: 'Best seafood dish',
    4810: 'Cheese',
    5026: 'Alcohol',
    5474: 'Continuing building the statue',
    6355: 'Kill the animals',
    6806: 'Joey impressions',
    7413: 'Statue has been built',
    7708: "What we're doing next week",
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
  chapters: {
    0: 'Plan for today',
    69: 'Girl Scout cookies',
    451: 'Cookies',
    702: 'Brownies',
    1024: 'Tiers of Girl Scouts',
    1064: 'Premium Bandai',
    1274: 'Garnt being bored',
    2030: "We're going all out with our tasting",
    2163: 'First cookie taste test',
    2382: 'Cookie nr 2',
    2688: 'Cookie nr 3',
    2881: 'Cookie nr 4',
    3177: 'Mambo nr 5',
    3624: 'Cookie nr 6',
    3791: 'Cookie nr 7',
    4206: 'Cookie nr 8',
    4646: 'Cookie nr 9',
    5193: 'Cookie nr 10',
    5755: 'Cookie nr 11',
    6123: 'Cookie nr 12',
    6290: 'Connor rages about sugar',
    6637: 'Last cookie',
    6808: 'Girl stands for...',
    7089: 'Overall score',
    7234: 'Final thoughts',
    7295: 'Freshness',
    7568: 'Donos',
    7688: 'What are we doing next week?',
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
  chapters: {
    0: 'The Potato guy',
    136: 'Plan for today',
    274: 'Lyrics are for the weak',
    505: 'Guess the lyrics',
    599: 'Question 1',
    823: 'Question 2',
    1028: 'Question 3',
    1345: 'Question 4',
    1800: 'Question 5',
    2078: 'Question 6',
    2322: 'Question 7',
    2521: 'Question 8',
    2646: 'Question 9',
    2811: 'Connor is still salty',
    2933: 'Cosori',
    3475: 'Question 10',
    3718: 'Question 11',
    3869: 'Question 12',
    4038: 'Question 13',
    4173: 'Question 14',
    4402: 'Question 15',
    4652: 'Question 16',
    4861: 'Question 17',
    4967: 'Question 18',
    5114: 'Question 19',
    5378: 'Question 20',
    5535: 'Question 21',
    5760: 'Question 22',
    5828: 'Question 23',
    5983: 'Question 24',
    6222: 'Question 25',
    6394: 'Question 26',
    6595: 'Question 27',
    6773: 'Question 28',
    6896: 'Question 29',
    7147: 'Final question',
    7219: 'Results',
    7476: 'Final thoughts',
    7689: 'Meme songs',
    7900: "What's up next",
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
  chapters: {
    0: 'We are GAMERS',
    297: 'What are we doing today?',
    431: 'The cinema experience',
    1055: 'The quiz',
    1142: 'Kadokawa',
    1487: 'Specific words',
    1629: 'Pre-quiz shenanigans',
    1798: 'Question 1',
    2026: 'Question 2',
    2320: 'Question 3',
    2474: 'Question 4',
    2682: 'Question 5',
    2781: 'Question 6',
    3027: 'Question 7',
    3255: 'Question 8',
    3442: 'Question 9',
    3654: 'Question 10',
    3912: 'Question 11',
    4098: 'Question 12',
    4276: 'Question 13',
    4345: 'Question 14',
    4541: 'Question 15',
    4728: 'Question 16',
    5186: 'Question 17',
    5455: 'Question 18',
    5626: 'Question 19',
    5964: 'Question 20',
    6201: 'Question 21',
    6312: 'Question 22',
    6669: 'Question 23',
    6737: 'Last question',
    6998: 'Results',
    7259: 'What are we doing next?',
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
  chapters: {
    0: "We're already back",
    258: 'Joey finished Jump King',
    484: 'Elden Ring',
    590: 'Difficulty in games',
    990: 'Gameplay loops',
    1390: 'What are we doing today?',
    1431: 'Amiami',
    1531: 'The Price Is Right',
    1659: 'The rules',
    1907: 'Break',
    1985: 'We are professional appraisers',
    2221: 'Round 1 - Figure 1',
    2562: 'Round 1 - Figure 2',
    2912: 'Round 1 - Figure 3',
    3189: 'Round 1 - Figure 4',
    3532: 'Round 2 - Figure 1',
    3794: 'Round 2 - Figure 2',
    4007: 'Round 2 - Figure 3',
    4205: 'Round 2 - Figure 4',
    4445: 'Break',
    4641: 'Rules round 3',
    4765: 'Round 3 - Figure 1',
    5207: 'Round 3 - Figure 2',
    5526: 'Round 3 - Figure 3',
    5830: 'Round 3 - Figure 4',
    6070: 'Rules round 4',
    6190: 'Round 4 - Figure 1',
    6877: 'Round 4 - Figure 2',
    7598: 'Round 4 - Figure 3',
    8194: 'Amiami',
    8284: 'Results & afterthoughts',
    8746: "Next week's plan",
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
  chapters: {
    0: "We're doing a Konosuba TRPG",
    273: 'DEMONDICE is a veteran at this',
    474: 'The rules of TRPG',
    623: 'Bookwalker',
    708: 'Yen Press',
    778: 'Entering the world of Konosuba',
    915: 'Introducing our characters',
    969: 'Dee Z. Nüts',
    1143: 'Mira',
    1243: 'Taro',
    1412: 'House rules',
    1561: "Garnt got isekai'd",
    1923: 'First dice throw',
    2006: 'Taking on the bandits',
    2357: 'Forming a team',
    2563: 'Character actions',
    2718: 'The fight continues',
    2927: 'Connor tried to untie himself',
    3043: 'Joey helps',
    3119: 'The bandits strike back',
    3230: 'Garnt fumbles his attack',
    3415: 'Joey casts some fire',
    3711: 'Discovering skills',
    4134: 'Connor enters the battle',
    4460: "Joey's turn",
    4746: 'Did Joey die already',
    4947: 'End of the bandits',
    5134: 'Introducing ourselves to each other',
    5336: 'Break time',
    5537: 'Doing some little looting',
    5875: 'Entering the city',
    6395: 'Different quests to take',
    7279: 'How to restore health',
    7973: 'Stealing potions from a little kid',
    8643: 'Break time',
    8870: 'Going to the lake',
    9280: "There's a trap",
    9533: 'Learning new skills',
    10093: 'Making a plan',
    10380: 'Sanitizing the lake',
    11943: 'Break',
    12133: 'Kawaii-kon',
    12216: 'Crocodile battle continues',
    13481: 'We were betrayed',
    14008: 'Connor does a major oopsie',
    14794: 'Connor contacts god',
    14963: 'The ultimate attack',
    15152: 'Phase 2',
    15216: 'Break time',
    15405: 'The final battle with Ringo',
    15632: 'Reward time',
    15832: 'The end',
    15913: "We're signing some books",
    16210: 'What an amazing journey',
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
  chapters: {
    0: 'The longest 24 hours of our lives',
    451: 'The plan for today',
    838: 'Revealing our first After Dark guest',
    1270: 'Stretch goals',
    2079: 'Quick Break',
    2357: 'TTRPG After Dark with Demon Dice',
    2472: 'Setting up the jenga',
    2669: 'Snack of choice',
    2755: 'Normal jenga round 1',
    3205: 'Normal jenga round 2',
    3525: "The longest streams we've done",
    3759: 'Talking about sleep',
    4268: 'Setting Up Sushi Jenga',
    4613: 'Extreme sushi jenga',
    5153: 'Quick Break',
    5422: 'Extreme sushi jenga continues',
    6291: 'The bois do squats and push-ups',
    6685: 'Reading more donations',
    6735: "Chat decided what we'll eat",
    7142: 'What fast food chains are overrated?',
    7623: 'Connor explains what a toast sandwich is',
    7767: 'Old fashioned words',
    7899: 'We got raided',
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
  chapters: {
    0: 'Paying respect to the sigmas',
    614: "Why Connor hasn't played Apex",
    712: "The term ''gas''",
    805: 'British food',
    1085: 'Reading out messages from alphas',
    1161: 'Babies and their first words',
    1313: 'Baby videos',
    1448: 'The pizza arrived',
    1725: 'Eating pizza with chopsticks',
    2042: 'Eating sushi with knife and fork',
    2183: 'Talking about food',
    2440: 'Lunch break is over',
    2595: "Rules for ''What's In The Box?''",
    2893: 'Round 1 - Garnt',
    3028: 'Round 2 - Connor',
    3209: 'Round 3 - Joey',
    3351: 'Round 4 - Garnt',
    3565: 'Round 5 - Connor',
    3801: 'Round 6 - Joey',
    4057: 'Round 7 - Garnt',
    4230: 'Round 8 - Connor',
    4417: 'Round 9 - Joey',
    4596: 'Round 10 - Garnt',
    4784: 'Round 11 - Connor',
    4964: 'Round 12 - Joey',
    5176: 'Round 13 - Garnt',
    5438: 'Round 14 - Connor',
    5671: 'Round 15 - Joey',
    5893: 'Round 16 - Garnt',
    6079: 'Round 17 - Connor',
    6388: 'Round 18 - Joey',
    6503: 'End of the game',
    6667: 'Break',
    7082: 'Sydney replaces Garnt',
    7391: 'Soju overdose',
    7571: 'Trash Taste Meme Award',
    7690: 'Beer',
    7782: 'Connor calls Sydney poor',
    7873: 'Bubi & Hime',
    7919: 'Garnt returns from the toilet',
    8088: 'Russian Trash Taste dub',
    8191: 'Spicy piss',
    8302: 'Quirks in My Hero Academia',
    8452: 'Superpowers',
    8686: 'Goku can beat everything',
    8990: 'Connor is 5-years old',
    9088: 'We hit $37,500',
    9517: 'We have a new Sigma',
    10006: 'Manga',
    10107: 'Fixing tech/audio issues',
    10251: 'Robert Pattinson is British',
    10410: 'The boys are actually talking about anime',
    10823: 'Seven Deadly Sins',
    11116: 'The Ultimate Shonen Bracket',
    11308: 'Seven Deadly Sins VS Demon Slayer',
    11405: 'Jujutsu Kaisen VS Bleach',
    11713: 'Naruto VS One Piece',
    11816: 'Hunter x Hunter VS Dragon Ball Z',
    11933: 'SEMI-FINALS: Demon Slayer VS Jujutsu Kaisen',
    12265: 'SEMI-FINALS: One Piece VS Hunter x Hunter',
    12495: 'THE FINALS: Jujutsu Kaisen VS One Piece',
    12625: 'The winner is...',
    12774: 'Do you like Imagine Dragons',
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
  chapters: {
    0: 'Reviewing top posts on our subreddit',
    89: 'The boys in sync',
    290: "Trash Taste, but it's all Connor",
    395: 'Garnt drinks Corona',
    491: 'ChokeDawgVA',
    636: "Trash Taste, but it's art",
    726: 'SrGrafo',
    859: 'Garnt CGI edit',
    1092: 'Memes & fanart',
    1890: 'Trash Taste intro in RTX',
    2106: "Trash Taste, but it's all Joey",
    2250: 'Bottom Gear',
    2453: 'Deez nuts are getting out of hand',
    3195: 'Continuing with the memes',
    3421: 'Boys caught in 4k',
    3602: 'Gigguk memes',
    3740: 'Memes & fanart',
    5236: 'Break',
    5668: 'Battle of the sigmas',
    5931: 'Connor dons a monkey suit',
    6276: 'Shouting out some sigmas',
    6400: 'Memes & fanart',
    7430: 'Joey the Fish Slayer',
    7515: 'Joey turns into a banana',
    7759: 'Speedrunning the last memes',
    8540: 'Trash Taste Meme Award winner',
    8747: 'Reading donations',
    9550: "What we're doing with Chris",
    9805: 'The mystery of cum',
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
  chapters: {
    0: 'First official After Dark guest',
    430: 'Chris begs for compliments',
    692: 'Garnt puts on the Clown costume',
    1099: "Chris doesn't know Among Us",
    1168: 'Time for the meme quiz',
    1423: 'Question 1',
    1641: 'Question 2',
    1785: 'Question 3',
    1976: 'Question 4',
    2239: 'Question 5',
    2352: 'Question 6',
    2483: 'Question 7',
    2584: 'Question 8',
    2669: 'Question 9',
    2890: 'Question 10',
    3052: 'Question 11',
    3119: 'Question 12',
    3292: 'Question 13',
    3439: 'Dinner break',
    3781: "Last week's earthquake",
    4112: 'Connor always has food poisoning',
    4227: 'Going back to England',
    4279: 'Maid Chris',
    4360: 'Continuing with the quiz',
    4433: 'Question 14',
    4736: 'Question 15',
    4965: 'Question 16',
    5152: 'Question 17',
    5341: 'Question 18',
    5461: 'Question 19',
    5642: 'Question 20',
    5763: 'Question 21',
    5993: 'Question 22',
    6321: 'Question 23',
    6538: 'Question 24',
    6753: 'Final question',
    6948: 'Results',
    7177: "Chris' favorite meme",
    7249: 'Reading Alphas',
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
  chapters: {
    0: 'Time for the Spelling Bee',
    262: 'How it works',
    358: 'Round 1 - Garnt',
    421: 'Round 1 - Connor',
    539: 'Round 1 - Chris',
    593: 'Round 1 - Joey',
    680: 'Round 2 - Garnt',
    808: 'Round 2 - Connor',
    863: 'Round 2 - Chris',
    915: 'Round 2 - Joey',
    1020: 'Round 3 - Garnt',
    1130: 'Round 3 - Connor',
    1218: 'Round 3 - Chris',
    1384: 'Round 3 - Joey',
    1542: 'Round 4 - Garnt',
    1632: 'Round 4 - Connor',
    1728: 'Round 4 - Chris',
    1778: 'Round 4 - Joey',
    1815: 'Round 5 - Garnt',
    1922: 'Round 5 - Connor',
    2012: 'Round 5 - Chris',
    2073: 'Round 5 - Joey',
    2108: 'Round 6 - Garnt',
    2235: 'Round 6 - Connor',
    2316: 'Round 6 - Chris',
    2395: 'Round 6 - Joey',
    2495: 'Round 7 - Garnt',
    2566: 'Round 7 - Connor',
    2682: 'Round 7 - Chris',
    2819: 'Round 7 - Joey',
    2867: 'Round 8 - Garnt',
    2927: 'Round 8 - Connor',
    2964: 'Round 8 - Chris',
    3019: 'Round 8 - Joey',
    3073: 'Round 9 - Garnt',
    3105: 'Round 9 - Connor',
    3164: 'Round 9 - Chris',
    3188: 'Round 9 - Joey',
    3269: 'Round 10 - Garnt',
    3351: 'Round 10 - Connor',
    3407: 'Round 10 - Chris',
    3471: 'Round 10 - Joey',
    3537: 'Round 11 - Garnt',
    3649: 'Round 11 - Connor',
    3703: 'Round 11 - Chris',
    3751: 'Round 11 - Joey',
    3807: 'Results',
    3991: 'Our 24 hour stream is half-way',
    4296: 'Doing a YLYL later',
    4596: 'Clowns',
    4919: "90's children's shows",
    5224: 'Almost time to shave',
    5364: 'We hit $100,000',
    5736: 'Stretch goals',
    6248: 'Alphas are amazing',
    6547: 'Connor shaves his beard',
    6951: 'Chris got drunk in a church',
    7107: 'Joey and Garnt get ready to shave',
    7187: 'Chris entertains chat',
    7465: 'Garnt is finally shaving as well',
    7731: 'Shaving cam',
    8085: 'Chris takes over Trash Taste',
    8155: 'Connor has become Dr. Ligma',
    8274: 'We hit $110k',
    8547: 'What are we doing next?',
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
  chapters: {
    0: 'op',
    43: 'Time for You Laugh You Lose',
    318: 'Fixing media share audio',
    743: 'Trash Taste Twilight Zone',
    901: 'Breakfast in a ryokan',
    1070: 'Staying up all night',
    1198: 'Chris & Joey are alone',
    1417: 'Media share audio is fixed',
    1576: 'What counts as a laugh?',
    1812: 'How YLYL works',
    1915: 'Starting YLYL',
    5913: 'Break',
    6240: 'More YLYL',
    7834: 'The boys made it',
    7988: 'Break',
    8260: 'Garnt eats pizza crust with mayo & ketchup',
    8841: 'Ashley eats the mayo/ketchup mess',
    8929: 'Chris goes home',
    9032: 'The boys are getting tired',
    9360: 'Reading donations',
    9630: 'Setting up for the second guest',
    9769: 'We have a new sigma!',
    10040: 'Break',
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
  chapters: {
    0: 'Ironmouse is finally on Trash Taste',
    346: 'Connor eats natto',
    913: 'Garnt likes natto',
    1059: 'Connor goes in for seconds',
    1234: 'Weird foods',
    1402: 'Plasma',
    1623: 'Jump King',
    1805: 'Vampire Survivors',
    2012: "Ironmouse's subathon",
    2534: 'The worst kept secret',
    2645: 'Origin of "Andy"',
    2853: 'Harry Potter',
    3291: "Robert Pattinson's movies",
    3488: 'Ironmouse is obsessed with Furbys',
    3650: 'Harry Potter games',
    3748: 'THE RETURN OF CUM',
    4102: 'Dhar Mann',
    4255: 'Gacha games',
    4592: 'Sleep',
    4792: 'Music',
    5158: "AMV's",
    5479: 'Anime',
    5659: 'Joey does a Skype impression',
    5774: 'Sleeping on stream',
    6033: 'The internet broke our sense of humor',
    6271: 'Ironmouse converts people into VTubers',
    6546: 'Streaming',
    6820: 'COVID helped with our success',
    7044: 'Gacha games (again)',
    7554: 'Eroges',
    7849: 'Rance',
    8021: "It's 5AM",
    8167: 'Karaoke',
    8478: 'We can rap',
    8707: 'Being medicated',
    9197: 'Getting called out of nowhere',
    9322: 'Anime',
    10028: "Ironmouse's Top 30 Anime",
    12373: 'Reading donations',
    12831: 'Joey eats a ghost pepper',
    13532: 'Reading donations',
    13832: 'Joey is in pain',
    14157: 'Break',
    14531: 'Explaining "lubed Among Us" to Ironmouse',
    14657: '3.5 hours left',
    14919: 'The Wolf of Wall Street',
    15257: 'Shark Tale',
    15391: "Fish don't exist",
    15708: 'Finding Nemo',
    15865: 'Back to Shark Tale',
    15996: 'Optimus Prime is into lolis',
    16696: 'Tired monke reads out donations',
    17275: 'Garnt takes over reading donations',
    18325: 'Joey has returned',
    18564: 'Joey leaves again',
    20012: 'Connor wakes up',
    20685: 'Laughing about Connor yawning',
    20807: 'Connor speedrunning donations ASMR',
    22779: 'Connor reads random facts',
    23556: 'Playing Wordle',
    23811: 'We look tired, because we are',
    24607: 'Clowns are creepy',
    24888: 'Bread',
    25124: 'Almost at the end',
    25405: 'El Chupacabra',
    25774: 'Ironmouse is leaving',
    25909: 'Sleepy Connor ASMR',
    26116: 'Joey is awake',
    27013: 'Thanks to everyone',
    27444: 'Final words',
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
  chapters: {
    0: 'The boys are down under',
    97: 'The plan',
    291: 'Connor & Garnt discover Australia',
    459: 'The clothes never change',
    637: 'Trying Aussie snacks',
    803: 'Burger rings',
    925: 'Shapes pizza flavour',
    1111: 'Shapes chicken flavour',
    1216: 'Shapes barbeque flavour',
    1343: 'Lamington',
    1499: 'TimTam',
    1829: 'TimTam SLAM',
    2055: "Meeting Joey's family",
    2356: 'Seeing the wildlife',
    2816: 'Quiz time',
    2992: 'Question 1',
    3165: 'Question 2',
    3259: 'Question 3',
    3400: 'Question 4',
    3578: 'Question 5',
    3707: 'Question 6',
    3976: 'Question 7',
    4103: 'Question 8',
    4229: 'Question 9',
    4364: 'Question 10',
    4626: 'Question 11',
    4725: 'Question 12',
    4867: 'Question 13',
    4978: 'Question 14',
    5159: 'Question 15',
    5247: 'Question 16',
    5372: 'Question 17',
    5460: 'Quiz results',
    5527: "We'll be handling animals next",
    5725: 'Blue-tongue lizard',
    5919: 'Spider python',
    6259: 'Black-headed python',
    6579: 'Diamond python',
    7101: 'Snake-necked turtle',
    7374: 'Freshwater crocodile',
    7610: 'Saltwater crocodile',
    7786: 'Iguana',
    8246: 'It has been an experience',
    8436: 'Sending a raid',
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
  chapters: {
    0: 'Murica!',
    184: 'This IS pre-recorded',
    263: 'American cartoons had seasons',
    360: 'Garnt needs help',
    470: 'Joey played minesweeper for 5 hours',
    743: "Games we don't know the rules for",
    1008: 'The quiz',
    1175: 'TT Tour',
    1257: 'Question 1',
    1351: 'Question 2',
    1580: 'Question 3',
    1862: 'Question 4',
    2099: 'Question 5',
    2336: 'Question 6',
    2462: 'Question 7',
    2755: 'Question 8',
    2955: 'Question 9',
    3120: 'Question 10',
    3441: 'Question 11',
    3682: 'Question 12',
    3937: 'Question 13',
    4106: 'Question 14',
    4399: 'Question 15',
    4841: 'Question 16',
    5011: 'Question 17',
    5170: 'Question 18',
    5330: 'Question 19',
    5558: 'Last question',
    5949: 'Results',
    6241: 'What are we doing next week?',
    6387: 'How to draw',
    6567: 'Twitch raid',
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
  chapters: {
    0: 'After Dark is BACK',
    206: 'The Among Us in r/place',
    331: "Bois' Australia experience",
    651: 'Connor is NOT wearing the same shirt',
    783: 'When good quotes get memed too much',
    894: 'Gaming',
    1105: 'New consoles',
    1343: 'Playing games in peace',
    1504: 'Garnt has a confession',
    1547: 'Bloodline',
    1609: "What's in the box?",
    2046: 'Gundam VIP event',
    2117: 'The box is full of mysteries',
    3051: 'Vinland Saga signed posters',
    3108: 'Even more bags',
    3299: 'Which hat is better?',
    3567: 'Even more stuff',
    4254: 'Oranges',
    4434: 'Ignoring Connors take and opening another bag',
    4565: 'Juicers',
    4717: 'Thanks for the gifts',
    4867: 'Alcoholic drinks',
    5117: 'Weird stuff',
    5234: 'Nier;Automata',
    5412: "That's all, folks",
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
  chapters: {
    0: 'Thicc Sus',
    88: 'The plan for today',
    265: 'We got vessels',
    325: 'Pictionary',
    413: 'Meme movies',
    927: 'Overhyped characters',
    1231: 'Shakespeare',
    1375: 'Winnie the Pooh',
    1511: 'Movies that we want made',
    1689: 'Ad break',
    1892: 'Rules',
    2278: 'Round 1',
    2895: 'Round 2',
    3230: 'Round 3',
    3509: 'Round 4',
    3788: 'Round 5',
    4014: 'Round 6',
    4207: 'Round 7',
    4618: 'Round 8',
    5046: 'Round 9',
    5337: 'Round 10',
    5828: 'Round 11',
    5943: 'Garnt needs to pee',
    6146: 'Continuing the game',
    6289: 'Round 12',
    6774: 'Bonus round',
    7004: 'Results',
    7064: 'What are we doing next week?',
    7400: 'Raid',
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
  chapters: {
    0: 'Noises',
    78: "What the bois doin'?",
    255: 'Toenail dilemma',
    419: 'Quiz rules',
    488: 'Office drama',
    670: 'Eroge',
    969: 'Connor wears the same shirt again',
    1033: 'Manscaped',
    1269: 'Quiz time',
    1621: 'Question 1',
    1805: 'Question 2',
    1965: 'Question 3',
    2113: 'Question 4',
    2382: 'Question 5',
    2454: 'Question 6',
    2646: 'Question 7',
    2924: 'Question 8',
    3076: 'Question 9',
    3287: 'Question 10',
    3519: 'Question 11',
    3700: 'Question 12',
    3857: 'Question 13',
    4243: 'Question 14',
    4432: 'Question 15',
    4627: 'Question 16',
    4839: 'Question 17',
    5216: 'Question 18',
    5569: 'Question 19',
    5714: 'Question 20',
    5958: 'Question 21',
    6146: 'Question 22',
    6324: 'Question 23',
    6606: 'Question 24',
    7075: 'Question 25',
    7247: 'Question 26',
    7494: 'Question 27',
    7707: 'Question 28',
    7890: 'Question 29',
    8098: 'Final Question',
    8335: 'Results',
    8650: 'Bye bye',
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
  chapters: {
    0: 'Why is a woman amongst men in the room?',
    65: 'What are we doing today?',
    195: 'Connor live after cyclethon',
    296: 'Strat talk',
    504: 'Piss & Vinegar',
    838: 'Sport',
    1026: 'Wine game rules',
    1343: 'TT ad',
    1428: 'Wine 1',
    1839: 'Wine 2',
    2387: 'Wine 3',
    2841: 'Wine 4',
    3195: 'Wine 5',
    3772: 'Wine 6',
    4199: 'Wine 7',
    4405: 'Quick intermission',
    4586: 'Wine 8',
    4892: 'Wine 9',
    5149: 'Wine 10',
    5560: 'Final two',
    5940: 'Final result',
    6085: 'Random talking',
    6375: 'Who are we raiding?',
  },
  guests: [guestsydsnap],
  tags: ['Streams', 'Twitch', 'wine', 'guessing', 'price', 'country', 'challenge'],
  type: 'Stream',
};
channelTrashTasteAfterDark.videos.push(videot89DEnhIuJI);
guestsydsnap.videos.push(videot89DEnhIuJI);

export const latestTrashTasteAfterDark = videot89DEnhIuJI;

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

export const latestTrashTasteHighlights = videoGQqmn1KGMxg;

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

export const latestTrashTasteShorts = videoIuMz2MRRhRI;

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
