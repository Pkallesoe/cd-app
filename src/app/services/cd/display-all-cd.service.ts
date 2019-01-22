import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CD } from 'src/app/models/cd';


@Injectable({
  providedIn: 'root'
})
export class DisplayAllCDService {
  cdsURL = 'api/cds';  // URL to web api

  constructor(private http: HttpClient) { }

  get (): Observable<CD[]> {
    return this.http.get<CD[]>(this.cdsURL);
  }
}
