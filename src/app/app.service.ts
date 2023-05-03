import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from 'src/interfaces/Skill';
import { Portfolio } from 'src/interfaces/Portfolio';
import { map } from 'rxjs';
import { Service } from 'src/interfaces/Service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public getSkills() {
    return this.http.get<Skill[]>
      ('/assets/data/skills.json');
  }

  public getPortfolios() {
    return this.http.get<Portfolio[]>
      ('/assets/data/portfolios.json');
  }

  public getPortfolioByName(portfolioName: string) {
    return this.http.get<Portfolio[]>
      ('/assets/data/portfolios.json')
      .pipe(
        map(portfolios => portfolios.filter(portfolio => portfolio.name === portfolioName)[0])
      );
  }

  public getServices() {
    return this.http.get<Service[]>
      ('/assets/data/services.json');
  }
}
