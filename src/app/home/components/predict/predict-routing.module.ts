import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PredictComponent } from './predict.component';

const routes: Routes = [{ path: '', component: PredictComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PredictRoutingModule { }
