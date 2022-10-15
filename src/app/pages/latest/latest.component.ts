import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  channelTrashTaste,
  channelTrashTasteAfterDark,
  channelTrashTasteHighlights,
  channelTrashTasteShorts,
} from '../../data';
import { IntlDatePipe } from '../../shared/intl-date.pipe';
import { YoutubeVideoComponent } from '../../shared/youtube-video/youtube-video.component';
import { YoutubeService } from '../../shared/youtube.service';

@Component({
  selector: 'app-latest',
  standalone: true,
  imports: [IntlDatePipe, NgIf, RouterLink, YoutubeVideoComponent],
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LatestComponent implements OnInit {
  trashTaste = channelTrashTaste.videos.at(-1)!;
  afterDark = channelTrashTasteAfterDark.videos.at(-1)!;
  highlights = channelTrashTasteHighlights.videos.at(-1)!;
  shorts = channelTrashTasteShorts.videos.at(-1)!;

  constructor(private _youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this._youtubeService.assertYoutubeApi();
  }
}
