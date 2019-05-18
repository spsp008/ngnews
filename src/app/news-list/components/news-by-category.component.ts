import { Component, OnInit, Input } from '@angular/core';
// import { NewsService } from '../../services/news.service';
// import { Article } from '../../models/article';

@Component({
  selector: 'app-news-by-category',
  styleUrls: [ './news-by-category.scss' ],
  templateUrl: './news-by-category.component.html'
})
export class NewsByCategoryComponent implements OnInit {

  @Input()
  categories: string[];

  // constructor(private _newsService: NewsService) {}

  ngOnInit() {
    // this._newsService.getTopHeadlines().subscribe((news) => {
    //   this.articles = news.articles;
    // });
  }
}
