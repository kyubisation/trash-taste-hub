import { Channel } from './channel';
import { Guest } from './guest';

export interface Video {
  id: string;
  channel: Channel;
  title: string;
  publishedAt: string;
  sections?: Record<string, string>;
  guests?: Guest[];
  tags?: string[];
}
