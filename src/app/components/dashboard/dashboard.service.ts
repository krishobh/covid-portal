import { Injectable } from '@angular/core';
import { IMenuList } from '../../models/dashboard.model';
import { menuList } from '../../menu-list';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { 

  }

  fetchMenuList () : IMenuList[] {
      return menuList;
  }
}
