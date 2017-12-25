import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import { RegisterProvider } from '../providers/register/register';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SignUpPage} from "../pages/sign-up/sign-up";
import {FormsModule} from "@angular/forms";
import {AnimatesDirective, AnimationService} from "css-animator";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    AnimatesDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    HttpClient,
    RegisterProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegisterProvider,
    AnimationService
  ]
})
export class AppModule {}
