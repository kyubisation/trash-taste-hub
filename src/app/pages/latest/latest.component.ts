import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  latestTrashTaste,
  latestTrashTasteAfterDark,
  latestTrashTasteHighlights,
  latestTrashTasteShorts,
} from '../../data';
import { IntlDatePipe } from '../../shared/intl-date.pipe';
import { YoutubeVideoComponent } from '../../shared/youtube-video/youtube-video.component';

@Component({
  selector: 'app-latest',
  standalone: true,
  imports: [IntlDatePipe, NgIf, RouterLink, YoutubeVideoComponent],
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LatestComponent {
  trashTaste = latestTrashTaste;
  afterDark = latestTrashTasteAfterDark;
  highlights = latestTrashTasteHighlights;
  shorts = latestTrashTasteShorts;
}
