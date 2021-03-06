import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list.component';
import { NewsCategoryComponent } from './components/news-category.component';
import { NewsArticleComponent } from './components/news-article.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NewsListComponent,
    NewsCategoryComponent,
    NewsArticleComponent
  ],
  exports: [
    NewsListComponent
  ]
})
export class NewsListModule { }
