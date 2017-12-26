import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Departement} from "../../entities/departement";
import {DepartementProvider} from "../../providers/departement/departement";

/**
 * Generated class for the DepartementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-departement',
  templateUrl: 'departement.html',
})
export class DepartementPage implements OnInit {
  ngOnInit(): void {
  }

  departement: any
  departementToEdit: Departement

  constructor(public navCtrl: NavController, public navParams: NavParams, private departementProvider: DepartementProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.getDepartementList()

  }

  getDepartementList() {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.departement = [];
    this.departementProvider.getAllDepartement().then(data => {
      this.departement = data;
      loading.dismiss();
      console.log(data);
    });

  }

  onDelete(id: number) {
    this.departementProvider.deleteDepartement(id).then(data => {
      this.getDepartementList();
    });
  }

  showPrompt(departement: Departement) {
    let prompt = this.alertCtrl.create({
      title: 'Edit User',
      inputs: [
        {
          name: 'id',
          type: 'hidden',
          value: departement.id.toString()
        },
        {
          name: 'nom',
          placeholder: 'Nom de departement',
          value: departement.nom
        }
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
            this.departementToEdit = new Departement(data.id, data.nom);
            console.log('dddd  ' + this.departementToEdit)
            this.departementProvider.addDepartement(this.departementToEdit).then(data => {
              this.getDepartementList();
            });
          }
        }
      ]
    });
    prompt.present();
  }

  showPromptAdd() {
    let prompt = this.alertCtrl.create({
      title: 'Ajouter un departement',
      inputs: [
        {
          name: 'id',
          type: 'hidden',

        },
        {
          name: 'nom',
          placeholder: 'Nom',
          type: 'text',

        }

      ],
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: data => {
            console.log(data.id);
            this.departementToEdit = new Departement(null, data.nom);
            console.log('dddd  ' + this.departementToEdit)
            this.departementProvider.addDepartement(this.departementToEdit).then(data => {
              this.getDepartementList();

            });

          }
        }
      ]
    });
    prompt.present();
  }

  doRefresh(refresher) {
    this.departement = [];
    this.departementProvider.getAllDepartement().then(data => {
      this.departement = data;
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
      this.departement = this.departement.filter((item) => {
        return (item.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else {

        this.getDepartementList();
        return  this.departement;

    }
  }


}
