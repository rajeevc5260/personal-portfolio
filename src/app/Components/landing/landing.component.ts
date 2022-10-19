import { Component, OnInit } from '@angular/core';

declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  pdfFiles = [
    {
      name: 'Rajeev-resume',
      path: 'https://drive.google.com/u/0/uc?id=1D6e-qdfUI6s5QS4au0kyAFa22qp6dUYv&export=download',
    },
  ];

  constructor() {}

  ngOnInit() {}

  downloadPdf(pdfUrl: string, pdfName: string) {
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
