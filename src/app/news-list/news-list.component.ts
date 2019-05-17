import { Component } from '@angular/core';

@Component({
  selector: 'app-news-list',
  styleUrls: [ './news-list.scss' ],
  templateUrl: './news-list.component.html'
})
export class NewsListComponent {
  news: String = 'Trending News';
}
