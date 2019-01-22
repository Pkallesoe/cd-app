import { Component, OnInit, Input } from '@angular/core';
import { DisplayAllCDService } from 'src/app/services/cd/display-all-cd.service';
import { ActivatedRoute } from '@angular/router';
import { CD } from 'src/app/models/cd';
import { Location } from '@angular/common';
import { EditCDService } from 'src/app/services/cd/edit-cd.service';
import { DisplayOneCDService } from 'src/app/services/cd/display-one-cd.service';


@Component({
  selector: 'app-edit-cd',
  templateUrl: './edit-cd.component.html',
  styleUrls: ['./edit-cd.component.css']
})
export class EditCDComponent implements OnInit {
  @Input() cd:CD;
  id: string;
  i: number;
  CDs: CD[];
  

  constructor(    
    private route: ActivatedRoute, 
    private displayCDs: DisplayAllCDService,
    private location: Location,
    private editCD: EditCDService, 
    private getCD: DisplayOneCDService
    ) { 
      console.log(this.cd);
    }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")

    this.display(this.id);
  }

  display(id: string) {
    this.i = Number(id);
    this.displayCDs.get()
    .subscribe(CDs => this.CDs = CDs.filter(cd =>  cd.id == this.i));
  }

  goBack(): void {
    this.location.back();
  }

  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getCD.get(id)
      .subscribe(cd => this.cd = cd);
  }

  save(cd): void {
    this.editCD.save(cd)
      .subscribe(() => this.goBack());
  }

}
