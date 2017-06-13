import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  /*templateUrl: './app.component.html',*/
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details</h2>
    <div><label>id:</label>{{hero.id}}</div>
    <div><label>name: </label>{{hero.name}}</div>
    `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'windstorm'
  };
}
