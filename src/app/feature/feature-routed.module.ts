import { NgModule } from '@angular/core';
import {CommonDomainModule} from '../common/common-domain.module';
import {FeatureRoutingModule} from './feature-routing.module';
import {FeatureComponent} from './components/feature/feature.component';
import {FeatureDomainModule} from './feature-domain.module';

@NgModule({
  imports: [
    CommonDomainModule,
    FeatureRoutingModule,
    FeatureDomainModule
  ],
  declarations: [
    FeatureComponent
  ]
})
export class FeatureRoutedModule { }
