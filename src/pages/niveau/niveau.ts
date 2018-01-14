import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams,MenuController} from 'ionic-angular';
import {Salle} from "../../entities/salle";
import {Niveau} from "../../entities/niveau";
import {NiveauProvider} from "../../providers/niveau/niveau";
import {AnimationBuilder, AnimationService} from "css-animator";

/**
 * Generated class for the NiveauPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-niveau',
  templateUrl: 'niveau.html',
})
export class NiveauPage implements OnInit {
  ngOnInit(): void {
  }

  niveau: any
  res: any
  niveauToEdit: Niveau

  constructor(public menuClt:MenuController,public navCtrl: NavController, private niveauProvider: NiveauProvider, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.menuClt.enable(true,'menuzone');
  }

  ionViewDidLoad() {
    this.getNiveauList();
  }

  getNiveauList() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.niveau = [];
    this.niveauProvider.getAll().then(data => {
      this.niveau = data;
      loading.dismiss();
    });
  }

  doRefresh(refresher) {
    this.niveau = [];
    this.niveauProvider.getAll().then(data => {
      this.niveau = data;
      refresher.complete();
    });
  }

  onDelete(id: number) {
    this.niveauProvider.delete(id).then(data => {
      this.getNiveauList();
    });
  }

  showPrompt(niveau: Niveau) {
    let prompt = this.alertCtrl.create({
      title: 'Modifier le niveau',
      inputs: [
        {
          name: 'id',
          type: 'hidden',
          value: niveau.id.toString()
        },
        {
          name: 'nom',
          placeholder: 'Nom',
          type: 'text',
          value: niveau.nom
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
            this.niveauToEdit = new Niveau(parseInt(data.id), data.nom);
            console.log('dddd  ' + this.niveauToEdit)
            this.niveauProvider.add(this.niveauToEdit).then(data => {
              this.getNiveauList();

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
          name: 'nom',
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
            this.niveauToEdit = new Niveau(null, data.nom);
            this.niveauProvider.add(this.niveauToEdit).then(data => {
              this.getNiveauList()

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
      this.niveau = this.niveau.filter((item) => {
        return (item.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else {

      this.getNiveauList();
      return this.niveau;

    }
  }

}
