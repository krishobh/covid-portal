import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { HistoryComponent } from './components/history/history.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  { 
    path: '', component: DashboardComponent, children: [
      { path: '', redirectTo: 'map', pathMatch:'full'},
      { path: 'map',  component: MapComponent },
      { path: 'dashboard',  component: DashboardComponent },
      { path: 'history',  component: HistoryComponent },
      { path: 'statistics',  loadChildren: () => import("./components/statistics/statistics.module").then( m => m.statisticsModule ) },
      { path: 'about',  component: AboutComponent }
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
