import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-news-article',
  styleUrls: [ './news-article.scss' ],
  templateUrl: './news-article.component.html'
})
export class NewsArticleComponent implements OnInit {

  @Input()
  article: Article;

  ngOnInit() {

  }
}
