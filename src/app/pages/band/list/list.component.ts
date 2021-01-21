import { Component, OnInit } from '@angular/core';
import Bands from 'src/assets/json/bands.json';
import { Band } from 'src/app/interfaces/bandInterface';
import { SpotifyService } from 'src/app/services/spotify.service'
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public bands: Band[]
  public searchArtist: string

  constructor(
    private spotifyService: SpotifyService,
    private localstorageService: LocalstorageService) {
      if(this.localstorageService.getData('bands') === undefined || this.localstorageService.getData('bands') === null) {
        this.localstorageService.setData('bands', Bands)
      }
      this.bands = this.localstorageService.getData('bands')
  }

  ngOnInit(): void {
  }

  searchFilter(filter) {

    this.bands = this.localstorageService.getData('bands').filter((value) => {
      return value.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
    })

  }

  removeBand(i: number) {
    this.bands.splice(i, 1);
    this.localstorageService.setData('bands', this.bands)
  }

}
