import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-by-category',
  styleUrls: [ './news-by-category.scss' ],
  templateUrl: './news-by-category.component.html'
})
export class NewsByCategoryComponent {

  @Input()
  categories: string[];

  @Input()
  countryCode: string;

}
