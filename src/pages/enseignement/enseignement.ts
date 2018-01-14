import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams,MenuController} from 'ionic-angular';
import {EnseignementProvider} from "../../providers/enseignement/enseignement";
import {Enseignement} from "../../entities/enseignement";
import {EnseignementFormPage} from "./enseignement-form/enseignement-form";
import {AnimationBuilder, AnimationService} from "css-animator";

/**
 * Generated class for the EnseignementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enseignement',
  templateUrl: 'enseignement.html',
})
export class EnseignementPage implements OnInit{

  enseignement: any
  enseignementToEdit: Enseignement
  ngOnInit(): void {
  }

  constructor(public menuClt:MenuController,public navCtrl: NavController, public navParams: NavParams, private enseignementProvider: EnseignementProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.menuClt.enable(true,'menuzone');
  }

  ionViewDidLoad() {
    this.getEnseignementList()
  }
  getEnseignementList() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.enseignement = [];
    this.enseignementProvider.getAll().then(data => {
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
    this.enseignementProvider.getAll().then(data => {
      this.enseignement = data;
      refresher.complete();
    });
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.enseignement = this.enseignement.filter((item) => {
        return (item.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else {
      this.getEnseignementList();
      return  this.enseignement;
    }
  }
  addEns(){
    this.navCtrl.push(EnseignementFormPage);
  }

}
