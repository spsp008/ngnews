import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NewsService } from '../services/news.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-news-list',
  styleUrls: [ './news-list.scss' ],
  templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit {

  @Input()
  countryCode: string;

  @Input()
  headLinesForm: FormGroup;

  articles: Article[];
  categories: string[] = ['business', 'science', 'sports', 'entertainmemt', 'technology'];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getEveryThing().subscribe((news) => {
      this.articles = news.articles;
    });
  }
}
