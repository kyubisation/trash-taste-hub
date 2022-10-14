'use strict';
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports
    );
  };
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// package.json
var require_package = __commonJS({
  'package.json'(exports, module2) {
    module2.exports = {
      name: 'trash-taste-hub',
      version: '0.0.0',
      scripts: {
        ng: 'ng',
        start: 'ng serve',
        build: 'ng build',
        'build:schematics': 'node schematics/build.js',
        watch: 'ng build --watch --configuration development',
        test: 'ng test',
        lint: 'ng lint',
        format: 'prettier --write --ignore-unknown .',
        collect: 'ng g .:collect',
        aggregate: 'ng g .:aggregate',
        prepare: 'husky install',
      },
      private: true,
      schematics: './schematics/collection.json',
      dependencies: {
        '@angular/animations': '^15.0.0-next.6',
        '@angular/cdk': '15.0.0-next.4',
        '@angular/common': '^15.0.0-next.6',
        '@angular/compiler': '^15.0.0-next.6',
        '@angular/core': '^15.0.0-next.6',
        '@angular/forms': '^15.0.0-next.6',
        '@angular/material': '15.0.0-next.4',
        '@angular/platform-browser': '^15.0.0-next.6',
        '@angular/platform-browser-dynamic': '^15.0.0-next.6',
        '@angular/router': '^15.0.0-next.6',
        '@angular/youtube-player': '^15.0.0-next.5',
        rxjs: '~7.5.0',
        tslib: '^2.3.0',
        'zone.js': '~0.11.4',
      },
      devDependencies: {
        '@angular-devkit/build-angular': '^15.0.0-next.5',
        '@angular-eslint/builder': '14.1.2',
        '@angular-eslint/eslint-plugin': '14.1.2',
        '@angular-eslint/eslint-plugin-template': '14.1.2',
        '@angular-eslint/schematics': '14.1.2',
        '@angular-eslint/template-parser': '14.1.2',
        '@angular/cli': '~15.0.0-next.5',
        '@angular/compiler-cli': '^15.0.0-next.6',
        '@googleapis/youtube': '^6.0.0',
        '@types/jasmine': '~4.3.0',
        '@types/prettier': '^2.7.1',
        '@typescript-eslint/eslint-plugin': '5.37.0',
        '@typescript-eslint/parser': '5.37.0',
        eslint: '^8.23.1',
        'eslint-config-prettier': '^8.5.0',
        'eslint-plugin-import': '^2.26.0',
        husky: '8.0.1',
        'jasmine-core': '~4.4.0',
        karma: '~6.4.0',
        'karma-chrome-launcher': '~3.1.0',
        'karma-coverage': '~2.2.0',
        'karma-jasmine': '~5.1.0',
        'karma-jasmine-html-reporter': '~2.0.0',
        'lint-staged': '13.0.3',
        prettier: '^2.7.1',
        tsx: '^3.10.1',
        typescript: '~4.8.4',
      },
      prettier: {
        singleQuote: true,
        endOfLine: 'lf',
        printWidth: 100,
      },
      'lint-staged': {
        '*.{ts,html}': 'eslint --cache --fix',
        '*.*': 'prettier --write --ignore-unknown',
      },
    };
  },
});

// schematics/aggregator/index.ts
var aggregator_exports = {};
__export(aggregator_exports, {
  aggregate: () => aggregate,
});
module.exports = __toCommonJS(aggregator_exports);
var import_schematics = require('../../node_modules/@angular-devkit/schematics/src/index.js');
var import_prettier2 = require('../../node_modules/prettier/index.js');

// schematics/collector/index.ts
var import_youtube = require('../../node_modules/@googleapis/youtube/build/index.js');

// schematics/collector/channels.ts
var channels = {
  'Trash Taste': 'UCcmxOGYGF51T1XsqQLewGtQ',
  'Trash Taste Highlights': 'UCry1ZVKLslbZXuQgsf-3TXg',
  'Trash Taste After Dark': 'UCKaN3mt53ATqRjzalb2ALFQ',
  'Trash Taste Shorts': 'UCPohHVcDqBMmRLpUFwthAng',
};

// schematics/collector/index.ts
var import_prettier = require('../../node_modules/prettier/index.js');
var dataJsonPath = 'schematics/collector/data.json';

// schematics/aggregator/index.ts
function aggregate() {
  return async (tree, _context) => {
    const channels2 = [];
    const guests = [];
    const rawVideos = tree.readJson(dataJsonPath).videos;
    for (const rawVideo of rawVideos) {
      const channelId = rawVideo.snippet.channelId;
      let channel = channels2.find((c) => c.id === channelId);
      if (!channel) {
        channel = {
          id: rawVideo.snippet.channelId,
          name: rawVideo.snippet.channelTitle,
          videos: [],
        };
        channels2.push(channel);
      }
      if (channel.videos.every((v) => v.id !== rawVideo.id)) {
        const video = {
          id: rawVideo.id,
          channel,
          title: rawVideo.snippet.title,
          ...(channel.id === channels['Trash Taste']
            ? parseShortTitle(rawVideo.snippet.title)
            : void 0),
          publishedAt: rawVideo.snippet.publishedAt,
          tags: filterTags(rawVideo.snippet.tags),
          guests: findGuests(rawVideo, guests),
          sections: findSections(rawVideo),
        };
        channel.videos.push(video);
        video.guests?.forEach((g) => g.videos.push(video));
      }
    }
    guests.sort((a, b) => a.name.localeCompare(b.name));
    channels2.sort((a, b) => a.name.localeCompare(b.name));
    channels2.forEach((c) => c.videos.sort((a, b) => a.publishedAt.localeCompare(b.publishedAt)));
    return (0, import_schematics.mergeWith)(
      (0, import_schematics.apply)((0, import_schematics.url)('./files'), [
        (0, import_schematics.applyTemplates)({
          channels: channels2,
          guests,
          channelVariable: (channel) => `channel${channel.name.replace(/[^a-zA-Z0-9]+/g, '')}`,
          guestVariable: (guest) => `guest${guest.name.replace(/[^a-zA-Z0-9]+/g, '')}`,
          videoVariable: (video) => `video${video.id.replace(/[^a-zA-Z0-9]+/g, '_')}`,
          escapeQuote: (value) => value.replace(/'/g, `\\'`),
        }),
        (0, import_schematics.move)('src/app/data'),
        (0, import_schematics.forEach)((fileEntry) => {
          const content = (0, import_prettier2.format)(fileEntry.content.toString(), {
            ...require_package().prettier,
            parser: 'typescript',
          });
          if (!tree.exists(fileEntry.path)) {
            tree.create(fileEntry.path, content);
          } else if (tree.read(fileEntry.path).toString() !== content) {
            tree.overwrite(fileEntry.path, content);
          }
          return null;
        }),
      ])
    );
  };
}
function parseShortTitle(title) {
  const match = title.match(/^([\w\W]+?)( \(ft[^\)]+\))?( \| Trash Taste (Special|#(\d+)))$/);
  if (!match) {
    return void 0;
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
function filterTags(tags) {
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
  return filteredTags.length ? filteredTags : void 0;
}
function findGuests(rawVideo, guests) {
  const match = rawVideo.snippet.title.match(/\(ft.[ ]+@?([^\)]+)\)/);
  if (!match) {
    return void 0;
  }
  const name = match[1].trim();
  let guest = guests.find((g) => g.name === name);
  if (!guest) {
    guest = {
      id: name.toLowerCase().replace(/[^a-z0-9_-]+/gi, '-'),
      name,
      videos: [],
      ...findSocialMediaAccounts(rawVideo.snippet.description, name),
    };
    guests.push(guest);
  }
  return [guest];
}
function findSocialMediaAccounts(description, name) {
  const nameIndex = description.indexOf(name);
  if (nameIndex < 0) {
    return void 0;
  }
  const socials = description.substring(nameIndex);
  const urls = socials
    .substring(0, socials.indexOf('\n\n'))
    .match(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi
    );
  if (!urls) {
    return void 0;
  }
  const result = {};
  for (const url2 of urls) {
    if (url2.includes('youtube') || url2.includes('youtu.be')) {
      result.youtube = url2;
    } else if (url2.includes('twitter')) {
      result.twitter = url2;
    } else if (url2.includes('tiktok')) {
      result.tiktok = url2;
    } else if (url2.includes('instagram')) {
      result.instagram = url2;
    } else if (url2.includes('spoti.fi')) {
      result.spotify = url2;
    } else if (url2.includes('twitch')) {
      result.twitch = url2;
    } else {
      throw new Error(`Unknown guest url: ${url2}`);
    }
  }
  return result;
}
function findSections(rawVideo) {
  const matches = Array.from(
    rawVideo.snippet.description.matchAll(/((\d{1,2}:)?\d{1,2}:\d{1,2}) ([^\n]+)\n?/g)
  );
  return matches.length
    ? matches.reduce(
        (current, next) => Object.assign(current, { [next[1]]: next[3].replace(/^- /, '').trim() }),
        {}
      )
    : void 0;
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    aggregate,
  });
