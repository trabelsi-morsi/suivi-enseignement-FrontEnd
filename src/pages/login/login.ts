import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams,MenuController} from 'ionic-angular';
import {SignUpPage} from "../sign-up/sign-up";
import {AnimationBuilder, AnimationService} from "css-animator";
import {RegisterProvider} from "../../providers/register/register";
import {AgentAccueilPage} from "../agent-accueil/agent-accueil";
import { Storage } from '@ionic/storage';
import {HomePage} from "../home/home";
import {DashbordPage} from "../dashbord/dashbord";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {

  ngOnInit(): void {
  }

  email: string
  password: string
  username: string
  r: any = null
  error: string = null
  user:any;

  constructor(public menuClt:MenuController,public navCtrl: NavController, public navParams: NavParams
              , private registerProvider: RegisterProvider,private storage: Storage) {

    this.menuClt.enable(false,'menuzone')
  }

  ionViewDidLoad() {
    this.storage.get('user').then((val) => {
      this.user=val;
      if(this.user!=null){
        if(this.user.admin==true){
          this.navCtrl.setRoot(DashbordPage);
        }else{
          this.navCtrl.setRoot(AgentAccueilPage);
        }
      }
    });

    this.error = this.navParams.get('error');

  }



  onSignUpClick() {
    this.navCtrl.push(SignUpPage);
  }

  onSignInClick() {

    this.registerProvider.getOne(this.email).then(data => {
      this.r = data
      console.log('sdfghjkl  ' + this.r)
      // if (this.r.email == null) {
      //   this.navCtrl.setRoot(LoginPage, {error: " utilisateur introuvable !"});
      // }
      // else
      if (this.password == this.r.password) {

        if (this.r.admin) {
          this.storage.set('user', this.r);
           this.navCtrl.setRoot(DashbordPage);
        } else {
          this.storage.set('user', this.r);
          this.navCtrl.setRoot(AgentAccueilPage);
        }


      } else {
        this.navCtrl.setRoot(LoginPage, {error: " Email/mot de passe incorrect !"});
      }

    });
  }
}
