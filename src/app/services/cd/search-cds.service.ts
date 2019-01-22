import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CD } from 'src/app/models/cd';



@Injectable({
  providedIn: 'root'
})
export class SearchCDsService {
  cdsURL = 'api/cds';  // URL to web api

  constructor(private http: HttpClient) { }

  execute (from: number, to: number, genre: string): Observable<CD[]> {
    genre = genre.trim();
    const options = from && to && genre ?
    { params: new HttpParams().set('genre', genre) } : {};
    return this.http.get<CD[]>(this.cdsURL, options);
  }
}
