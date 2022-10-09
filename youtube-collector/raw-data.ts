import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

import { youtube_v3 } from '@googleapis/youtube';

export class RawData {
  videos: youtube_v3.Schema$Video[] = [];
  channels = {
    'Trash Taste': 'UCcmxOGYGF51T1XsqQLewGtQ',
    'Trash Taste Highlights': 'UCry1ZVKLslbZXuQgsf-3TXg',
    'Trash Taste After Dark': 'UCKaN3mt53ATqRjzalb2ALFQ',
    'Trash Taste Shorts': 'UCPohHVcDqBMmRLpUFwthAng',
  };

  #path: string;

  constructor() {
    this.#path = join(__dirname, './data.json');
    try {
      const data = JSON.parse(readFileSync(this.#path, 'utf8')) as Partial<RawData>;
      this.videos = data.videos ?? [];
    } catch {}
  }

  save() {
    this.videos.sort((a, b) => b.snippet!.publishedAt!.localeCompare(a.snippet!.publishedAt!));
    writeFileSync(this.#path, JSON.stringify(this, null, 2), 'utf8');
  }
}
