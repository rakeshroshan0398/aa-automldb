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
      renderTo: 'container',
      type: 'column'
  },
  title: {
      text: 'Univariated Analysis'
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
