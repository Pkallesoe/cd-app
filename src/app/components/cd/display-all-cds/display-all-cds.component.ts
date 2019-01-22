import { Component, OnInit } from '@angular/core';

import { CD } from 'src/app/models/cd';
import { DisplayAllCDService } from 'src/app/services/cd/display-all-cd.service';

@Component({
  selector: 'app-display-all-cds',
  templateUrl: './display-all-cds.component.html',
  styleUrls: ['./display-all-cds.component.css']
})
export class DisplayAllCDsComponent implements OnInit {

  CDs: CD[];

  constructor(private displayCDs: DisplayAllCDService) { }

  ngOnInit() {
    this.displayAll();
  }

  displayAll(): void {
    this.displayCDs.get()
    .subscribe(CDs => this.CDs = CDs);
  }

}
