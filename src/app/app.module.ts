import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { NewsFlashModule } from './news-flash/news-flash.module';
import { NewsListModule } from './news-list/news-list.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    NewsFlashModule,
    NewsListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
