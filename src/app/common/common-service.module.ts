import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpService, SessionInterceptor} from './services/http.service';

@NgModule({
  imports: [
  HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SessionInterceptor,
    multi: true
  },
    HttpService,
  ]
})


export class CommonServiceModule {
  constructor() {
  }
}


