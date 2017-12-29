import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DepartementProvider} from "../../../providers/departement/departement";
import {EnseignantProvider} from "../../../providers/enseignant/enseignant";
import {MatiereProvider} from "../../../providers/matiere/matiere";
import {NiveauProvider} from "../../../providers/niveau/niveau";
import {SalleProvider} from "../../../providers/salle/salle";
import {SeanceProvider} from "../../../providers/seance/seance";
import {Enseignement} from "../../../entities/enseignement";
import {EnseignementProvider} from "../../../providers/enseignement/enseignement";
import {EnseignementPage} from "../enseignement";

/**
 * Generated class for the EnseignementFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enseignement-form',
  templateUrl: 'enseignement-form.html',
})
export class EnseignementFormPage implements OnInit{

  departementList: any
  enseignantList: any
  matiereList: any
  niveauList: any
  salleList: any
  seanceList: any
  date: Date =new Date()
  departement: any = null
  enseignant: any = null
  matiere: any = null
  niveau: any = null
  salle: any = null
  seance: any = null
  enseignement: Enseignement

  ngOnInit(): void {
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,private enseignementProvider:EnseignementProvider, private departementProvider: DepartementProvider,private enseignantProvider: EnseignantProvider,
              private matiereprovider: MatiereProvider,private niveauProvider: NiveauProvider,private salleProvider: SalleProvider,private seanceProvider: SeanceProvider) {
  }

  ionViewDidLoad() {
    this.departementProvider.getAllDepartement().then(data => {this.departementList = data;});
    this.enseignantProvider.getAll().then(data => {this.enseignantList = data;});
    this.matiereprovider.getAllMatiere().then(data => {this.matiereList = data;});
    this.salleProvider.getAll().then(data => {this.salleList = data;});
    this.seanceProvider.getAll().then(data => {this.seanceList = data;});
    this.niveauProvider.getAll().then(data => {this.niveauList = data;});
  }
  ajouterEns(){
    if(this.date!=null && this.departement!=null && this.enseignant!=null &&
    this.matiere!=null && this.niveau!=null && this.salle!=null && this.seance!=null){
      this.enseignement = new Enseignement(null, null, null, null, null, null, false, this.date,this.enseignant,
        this.niveau, this.salle, this.seance,this.departement,this.matiere)
      this.enseignementProvider.add(this.enseignement).then(data => {this.navCtrl.setRoot(EnseignementPage)});
    }
  }

}
