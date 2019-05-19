import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NewsFlashModule } from '../news-flash/news-flash.module';
import { NewsListModule } from '../news-list/news-list.module';
import { TopHeadlinesComponent } from './top-headlines.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NewsFlashModule,
    NewsListModule
  ],
  declarations: [
    TopHeadlinesComponent
  ],
  exports: [
    TopHeadlinesComponent
  ]
})
export class TopHeadlinesModule { }
