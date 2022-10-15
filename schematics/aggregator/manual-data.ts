import { Guest } from '../../src/app/data/guest';
import { Video } from '../../src/app/data/video';

export interface ManualData {
  guests: GuestsData;
  videos: VideosData;
}

interface GuestsData {
  [key: string]: Partial<Guest>;
}

interface VideosData {
  [key: string]: Partial<Video>;
}
