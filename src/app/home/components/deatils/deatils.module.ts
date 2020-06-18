import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeatilsRoutingModule } from './deatils-routing.module';
import { DeatilsComponent } from './deatils.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
@NgModule({
  declarations: [DeatilsComponent],
  imports: [
    CommonModule,
    DeatilsRoutingModule,
    TabsModule.forRoot(),
    FormsModule
  ]
})
export class DeatilsModule { }
