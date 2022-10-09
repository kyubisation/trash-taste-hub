import { Video } from './video';

export interface Guest {
  id: string;
  name: string;
  youtube?: string;
  twitch?: string;
  tiktok?: string;
  twitter?: string;
  instagram?: string;
  spotify?: string;
  videos: Video[];
}
