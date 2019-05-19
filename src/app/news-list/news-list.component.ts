import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-news-list',
  styleUrls: [ './news-list.scss' ],
  templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit {
  articles: Article[];
  categories: string[] = ['business', 'science', 'sports', 'entertainmemt', 'technology'];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getEveryThing().subscribe((news) => {
      this.articles = news.articles;
    });
  }
}
