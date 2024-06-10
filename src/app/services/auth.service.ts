import {inject, Injectable} from '@angular/core';
import {UsersService} from "./users.service";
import {User} from "../models/user";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged:boolean=false
  userService:UsersService=inject(UsersService);
  login(userName:string,password:string):User | undefined{
    let loggedUser:User|undefined=this.userService.usres.find(user=>user.name===userName && user.password===password)
    loggedUser===undefined?this.isLogged=false:this.isLogged=true;
    return loggedUser
  }
  logout():void{
    this.isLogged=false;
  }
  isAuthenticated():boolean{
    return this.isLogged;
  }
}
