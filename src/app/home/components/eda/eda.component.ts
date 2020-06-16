import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { IDropdownSettings } from 'ng-multiselect-dropdown/public_api';

@Component({
  selector: 'app-eda',
  templateUrl: './eda.component.html',
  styleUrls: ['./eda.component.scss']
})
export class EDAComponent implements OnInit {
  piecharttab = false;
highcharts = Highcharts;
chartOptions1 = {   
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
        text: 'Population (millions)'
    },
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


chartOptions = {   
   chart: {
      type: "spline"
   },
   title: {
      text: "Bivariate Analysis"
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
}

chartOptions2 = {   
  chart : {
     plotBorderWidth: null,
     plotShadow: false
  },
  title : {
     text: 'Multivariate Analysis'   
  },
  tooltip : {
     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions : {
     pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
           enabled: true,
           format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
          //  style: {
          //     color: (Highcharts.theme && Highcharts.theme.contrastTextColor)||
          //     'black'
          //  }
        }
     }
  },
  series : [{
     type: 'pie',
     name: 'Browser share',
     data: [
        ['Firefox',   45.0],
        ['IE',       26.8],
        {
           name: 'Chrome',
           y: 12.8,
           sliced: true,
           selected: true
        },
        ['Safari',    8.5],
        ['Opera',     6.2],
        ['Others',      0.7]
     ]
  }]
};
//   chart = new Chart({
//     chart : {
//       plotBorderWidth: null,
//       plotShadow: false
//    },
//    title : {
//       text: 'Multivariate analysis'   
//    },
//    tooltip : {
//       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//    },
//    plotOptions : {
//       pie: {
//          allowPointSelect: true,
//          cursor: 'pointer',
   
//          dataLabels: {
//             enabled: false           
//          },
   
//          showInLegend: true
//       }
//    },
//    series : [{
//       type: 'pie',
//       name: 'Browser share',
//       data: [
//          ['Firefox',   45.0],
//          ['IE',       26.8],
//          {
//             name: 'Multivariate analysis',
//             y: 12.8,
//             sliced: true,
//             selected: true
//          },
//          ['Safari',    8.5],
//          ['Opera',     6.2],
//          ['Others',      0.7]
//       ]
//    }]
// });
dropdownSettings = {};
dropdownList = [];
technique = [
  {id:"1","chart":"Univarate"},
  {id:"2","chart":"Biviarate"},
  {id:"3","chart":"Multivarate"}
]
array = [];
selectedArray = [];
selectedtechnique:any;
selectedFeature = [];
selectedFeatures = [];
submitteddata = [];
submittedtecnique:any;
  constructor() {
   }

  ngOnInit(): void {
    // Highcharts.chart('treemap1', this.treeMapOptions);
    this.dropdownList = [
      { item_id: 1, item_text: 'a' },
      { item_id: 2, item_text: 'b' },
      { item_id: 3, item_text: 'c' },
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
    console.log(this.technique)
    console.log(item);
    this.selectedFeature.push(item);
    console.log(this.selectedFeature);
    console.log(this.selectedFeature.length);
    if(this.selectedFeature.length == 1){
      this.array.pop();
      this.array.push(this.technique[0]);
      console.log(this.array);
    }else if(this.selectedFeature.length == 2){
      this.array.pop();
      this.array.push(this.technique[1]);
    }else if(this.selectedFeature.length > 2){
      this.array.pop();
      this.array.push(this.technique[2]);
    }
    console.log(this.array);
  }
  onSelectAll(items: any) {
    console.log(items);
    this.selectedFeatures.push(items);
    console.log(this.selectedFeatures);
    console.log(this.selectedFeatures[0].length);
    if(this.selectedFeatures[0].length == 1){
      this.array.push(this.technique[0]);
     }else if(this.selectedFeatures[0].length == 2){
      this.array.push(this.technique[1]);
     }else if(this.selectedFeatures[0].length > 2){
      this.array.push(this.technique[2]);
     }
    console.log(this.array);
  }
  piechart(){
    this.piecharttab = true;
  }
  selectTechnique(value){
    console.log(value);
    this.selectedtechnique = value;
    
  }
   onDeSelect(item: any) {
    this.selectedFeature.pop();
    this.array.pop();
    console.log(this.selectedFeature.length);
     console.log(item);
     console.log(this.array);
     console.log(this.array);
     if(this.selectedFeature.length == 1){
      this.array.push(this.technique[0]);
     }else if(this.selectedFeature.length == 2){
      this.array.push(this.technique[1]);
     }else if(this.selectedFeature.length > 2){
      this.array.push(this.technique[2]);
     }
  //  this.array.pop();
  //  console.log(this.array);
   }
   onDeSelectAll(items:any){
     console.log(items);
     this.selectedFeatures[0].pop();
    // this.array.pop();
    console.log(this.selectedFeatures[0].length);
   }
   Submit(){
    console.log(this.array);
    this.submittedtecnique = this.selectedtechnique;
    console.log(this.submittedtecnique);
    this.submitteddata = this.array;
   }
}
