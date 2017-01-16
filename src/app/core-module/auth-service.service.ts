import { Injectable } from '@angular/core';
import {HttpRestService} from "./http-rest.service";
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private httpRest: HttpRestService, public router:Router) { }

  //have to change any to specified data type that is to receive login
  public login(userName: String , password: String){
    this.httpRest.post({'userName':userName,'password':password},`${this.httpRest.getBaseUrl()}login`)
      .subscribe(
        response => {
          localStorage.setItem('loggedIn','true');
          this.router.navigate(['home']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  public isLoggedIn():Boolean{
    return localStorage.getItem('loggedIn') !== 'undefined';
  }

  public logOut():Boolean{
    localStorage.removeItem('loggedIn');
    return true;
  }











}
