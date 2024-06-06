import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent{
route:Router=inject(Router)
  OnSearchClicked(course:string) {
  if(course==='') this.route.navigate(['/courses']);
  else  this.route.navigate(['/courses'],{queryParams:{search:course}})
  }
}
