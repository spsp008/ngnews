import { Component } from '@angular/core';

@Component({
  selector: 'app-top-headlines',
  styleUrls: [ './top-headlines.scss' ],
  templateUrl: './top-headlines.component.html'
})
export class TopHeadlinesComponent {
  date: Date  = new Date();
}
