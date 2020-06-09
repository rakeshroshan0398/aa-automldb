import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EDAPandasProfileComponent } from './eda-pandas-profile.component';

const routes: Routes = [{ path: '', component: EDAPandasProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EDAPandasProfileRoutingModule { }
