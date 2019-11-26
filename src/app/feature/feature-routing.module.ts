import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../common/components/main/main.component';
import {FeatureComponent} from './components/feature/feature.component';
import {FeatureListComponent} from './components/feature-list/feature-list.component';
import {FeatureDetailsComponent} from './components/feature-details/feature-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [], // Guard placeholder
    children: [
      {
        path: '', component: FeatureComponent,
        children: [
          {path: '', component: FeatureListComponent},
          {path: ':id', component: FeatureDetailsComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
