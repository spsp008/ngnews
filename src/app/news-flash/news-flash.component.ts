import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-news-flash',
  styleUrls: [ './news-flash.scss' ],
  templateUrl: './news-flash.component.html'
})
export class NewsFlashComponent implements OnInit {

  @Input()
  articles: Article[];

  redirect(article: Article) {
    window.open(article.url, '_blank');
  }
}
