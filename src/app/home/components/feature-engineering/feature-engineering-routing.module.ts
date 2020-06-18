import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureEngineeringComponent } from './feature-engineering.component';

const routes: Routes = [{ path: '', component: FeatureEngineeringComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureEngineeringRoutingModule { }
