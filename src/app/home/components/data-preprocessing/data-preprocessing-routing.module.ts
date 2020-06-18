import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataPreprocessingComponent } from './data-preprocessing.component';

const routes: Routes = [{ path: '', component: DataPreprocessingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataPreprocessingRoutingModule { }
