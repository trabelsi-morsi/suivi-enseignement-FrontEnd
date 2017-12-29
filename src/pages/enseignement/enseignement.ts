import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
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

  @ViewChild('item') myElem;
  private animator: AnimationBuilder;
  enseignement: any
  enseignementToEdit: Enseignement
  ngOnInit(): void {
  }

  constructor(public navCtrl: NavController,animationService: AnimationService, public navParams: NavParams, private enseignementProvider: EnseignementProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.animator = animationService.builder();
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
    this.animator.setType('slideInLeft').show(this.myElem.nativeElement)
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
