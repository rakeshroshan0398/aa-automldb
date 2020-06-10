import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

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
}

chartOptions2 = {   
  chart : {
     plotBorderWidth: null,
     plotShadow: false
  },
  title : {
     text: ''   
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

  constructor() {
   }

  ngOnInit(): void {
    // Highcharts.chart('treemap1', this.treeMapOptions);

  }
  piechart(){
    this.piecharttab = true;
  }
}
