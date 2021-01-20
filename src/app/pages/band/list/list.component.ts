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

  public bands: Band[] = Bands
  public searchArtist: string

  constructor(
    private spotifyService: SpotifyService,
    private localstorageService: LocalstorageService) {
    this.localstorageService.setData('bands', Bands)
  }

  ngOnInit(): void {
  }

  searchFilter(filter) {

    this.bands = this.localstorageService.getData('bands').filter((value) => {
      return value.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
    })

  }

}
