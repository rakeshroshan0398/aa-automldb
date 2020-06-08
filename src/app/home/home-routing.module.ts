import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }   from './home.component';


const routes: Routes = [
  { path: '', redirectTo: '/ins-counterfeit', pathMatch: 'full' },
  { path: '', component: HomeComponent,
    children: [
      { path: 'intro', loadChildren: () => import('./components/intro/intro.module').then(m => m.IntroModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
