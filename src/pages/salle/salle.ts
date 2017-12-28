import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Matiere} from "../../entities/matiere";
import {Salle} from "../../entities/salle";
import {MatiereProvider} from "../../providers/matiere/matiere";
import {SalleProvider} from "../../providers/salle/salle";

/**
 * Generated class for the SallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salle',
  templateUrl: 'salle.html',
})
export class SallePage implements OnInit {
  ngOnInit(): void {
  }

  salle: any
  res: any
  salleToEdit: Salle

  constructor(public navCtrl: NavController, private salleProvider: SalleProvider, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.getSalleList();
  }

  getSalleList() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.salle = [];
    this.salleProvider.getAll().then(data => {
      this.salle = data;
      loading.dismiss();
    });

  }

  doRefresh(refresher) {
    this.salle = [];
    this.salleProvider.getAll().then(data => {
      this.salle = data;
      refresher.complete();
    });
  }

  onDelete(id: number) {
    this.salleProvider.delete(id).then(data => {
      this.getSalleList();
    });
  }

  showPrompt(salle: Salle) {
    let prompt = this.alertCtrl.create({
      title: 'Modifier la matière',
      inputs: [
        {
          name: 'id',
          type: 'hidden',
          value: salle.id.toString()
        },
        {
          name: 'nomSalle',
          placeholder: 'Nom',
          type: 'text',
          value: salle.nomSalle
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
            this.salleToEdit = new Salle(parseInt(data.id), data.nomSalle);
            console.log('dddd  ' + this.salleToEdit)
            this.salleProvider.add(this.salleToEdit).then(data => {
              this.getSalleList();

            });

          }
        }
      ]
    });
    prompt.present();
  }

  showPromptAdd() {
    let prompt = this.alertCtrl.create({
      title: 'Ajouter une salle',
      inputs: [
        {
          name: 'id',
          type: 'hidden',

        },
        {
          name: 'nomSalle',
          placeholder: 'Nom',
          type: 'text',

        },
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
            this.salleToEdit = new Salle(null, data.nomSalle);
            console.log('dddd  ' + this.salleToEdit)
            this.salleProvider.add(this.salleToEdit).then(data => {
              this.getSalleList();

            });

          }
        }
      ]
    });
    prompt.present();
  }

  getItems(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.salle = this.salle.filter((item) => {
        return (item.nomSalle.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else {

      this.getSalleList();
      return this.salle;

    }
  }


}
