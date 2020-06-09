import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EDAMultivariateRoutingModule } from './eda-multivariate-routing.module';
import { EDAMultivariateComponent } from './eda-multivariate.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [EDAMultivariateComponent],
  imports: [
    CommonModule,
    EDAMultivariateRoutingModule,
    HighchartsChartModule
  ]
})
export class EDAMultivariateModule { }
