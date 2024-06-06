import {Component, inject} from '@angular/core';
import {ServiceService} from "../../../services/service.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  servicesService = inject(ServiceService);
  services: {title: string, image: string, description: string}[] = [];

  ngOnInit(){
    this.services = this.servicesService.services;
  }
}
