import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Article } from '../models/article';

@Component({
  selector: 'app-news-list',
  styleUrls: [ './news-list.scss' ],
  templateUrl: './news-list.component.html'
})
export class NewsListComponent {

  @Input()
  countryCode: string;

  @Input()
  headLinesForm: FormGroup;

  articles: Article[];
  categories: string[] = ['business', 'science', 'sports', 'entertainmemt', 'technology'];
}
