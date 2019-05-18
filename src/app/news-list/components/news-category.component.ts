import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-news-category',
  styleUrls: [ './news-category.scss' ],
  templateUrl: './news-category.component.html'
})
export class NewsCategoryComponent implements OnInit {

  @Input()
  category: string;

  articles: Article[] = [];

  constructor(private _newsService: NewsService) {}

  ngOnInit() {
    this._newsService.getTopHeadlines({category: this.category, pageSize: 5}).subscribe((news) => {
      this.articles = news.articles;
    });
  }
}
