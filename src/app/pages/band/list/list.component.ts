import { Component, OnInit } from '@angular/core';
import Bands from 'src/assets/json/bands.json';
import { Band } from 'src/app/interfaces/bandInterface';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public bands: Band[] = Bands
  public result: Band[] = Bands
  public searchArtist: string

  constructor(private spotifyService: SpotifyService) {
    console.log(this.bands)
  }

  ngOnInit(): void {
  }

  searchFilter(filter) {

    this.result = this.bands.filter((value) => {
      return value.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
    })
    
  }

}
