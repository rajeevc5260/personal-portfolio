import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuHidden = true;
  menuIcon = 'bx bx-menu-alt-right';

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
    this.menuIcon = this.isMenuHidden ? 'bx bx-menu-alt-right' : 'bx bx-x-circle';
  }
  

  // initializeCalendly() {
  //   if (typeof Calendly !== 'undefined') {
  //     Calendly.initBadgeWidget({
  //       url: 'https://calendly.com/rajeev-c/lets-talk',
  //       text: 'Schedule time with me',
  //       color: '#0069ff',
  //       textColor: '#ffffff',
  //       branding: true,
  //     });
  //   }
  // }  
}
