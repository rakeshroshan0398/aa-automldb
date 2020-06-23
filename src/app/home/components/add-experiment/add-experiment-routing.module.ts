import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddExperimentComponent } from './add-experiment.component';

const routes: Routes = [{ path: '', component: AddExperimentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddExperimentRoutingModule { }
