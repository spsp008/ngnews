import { Component } from '@angular/core';

@Component({
  selector: 'app-news-flash',
  styleUrls: [ './news-flash.scss' ],
  templateUrl: './news-flash.component.html'
})
export class NewsFlashComponent {
  news: String = 'Trending News';
}
