import { Component, OnInit } from '@angular/core';
import Bands from 'src/assets/json/bands.json';
import { Band } from 'src/app/interfaces/bandInterface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public bands: Band[] = Bands

  constructor() {
    console.log(this.bands)
  }

  ngOnInit(): void {
  }

}
