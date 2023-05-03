import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Service } from 'src/interfaces/Service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services!: Observable<Service[]>;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.services = this.appService.getServices();
  }

}
