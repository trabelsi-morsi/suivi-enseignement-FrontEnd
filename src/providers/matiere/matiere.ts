import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Matiere} from "../../entities/matiere";

/*
  Generated class for the MatiereProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const headers = new HttpHeaders().set("Content-Type", "application/json")
  .set( 'Accept','application/json' );
@Injectable()
export class MatiereProvider {
  url = 'http://34.240.182.39:8080/matiere'

  constructor(public http: HttpClient) {
  }

  public  getAllMatiere(){
    // return  this.http.get(this.url);
    return new Promise(resolve => {
      this.http.get(this.url,{headers}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public addMatiere(matiere: Matiere){
    return new Promise(resolve => {
      this.http.post(this.url,matiere,{headers}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }
  public  deleteMatiere(id: number){
    return new Promise(resolve => {
      this.http.delete(this.url+'/'+id,{headers}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getOne(id: number){
    return new Promise(resolve => {
      this.http.get(this.url+'/'+id,{headers}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }


}
