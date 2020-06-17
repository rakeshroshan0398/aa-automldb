import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatasetSummaryRoutingModule } from './dataset-summary-routing.module';
import { DatasetSummaryComponent } from './dataset-summary.component';


@NgModule({
  declarations: [DatasetSummaryComponent],
  imports: [
    CommonModule,
    DatasetSummaryRoutingModule
  ]
})
export class DatasetSummaryModule { }
