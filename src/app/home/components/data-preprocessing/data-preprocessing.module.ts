import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataPreprocessingRoutingModule } from './data-preprocessing-routing.module';
import { DataPreprocessingComponent } from './data-preprocessing.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { EdaVisualizationComponent } from '../eda/eda-visualization/eda-visualization.component';


@NgModule({
  declarations: [DataPreprocessingComponent, EdaVisualizationComponent],
  imports: [
    CommonModule,
    DataPreprocessingRoutingModule,
    HighchartsChartModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DataPreprocessingModule { }
