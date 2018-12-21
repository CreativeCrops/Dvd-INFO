import {NgtUniversalModule} from '@ng-toolkit/universal';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {LoginComponent} from './login/login.component';
import {Login2Component} from './login2/login2.component';
import {Login3Component} from './login3/login3.component';
import {Login4Component} from './login4/login4.component';
import {Login5Component} from './login5/login5.component';
import {Login6Component} from './login6/login6.component';
import {HttpClientModule} from '@angular/common/http';
import { Login7Component } from './login7/login7.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Login2Component,
    Login3Component,
    Login4Component,
    Login5Component,
    Login6Component,
    Login7Component
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    HttpClientModule,


    AppRoutingModule
  ],
  providers: [],
})
export class AppModule {
}
