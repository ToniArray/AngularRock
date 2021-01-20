import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Bands from 'src/assets/json/bands.json';
import { Band } from 'src/app/interfaces/bandInterface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public idBand: string
  public bands: any[] = Bands
  public band: Band

  constructor(private route:ActivatedRoute) {
    this.idBand = this.route.snapshot.paramMap.get('id')
    this.band = this.bands.find(element => element.id === this.idBand);
    console.log(this.band)
  }

  ngOnInit(): void {
  }

}
