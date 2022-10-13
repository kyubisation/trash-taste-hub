import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/latest/latest.component').then((c) => c.LatestComponent),
  },
];
