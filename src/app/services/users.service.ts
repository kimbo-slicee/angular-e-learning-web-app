import { Injectable } from '@angular/core';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() { }
  usres:User[]=[
   new User(1,"user_1","u1","user123"),
    new User(2,"user_2","u2","user2345")
  ]
}
