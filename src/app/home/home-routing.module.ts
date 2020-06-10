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
      { path: 'EDA', loadChildren: () => import('./components/eda/eda.module').then(m => m.EDAModule) },
      { path: 'EDA-Univarate', loadChildren: () => import('./components/eda/eda-univarate/eda-univarate.module').then(m => m.EDAUnivarateModule) },
      { path: 'EDA-Bivaraiate', loadChildren: () => import('./components/eda/eda-bivariate/eda-bivariate.module').then(m => m.EDABivariateModule) },
      { path: 'EDA-Multivariate', loadChildren: () => import('./components/eda/eda-multivariate/eda-multivariate.module').then(m => m.EDAMultivariateModule) },
      { path: 'EDA-Pandas-profile', loadChildren: () => import('./components/eda/eda-pandas-profile/eda-pandas-profile.module').then(m => m.EDAPandasProfileModule) },
      { path: 'Data-preprocessing', loadChildren: () => import('./components/data-preprocessing/data-preprocessing.module').then(m => m.DataPreprocessingModule) },
      { path: 'Feature-Engineering', loadChildren: () => import('./components/feature-engineering/feature-engineering.module').then(m => m.FeatureEngineeringModule) },
      { path: 'Predict', loadChildren: () => import('./components/predict/predict.module').then(m => m.PredictModule) },
      { path: 'intro', loadChildren: () => import('./components/intro/intro.module').then(m => m.IntroModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
