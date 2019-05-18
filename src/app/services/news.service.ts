import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  getEveryThing(): Observable<any> {
    const urlParams = {
      params: {
        q: 'bitcoin',
        apiKey: environment.API_KEY
      }
    };
    return this.http
    .get(`${environment.API_URL}/everything`, urlParams).pipe(
      map((response) => response)
    )
  }

  getTopHeadlines(params?: any): Observable<any> {
    let urlParams = {
      params: {
        country: 'us',
        apiKey: environment.API_KEY
      }
    };
    if (params) {
      urlParams = Object.assign({}, urlParams, {
        params: Object.assign({}, urlParams.params, params)
      })
    }
    return this.http
    .get(`${environment.API_URL}/top-headlines`, urlParams).pipe(
      map((response) => response)
    )
  }
}
