import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeatilsRoutingModule } from './deatils-routing.module';
import { DeatilsComponent } from './deatils.component';
import {TabsModule} from 'ngx-tabset';

@NgModule({
  declarations: [DeatilsComponent],
  imports: [
    CommonModule,
    DeatilsRoutingModule,
    TabsModule
  ]
})
export class DeatilsModule { }
