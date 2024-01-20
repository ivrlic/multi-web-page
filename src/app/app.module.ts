import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListModule } from './pages/shopping-list-page/shopping-list.module';
import { ContactFormModule } from './pages/contact-form-page/contact-form.module';
import { NotFoundComponent } from './pages/not-found-page/not-found.component';
import { HomeComponent } from './pages/home-page/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CountdownService } from './services/countdown.service';
import { TimerComponent } from './components/timer/timer.component';
import { GreatPersonasModule } from './pages/great-personas-page/great-personas.module';
import { TodaysQuoteModule } from './pages/todays-quote-page/todays-quote.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingListModule,
    ContactFormModule,
    TodaysQuoteModule,
    GreatPersonasModule
  ],
  providers: [CountdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
