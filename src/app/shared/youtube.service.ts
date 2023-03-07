import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class YoutubeService {
  private _apiLoaded = false;

  assertYoutubeApi() {
    if (this._apiLoaded) {
      return;
    }
    this._apiLoaded = true;

    // This code loads the IFrame Player API code asynchronously, according to the instructions at
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
