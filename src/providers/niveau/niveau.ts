import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Niveau} from "../../entities/niveau";

const headers = new HttpHeaders().set("Content-Type", "application/json")
  .set('Accept', 'application/json');

@Injectable()
export class NiveauProvider {
  url = 'http://34.240.182.39:8080/niveau';

  constructor(public http: HttpClient) {
    console.log('Hello NiveauProvider Provider');
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

  public add(niveau: Niveau) {
    return new Promise(resolve => {
      this.http.post(this.url, niveau, {headers}).subscribe(data => {
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
