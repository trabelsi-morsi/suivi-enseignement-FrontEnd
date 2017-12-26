import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Matiere} from "../../entities/matiere";
import {MatiereProvider} from "../../providers/matiere/matiere";

/**
 * Generated class for the MatierePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matiere',
  templateUrl: 'matiere.html',
})
export class MatierePage implements OnInit {
  ngOnInit(): void {
  }

  matiere: any
  res: any
  matiereToEdit: Matiere

  constructor(public navCtrl: NavController, private matiereProvider: MatiereProvider, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.getMatiereList();
  }

  getMatiereList() {
    this.matiere = [];
    this.matiereProvider.getAllMatiere().then(data => {
      this.matiere = data;
      console.log(data);
    });

  }

  onDelete(id: number) {
    this.matiereProvider.deleteMatiere(id).then(data => {
      this.getMatiereList();
    });
  }

  showPrompt(register: Matiere) {
    let prompt = this.alertCtrl.create({
      title: 'Modifier la matière',
      inputs: [
        {
          name: 'id',
          type: 'hidden',
          value: register.id.toString()
        },
        {
          name: 'nom',
          placeholder: 'Nom',
          type: 'text',
          value: register.nom
        },
        {
          name: 'abvreviation',
          placeholder: 'Abreviation',
          type: 'text',
          value: register.abvreviation
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
            this.matiereToEdit = new Matiere(parseInt(data.id), data.abvreviation, data.nom);
            console.log('dddd  ' + this.matiereToEdit)
            this.matiereProvider.addMatiere(this.matiereToEdit).then(data => {
              this.getMatiereList();

            });

          }
        }
      ]
    });
    prompt.present();
  }

  showPromptAdd() {
    let prompt = this.alertCtrl.create({
      title: 'Ajouter une matière',
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
        {
          name: 'abvreviation',
          placeholder: 'Abreviation',
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
            this.matiereToEdit = new Matiere(null, data.abvreviation, data.nom);
            console.log('dddd  ' + this.matiereToEdit)
            this.matiereProvider.addMatiere(this.matiereToEdit).then(data => {
              this.getMatiereList();

            });

          }
        }
      ]
    });
    prompt.present();
  }


}
