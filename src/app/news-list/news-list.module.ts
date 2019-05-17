import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NewsListComponent
  ],
  exports: [
    NewsListComponent
  ]
})
export class NewsListModule { }
