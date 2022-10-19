import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toLanding() {
    document.getElementById('landing')?.scrollIntoView({behavior:"smooth"});
  }
  toServices() {
    document.getElementById('services')?.scrollIntoView({behavior:"smooth"});
  }
  toContact() {
    document.getElementById('contact')?.scrollIntoView({behavior:"smooth"});
  }
  toTestimony() {
    document.getElementById('testimony')?.scrollIntoView({behavior:"smooth"});
  }
}
