import { IMenuList } from './models/dashboard.model';

export const menuList:IMenuList[] =  [
    {
      "id": "worldMap",
      "name": "Dashboard",
      "redirect_to": "/map",
      "icon": "bx-first-aid"
    },
    {
      "id": "statistics",
      "name": "Statistics",
      "redirect_to": "/statistics",
      "icon": "bx-chart"
    },
    {
      "id": "history",
      "name": "History",
      "redirect_to": "/history",
      "icon": "bx-chart"
    }, 
    {
      "id": "about",
      "name": "About",
      "redirect_to": "/about",
      "icon": "bx-first-aid"
    }
];