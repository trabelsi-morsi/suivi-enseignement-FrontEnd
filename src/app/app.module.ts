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
import {DepartementPage} from "../pages/departement/departement";
import { DepartementProvider } from '../providers/departement/departement';
import { MatiereProvider } from '../providers/matiere/matiere';
import {MatierePage} from "../pages/matiere/matiere";
import {AgentAccueilPage} from "../pages/agent-accueil/agent-accueil";
import { EnseignementProvider } from '../providers/enseignement/enseignement';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    DepartementPage,
    MatierePage,
    AgentAccueilPage,
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
    DepartementPage,
    SignUpPage,
    MatierePage,
    AgentAccueilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    HttpClient,
    RegisterProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegisterProvider,
    AnimationService,
    DepartementProvider,
    MatiereProvider,
    EnseignementProvider
  ]
})
export class AppModule {}
