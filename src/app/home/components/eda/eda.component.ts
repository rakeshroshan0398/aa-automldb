import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { IDropdownSettings } from 'ng-multiselect-dropdown/public_api';
declare var $: any;

@Component({
  selector: 'app-eda',
  templateUrl: './eda.component.html',
  styleUrls: ['./eda.component.scss']
})
export class EDAComponent implements OnInit {
  piecharttab = false;
highcharts = Highcharts;
public chartOptions1:any = {   
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

// Line Plot
public chartOptions: any = {   
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

public chartOptions2:any = {   
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
// Scatter Chart

public ScatterChart:any = {         
   title : {
      text: 'Scatter plot'   
   },      
   series : [{
      type: 'scatter',
      zoomType:'xy',
      name: 'Browser share',
      data: [ 1, 1.5, 2.8, 3.5, 3.9, 4.2 ]
   }]
};

public Histogram:any = {
   chart: {
       renderTo: 'container',
       type: 'column'
   },
   title : {
      text: 'Histogram'   
   },
   xAxis: {
       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
   },
   
   plotOptions: {
       column: {
           groupPadding: 0,
           pointPadding: 0,
           borderWidth: 0
       }
   },

   series: [{
       data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
   }]

}

public BoxPlotChart:any = {

       chartype :{
          type: 'boxplot'
      },
       chartitle : {
          text: 'Highcharts Box Plot Example'
      },
       chartlegend : {
          enabled: false
      },
       chartxaxis : {
          categories: ['1', '2', '3', '4', '5'],
          title: {
              text: 'Experiment No.'
          }
      },
       chartyaxis : {
          title: {
              text: 'Observations'
          },
          plotLines: [{
              value: 932,
              color: 'red',
              width: 1,
              label: {
                  text: 'Theoretical mean: 932',
                  align: 'center',
                  style: {
                      color: 'gray'
                  }
              }
          }]
      },
       chartplotoptions : {
          series: {
              pointStart: 0,
              pointInterval: 45
          },
          column: {
              pointPadding: 0,
              groupPadding: 0
          }
      },
       chartseries : [{
          name: 'Observations',
          data: [
              [760, 801, 848, 895, 965],
              [733, 853, 939, 980, 1080],
              [714, 762, 817, 870, 918],
              [724, 802, 806, 871, 950],
              [834, 836, 864, 882, 910]
          ],
          tooltip: {
              headerFormat: '<em>Experiment No {point.key}</em><br/>'
          }
      }, {
          name: 'Outlier',
          color: Highcharts.getOptions().colors[0],
          type: 'scatter',
          data: [ // x, y positions where 0 is the first category
              [0, 644],
              [4, 718],
              [4, 951],
              [4, 969]
          ],
          marker: {
              fillColor: 'white',
              lineWidth: 1,
              lineColor: Highcharts.getOptions().colors[0]
          },
          tooltip: {
              pointFormat: 'Observation: {point.y}'
          }
      }]
}
// Stacked chart
public StackedChart:any = {
   chart: {
       type: 'bar'
   },
   title: {
       text: 'Stacked bar chart'
   },
   xAxis: {
       categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
   },
   yAxis: {
       min: 0,
       title: {
           text: 'Total fruit consumption'
       }
   },
   legend: {
       reversed: true
   },
   plotOptions: {
       series: {
           stacking: 'normal'
       }
   },
   series: [{
       name: 'John',
       data: [5, 3, 4, 7, 2]
   }, {
       name: 'Jane',
       data: [2, 2, 3, 2, 1]
   }, {
       name: 'Joe',
       data: [3, 4, 4, 2, 5]
   }]
}

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
// technique = [
//   {id:"1","chart":"Univarate"},
//   {id:"2","chart":"Biviarate"},
//   {id:"3","chart":"Multivarate"}
// ]
technique = [
   {id:"1","chart":"Pie Chart"},
   {id:"2","chart":"Bar Chart"},
   {id:"3","chart":"Histogram"},
   {id:"4","chart":"Box Plot"},
   {id:"5","chart":"Scatter Plot"},
   {id:"6","chart":"Bar Chart"},
   {id:"7","chart":"Histogram"},
   {id:"8","chart":"Box Plot"},
   {id:"9","chart":"Stacked Chart"},
   {id:"10","chart":"Line Plot"},
   {id:"11","chart":"Swarm Plot"},
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
  loadPieChart(){
   Highcharts.chart('container', this.chartOptions2);
}
  loadBarchart(){
   Highcharts.chart('container', this.chartOptions1);
  }
  loadHistogram(){
   Highcharts.chart('container', this.Histogram);
  }
  loadBoxPlot(){
   Highcharts.chart('container', this.BoxPlotChart);
  }
  loadScatterPlot(){
   Highcharts.chart('container', this.ScatterChart);
  }
  loadStackedPlot(){
   Highcharts.chart('container', this.StackedChart);
  }
  loadLinePlot(){
   Highcharts.chart('container', this.chartOptions);
  }
 loadSwarmPlot(){

 }
  onItemSelect(item: any) {
    console.log(this.technique)
    console.log(item);
    this.selectedFeature.push(item);
    console.log(this.selectedFeature);
    console.log(this.selectedFeature.length);
    if(this.selectedFeature.length == 1){
      this.array = [];
      this.array.push(this.technique[0],
         this.technique[1],this.technique[2],
                      this.technique[3]
                      );
      console.log(this.array);
    }else if(this.selectedFeature.length == 2){
      this.array = [];
      this.array.push(this.technique[4],
         this.technique[5],this.technique[6],this.technique[7],
                     this.technique[8],this.technique[9],this.technique[10]
                     );
    }else if(this.selectedFeature.length > 2){
      this.array = [];
      // this.array.push(this.technique[2]);
    }
    console.log(this.array);
  }
  onSelectAll(items: any) {
    console.log(items);
    this.selectedFeature.push(items);
    console.log(this.selectedFeature);
    console.log(this.selectedFeature[0].length);
    if(this.selectedFeature[0].length == 1){
      this.array.push(this.technique[0]);
     }else if(this.selectedFeature[0].length == 2){
      this.array.push(this.technique[1]);
     }else if(this.selectedFeature[0].length > 2){
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
      this.array = [];
      this.array.push(this.technique[0],
         this.technique[1],this.technique[2],
                      this.technique[3]
                      );
      }else if(this.selectedFeature.length == 2){
         this.array = [];
         this.array.push(this.technique[4],
            this.technique[5],this.technique[6],this.technique[7],
                        this.technique[8],this.technique[9],this.technique[10]
                        );
      }else if(this.selectedFeature.length > 2){
      this.array.push(this.technique[2]);
     }
  //  this.array.pop();
  //  console.log(this.array);
   }
   onDeSelectAll(items:any){
     console.log(items);
     this.selectedFeature[0].pop();
    this.array.pop();
    console.log(this.selectedFeature[0].length);
   }
   Submit(){
    console.log(this.array);
    this.submittedtecnique = this.selectedtechnique;
    console.log(this.submittedtecnique);
    this.submitteddata = this.array;
    if(this.selectedtechnique == "Bar Chart"){
    console.log(this.selectedtechnique)
    this.loadBarchart();
   //  Highcharts.chart('container', this.chartOptions1);
   }else if(this.selectedtechnique == "Pie Chart"){
     this.loadPieChart()
   }else if(this.selectedtechnique == "Histogram"){
     this.loadHistogram();
   }else if(this.selectedtechnique == "Box Plot"){
     this.loadBoxPlot();
   }else if(this.selectedtechnique == "Scatter Plot"){
      this.loadScatterPlot();
    }else if(this.selectedtechnique == "Stacked Chart"){
      this.loadStackedPlot();
    }else if(this.selectedtechnique == "Line Plot"){
      this.loadLinePlot();
    }else if(this.selectedtechnique == "Swarm Plot"){
      this.loadSwarmPlot();
    }
}
}
