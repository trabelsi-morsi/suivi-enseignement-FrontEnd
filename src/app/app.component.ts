import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {SignUpPage} from "../pages/sign-up/sign-up";
import {DepartementPage} from "../pages/departement/departement";
import {MatierePage} from "../pages/matiere/matiere";
import {Enseignement} from "../entities/enseignement";
import {AgentAccueilPage} from "../pages/agent-accueil/agent-accueil";
import {SallePage} from "../pages/salle/salle";
import {EnseignantPage} from "../pages/enseignant/enseignant";
import {NiveauPage} from "../pages/niveau/niveau";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [


      {title: 'login', component: LoginPage},
      {title: 'Home', component: HomePage},
      {title: 'Matière', component: MatierePage},
      {title: 'Departement', component: DepartementPage},
      {title: 'Sign up', component: SignUpPage},
      {title: 'Salle', component: SallePage},
      { title: 'Enseignement', component: AgentAccueilPage },
      {title: 'Enseignant', component: EnseignantPage},
      {title: 'Niveau', component: NiveauPage}
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
