import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {DepartementProvider} from "../../providers/departement/departement";
import {Salle} from "../../entities/salle";
import {EnseignantProvider} from "../../providers/enseignant/enseignant";
import {Enseignant} from "../../entities/enseignant";


@IonicPage()
@Component({
  selector: 'page-enseignant',
  templateUrl: 'enseignant.html',
})
export class EnseignantPage implements OnInit {
  ngOnInit(): void {
  }

  enseignant: any
  res: any
  enseignantToEdit: Enseignant

  constructor(public navCtrl: NavController, public navParams: NavParams, private enseignantProvider: EnseignantProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnseignantPage');
  }

  getEnseignantList() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.enseignant = [];
    this.enseignantProvider.getAll().then(data => {
      this.enseignant = data;
      loading.dismiss();
    });

  }

  doRefresh(refresher) {
    this.enseignant = [];
    this.enseignantProvider.getAll().then(data => {
      this.enseignant = data;
      refresher.complete();
    });
  }

  onDelete(id: number) {
    this.enseignantProvider.delete(id).then(data => {
      this.getEnseignantList();
    });
  }

  showPrompt(enseignant: Enseignant) {
    let prompt = this.alertCtrl.create({
      title: 'Modifier Enseignant',
      inputs: [
        {
          name: 'id',
          type: 'hidden',
          value: enseignant.id.toString()
        },
        {
          name: 'nom',
          placeholder: 'Nom',
          type: 'text',
          value: enseignant.nom
        },
        {
          name: 'email',
          placeholder: 'Adresse E-Mail',
          type: 'text',
          value: enseignant.email
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
            this.enseignantToEdit = new Enseignant(parseInt(data.id), data.nom, data.email);
            console.log('dddd  ' + this.enseignantToEdit)
            this.enseignantProvider.add(this.enseignantToEdit).then(data => {
              this.getEnseignantList();

            });

          }
        }
      ]
    });
    prompt.present();
  }

  showPromptAdd() {
    let prompt = this.alertCtrl.create({
      title: 'Ajouter un enseignant',
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
        {
          name: 'email',
          placeholder: 'Adresse E-Mail',
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
            this.enseignantToEdit = new Enseignant(null, data.nomSalle, data.email);
            this.enseignantProvider.add(this.enseignantToEdit).then(data => {
              this.getEnseignantList();

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
      this.enseignant = this.enseignant.filter((item) => {
        return (item.nomSalle.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else {

      this.getEnseignantList()
      return this.enseignant;

    }
  }


}
