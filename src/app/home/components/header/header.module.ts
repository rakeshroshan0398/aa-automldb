import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectRepositoryComponent} from '../project-repository/project-repository.component';
import {BreadcrumbModule} from 'angular-crumbs';


@NgModule({
  declarations: [ProjectRepositoryComponent],
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  exports:[
    ProjectRepositoryComponent
  ]
})
export class HeaderModule { }
