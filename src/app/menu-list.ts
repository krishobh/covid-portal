import { IMenuList } from './models/dashboard.model';

export const menuList:IMenuList[] =  [
    {
      "id": "worldMap",
      "name": "Dashboard",
      "redirect_to": "/dashboard",
      "icon": "bx-first-aid"
    },
    {
      "id": "charts",
      "name": "Charts",
      "redirect_to": "/charts",
      "icon": "bx-chart"
    }, 
    {
      "id": "statistics",
      "name": "Statistics",
      "redirect_to": "/statistics",
      "icon": "bx-chart"
    },
    {
      "id": "about",
      "name": "About",
      "redirect_to": "/about",
      "icon": "bx-first-aid"
    }
];