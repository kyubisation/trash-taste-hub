import { Video } from './video';

export interface Channel {
  id: string;
  name: string;
  videos: Video[];
}
