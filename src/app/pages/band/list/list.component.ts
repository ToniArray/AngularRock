import { Component, OnInit } from '@angular/core';
import Bands from 'src/assets/json/bands.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public bands = Bands

  constructor() {
    console.log(this.bands)
  }

  ngOnInit(): void {
  }

}
