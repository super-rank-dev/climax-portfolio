import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';
import { Skill } from 'src/interfaces/Skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills!: Observable<Skill[]>;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.skills = this.appService.getSkills();
  }
}
