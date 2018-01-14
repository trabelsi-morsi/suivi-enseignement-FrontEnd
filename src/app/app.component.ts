import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {DepartementPage} from "../pages/departement/departement";
import {MatierePage} from "../pages/matiere/matiere";
import {Enseignement} from "../entities/enseignement";
import {AgentAccueilPage} from "../pages/agent-accueil/agent-accueil";
import {SallePage} from "../pages/salle/salle";
import {EnseignantPage} from "../pages/enseignant/enseignant";
import {NiveauPage} from "../pages/niveau/niveau";
import {EnseignementPage} from "../pages/enseignement/enseignement";
import {DashbordPage} from "../pages/dashbord/dashbord";
import { Storage } from '@ionic/storage';
import {LogoutPage} from "../pages/logout/logout";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  user: any;

  pages: Array<{ title: string, component: any ,icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

      {title: 'Dashboard', component: DashbordPage,icon:'home'},
      {title: 'Utilisateur', component: HomePage,icon:'contact'},
      {title: 'Matière', component: MatierePage,icon:'attach'},
      {title: 'Departement', component: DepartementPage,icon:'briefcase'},
      {title: 'Salle', component: SallePage,icon:'home'},
      { title: 'Enseignement', component: AgentAccueilPage,icon:'clipboard' },
      { title: 'Enseignement (admin)', component: EnseignementPage ,icon:'clipboard'},
      {title: 'Enseignant', component: EnseignantPage,icon:'person'},
      {title: 'Niveau', component: NiveauPage,icon:'school'},
      {title: 'Déconnexion', component: LogoutPage,icon:'power'}
    ];

  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    this.nav.setRoot(page.component);
  }
}
