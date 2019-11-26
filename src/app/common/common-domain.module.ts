import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {MainComponent} from './components/main/main.component';

import {TitlePipe} from './pipes/title.pipe';


import {CapitalizePipe} from './pipes/capitalize.pipe';


import {MaterialModule} from '../external/material.module';
import {FooterComponent} from './components/footer/footer.component';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    MaterialModule,
    TranslateModule.forChild()
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    TitlePipe,
    CapitalizePipe,
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MainComponent,
    TitlePipe,
    CapitalizePipe,
    TranslateModule
  ],
  entryComponents: []
})
export class CommonDomainModule {


  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('logo', domSanitizer.bypassSecurityTrustResourceUrl('../../assets/logo.svg'));

  }
}
