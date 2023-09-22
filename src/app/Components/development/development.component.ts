import { Component } from '@angular/core';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.css']
})
export class DevelopmentComponent {

   projects: any[] = [
    { 
      title: "Learner Tracker", 
      description: "Track and monitor learner progress of course and placements", 
      links: "https://github.com/rajeevc5260/learners-tracker", 
      toolsUsed: []= [
       "Angular", "Typescript","Nodejs", "Express","MongoDB","HTML", "CSS",
      ], 
    },
    { 
      title: "Webscraper", 
      description: "Create a web scraper for data extraction", 
      links: "https://github.com/rajeevc5260/webscraper", 
      toolsUsed: []= [
        "EJS", "CSS","Nodejs","Javascript","Express","MongoDB"
      ], 
    },
    { 
      title: "Stream Media", 
      description: "Effortlessly stream and upload media contents online", 
      links: "https://github.com/rajeevc5260/StreamMedia", 
      toolsUsed: []= [
        "Angular", "Typescript","Nodejs", "Express","MongoDB","Multer","HTML", "CSS",
      ], 
    },
    { 
      title: "Growth.cx", 
      description: "Growth Marketing Agency for SaaS Startups", 
      links: "https://growth.cx/", 
      toolsUsed: []= [
        "Wordpress", "PHP","Tailwind", "Javascript", "HTML", "CSS",
      ], 
    },
    { 
      title: "Spatic", 
      description: "Retail Location Intelligence | GIS Platform & Advisory", 
      links: "https://www.gospatic.com/", 
      toolsUsed: []= [
        "Webflow", "Javascript", "HTML", "CSS","No code editor"
      ], 
    },
    { 
      title: "Library Application", 
      description: "Online library application with 1000+ ebooks", 
      links: "https://github.com/rajeevc5260/Library-App2", 
      toolsUsed: []= [
        "Angular","Express","MongoDB", "Typescript","Nodejs","HTML", "CSS",
      ], 
    },
    { 
      title: "Tesla Clone", 
      description: "A webflow site of tesla clone", 
      links: "https://tesla-clone-b3d2ee.webflow.io/", 
      toolsUsed: []= [
        "Webflow", "HTML", "Javascript", "CSS","No code editor"
      ], 
    }, 
    { 
      title: "Employee Managment", 
      description: "A fullstack employee management system to track employee data", 
      links: "https://github.com/rajeevc5260/Employee", 
      toolsUsed: []= [
        "Angular","Express","MongoDB", "Typescript","Nodejs"
      ], 
    },
    { 
      title: "Shop House", 
      description: "A online ecommerce shopping website builder application", 
      links: "https://github.com/rajeevc5260/Ecommerce-builder--Shop-House", 
      toolsUsed: []= [
        "HTML","SCSS", "MySQL", "Javascript","PHP"
      ], 
    },

   ];

   

   
}
