import { Component, OnInit, Input } from '@angular/core';

import { CD } from 'src/app/models/cd';


@Component({
  selector: 'app-display-one-cd',
  templateUrl: './display-one-cd.component.html',
  styleUrls: ['./display-one-cd.component.css']
})
export class DisplayOneCDComponent implements OnInit {
  @Input() CD: CD;

  constructor() { }

  ngOnInit() {
  }

}
