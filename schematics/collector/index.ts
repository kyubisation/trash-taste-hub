import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { youtube, youtube_v3 } from '@googleapis/youtube';
import type { GaxiosResponse } from 'gaxios';
import { format, resolveConfig } from 'prettier';

import { channels } from './channels';

export const dataJsonPath = 'schematics/collector/data.json';

export function collect(): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    context.logger.info('Starting YouTube collector');
    const client = youtube({
      version: 'v3',
      auth: tree.readText('api_key'),
    });
    const dataJson: any = tree.readJson(dataJsonPath);
    const videos: youtube_v3.Schema$Video[] = dataJson.videos;
    const existingVideoIds = videos.map((v) => v.id!);

    try {
      for (const [channelName, channelId] of Object.entries(channels)) {
        context.logger.info(`Checking ${channelName} for updates`);
        let nextPageToken: string | undefined | null = undefined;
        do {
          const searchResponse: GaxiosResponse<youtube_v3.Schema$SearchListResponse> =
            await client.search.list({
              channelId,
              maxResults: 25,
              order: 'date',
              part: ['snippet'],
              ...(nextPageToken ? { pageToken: nextPageToken } : undefined),
            });

          const videoIds = searchResponse.data.items!.map((r) => r.id!.videoId!);
          const newVideoIds = videoIds.filter((i) => !existingVideoIds.includes(i));
          if (!newVideoIds.length) {
            break;
          }
          nextPageToken = searchResponse.data.nextPageToken;

          const result = await client.videos.list({
            id: newVideoIds,
            part: ['snippet'],
          });
          videos.push(...result.data.items!);
        } while (nextPageToken);
      }
    } catch (e) {
      context.logger.error(`${e}`);
    }

    videos.sort((a, b) => b.snippet!.publishedAt!.localeCompare(a.snippet!.publishedAt!));
    const dataJsonOutput = format(JSON.stringify({ videos, channels }, null, 2), {
      ...require('../../package.json').prettier,
      parser: 'json',
    });
    tree.overwrite(dataJsonPath, dataJsonOutput);
  };
}
