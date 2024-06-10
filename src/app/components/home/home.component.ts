import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
activatedRoute:ActivatedRoute=inject(ActivatedRoute);
ngOnInit() {
  this.activatedRoute.fragment.subscribe(data=>{
    this.goToSection(data)
  })
}
goToSection(id:string | null){
  if (typeof id === "string") {
    document.getElementById(id)!.scrollIntoView({behavior: "smooth"})
  }
}
}

