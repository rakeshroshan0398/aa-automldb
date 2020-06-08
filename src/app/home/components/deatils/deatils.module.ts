import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeatilsRoutingModule } from './deatils-routing.module';
import { DeatilsComponent } from './deatils.component';


@NgModule({
  declarations: [DeatilsComponent],
  imports: [
    CommonModule,
    DeatilsRoutingModule
  ]
})
export class DeatilsModule { }
