import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private _url = '/about';
  constructor(private _httpClient: HttpClient) { }
  
  // Dummry API call to check error handling and tooltip.
  fetchCountryList ():Observable<any> {
    return this._httpClient.get<any>(this._url);
  }
}
