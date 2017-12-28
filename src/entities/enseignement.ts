import {Enseignant} from "./enseignant";
import {Niveau} from "./niveau";
import {Salle} from "./salle";
import {Seance} from "./seance";
import {Departement} from "./departement";
import {Matiere} from "./matiere";

export class Enseignement{
  id: number
  annee: number
  cours: number
  module: number
  par15: number
  semestre: number
  rate: boolean
  date: Date
  enseignant: Enseignant
  niveaux: Niveau
  salle: Salle
  seance: Seance
  departement: Departement
  matiere: Matiere


  constructor(id: number, annee: number, cours: number, module: number, par15: number, semestre: number, rate: boolean, date: Date, enseignant: Enseignant, niveaux: Niveau, salle: Salle, seance: Seance, departement: Departement, matiere: Matiere) {
    this.id = id;
    this.annee = annee;
    this.cours = cours;
    this.module = module;
    this.par15 = par15;
    this.semestre = semestre;
    this.rate = rate;
    this.date = date;
    this.enseignant = enseignant;
    this.niveaux = niveaux;
    this.salle = salle;
    this.seance = seance;
    this.departement = departement;
    this.matiere = matiere;
  }
}
