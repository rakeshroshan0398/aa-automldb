import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PredictRoutingModule } from './predict-routing.module';
import { PredictComponent } from './predict.component';


@NgModule({
  declarations: [PredictComponent],
  imports: [
    CommonModule,
    PredictRoutingModule
  ]
})
export class PredictModule { }
