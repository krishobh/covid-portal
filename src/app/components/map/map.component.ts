import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { geoPath, GeoPath, GeoPermissibleObjects } from 'd3';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  public contriesList = [];
  public selectedCountry: string = '';

  constructor(private _mapSrv: MapService) { }

  ngOnInit(): void {

    this._mapSrv.fetchMapData().
      subscribe( data => this.contriesList = data.response );

    this.drawMap();
  }

  drawMap() {
    // Clear the data initially.
    d3.selectAll("svg > *").remove();
    // The svg
    const svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height");

    // Map and projection
    const projection:any = d3.geoMercator()

    if (this.selectedCountry !== '') {
        projection.scale(200).center([0, 0])
    }
    const pathGenerator:any = d3.geoPath().projection(projection);
    
    // Load external data and boot
    d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
    
      .then( (data:any) => {

      // Filter data based on country
      if (this.selectedCountry !== '') {
          data.features = data.features.filter((d: { properties: { name: string; }; }) => {
            return d.properties.name == this.selectedCountry;
          })
      }

      // Draw the map
      let g = svg.append("g")
          g.attr('class', 'map');

          g.selectAll("path")
          .data(data.features)
          .enter().append('path')
          
          .attr("d", pathGenerator)
          .style("stroke", "white")
      })
  }
  
  queryEntered(value:string):void {
      this.selectedCountry = value;
      this.drawMap();
  }

  clearQuery() {
      this.selectedCountry = '';
      this.drawMap();
  }

}
