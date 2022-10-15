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
        'postbuild:schematics':
          'typescript-json-schema --out=schematics/aggregator/manual-data.schema.json schematics/aggregator/manual-data.ts ManualData',
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
        'typescript-json-schema': '^0.54.0',
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

// schematics/collector/index.ts
var collector_exports = {};
__export(collector_exports, {
  collect: () => collect,
  dataJsonPath: () => dataJsonPath,
});
module.exports = __toCommonJS(collector_exports);
var import_youtube = require('../../node_modules/@googleapis/youtube/build/index.js');
var import_prettier = require('../../node_modules/prettier/index.js');

// schematics/collector/channels.ts
var channels = {
  'Trash Taste': 'UCcmxOGYGF51T1XsqQLewGtQ',
  'Trash Taste Highlights': 'UCry1ZVKLslbZXuQgsf-3TXg',
  'Trash Taste After Dark': 'UCKaN3mt53ATqRjzalb2ALFQ',
  'Trash Taste Shorts': 'UCPohHVcDqBMmRLpUFwthAng',
};

// schematics/collector/index.ts
var dataJsonPath = 'schematics/collector/data.json';
function collect() {
  return async (tree, context) => {
    context.logger.info('Starting YouTube collector');
    const client = (0, import_youtube.youtube)({
      version: 'v3',
      auth: tree.readText('api_key'),
    });
    const dataJson = tree.readJson(dataJsonPath);
    const videos = dataJson.videos;
    const existingVideoIds = videos.map((v) => v.id);
    try {
      for (const [channelName, channelId] of Object.entries(channels)) {
        context.logger.info(`Checking ${channelName} for updates`);
        let nextPageToken = void 0;
        do {
          const searchResponse = await client.search.list({
            channelId,
            maxResults: 25,
            order: 'date',
            part: ['snippet'],
            ...(nextPageToken ? { pageToken: nextPageToken } : void 0),
          });
          const videoIds = searchResponse.data.items.map((r) => r.id.videoId);
          const newVideoIds = videoIds.filter((i) => !existingVideoIds.includes(i));
          if (!newVideoIds.length) {
            break;
          }
          nextPageToken = searchResponse.data.nextPageToken;
          const result = await client.videos.list({
            id: newVideoIds,
            part: ['snippet'],
          });
          videos.push(...result.data.items);
        } while (nextPageToken);
      }
    } catch (e) {
      context.logger.error(`${e}`);
    }
    videos.sort((a, b) => b.snippet.publishedAt.localeCompare(a.snippet.publishedAt));
    const dataJsonOutput = (0, import_prettier.format)(
      JSON.stringify({ videos, channels }, null, 2),
      {
        ...require_package().prettier,
        parser: 'json',
      }
    );
    tree.overwrite(dataJsonPath, dataJsonOutput);
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    collect,
    dataJsonPath,
  });
