import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { IMenuList } from '../../models/dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  menuList: IMenuList[] = []

  constructor( private _dashboardSrv: DashboardService) { }

  ngOnInit(): void {
    this.loadMenuList();
  }

  loadMenuList() {
    this.menuList = this._dashboardSrv.fetchMenuList();
  }

}
