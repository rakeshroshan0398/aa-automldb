import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddExperimentRoutingModule } from './add-experiment-routing.module';
import { AddExperimentComponent } from './add-experiment.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [AddExperimentComponent],
  imports: [
    CommonModule,
    AddExperimentRoutingModule,
    FormsModule
  ]
})
export class AddExperimentModule { }
