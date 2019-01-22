import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from "@angular/router";


import { CD } from 'src/app/models/cd';
import { DisplayOneCDService } from 'src/app/services/cd/display-one-cd.service';
import { DisplayAllCDService } from 'src/app/services/cd/display-all-cd.service';
import { HttpClient } from '@angular/common/http';
import { DeleteCDService } from 'src/app/services/cd/delete-cd.service';


@Component({
  selector: 'app-display-one-cd',
  templateUrl: './display-one-cd.component.html',
  styleUrls: ['./display-one-cd.component.css']
})
export class DisplayOneCDComponent implements OnInit {
  id: string;
  cdsURL = 'api/cds';  // URL to web api
  CDs: CD[];
  cd: CD;
  i: number;

  constructor(    
    private deleteCD: DeleteCDService,
    private http: HttpClient, 
    private route: ActivatedRoute, 
    private displayService: DisplayOneCDService, 
    private displayCDs: DisplayAllCDService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")

    this.display(this.id);
  }

  display(id: string) {
    this.i = Number(id);
    this.displayCDs.get()
    .subscribe(CDs => this.CDs = CDs.filter(cd =>  cd.id == this.i));
  }

  delete(CD: CD): void {
    this.CDs = this.CDs.filter(c => c !== CD);
    this.deleteCD.execute(CD.id).subscribe();
  }

}
