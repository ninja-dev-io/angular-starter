import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureComponent } from './feature.component';
import {MomentModule} from 'ngx-moment';
import {CommonDomainModule} from '../../../common/common-domain.module';
import {MaterialModule} from '../../../external/material.module';
import {FeatureServiceModule} from '../../feature-service.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {appReducers} from '../../../app.reducers';
import {FeatureEffects} from '../../effects/feature.effects';
import {CommonServiceModule} from '../../../common/common-service.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('FeatureComponent', () => {
  let component: FeatureComponent;
  let fixture: ComponentFixture<FeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonDomainModule,
        CommonServiceModule,
        MaterialModule,
        FeatureServiceModule,
        RouterTestingModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([FeatureEffects])],
      declarations: [ FeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
