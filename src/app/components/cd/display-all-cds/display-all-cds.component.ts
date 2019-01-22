import { Component, OnInit } from '@angular/core';

import { CD } from 'src/app/models/cd';
import { DisplayAllCDService } from 'src/app/services/cd/display-all-cd.service';
import { DeleteCDService } from 'src/app/services/cd/delete-cd.service';
import { EditCDService } from 'src/app/services/cd/edit-cd.service';
import { AddCDService } from 'src/app/services/cd/add-cd.service';

@Component({
  selector: 'app-display-all-cds',
  templateUrl: './display-all-cds.component.html',
  styleUrls: ['./display-all-cds.component.css']
})
export class DisplayAllCDsComponent implements OnInit {

  CDs: CD[];

  constructor(
    private displayCDs: DisplayAllCDService,
    private deleteCD: DeleteCDService,
    private addCD: AddCDService,
    private editCD: EditCDService) { }

  ngOnInit() {
    this.displayAll();
  }

  displayAll(): void {
    this.displayCDs.get()
    .subscribe(CDs => this.CDs = CDs);
  }

  displayOne(): void {}

  edit(CD: CD): void {}

  delete(CD: CD): void {
    this.CDs = this.CDs.filter(c => c !== CD);
    this.deleteCD.execute(CD.id).subscribe();
  }
/*
  add(artist: string, album: string, genre: string, year: number): void {
    //this.editCD = undefined;
    artist = artist.trim();
    album = album.trim();
    genre = genre.trim();
    if (!artist || !album || !genre || !year)  { return; }

    // The server will generate the id for this new cd
    const newCD: CD = { artist, album, genre, year} as CD; // Ved ikke helt hvorfor denne error opstår?

    this.addCD.execute(newCD)
      .subscribe(cd => this.CDs.push(cd));
  }
*/
}
