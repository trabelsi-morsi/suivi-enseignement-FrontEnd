import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Enseignement} from "../../entities/enseignement";

/*
  Generated class for the EnseignementProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const headers = new HttpHeaders().set("Content-Type", "application/json")
  .set( 'Accept','application/json' );
@Injectable()
export class EnseignementProvider {
  url = 'http://34.240.182.39:8080/enseignement'
  //url = 'http://localhost:8080/enseignement'
  constructor(public http: HttpClient) {
  }
  public  getAll(){
    return new Promise(resolve => {
      this.http.get(this.url,{headers}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }
  public  today(){
    return new Promise(resolve => {
      this.http.get(this.url+'/today',{headers}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public add(enseignement: Enseignement){
    return new Promise(resolve => {
      this.http.post(this.url,enseignement,{headers}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }
  public  delete(id: number){
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
  public sendMail(id: number){
    return new Promise(resolve => {
      this.http.get(this.url+'/mail/'+id,{headers}).subscribe(data => {
        resolve(data);

      }, err => {
        console.log(err);
      });
    });
  }
}
