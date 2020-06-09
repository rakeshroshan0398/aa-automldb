import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRepositoryRoutingModule } from './project-repository-routing.module';
import { ProjectRepositoryComponent } from './project-repository.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  declarations: [ProjectRepositoryComponent,HeaderComponent],
  imports: [
    CommonModule,
    ProjectRepositoryRoutingModule
  ],
  exports: [
    HeaderComponent
  ],
})
export class ProjectRepositoryModule { }
