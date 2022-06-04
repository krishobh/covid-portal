import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMenuList } from '../../models/dashboard.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { menuList } from '../../menu-list';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _httpClient: HttpClient) { 

  }

  fetchMapData () {
      return this._httpClient.get('covid-193.p.rapidapi.com', {});
  }

  fetchMenuList () : IMenuList[] {
      return menuList;
  }
}
