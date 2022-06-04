import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private _url:string = '/countries';
  constructor(private _httpClient: HttpClient) { }

  fetchMapData () {
      return this._httpClient.get<any>(this._url);
  }
}
