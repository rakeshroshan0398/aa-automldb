import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PandasProfilingRoutingModule } from './pandas-profiling-routing.module';
import { PandasProfilingComponent } from './pandas-profiling.component';


@NgModule({
  declarations: [PandasProfilingComponent],
  imports: [
    CommonModule,
    PandasProfilingRoutingModule
  ]
})
export class PandasProfilingModule { }
