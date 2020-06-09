import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataPreprocessingRoutingModule } from './data-preprocessing-routing.module';
import { DataPreprocessingComponent } from './data-preprocessing.component';


@NgModule({
  declarations: [DataPreprocessingComponent],
  imports: [
    CommonModule,
    DataPreprocessingRoutingModule
  ]
})
export class DataPreprocessingModule { }
