import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { IDropdownSettings } from 'ng-multiselect-dropdown/public_api';

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
dropdownSettings = {};
dropdownList = [];
  selectedItems = [];

  constructor() { }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: '1' },
      { item_id: 2, item_text: '2' },
      { item_id: 3, item_text: '3' },
      { item_id: 4, item_text: '4' },
      { item_id: 5, item_text: '5' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
