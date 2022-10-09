import { readFileSync } from 'fs';

import { youtube, youtube_v3 } from '@googleapis/youtube';
import type { GaxiosResponse } from 'gaxios';

import { RawData } from './raw-data';

if (module === require.main) {
  checkYoutube();
}

async function checkYoutube() {
  console.log('Starting YouTube collector');
  const client = youtube({
    version: 'v3',
    auth: readFileSync('./api_key', 'utf8'),
  });
  const data = new RawData();
  const existingVideoIds = data.videos.map((v) => v.id!);

  try {
    for (const [channelName, channelId] of Object.entries(data.channels)) {
      console.log(`Checking ${channelName} for updates`);
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
        data.videos.push(...result.data.items!);
      } while (nextPageToken);
    }
  } catch (e) {
    console.error(e);
  }

  console.log('Saving data');
  data.save();
  console.log('Done');
}
