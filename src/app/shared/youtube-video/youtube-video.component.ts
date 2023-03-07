import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  TrackByFunction,
  ViewChild,
} from '@angular/core';
import { AsyncPipe, KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { YouTubePlayerModule, YouTubePlayer } from '@angular/youtube-player';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsyncSubject } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { YoutubeService } from '../youtube.service';
import { IntlDatePipe } from '../intl-date.pipe';
import { Video } from '../../data/video';

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries.filter((e) => e.isIntersecting)) {
    entry.target.dispatchEvent(new CustomEvent('yt-visible'));
  }
});

export class VideoEvent {
  constructor(readonly source: YoutubeVideoComponent, readonly type: 'ended') {}
}

@Component({
  selector: 'app-youtube-video',
  standalone: true,
  imports: [
    AsyncPipe,
    IntlDatePipe,
    KeyValuePipe,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    NgIf,
    NgFor,
    RouterLink,
    YouTubePlayerModule,
  ],
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YoutubeVideoComponent implements OnInit {
  @Input() video!: Video;
  @ViewChild(YouTubePlayer) player?: YouTubePlayer;
  isVisible = new AsyncSubject<boolean>();
  trackSectionBy: TrackByFunction<{ key: number; value: string }> = (_index, entry) => entry.key;

  @Output() videoEnd = new EventEmitter<VideoEvent>();

  get chapters() {
    return (Object.entries(this.video.chapters ?? {}) as unknown as [number, string][]).map(
      ([key, value]) => ({ key, value })
    );
  }

  get preview() {
    return `url('https://i.ytimg.com/vi/${this.video.id}/sddefault.jpg')`;
  }

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _youtubeService: YoutubeService
  ) {}

  ngOnInit(): void {
    this._youtubeService.assertYoutubeApi();
    observer.observe(this._elementRef.nativeElement);
  }

  @HostListener('yt-visible')
  handleVisibility() {
    if (this.isVisible.closed) {
      return;
    }

    this.isVisible.next(true);
    this.isVisible.complete();
  }

  playFrom(seconds: number | string) {
    this.player?.seekTo(+seconds, true);
  }

  handleStateChange(event: YT.OnStateChangeEvent) {
    if (event.data === YT.PlayerState.ENDED) {
      this.videoEnd.emit(new VideoEvent(this, 'ended'));
    }
  }
}
