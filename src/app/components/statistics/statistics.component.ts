import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StatisticsService } from './statistics.service';
import * as d3 from 'd3';
import { Subscription } from 'rxjs';

interface chartData {
  country: string;
  total_cases: number;
  total_death: number;
}
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent implements OnInit, OnDestroy {
  statisticsSubscription$: Subscription | undefined;
  statistics:chartData[] = [];
  svg:any;
  private margin = 50;
  private width = 1500 - (this.margin * 2);
  private height = 600 - (this.margin * 2);

  constructor(private _mapSrv: StatisticsService) { }

  ngOnInit(): void {
      this.statisticsSubscription$ = this._mapSrv.fetchData()
        .subscribe( (data) => {
            this.statistics = this.processData(data.response);
            this.createSvg();
            this.drawBars(this.statistics);
        }
      )
  }

  processData(data:any[]) {
    const list:chartData[] = [];
    data.forEach((item) => {
      let obj = {
        country: item.country,
        total_cases: item.cases.total,
        total_death: item.deaths.total
      }
      list.push(obj);
    })
    return list;
  }

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: chartData[]): void {
    // Add X axis
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(data.map(d => d.country))
    .padding(0.2);

    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

    // Add Y axis
    const y = d3.scaleLinear()
    .domain([0, 10000])
    .range([this.height, 0]);

    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d: { country: string; }) => x(d.country))
    .attr("y", (d: { total_cases: d3.NumberValue; }) => y(d.total_cases))
    .attr("width", x.bandwidth())
    .attr("height", (d: { total_cases: d3.NumberValue; }) => this.height - y(d.total_cases))
    .attr("fill", "#d04a35");
  }

  ngOnDestroy(): void {
    this.statisticsSubscription$?.unsubscribe();
  }

}
