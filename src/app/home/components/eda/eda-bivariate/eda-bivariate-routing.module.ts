import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EDABivariateComponent } from './eda-bivariate.component';

const routes: Routes = [{ path: '', component: EDABivariateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EDABivariateRoutingModule { }
