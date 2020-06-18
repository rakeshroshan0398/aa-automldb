import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PredictResultComponent } from './predict-result.component';

const routes: Routes = [{ path: '', component: PredictResultComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PredictResultRoutingModule { }
