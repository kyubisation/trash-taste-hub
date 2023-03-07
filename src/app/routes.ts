import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/latest/latest.component').then((c) => c.LatestComponent),
  },
  {
    path: 'youtube-channel/:channelName',
    loadComponent: () =>
      import('./pages/youtube-channel/youtube-channel.component').then(
        (c) => c.YoutubeChannelComponent
      ),
  },
];
