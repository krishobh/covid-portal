import { Component, OnInit } from '@angular/core';

interface IMenuList {
  "id": string,
  "name": string,
  "redirect_to": string,
  "icon": string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  menuList: IMenuList[] = []

  constructor() { }

  ngOnInit(): void {
    this.loadMenuList();
  }

  async loadMenuList() {
    const menu:IMenuList[] =  [
      {
        "id": "worldMap",
        "name": "Dashboard",
        "redirect_to": "/dashboard",
        "icon": ""
      },
      {
        "id": "charts",
        "name": "Charts",
        "redirect_to": "/charts",
        "icon": "bx-user-plus"
      }, 
      {
        "id": "statistics",
        "name": "Statistics",
        "redirect_to": "/statistics",
        "icon": "bx-category"
      },
      {
        "id": "about",
        "name": "About",
        "redirect_to": "/about",
        "icon": "bx-first-aid"
      }
    ];

    this.menuList = menu;
  }

}
