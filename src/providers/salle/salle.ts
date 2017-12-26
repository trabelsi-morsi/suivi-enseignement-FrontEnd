import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Matiere} from "../../entities/matiere";
import {Salle} from "../../entities/salle";

/*
  Generated class for the SalleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const headers = new HttpHeaders().set("Content-Type", "application/json")
  .set('Accept', 'application/json');

@Injectable()
export class SalleProvider {
  url = 'http://34.240.182.39:8080/salle'

  constructor(public http: HttpClient) {
    console.log('Hello SalleProvider Provider');
  }

  public getAll() {
    return new Promise(resolve => {
      this.http.get(this.url, {headers}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public add(salle: Salle) {
    return new Promise(resolve => {
      this.http.post(this.url, salle, {headers}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public delete(id: number) {
    return new Promise(resolve => {
      this.http.delete(this.url + '/' + id, {headers}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getOne(id: number) {
    return new Promise(resolve => {
      this.http.get(this.url + '/' + id, {headers}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }


}
