import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Register} from "../../entities/register";

/*
  Generated class for the RegisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const headers = new HttpHeaders().set("Content-Type", "application/json")
  .set( 'Accept','application/json' );
@Injectable()
export class RegisterProvider {

  url = 'http://localhost:8080/registre'


  constructor(public http: HttpClient) {
  }
  public  getAllRegister(){
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

  public addRegister(register: Register){
       // return this.http.post(this.url,register,{headers}).subscribe(
       //   res => {
       //     console.log(res);
       //   },
       //   err => {
       //     console.log("Error occured");
       //     console.log(JSON.stringify(register));
       //   }
       // );
    return new Promise(resolve => {
      this.http.post(this.url,register,{headers}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }
  public  deleteRegister(email: string){
    return new Promise(resolve => {
      this.http.delete(this.url+'/'+email,{headers}).subscribe(data => {
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
