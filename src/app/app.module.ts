import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {CommonServiceModule} from './common/common-service.module';
import {FeatureServiceModule} from './feature/feature-service.module';
import {FeatureEffects} from './feature/effects/feature.effects';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './app.reducers';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {HttpLoaderFactory} from './http-loader.factory';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonServiceModule,
    FeatureServiceModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([FeatureEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'routerState'}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


