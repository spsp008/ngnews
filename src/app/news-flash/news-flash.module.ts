import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsFlashComponent } from './news-flash.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NewsFlashComponent
  ],
  exports: [
    NewsFlashComponent
  ]
})
export class NewsFlashModule { }
