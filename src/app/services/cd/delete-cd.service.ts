import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { CD } from 'src/app/models/cd';

@Injectable({
  providedIn: 'root'
})
export class DeleteCDService {
  cdsURL = 'api/cds';  // URL to web api
  CDs: Observable<CD[]>;

  constructor(private http: HttpClient) { }

  execute(id: number): Observable<{}> {
    const URL = `${this.cdsURL}/${id}`; // DELETE api/cds/42
    return this.http.delete(URL);
  }
}
