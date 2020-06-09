import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-eda-univarate',
  templateUrl: './eda-univarate.component.html',
  styleUrls: ['./eda-univarate.component.scss']
})
export class EDAUnivarateComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions = {   
    chart: {
       type: 'bar'
    },
    title: {
       text: ''
    },
    subtitle : {
       text: 'Source: Wikipedia.org'  
    },
    legend : {
       layout: 'Horizontal',
       align: 'left',
       verticalAlign: 'top',
       x: 250,
       y: 100,
       floating: true,
       borderWidth: 1,
      
      //  backgroundColor: (
      //     (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 
      //       '#FFFFFF'), shadow: true
       },
       xAxis:{
          categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'], title: {
          text: null
       } 
    },
    yAxis : {
       min: 0, title: {
          text: 'Population (millions)', align: 'high'
       },
       labels: {
          overflow: 'justify'
       }
    },
    tooltip : {
       valueSuffix: ' millions'
    },
    plotOptions : {
       bar: {
          dataLabels: {
             enabled: true
          }
       }
    },
    credits:{
       enabled: false
    },
    series: [
       {
          name: 'Year 1800',
          data: [107, 31, 635, 203, 2]
       }, 
       {
          name: 'Year 1900',
          data: [133, 156, 947, 408, 6]
       }, 
       {
          name: 'Year 2008',
          data: [973, 914, 4054, 732, 34]      
       }
    ]
 };
  constructor() { }

  ngOnInit(): void {
  }

}
