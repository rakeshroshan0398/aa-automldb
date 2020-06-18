import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatasetSummaryComponent } from './dataset-summary.component';

const routes: Routes = [{ path: '', component: DatasetSummaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatasetSummaryRoutingModule { }
