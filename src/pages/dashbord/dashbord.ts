import {Component, ViewChild} from '@angular/core';
import {IonicPage, LoadingController, MenuController, NavController, NavParams} from 'ionic-angular';
import {DepartementProvider} from "../../providers/departement/departement";
import {EnseignantProvider} from "../../providers/enseignant/enseignant";
import {EnseignementProvider} from "../../providers/enseignement/enseignement";
import { Storage } from '@ionic/storage';
import {AnimationBuilder, AnimationService} from "css-animator";

/**
 * Generated class for the DashbordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashbord',
  templateUrl: 'dashbord.html',
})
export class DashbordPage {
  departementList: any;
  enseignantList: any;
  enseignementList: any;
  missedEns: any;
  nbTotEns:any;
  nbDep: any;
  nbEnseignant: any;

  constructor(public menuClt:MenuController,public navCtrl: NavController, public navParams: NavParams,private departementProvider: DepartementProvider,
              private enseignantProvider: EnseignantProvider, private enseignementProvider: EnseignementProvider
              , public loadingCtrl: LoadingController) {
    this.menuClt.enable(true,'menuzone');

  }

  ionViewDidLoad() {
    //this.animator.setType('flipInX').show(this.myElem.nativeElement);
    this.missedEns=0;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.departementList = [];
    this.enseignantList = [];
    this.enseignementList = [];
    this.departementProvider.getAllDepartement().then(data => {
      this.departementList = data;
      this.nbDep = this.departementList.length;
    });
    this.enseignantProvider.getAll().then(data => {
      this.enseignantList = data;
      this.nbEnseignant = this.enseignantList.length;
    });
    this.enseignementProvider.today().then(data => {
      this.enseignementList = data;
      this.nbTotEns= this.enseignementList.length;
      for(let i = 0; i < this.enseignementList.length; i++){
        if(this.enseignementList[i].rate==true){
          this.missedEns+=1;
        }
      }
    });
    loading.dismiss();
  }

}
