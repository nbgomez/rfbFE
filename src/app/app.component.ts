import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from  "./hero.service";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

/* https://angular.io/tutorial/toh-pt4*/

@Component({
  selector: 'app-root',
  /*templateUrl: './app.component.html',*/
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
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent  implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor( private heroService: HeroService ) {};

  ngOnInit(): void {  
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then( heroes => this.heroes = heroes );
  }
}
