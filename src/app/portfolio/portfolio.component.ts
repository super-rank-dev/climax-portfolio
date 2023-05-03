import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { AppService } from '../app.service';
import { Portfolio } from 'src/interfaces/Portfolio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolios!: Observable<Portfolio[]>;

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.portfolios = this.appService.getPortfolios();
  }

}
