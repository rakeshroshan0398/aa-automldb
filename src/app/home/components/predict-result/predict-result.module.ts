import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PredictResultRoutingModule } from './predict-result-routing.module';
import { PredictResultComponent } from './predict-result.component';


@NgModule({
  declarations: [PredictResultComponent],
  imports: [
    CommonModule,
    PredictResultRoutingModule
  ]
})
export class PredictResultModule { }
