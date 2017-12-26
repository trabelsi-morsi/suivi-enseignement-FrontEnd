import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Departement} from "../../entities/departement";

/*
  Generated class for the DepartementProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const headers = new HttpHeaders().set("Content-Type", "application/json")
  .set( 'Accept','application/json' );
@Injectable()
export class DepartementProvider {
 url = 'http://34.240.182.39:8080/departement'
  //url = 'http://localhost:8080/departement'


  constructor(public http: HttpClient) {
  }
  public  getAllDepartement(){
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

  public addDepartement(departement: Departement){
    return new Promise(resolve => {
      this.http.post(this.url,departement,{headers}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }
  public  deleteDepartement(id: number){
    return new Promise(resolve => {
      this.http.delete(this.url+'/'+id,{headers}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }
  public getOne(email: string){
    return new Promise(resolve => {
      this.http.get(this.url+'/'+email,{headers}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }


}
