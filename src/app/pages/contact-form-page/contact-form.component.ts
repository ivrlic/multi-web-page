import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createDomainValidator } from './custom-validator/invalid-email-domain';
import scrollToTop from 'src/app/services/scroll-to-top';

// creating custom domains to no to be used in the form (using custom created Validator)
const invalidEmailDomain = createDomainValidator(["gmail.com", "yahoo.com"])

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{
  
  isSubmitted: boolean = false
  contactFormGroup = new FormGroup({
    senderName: new FormControl("", Validators.required),
    senderEmail: new FormControl("", [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage: new FormControl("", [Validators.required, Validators.minLength(12)])
  })

  constructor() {
  }

  ngOnInit(): void {
    // get data from local storage if any
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      const parsedFormData = JSON.parse(savedFormData);
      this.contactFormGroup.patchValue(parsedFormData);
    }

    // after every change in the form save data to local storage
    this.contactFormGroup.valueChanges.subscribe(value => {
      localStorage.setItem('formData', JSON.stringify(value));
    });

    // scroll to top of the window
    scrollToTop()
  }

  submitForm(){
    this.isSubmitted = true
  }

  closeBox(){
    this.contactFormGroup.reset()
    this.isSubmitted = false
  }
}
