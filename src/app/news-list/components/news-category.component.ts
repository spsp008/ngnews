import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  @Input()
  headLinesForm: FormGroup;

  articles: Article[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {

    this.getCategoryNews(this.headLinesForm.controls.country.value);

    this.headLinesForm.controls.country.valueChanges.subscribe((country: string) => {
      this.getCategoryNews(country);
    });
  }

  getCategoryNews(country: string) {
    this.newsService.getTopHeadlines({category: this.category, country, pageSize: 5}).subscribe((news) => {
      this.articles = news.articles;
    });
  }

}
