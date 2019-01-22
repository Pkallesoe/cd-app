import { Injectable } from '@angular/core';
import { DisplayAllCDService } from './display-all-cd.service';
import { map, tap, catchError } from 'rxjs/operators';
import { CD } from 'src/app/models/cd';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EditCDService {
  private cdURL = 'api/cds';

  constructor(private http: HttpClient) { }

  save(cd: CD): Observable<any> {
    return this.http.put(this.cdURL, cd, httpOptions);
  }

}
