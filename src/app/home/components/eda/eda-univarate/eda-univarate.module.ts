import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EDAUnivarateRoutingModule } from './eda-univarate-routing.module';
import { EDAUnivarateComponent } from './eda-univarate.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [EDAUnivarateComponent],
  imports: [
    CommonModule,
    EDAUnivarateRoutingModule,
    HighchartsChartModule
  ]
})
export class EDAUnivarateModule { }
