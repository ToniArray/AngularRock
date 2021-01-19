import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private spotifyToken: string

  constructor(private _http: HttpClient) {
    this.getToken().subscribe(res => {
      this.spotifyToken = res.access_token
      this.getArtist().subscribe(res => console.log(res))
    })

  }

  getToken(): Observable <any> {

    let urlConnect = `${environment.urlApiToken}/${environment.clientId}/${environment.clientSecret}`;

    return this._http.get(urlConnect);

  }

  getArtist(): Observable <any> {

    let artist = '22bE4uQ6baNwSHPVcDxLCe'

    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.spotifyToken}`);

    let urlConnect = `${environment.urlApiSpotify}/artists/${artist}`
    
    return this._http.get(urlConnect, {headers: headers});

  }

}
