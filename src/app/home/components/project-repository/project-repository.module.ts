import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRepositoryRoutingModule } from './project-repository-routing.module';
import { ProjectRepositoryComponent } from './project-repository.component';
import { HeaderComponent } from '../header/header.component'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {BreadcrumbModule} from 'angular-crumbs';

@NgModule({
  declarations: [ProjectRepositoryComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ProjectRepositoryRoutingModule,
    FormsModule,
    BreadcrumbModule
  ],
  exports: [
    HeaderComponent
  ],
})
export class ProjectRepositoryModule { }
