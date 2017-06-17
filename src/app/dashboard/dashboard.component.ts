import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero: Hero;

  constructor( 
    private router: Router,
    private heroService: HeroService ) { }

  ngOnInit() {
    this.heroService.getHeroes().then( heroes => this.heroes = heroes.slice(1,5) );
  }

  gotoDetail(): void {
    this.router.navigate( ['/detail'], this.selectedHero.id );
  }
}
