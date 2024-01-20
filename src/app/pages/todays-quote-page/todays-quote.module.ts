import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CountdownService } from 'src/app/services/countdown.service';
import { TodaysQuoteComponent } from './todays-quote.component';


@NgModule({
  declarations: [
    TodaysQuoteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    TodaysQuoteComponent
  ],
  providers: [
    CountdownService
  ]

})
export class TodaysQuoteModule { }
