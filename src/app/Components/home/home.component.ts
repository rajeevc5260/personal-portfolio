import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  toolsUsed:{ toolsIcons: string; toolsName: string; }[];

 constructor(){
  this.toolsUsed = [
    {toolsIcons:'bx bxl-angular', toolsName:'Angular'},
    {toolsIcons:'bx bxl-nodejs', toolsName:'Nodejs'},
    {toolsIcons:'bx bxl-mongodb', toolsName:'MongoDB'},
    {toolsIcons:'bx bxl-php', toolsName:'PHP'},
    {toolsIcons:'bx bxl-javascript', toolsName:'JavaScript'},
    {toolsIcons:'bx bxl-typescript', toolsName:'TypeScript'},
    {toolsIcons:'bx bxl-wordpress', toolsName:'WordPress'},
    {toolsIcons:'bx bxl-figma', toolsName:'Figma'},
    {toolsIcons:'bx bxl-adobe', toolsName:'Adobe XD'},
    {toolsIcons:'bx bxl-shopify', toolsName:'Shopify'},
  ];
  }
// function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/rajeev-c/lets-talk', text: 'Schedule time with me', color: '#0069ff', textColor: '#ffffff', branding: true }); }
  
 }

