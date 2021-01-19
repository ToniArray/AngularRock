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

  constructor(private spotifyService: SpotifyService) {
    console.log(this.bands)
  }

  ngOnInit(): void {
  }

}
