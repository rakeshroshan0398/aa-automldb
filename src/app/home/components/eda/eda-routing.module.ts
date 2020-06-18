import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EDAComponent } from './eda.component';

const routes: Routes = [{ path: '', component: EDAComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EDARoutingModule { }
