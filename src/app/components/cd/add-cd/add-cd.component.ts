import { Component, OnInit } from '@angular/core';
import { AddCDService } from 'src/app/services/cd/add-cd.service';
import { CD } from 'src/app/models/cd';

@Component({
  selector: 'app-add-cd',
  templateUrl: './add-cd.component.html',
  styleUrls: ['./add-cd.component.css']
})
export class AddCDComponent implements OnInit {
  CDs: CD[];

  constructor(private addCD: AddCDService) { }

  ngOnInit() {
  }

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

}
