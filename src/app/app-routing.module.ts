import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  { 
    path: '', component: DashboardComponent, children: [
      { path: '', redirectTo: 'map', pathMatch:'full'},
      { path: 'map', loadChildren: () => import("./components/map/map.module").then( m => m.MapModule ) },
      { path: 'dashboard',  component: DashboardComponent },
      { path: 'history',  component: HistoryComponent },
      { path: 'statistics', loadChildren: () => import("./components/statistics/statistics.module").then( m => m.StatisticsModule ) },
      { path: 'about', loadChildren: () => import("./components/about/about.module").then( m => m.AboutModule ) }
    ]
  },
  { path: '**', redirectTo: 'pageNotFound'},
  { path: 'pageNotFound', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
