import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import{map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApicharactersService {
PUBLIC_KEY='84bcbbd707bd51528dd72a6a2a43960d';
HASH='e411c4881764555dccb0ab4005261fb9';
URL_API='https://gateway.marvel.com:443/v1/public/characters?apikey=84bcbbd707bd51528dd72a6a2a43960d';

  constructor(private http: HttpClient) { }

  getallcharacters():Observable<any>{
    return this.http.get<any>(this.URL_API)
    .pipe(map((data:any)=>data.data.results))
  }
}

