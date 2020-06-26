import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadersComponent } from './headers.component';

const routes: Routes = [{ path: '', component: HeadersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadersRoutingModule { }
