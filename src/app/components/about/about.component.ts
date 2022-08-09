import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf() {
    const pdfUrl = '../../../assets/images/Krishnaveni.pdf';
    const pdfName = 'Krishnaveni';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
