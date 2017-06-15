import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  template: `
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details</h2>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name">
      </div>
    </div>
  `/*,
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']*/
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
