import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeatilsComponent } from './deatils.component';

const routes: Routes = [{ path: '', component: DeatilsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeatilsRoutingModule { }
