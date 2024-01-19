import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactFormComponent
  ]
})
export class ContactFormModule { }
