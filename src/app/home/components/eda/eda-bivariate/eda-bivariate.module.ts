import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EDABivariateRoutingModule } from './eda-bivariate-routing.module';
import { EDABivariateComponent } from './eda-bivariate.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [EDABivariateComponent],
  imports: [
    CommonModule,
    EDABivariateRoutingModule,
    HighchartsChartModule
  ]
})
export class EDABivariateModule { }
