import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: string[] = ['Angular', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript', 'HTML', 'CSS', 'Angular JS', 'Bootstrap', 'Jasmine', 'Express', 'Node JS', 'Cypress', 'RxJS', 'React JS', 'JQuery', 'Puppeteer', 'Git', 'GitLab', 'Gerrit', 'Jira', 'Karma', 'Figma', 'MongoDB', 'SEO', 'PWA', 'Google Analytics', 'Agile', 'ES6', 'ES5', 'SCSS', 'LESS', 'SCSS']
  constructor() { }

  ngOnInit(): void {
  }

}
