import { Component, OnInit } from '@angular/core';
import { MdSidenav, MdSidenavContainer } from '@angular/material';


@Component({
  selector: 'app-root',
  /*templateUrl: './app.component.html',*/
  template: `
    <h1>{{title}}</h1>
    <md-sidenav-container>
      <md-sidenav mode="push" opened="true"> 
        ITN Historian 
        <tree-root [nodes]="nodes"></tree-root>
        
      </md-sidenav>
  
      test<br>
      test2
      
      
      
    
    
    </md-sidenav-container>
    
    `,
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  title = 'ITN RFB Historian';

  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  
  constructor(  ) {};

  ngOnInit(): void {  
   
  }
 
}
