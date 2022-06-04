import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  public mapData = [];

  constructor(private _mapSrv: MapService) { }

  ngOnInit(): void {

    this._mapSrv.fetchMapData().
      subscribe( data => this.mapData = data );
  }

}
