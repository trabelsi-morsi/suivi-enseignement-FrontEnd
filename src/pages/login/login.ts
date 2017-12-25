import {Component, OnInit, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignUpPage} from "../sign-up/sign-up";
import {animation} from "@angular/core/src/animation/dsl";
import {AnimationBuilder, AnimationService} from "css-animator";
import {HomePage} from "../home/home";

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
export class LoginPage implements  OnInit{
  @ViewChild('myElement') myElem;
  private animator: AnimationBuilder;
  ngOnInit(): void {
  }



  constructor(public navCtrl: NavController, public navParams: NavParams,animationService: AnimationService) {
    this.animator = animationService.builder();
  }

  ionViewDidLoad() {
    this.animateElem();
  }

  animateElem() {
    this.animator.setType('flipInX').show(this.myElem.nativeElement);
  }
  onSignUpClick(){
   this.navCtrl.push(SignUpPage);
  }
  onSignInClick(){
    this.navCtrl.setRoot(HomePage);
  }
}
