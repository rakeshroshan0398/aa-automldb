import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRepositoryRoutingModule } from './project-repository-routing.module';
import { ProjectRepositoryComponent } from './project-repository.component';


@NgModule({
  declarations: [ProjectRepositoryComponent],
  imports: [
    CommonModule,
    ProjectRepositoryRoutingModule
  ]
})
export class ProjectRepositoryModule { }
