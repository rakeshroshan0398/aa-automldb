import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }   from './home.component';


const routes: Routes = [
  // { path: '', redirectTo: '/ins-counterfeit', pathMatch: 'full' },
  // { path: 'project-repository', loadChildren: () => import('./components/project-repository/project-repository.module').then(m => m.ProjectRepositoryModule) },
  { path: '', component: HomeComponent,
    children: [
      { path: 'project-repository', loadChildren: () => import('./components/project-repository/project-repository.module').then(m => m.ProjectRepositoryModule) },
      { path: 'Deatils', loadChildren: () => import('./components/deatils/deatils.module').then(m => m.DeatilsModule) },
      { path: 'intro', loadChildren: () => import('./components/intro/intro.module').then(m => m.IntroModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
