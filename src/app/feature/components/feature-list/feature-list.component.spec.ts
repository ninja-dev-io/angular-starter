import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FeatureListComponent} from './feature-list.component';
import {CommonDomainModule} from '../../../common/common-domain.module';
import {MaterialModule} from '../../../external/material.module';
import {FeatureServiceModule} from '../../feature-service.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {appReducers} from '../../../app.reducers';
import {FeatureEffects} from '../../effects/feature.effects';
import {CommonServiceModule} from '../../../common/common-service.module';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateStore} from '@ngx-translate/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FeatureService} from '../../services/feature.service';
import {of} from 'rxjs';
import {DATA_FAKE_RESPONSE} from '../../constants/constants';
import {ResponseBody} from '../../../common/base/response-body.interface';

describe('FeatureListComponent', () => {
    let component: FeatureListComponent;
    let fixture: ComponentFixture<FeatureListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonDomainModule,
                CommonServiceModule,
                MaterialModule,
                FeatureServiceModule,
                StoreModule.forRoot(appReducers),
                EffectsModule.forRoot([FeatureEffects]),
                RouterTestingModule,
                NoopAnimationsModule
            ],
            declarations: [FeatureListComponent],
            providers: [TranslateStore]
        })
            .compileComponents();
    }));

    beforeEach(async () => {
        fixture = TestBed.createComponent(FeatureListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should return data', (done) => {
        const featureService = fixture.debugElement.injector.get(FeatureService);
        spyOn(featureService, 'getData').and.returnValue(of(DATA_FAKE_RESPONSE));
        featureService.getData('1').subscribe((responseBody: ResponseBody<any>) => {
            expect(responseBody).toBe(DATA_FAKE_RESPONSE);
            done();
        });
    });
});
