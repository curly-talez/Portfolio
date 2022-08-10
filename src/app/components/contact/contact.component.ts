import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactForm!: FormGroup;
  public messageError: boolean = false;
  public messageSuccess: boolean = false;
  public showLoader: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)])
    })
  }

  get form() {
    return this.contactForm.controls;
  }

  submitMessage() {
    this.showLoader = true;
    emailjs.sendForm('service_c5kc565', 'template_ewateue', '#contact-form', 'oo1v5QE6yC-NgQbqc')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        setTimeout(() => { this.messageSuccess = true; this.showLoader = false; }, 100)
      }, (error) => {
        console.log(error.text);
        setTimeout(() => { this.messageError = true; this.showLoader = false }, 100)
      });
  }
}


