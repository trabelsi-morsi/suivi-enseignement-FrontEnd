 import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {RegisterProvider} from "../../providers/register/register";
import {Register} from "../../entities/register";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  register: any
  res: any
  registerToEdit: Register
  constructor(public navCtrl: NavController, private registerProvider: RegisterProvider,public alertCtrl: AlertController) {

  }

  ionViewDidEnter(){
    this.getRegisterList()
  }
  getRegisterList(){
    this.register=[];
    this.registerProvider.getAllRegister().then(data=>{
      this.register=data;
      console.log(data);
    });

  }
  onDelete(email: string){
    this.registerProvider.deleteRegister(email).then(data=>{
      this.getRegisterList();
    });
  }
  showPrompt(register: Register) {
    let prompt = this.alertCtrl.create({
      title: 'Edit User',
      inputs: [
        {
          name: 'email',
          type: 'hidden',
          value: register.email
        },
        {
          name: 'userName',
          placeholder: 'username',
          value: register.userName
        },
        {
          name: 'password',
          placeholder: 'password',
          value: register.password
        },
        {
          name: 'dateNaissance',
          placeholder: 'Birthday',
          value: register.dateNaissance,
          type: 'date'

        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Edit',
          handler: data => {
            this.registerToEdit = new Register( data.email, data.password, data.userName, data.dateNaissance);
            console.log('dddd  '+this.registerToEdit)
            this.registerProvider.addRegister(this.registerToEdit ).then(data=>{
              this.getRegisterList();
            });
          }
        }
      ]
    });
    prompt.present();
  }

}

