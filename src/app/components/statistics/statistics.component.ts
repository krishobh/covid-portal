import { Component, OnInit } from '@angular/core';
import { StatisticsService } from './statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.less']
})
export class StatisticsComponent implements OnInit {
  statistics = [];
  constructor(private _mapSrv: StatisticsService) { }

  ngOnInit(): void {

    this._mapSrv.fetchData().
      subscribe( data => this.statistics = data.response );

  }

}
