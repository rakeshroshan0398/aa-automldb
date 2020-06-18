import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EDAUnivarateComponent } from './eda-univarate.component';

const routes: Routes = [{ path: '', component: EDAUnivarateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EDAUnivarateRoutingModule { }
