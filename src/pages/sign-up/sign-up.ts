import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterProvider} from "../../providers/register/register";
import {Register} from "../../entities/register";
import {LoginPage} from "../login/login";

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage implements OnInit{
  ngOnInit(): void {
  }

  register: Register
  dateNaissance: Date = new Date()
  mail: string
  password: string
  username: string
  constructor(public navCtrl: NavController, public navParams: NavParams, private regiterProvider: RegisterProvider) {
  }

  ionViewDidLoad() {

  }
  logForm() {
    this.register = new Register(this.mail,this.password,this.username,this.dateNaissance.toString())
    console.log(this.register)
    this.regiterProvider.addRegister(this.register )
    this.navCtrl.setRoot(LoginPage)
  }
}
