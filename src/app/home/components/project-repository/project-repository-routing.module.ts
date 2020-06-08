import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectRepositoryComponent } from './project-repository.component';

const routes: Routes = [{ path: '', component: ProjectRepositoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRepositoryRoutingModule { }
