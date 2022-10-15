import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { Video } from '../../data/video';
import { IntlDatePipe } from '../intl-date.pipe';

@Component({
  selector: 'app-youtube-video',
  standalone: true,
  imports: [IntlDatePipe, NgIf, RouterLink, YouTubePlayerModule],
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YoutubeVideoComponent {
  @Input() video!: Video;
}
