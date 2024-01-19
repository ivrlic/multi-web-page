import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './pages/shopping-list-page/shopping-list.component';
import { ContactFormComponent } from './pages/contact-form-page/contact-form.component';
import { NotFoundComponent } from './pages/not-found-page/not-found.component';
import { HomeComponent } from './pages/home-page/home.component';
import { TodaysQuoteComponent } from './pages/todays-quote-page/todays-quote.component';
import { GreatPersonasComponent } from './pages/great-personas-page/great-personas.component';
import { PersonaComponent } from './pages/great-personas-page/persona/persona.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "shopping-list", component: ShoppingListComponent},
  {path: "todays-quote", component: TodaysQuoteComponent},
  {path: "great-personas", component: GreatPersonasComponent},
  {path: "great-personas/:id", component: PersonaComponent},
  {path: "contact", component: ContactFormComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
