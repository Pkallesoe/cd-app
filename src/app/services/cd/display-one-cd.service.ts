import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CD } from 'src/app/models/cd';
import { map } from 'rxjs/operators';
import { DisplayAllCDService } from './display-all-cd.service';


@Injectable({
  providedIn: 'root'
})
export class DisplayOneCDService {
  cdURL = 'cd';

  constructor(private http: HttpClient, private getCDs: DisplayAllCDService) { }
/*
  getM(id: string): Observable<CD[]> {
    console.log(id);
    const options = id ?
      { params: new HttpParams().set('id', id) } : {};
    return this.http.get<CD[]>(this.cdURL, options);
  }
*/
  get(id: number | string) {
    return this.getCDs.get().pipe(
      // (+) before `id` turns the string into a number
      map((cds: CD[]) => cds.find(CD => CD.id === +id))
    );
  }

}
