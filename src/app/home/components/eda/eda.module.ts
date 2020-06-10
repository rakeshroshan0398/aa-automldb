import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  // providers:[
  //   HighchartsChartComponent
  // ]
})
export class EDAModule { }
