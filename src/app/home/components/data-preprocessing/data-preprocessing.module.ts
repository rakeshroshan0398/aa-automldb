import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataPreprocessingRoutingModule } from './data-preprocessing-routing.module';
import { DataPreprocessingComponent } from './data-preprocessing.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [DataPreprocessingComponent],
  imports: [
    CommonModule,
    DataPreprocessingRoutingModule,
    HighchartsChartModule
  ]
})
export class DataPreprocessingModule { }
