import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-data-preprocessing',
  templateUrl: './data-preprocessing.component.html',
  styleUrls: ['./data-preprocessing.component.scss']
})
export class DataPreprocessingComponent implements OnInit {
  featureData =[
    {"id":1,"feature_name":"Name","values":"200","rows":"10000"},
    {"id":2,"feature_name":"Age","values":"267","rows":"10000"},
    {"id":3,"feature_name":"Gender","values":"100","rows":"10000"},
  ]

  quantileData =[
    {"id":1,"Quantile":"5","ticket_price":"200","surival_property":"100.00"},
    {"id":2,"Quantile":"50","ticket_price":"267","surival_property":"100.00"},
    {"id":3,"Quantile":"90","ticket_price":"100","surival_property":"100.00"},
  ]
  highcharts = Highcharts;
  chartOptions1 = {   
    chart: {
      renderTo: 'container',
      type: 'column'
  },
  title: {
      text: ''
  },
  subtitle: {
      text: ''
  },
  xAxis: {
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      title: {
          text: null
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Population (millions)',
          align: 'high'
      },
      labels: {
          overflow: 'justify'
      }
  },
  tooltip: {
      formatter: function() {
          return ''+
              this.series.name +': '+ this.y +' millions';
      }
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          }
      }
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -100,
      y: 100,
      floating: true,
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      shadow: true
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Year 1800',
      data: [107, 31, 635, 203, 2]
  }]
};
  
  constructor() { }

  ngOnInit(): void {
  }

}
