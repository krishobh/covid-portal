import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChartsComponent } from './charts/charts.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { 
    path: '', component: DashboardComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch:'full'},
      { path: 'dashboard',  component: DashboardComponent },
      { path: 'charts',  component: ChartsComponent },
      { path: 'statistics',  component: StatisticsComponent },
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
