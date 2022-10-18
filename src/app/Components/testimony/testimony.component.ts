import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css'],
})
export class TestimonyComponent implements OnInit {
  projectDetails = [
    {
      numbers: '01',
      title: 'Learners Tracker',
      desc: '  MEAN stack application used for managing the learners training details. I have designed both Fontend and Backend dashboard with better user experience.',
      image: 'assets/images/learnerstracker.png',
      path:'https://github.com/AyeshaSiddika65689/Learner-tracker'
    },
    {
      numbers: '02',
      title: 'Kerala Tourism',
      desc: '  Redesigned project of original kerala tourism website with better user interface and user experience that makes the user to interaction easily and understant all the components of the pages.',
      image: 'assets/images/keralatourism.png',
      path:'https://rajeevc5260.github.io/Kerala-Tourism/'
    },
    {
      numbers: '03',
      title: 'Shop House',
      desc: '  Shop house is an e-commerce platform with rich user interface. I have made it as a fullstack  which is used to build an ecommerce website for the users that can be made for their on products by themselves. This project contain both user dashboard as well as the vendor dashboard.',
      image: 'assets/images/shophouse.png',
      path:'https://ecommerce-website-builder.herokuapp.com/'
      
    },
    {
      numbers: '04',
      title: 'Library',
      desc: '  As small redesigned website for creating and storing the book as an e-library online which makes easier to be accessed from any where at any time. Users can sign in to the site and state exploring the books',
      image: 'assets/images/library.png',
      path:'https://library-app02.herokuapp.com/'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
