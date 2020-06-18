import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);
require('highcharts/modules/heatmap')(Highcharts);
require('highcharts/modules/treemap')(Highcharts);
require('highcharts/modules/funnel')(Highcharts);
let chartHolder;


@Component({
  selector: 'app-eda-bubblechart',
  templateUrl: './eda-bubblechart.component.html',
  styleUrls: ['./eda-bubblechart.component.scss']
})
export class EdaBubblechartComponent implements OnInit {

  public options: any = {
    chart: {
      type: 'bubble',
    },
    title: {
      text: ''
  },
    plotOptions: {
      bubble: {
        "sizeByAbsoluteValue": true,
        zMin: 0
      }
    },
  
    series: [{
      "name": "Feature 1",
      "data": [{
        "x": 0,
        "y": 2,
        "z": 4.61,
      },{
        "x": 1,
        "y": -2,
        "z": 4.61,
      }],
    }, {
      "name": "Feature 2",
      "data": [{
        "x": -1,
        "y": -3,
        "z": 4.6,
      },{
        "x": -2,
        "y": -1,
        "z": 4.61,
      }]
    },
    {
      "name": "Feature 3",
      "data": [{
        "x": 1,
        "y": 3,
        "z": 4.61,
      },{
        "x": -4,
        "y": -2,
        "z": 4.61,
      }],
    }]
  }


  constructor() { }

  ngOnInit() {
    chartHolder = Highcharts.chart('container', this.options);
    
  }

}
