import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  private authService:AuthService=inject(AuthService);
  private route:Router=inject(Router);
  private activatedRoute:ActivatedRoute=inject(ActivatedRoute);
  @ViewChild("userName") userName!:ElementRef;
  @ViewChild("password") password!:ElementRef;
  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(query=>{
      let logout:boolean= Boolean(query.get('logout'));
      if(logout){
        this.authService.logout()
        alert("new you are logged out.IsLogged out = " + this.authService.isLogged)
      }
    })
  }


  onLoginClicked(){
    const name:string=this.userName.nativeElement.value;
    const pass:string=this.password.nativeElement.value;
    const user:User | undefined= this.authService.login(name,pass);
    user===undefined
      ?alert("the login credentials you have entered is not correct")
      :this.route.navigate(["/courses"])
  }


}
