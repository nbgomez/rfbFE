import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'my-heroes',
  /*templateUrl: './heroes.component.html',*/
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" 
        [class.selected]="hero === selectedHero"
         (click)="onSelect(hero)"  >
        <span class="badge">{{hero.id}}</span>{{hero.name}}
      </li>
    </ul>
    <app-hero-detail [hero]="selectedHero"></app-hero-detail>
    `,
  styleUrls: ['./heroes.component.css'],
  providers: [
    HeroService
  ]
})

export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor( private heroService: HeroService ) {};

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then( heroes => this.heroes = heroes );
  }
}
