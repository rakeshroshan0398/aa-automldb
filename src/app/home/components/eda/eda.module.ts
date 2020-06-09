import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EDARoutingModule } from './eda-routing.module';
import { EDAComponent } from './eda.component';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [EDAComponent],
  imports: [
    CommonModule,
    EDARoutingModule,
    ChartModule,
    HighchartsChartModule
  ],
  // providers:[
  //   HighchartsChartComponent
  // ]
})
export class EDAModule { }
