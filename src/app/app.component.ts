import { Component, OnInit } from '@angular/core';


/* https://angular.io/tutorial/toh-pt5*/

@Component({
  selector: 'app-root',
  /*templateUrl: './app.component.html',*/
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/heroes">Heroes</a>
    <router-outlet></router-outlet>
    `,
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  title = 'Tour of Heroes';
  
  constructor(  ) {};

  ngOnInit(): void {  
   
  }
 
}
