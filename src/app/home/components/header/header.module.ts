import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectRepositoryComponent} from '../project-repository/project-repository.component';


@NgModule({
  declarations: [ProjectRepositoryComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ProjectRepositoryComponent
  ]
})
export class HeaderModule { }
