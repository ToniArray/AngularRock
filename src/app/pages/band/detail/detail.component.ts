import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Band } from 'src/app/interfaces/bandInterface';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public idBand: string
  public band: Band

  constructor(
    private route:ActivatedRoute,
    private localstorageService: LocalstorageService
  ) {
    this.idBand = this.route.snapshot.paramMap.get('id')
    const bands: any[] = this.localstorageService.getData('bands')
    this.band = bands.find(element => element.id === this.idBand);
  }

  ngOnInit(): void {
  }

}
