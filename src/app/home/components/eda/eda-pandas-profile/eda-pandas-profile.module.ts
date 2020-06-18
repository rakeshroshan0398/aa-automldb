import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EDAPandasProfileRoutingModule } from './eda-pandas-profile-routing.module';
import { EDAPandasProfileComponent } from './eda-pandas-profile.component';


@NgModule({
  declarations: [EDAPandasProfileComponent],
  imports: [
    CommonModule,
    EDAPandasProfileRoutingModule
  ]
})
export class EDAPandasProfileModule { }
