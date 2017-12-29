import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {RegisterProvider} from '../providers/register/register';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SignUpPage} from "../pages/sign-up/sign-up";
import {FormsModule} from "@angular/forms";
import {AnimatesDirective, AnimationService} from "css-animator";

import {DepartementPage} from "../pages/departement/departement";
import {DepartementProvider} from '../providers/departement/departement';
import {MatiereProvider} from '../providers/matiere/matiere';
import {MatierePage} from "../pages/matiere/matiere";
import {AgentAccueilPage} from "../pages/agent-accueil/agent-accueil";
import { EnseignementProvider } from '../providers/enseignement/enseignement';
import {SalleProvider} from '../providers/salle/salle';
import {SallePage} from "../pages/salle/salle";
import {EnseignantProvider} from '../providers/enseignant/enseignant';
import {EnseignantPage} from "../pages/enseignant/enseignant";
import {NiveauProvider} from '../providers/niveau/niveau';
import {NiveauPage} from "../pages/niveau/niveau";
import {EnseignementPage} from "../pages/enseignement/enseignement";
import {EnseignementFormPage} from "../pages/enseignement/enseignement-form/enseignement-form";
import { SeanceProvider } from '../providers/seance/seance';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    SallePage,
    DepartementPage,
    MatierePage,
    AgentAccueilPage,
    EnseignantPage,
    NiveauPage,
    EnseignementPage,
    EnseignementFormPage,
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
    AgentAccueilPage,
    SallePage,
    NiveauPage,
    EnseignantPage,
    EnseignementPage,
    EnseignementFormPage,
    MatierePage
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
    EnseignementProvider,
    SalleProvider,
    DepartementProvider,
    MatiereProvider,
    EnseignantProvider,
    NiveauProvider,
    SeanceProvider

  ]
})
export class AppModule {
}
