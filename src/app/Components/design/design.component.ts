import { Component } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent {
  designs: any[] = [
    { 
      title: "Dold Luxury", 
      description: "Online clothing website UI design", 
      image: "../../../assets/images/design/design1.webp", 
      toolsUsed: []= [
       "Angular", "Typescript","Nodejs", "Express","MongoDB","HTML", "CSS",
      ], 
    },
    { 
      title: "Music App", 
      description: "Music application UI for desktop", 
      image: "../../../assets/images/design/design2.webp",  
      toolsUsed: []= [
        "EJS", "CSS","Nodejs","Javascript","Express","MongoDB"
      ], 
    },
    { 
      title: "Hotelify", 
      description: "Online hotel booking application", 
      image: "../../../assets/images/design/design3.webp",  
      toolsUsed: []= [
        "Angular", "Typescript","Nodejs", "Express","MongoDB","Multer","HTML", "CSS",
      ], 
    },
    { 
      title: "Space Travel", 
      description: "An imaginary mobile figma UI design", 
      image: "../../../assets/images/design/design4.webp", 
      toolsUsed: []= [
        "Wordpress", "PHP","Tailwind", "Javascript", "HTML", "CSS",
      ], 
    },
    { 
      title: "Twigma Landing", 
      description: "Sample mobile application UI design of shopping ", 
      image: "../../../assets/images/design/design5.webp", 
      toolsUsed: []= [
        "Webflow", "Javascript", "HTML", "CSS","No code editor"
      ], 
    },
    { 
      title: "Foody", 
      description: "Online food ordering application UI", 
      image: "../../../assets/images/design/design6.webp",  
      toolsUsed: []= [
        "Angular","Express","MongoDB", "Typescript","Nodejs","HTML", "CSS",
      ], 
    },
  ]
}
