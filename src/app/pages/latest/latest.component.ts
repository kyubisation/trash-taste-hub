import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { channelTrashTaste } from '../../data';
import { IntlDatePipe } from '../../shared/intl-date.pipe';
import { YoutubeService } from '../../shared/youtube.service';

@Component({
  selector: 'app-latest',
  standalone: true,
  imports: [YouTubePlayerModule, IntlDatePipe],
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LatestComponent implements OnInit {
  trashTaste = channelTrashTaste.videos.at(-1)!;

  constructor(private _youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this._youtubeService.assertYoutubeApi();
  }
}
