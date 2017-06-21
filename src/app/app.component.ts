import { Component, OnInit } from '@angular/core';
import { MdSidenav, MdSidenavContainer } from '@angular/material'



@Component({
  selector: 'app-root',
  /*templateUrl: './app.component.html',*/
  template: `
    <h1>{{title}}</h1>
    <md-sidenav-container>
      <md-sidenav mode="push" opened="true"> 
        ITN Historian 
        <app-dashboard></app-dashboard>
      </md-sidenav>
  
      test<br>
      test2
      
      
      
    
    
    </md-sidenav-container>
    
    `,
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  title = 'ITN RFB Historian';
  
  constructor(  ) {};

  ngOnInit(): void {  
   
  }
 
}
