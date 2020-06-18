import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EDAMultivariateComponent } from './eda-multivariate.component';

const routes: Routes = [{ path: '', component: EDAMultivariateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EDAMultivariateRoutingModule { }
