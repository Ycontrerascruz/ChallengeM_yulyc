import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import{map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class ApicomicsService {
  PUBLIC_KEY='84bcbbd707bd51528dd72a6a2a43960d';
  HASH='e411c4881764555dccb0ab4005261fb9';
  URL_API_COMICS='https://gateway.marvel.com:443/v1/public/characters/1011334/comics?apikey=84bcbbd707bd51528dd72a6a2a43960d';
  
    constructor(private http: HttpClient) { }
  
    getallcomics():Observable<any>{
      return this.http.get<any>(this.URL_API_COMICS)
      .pipe(map((data:any)=>data.data.results))
    }
  }
