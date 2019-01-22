import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CD } from 'src/app/models/cd';

@Injectable({
  providedIn: 'root'
})
export class AddCDService {

  cdsURL = 'api/cds';  // URL to web api

  constructor(private http: HttpClient) { }

  execute(cd: CD): Observable<CD> {
    return this.http.post<CD>(this.cdsURL, cd);
  }
}
