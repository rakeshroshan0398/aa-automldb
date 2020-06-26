import "@angular/compiler";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AuthGuard, Globals } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmbedVideo } from 'ngx-embed-video';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { ChartModule } from 'angular-highcharts';
// import { HighchartsChartModule } from 'highcharts-angular';
import {BreadcrumbModule} from 'angular-crumbs';
import { ApiService } from './shared';
import { DataPreprocessingModule} from './home/components/data-preprocessing/data-preprocessing.module'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EmbedVideo.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    // ChartModule,
    CommonModule,
    BreadcrumbModule,
    DataPreprocessingModule
    // HighchartsChartComponent
  ],
  exports: [

  ],
  providers: [
    AuthGuard,
    Globals,
    HttpClient,
    FormsModule,
    ApiService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
