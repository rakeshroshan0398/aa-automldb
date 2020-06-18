import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureEngineeringRoutingModule } from './feature-engineering-routing.module';
import { FeatureEngineeringComponent } from './feature-engineering.component';


@NgModule({
  declarations: [FeatureEngineeringComponent],
  imports: [
    CommonModule,
    FeatureEngineeringRoutingModule
  ]
})
export class FeatureEngineeringModule { }
