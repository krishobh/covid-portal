import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseWebService {

  private baseURL: string = 'https://covid-193.p.rapidapi.com';

  constructor( private http: HttpClient) { 
    
  }

  private async callWebService(httpMethod: string, url: string, options: any) {
    let objParams = {};
    
    if ( httpMethod === 'GET') {
      objParams = {
          params: options.params,
          responseType: 'json',
          observe: 'body',
          headers: {}
      };
    }
    else {
      objParams = {
          body: JSON.stringify(options.params),
          responseType: 'json',
          observe: 'body',
          headers: {}
      };
    }

    return this.http.request(httpMethod, url, objParams);
  }

  getJSON(url: string, params: any) {
    return this.callWebService('GET', this.baseURL + url, params);
  }

  putJSON(url: string, params: any) {
    return this.callWebService('PUT', this.baseURL + url, params);
  }

  postJSON(url: string, params: any) {
    return this.callWebService('POST', this.baseURL + url, params);
  }

  deleteJSON(url: string, params: any) {
    return this.callWebService('DELETE', this.baseURL + url, params);
  }

  download(url: string, params: any) {
    return this.callWebService('GET', this.baseURL + url, params);
  }
}
