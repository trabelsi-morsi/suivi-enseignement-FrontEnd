import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {EnseignementProvider} from "../../providers/enseignement/enseignement";
import { Storage } from '@ionic/storage';
import {LoginPage} from "../login/login";

/**
 * Generated class for the AgentAccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agent-accueil',
  templateUrl: 'agent-accueil.html',
})
export class AgentAccueilPage {

  enseignement: any
  user: any;
  isToggled: boolean;
  isEmpty: boolean =true;
  firstToggle= true
  date: Date = new Date()
  enseignementList = new Array();
  constructor(public navCtrl: NavController, public navParams: NavParams, private enseignementProvider: EnseignementProvider
              , public alertCtrl: AlertController, public loadingCtrl: LoadingController,private storage: Storage) {
    this.isToggled=false
  }

  ionViewDidLoad() {
    this.getEnseignementList();
    this.storage.get('user').then((val) => {
      this.user = val.admin;
    });
  }
  getEnseignementList() {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.enseignement = [];
    this.enseignementList = [];
    this.enseignementProvider.today().then(data => {
      this.enseignement = data;
      loading.dismiss();
      console.log(data);
    });
  }
  onDelete(id: number) {
    this.enseignementProvider.delete(id).then(data => {
      this.getEnseignementList();
    });
  }
  doRefresh(refresher) {
    this.enseignement = [];
    this.enseignementProvider.today().then(data => {
      this.enseignement = data;
      refresher.complete();
    });
  }

  notify(id:any){
    let add= false
    for(let i = 0; i < this.enseignementList.length; i++){
      if(this.enseignementList[i]==id){
        this.enseignementList.splice(i,1)
        add=false
        break
      }else{
        add=true
      }
    }
    if(add==true || this.firstToggle){
      this.enseignementList.push(id)
      this.firstToggle=false
    }
    if(this.enseignementList.length==0){
      this.firstToggle=true
    }

    console.log('cccc' +this.enseignementList.toString())
  }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Confirmer l\'envoi des emails' ,
      buttons: [
        {
          text: 'Non',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Oui',
          handler: () => {
            let loading = this.loadingCtrl.create({
              content: 'Please wait...',
              duration: 8000
            });

            loading.present();
            for(let i = 0; i < this.enseignementList.length; i++){
              this.enseignementProvider.sendMail(this.enseignementList[i]);
            }
            this.getEnseignementList();
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  logout(){
    this.storage.clear();
    this.navCtrl.setRoot(LoginPage);
  }
}
