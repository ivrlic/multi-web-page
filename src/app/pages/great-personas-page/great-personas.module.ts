import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreatPersonasComponent } from './great-personas.component';
import { PersonaComponent } from './persona/persona.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    GreatPersonasComponent,
    PersonaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    GreatPersonasComponent
  ]
})
export class GreatPersonasModule { }
