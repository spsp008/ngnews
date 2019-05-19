import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-top-headlines',
  styleUrls: [ './top-headlines.scss' ],
  templateUrl: './top-headlines.component.html'
})
export class TopHeadlinesComponent implements OnInit {

  form: FormGroup;
  flashArticles: Article[] = [];

  countries: {code: string, name: string}[] = [
    {code: 'gb', name: 'Britain'},
    {code: 'cn', name: 'China'},
    {code: 'fr', name: 'France'},
    {code: 'in', name: 'India'},
    {code: 'ru', name: 'Russia'},
    {code: 'us', name: 'USA'}
  ];

  date: Date  = new Date();

  constructor(private formBuilder: FormBuilder, private newsService: NewsService ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      country: 'in'
    });

    this.getFlashArticles(this.form.controls.country.value);

    this.form.controls.country.valueChanges.subscribe((country: string) => {
      this.getFlashArticles(country);
    });
  }

  getFlashArticles(country: string) {
    this.newsService.getTopHeadlines({pageSize: 10, country}).subscribe((news) => {
      this.flashArticles = news.articles;
    });
  }

}
