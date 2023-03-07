import { ChangeDetectionStrategy, Component, TrackByFunction } from '@angular/core';
import { AsyncPipe, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, from, merge, Observable, of } from 'rxjs';
import { catchError, map, startWith, switchMap, tap } from 'rxjs/operators';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { Video } from '../../data/video';
import { YoutubeVideoComponent } from '../../shared/youtube-video/youtube-video.component';
import { Channel } from '../../data/channel';
import { guests } from '../../data/index';

interface ExtendedVideo extends Video {
  search: string;
  isShown: boolean;
}

interface ExtendedChannel extends Channel {
  videos: ExtendedVideo[];
}

@Component({
  selector: 'app-youtube-channel',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    NgFor,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    ReactiveFormsModule,
    YoutubeVideoComponent,
  ],
  templateUrl: './youtube-channel.component.html',
  styleUrls: ['./youtube-channel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YoutubeChannelComponent {
  guests = guests;
  channel: Observable<ExtendedChannel | 'loading' | 'not-found' | 'error'>;
  filter = this._formBuilder.nonNullable.group({
    search: '',
    order: 'desc',
    guest: '',
  });
  trackVideoBy: TrackByFunction<any> = (_index, video: Video) => video.id;

  private channelResolvers = new Map<string, () => Promise<Channel>>()
    .set('trash-taste', () => import('../../data/index').then((d) => d.channelTrashTaste))
    .set('trash-taste-after-dark', () =>
      import('../../data/index').then((d) => d.channelTrashTasteAfterDark)
    )
    .set('trash-taste-highlights', () =>
      import('../../data/index').then((d) => d.channelTrashTasteHighlights)
    )
    .set('trash-taste-shorts', () =>
      import('../../data/index').then((d) => d.channelTrashTasteShorts)
    );

  constructor(private _formBuilder: FormBuilder, route: ActivatedRoute) {
    this.channel = combineLatest([
      route.paramMap.pipe(
        tap(() => this.filter.reset()),
        map((p) => p.get('channelName') ?? ''),
        switchMap((channelName) =>
          merge(
            of('loading' as const),
            from(
              this.channelResolvers
                .get(channelName)?.()
                .then((c) => ({
                  ...c,
                  videos: c.videos.map((v) => ({
                    ...v,
                    search: [v.title, ...(v.tags ?? []), ...Object.values(v.chapters ?? {})]
                      .join('◬')
                      .toUpperCase(),
                    isShown: true,
                  })),
                })) ?? Promise.resolve('not-found' as const)
            )
          )
        ),
        catchError((e) => {
          console.warn(e);
          return of('error' as const);
        })
      ),
      this.filter.valueChanges.pipe(startWith(this.filter.value)),
    ]).pipe(
      map(([channel, filter]) => {
        if (typeof channel === 'string') {
          return channel;
        }
        const search = filter.search?.toUpperCase();
        if (search) {
          for (const video of channel.videos) {
            video.isShown = video.search.includes(search);
          }
        } else {
          for (const video of channel.videos) {
            video.isShown = true;
          }
        }
        if (filter.guest === '-') {
          channel = {
            ...channel,
            videos: channel.videos.filter((v) => !v.guests),
          };
        } else if (filter.guest) {
          channel = {
            ...channel,
            videos: channel.videos.filter((v) => v.guests?.some((g) => g.id === filter.guest)),
          };
        }
        if (filter.order === 'desc') {
          channel = { ...channel, videos: [...channel.videos].reverse() };
        }
        channel = { ...channel, videos: [...channel.videos] };
        return channel;
      })
    );
  }

  countDisplayedVideos(channel: ExtendedChannel) {
    return channel.videos.filter((v) => v.isShown).length;
  }
}
