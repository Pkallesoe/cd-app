import { Component, OnInit } from '@angular/core';

import { CD } from 'src/app/models/cd';
import { DisplayAllCDService } from 'src/app/services/cd/display-all-cd.service';
import { DeleteCDService } from 'src/app/services/cd/delete-cd.service';

@Component({
  selector: 'app-display-all-cds',
  templateUrl: './display-all-cds.component.html',
  styleUrls: ['./display-all-cds.component.css']
})
export class DisplayAllCDsComponent implements OnInit {

  CDs: CD[];

  constructor(private displayCDs: DisplayAllCDService, private deleteCD: DeleteCDService) { }

  ngOnInit() {
    this.displayAll();
  }

  displayAll(): void {
    this.displayCDs.get()
    .subscribe(CDs => this.CDs = CDs);
  }

  delete(CD: CD): void {
    this.CDs = this.CDs.filter(c => c !== CD);
    this.deleteCD.execute(CD.id).subscribe();
  }

}
