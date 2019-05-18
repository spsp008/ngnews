import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-news-flash',
  styleUrls: [ './news-flash.scss' ],
  templateUrl: './news-flash.component.html'
})
export class NewsFlashComponent implements OnInit {
  articles: Article[] = [];

  constructor(private _newsService: NewsService) {}

  ngOnInit() {
    this._newsService.getTopHeadlines().subscribe((news) => {
      this.articles = news.articles;
    });
  }

  redirect(article: Article) {
    window.open(article.url, "_blank");
  }
}
