import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EDAUnivarateRoutingModule } from './eda-univarate-routing.module';
import { EDAUnivarateComponent } from './eda-univarate.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [EDAUnivarateComponent],
  imports: [
    CommonModule,
    EDAUnivarateRoutingModule,
    HighchartsChartModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class EDAUnivarateModule { }
