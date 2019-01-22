import { Component, OnInit } from '@angular/core';
import { CD } from 'src/app/models/cd';
import { DeleteCDService } from 'src/app/services/cd/delete-cd.service';

@Component({
  selector: 'app-delete-cd',
  templateUrl: './delete-cd.component.html',
  styleUrls: ['./delete-cd.component.css']
})
export class DeleteCDComponent implements OnInit {

  constructor(private deleteCD: DeleteCDService) { }
  CDs: CD[];

  ngOnInit() {
  }

  delete(CD: CD): void {
    this.CDs = this.CDs.filter(c => c !== CD);
    this.deleteCD.execute(CD.id).subscribe();
  }

}
