import { Component, OnDestroy, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { geoPath, GeoPath, GeoPermissibleObjects } from 'd3';
import { MapService } from './map.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit, OnDestroy {
  private mapSubscription$: Subscription | undefined;
  public contriesList = [];
  public selectedCountry: string = '';

  constructor(private _mapSrv: MapService) { }

  ngOnInit(): void {

    this.mapSubscription$ = this._mapSrv.fetchCountryList().
      subscribe( data => {
        this.contriesList = data.response;
        this._mapSrv.setLocalData(data.response);
      });

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
    let g = svg.append("g");

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
          g.attr('class', 'map');

          g.selectAll("path")
          .data(data.features)
          .enter().append('path')
          
          .attr("d", pathGenerator)
          .style("stroke", "black")
          .style("fill", "white")
      })

     /* d3.json('https://covid-193.p.rapidapi.com/statistics',
        {
          headers: new Headers({
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
            'X-RapidAPI-Key': 'cbdf8f4b51mshfbd43e98b753cbep1c98f0jsn6e0419c39e6a'
        }),
      }).then( (data:any) => {*/

        // Data and color scale
        


          /*g.attr('class', 'map');
          g.selectAll("path")
          .data(data.response)
          .enter().append("path")
            .attr("fill", function (d:any){
              console.log(d);
                // Pull data for this country
                d.total = data.get(d.country) || 0;
                // Set the color
                return colorScale(d.cases.total);
            })
            .attr("d", pathGenerator)*/

      //});
  }
  
  queryEntered(value:string):void {
      this.selectedCountry = value;
      this.drawMap();
  }

  clearQuery():void {
      this.selectedCountry = '';
      this.drawMap();
  }

  ngOnDestroy(): void {
    this.mapSubscription$?.unsubscribe();
  }

}


