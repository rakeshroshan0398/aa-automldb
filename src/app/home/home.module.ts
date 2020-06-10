import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// import { HeaderComponent }   from './components/header/header.component';
import {ProjectRepositoryModule} from '../home/components/project-repository/project-repository.module';
import { FooterComponent }   from './components/footer/footer.component';
// import { ChartModule } from 'angular-highcharts';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    // ChartModule,
    FormsModule,
    ProjectRepositoryModule
  ],
  declarations: [
    HomeComponent,
    // HeaderComponent,
    FooterComponent,
    SidebarComponent,
    // ProjectRepositoryComponent
  ],
  exports: [
    HomeComponent,
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }