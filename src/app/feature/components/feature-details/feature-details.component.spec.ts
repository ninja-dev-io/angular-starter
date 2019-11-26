import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FeatureDetailsComponent} from './feature-details.component';
import {CommonDomainModule} from '../../../common/common-domain.module';
import {MaterialModule} from '../../../external/material.module';
import {MomentModule} from 'ngx-moment';
import {FeatureServiceModule} from '../../feature-service.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {appReducers} from '../../../app.reducers';
import {FeatureEffects} from '../../effects/feature.effects';
import {CommonServiceModule} from '../../../common/common-service.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('CryptocurrencyDetailsComponent', () => {
    let component: FeatureDetailsComponent;
    let fixture: ComponentFixture<FeatureDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MomentModule,
                CommonDomainModule,
                CommonServiceModule,
                MaterialModule,
                FeatureServiceModule,
                RouterTestingModule,
                StoreModule.forRoot(appReducers),
                EffectsModule.forRoot([FeatureEffects])],
            declarations: [FeatureDetailsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FeatureDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});


