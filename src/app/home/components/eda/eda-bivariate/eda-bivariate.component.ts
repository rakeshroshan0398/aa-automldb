import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-eda-bivariate',
  templateUrl: './eda-bivariate.component.html',
  styleUrls: ['./eda-bivariate.component.scss']
})
export class EDABivariateComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions = {   
     chart: {
        type: "spline"
     },
     title: {
        text: ""
     },
     subtitle: {
        text: ""
     },
     xAxis:{
        categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
           "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
     },
     yAxis: {          
        title:{
           text:"Temperature °C"
        } 
     },
     tooltip: {
        valueSuffix:" °C"
     },
     series: [{
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6]
     },
     {
        name: 'New York',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,24.1, 20.1, 14.1, 8.6, 2.5]
     },
    ]

  };
  constructor() { }

  ngOnInit(): void {
  }

}
