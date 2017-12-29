import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SignUpPage} from "../sign-up/sign-up";
import {animation} from "@angular/core/src/animation/dsl";
import {AnimationBuilder, AnimationService} from "css-animator";
import {HomePage} from "../home/home";
import {MyApp} from "../../app/app.component";
import {RegisterProvider} from "../../providers/register/register";
import {Register} from "../../entities/register";
import {AgentAccueilPage} from "../agent-accueil/agent-accueil";

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
  @ViewChild('myElement') myElem;
  private animator: AnimationBuilder;

  ngOnInit(): void {
  }

  email: string
  password: string
  username: string
  r: any = null
  error: string = null

  constructor(public navCtrl: NavController, public navParams: NavParams, animationService: AnimationService, private registerProvider: RegisterProvider) {
    this.animator = animationService.builder();
  }

  ionViewDidLoad() {
    this.animateElem();
    this.error = this.navParams.get('error');

  }

  animateElem() {
    this.animator.setType('flipInX').show(this.myElem.nativeElement);
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
          this.navCtrl.setRoot(HomePage);
        } else {
          this.navCtrl.setRoot(AgentAccueilPage);
        }


      } else {
        this.navCtrl.setRoot(LoginPage, {error: " Email/mot de passe incorrect !"});
      }

    });
  }
}
