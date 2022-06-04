import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private _url:string = '/countries';
  constructor(private _httpClient: HttpClient) { }

  fetchCountryList ():Observable<any> {
    if (this.isLocalDataExist()) {
      let returnValue = {
        response: this.getLocalData()
      }
      return of (returnValue);
    }
    return this._httpClient.get<any>(this._url);
  }

  getLocalData ():any {
    let data:string|null = localStorage.getItem('country');
    if (data !== null) {
      data = JSON.parse(data);
    }
    return (data);
  }

  setLocalData (data:string) : void {
    if (!this.isLocalDataExist()) {
      localStorage.setItem('country', JSON.stringify(data));
    }
  }

  isLocalDataExist ():boolean {
    let data = this.getLocalData();

    return data !== 'undefined' && data !== null;
  }
}
