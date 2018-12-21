import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {Login2Component} from './login2/login2.component';
import {Login3Component} from './login3/login3.component';
import {Login4Component} from './login4/login4.component';
import {Login5Component} from './login5/login5.component';
import {Login6Component} from './login6/login6.component';
import {Login7Component} from './login7/login7.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login2', component: Login2Component },
  { path: 'login3', component: Login3Component },
  { path: 'login4', component: Login4Component },
  { path: 'login5', component: Login5Component },
  { path: 'login6', component: Login6Component },
  { path: 'login7', component: Login7Component },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
