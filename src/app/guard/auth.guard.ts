import {Router} from "@angular/router";
import {inject, } from "@angular/core";
import {AuthService} from "../services/auth.service";

export const canActivetGuardFunc=()=>{
const authService:AuthService=inject(AuthService);
const router:Router=inject(Router);
if(authService.isAuthenticated()){
  return true;
}else{
  router.navigate(['/login'])
  return false;
}
}
