 import { Component } from '@angular/core';
import {LoadingController, NavController,AlertController,} from 'ionic-angular';
import {RegisterProvider} from "../../providers/register/register";
import {Register} from "../../entities/register";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  register: any
  registerToEdit: Register
  constructor(public navCtrl: NavController, private registerProvider: RegisterProvider,public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

  }

  ionViewDidEnter(){
    this.getRegisterList()
  }
  getRegisterList(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.register=[];
    this.registerProvider.getAllRegister().then(data=>{
      this.register=data;
      loading.dismiss();
      console.log(data);
    });

  }

  doRefresh(refresher) {
    this.register = [];
    this.registerProvider.getAllRegister().then(data => {
      this.register = data;
      refresher.complete();
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
  getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.register = this.register.filter((item) => {
        return (item.userName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else {

      this.getRegisterList();
      return  this.register;

    }
  }

}

