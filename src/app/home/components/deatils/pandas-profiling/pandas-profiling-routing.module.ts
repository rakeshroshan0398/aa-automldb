import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PandasProfilingComponent } from './pandas-profiling.component';

const routes: Routes = [{ path: '', component: PandasProfilingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PandasProfilingRoutingModule { }
