import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private _url:string = '/statistics';
  constructor(private _httpClient: HttpClient) { }

  fetchData () {
    return this._httpClient.get<any>(this._url);
  }
}