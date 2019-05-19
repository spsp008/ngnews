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

  background: any;

  ngOnInit() {
    this.background = {
      'background-image': `url(${this.article.urlToImage})`
    };
  }

  redirect(article: Article) {
    window.open(article.url, '_blank');
  }
}
