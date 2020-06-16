import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EDARoutingModule } from './eda-routing.module';
import { EDAComponent } from './eda.component';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [EDAComponent],
  imports: [
    CommonModule,
    EDARoutingModule,
    ChartModule,
    HighchartsChartModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  // providers:[
  //   HighchartsChartComponent
  // ]
})
export class EDAModule { }
