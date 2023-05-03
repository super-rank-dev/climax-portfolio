import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';
import { Portfolio } from 'src/interfaces/Portfolio';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {

  portfolio!: Observable<Portfolio>;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const portfolioName = params.get('portfolioName');
    if (portfolioName) {
      this.portfolio = this.appService.getPortfolioByName(portfolioName);
      console.log(this.portfolio);
    }
  }

}
