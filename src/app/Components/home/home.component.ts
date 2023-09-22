import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  toolsUsed:{ toolsIcons: string; toolsName: string; }[];

  certificates: any[]=[
    {
      id:"1",
      title:"TCS iON Remote Interships",
      description:"Certificate of Internship MEAN stack",
      date:"January 2023",
      link:"https://drive.google.com/file/d/1YcxAAjJ91SZ-4JgxCKYresINjDT0RmSW/view?usp=share_link",
    },
    {
      id:"2",
      title:"Certificate Specialist in Full Stack Development",
      description:"Certificate of completion",
      date:"November 2023",
      link:"https://drive.google.com/file/d/1TEcymWmXAzbjLAhF1IXhGg_ru--5ISWz/view?usp=share_link",
    },
    {
      id:"3",
      title:"Microsoft Certified Associate",
      description:"Azure Fundamentals",
      date:"January 2021",
      link:"https://drive.google.com/file/d/13gK-G_te4EPEKJARQlXWTLQ-Y3pOIerx/view",
    },
    {
      id:"4",
      title:"Microsoft Technology Associate",
      description:"Software Development Fundamentals (MTA)",
      date:"December 2020",
      link:"https://drive.google.com/file/d/1u2MvxIf-xTU2Xg2DKm8A2HPigBb4dYMC/view",
    },
    {
      id:"5",
      title:"Microsoft Technology Associate",
      description:"Cloud Platform and Implementation",
      date:"January 2020",
      link:"https://drive.google.com/file/d/1wdm7xwBKrz4f4PXZMEL-Quv76iCl8d31/view",
    },
    {
      id:"6",
      title:"Microsoft Technology Associate",
      description:"Cloud platforms of MCSA",
      date:"January 2020",
      link:"https://drive.google.com/file/d/1xEGKtxmV-QLDMSF-XdUljJzWAsm87pTe/view",
    },
    {
      id:"7",
      title:"Microsoft Technology Associate",
      description:"Web application Fundamentals",
      date:"January 2020",
      link:"https://drive.google.com/file/d/1Mq_Tm6Vc4y4kWLh81FGPvQ151XEPiqcM/view",
    },
    
    ]
    scriptURL = 'https://script.google.com/macros/s/AKfycbyDgcjdKQCi-a2-YUsh8NAN4nW85hO3R7_LmIPNm6OLiG_SJwSbNVyzrJoF-Z55gjrZ/exec';

 constructor(public router:Router, private http: HttpClient){
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

  // onSubmit(form: NgForm): void {
  //   const formData = form.value;
  //   console.log('Form Data:', formData);
  
  //   this.http.post(this.scriptURL, formData).subscribe(
  //     (response) => {
  //       console.log('Response:', response);
  //       alert('Thank you! Your form is submitted successfully.');
  //       window.location.reload();
  //     },
  //     (error) => {
  //       console.error('Error!', error);
  //     }
  //   );
  // }

  subscribeSubmit(){
    alert("Thank you subscribing to my newsletter")
  }
  
 }

