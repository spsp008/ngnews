import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { TopHeadlinesModule } from './top-headlines/top-headlines.module';
import { NewsFlashModule } from './news-flash/news-flash.module';
import { NewsListModule } from './news-list/news-list.module';
import { FooterModule } from './footer/footer.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    TopHeadlinesModule,
    NewsFlashModule,
    NewsListModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
