'use strict';
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
        console.log(`Checking ${channelName} for updates`);
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
    videos.sort((a, b) => a.snippet.publishedAt.localeCompare(b.snippet.publishedAt));
    const dataJsonOutput = (0, import_prettier.format)(
      JSON.stringify({ videos, channels }, null, 2),
      import_prettier.resolveConfig.sync(dataJsonPath)
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
