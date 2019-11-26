import { NgModule } from '@angular/core';
import {CommonDomainModule} from '../common/common-domain.module';
import {MaterialModule} from '../external/material.module';
import {FeatureListComponent} from './components/feature-list/feature-list.component';
import {FeatureDetailsComponent} from './components/feature-details/feature-details.component';
import {MomentModule} from 'ngx-moment';

@NgModule({
  declarations: [
    FeatureListComponent,
    FeatureDetailsComponent
  ],
  imports: [
    MomentModule,
    CommonDomainModule,
    MaterialModule
  ],
  exports: [
    FeatureListComponent,
    FeatureDetailsComponent
  ]
})
export class FeatureDomainModule { }
