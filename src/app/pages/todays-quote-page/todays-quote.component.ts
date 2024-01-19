import { Component, OnInit } from '@angular/core';
import scrollToTop from 'src/app/services/scroll-to-top';
import { QuoteService } from './services/quote.service';
import { CountdownService } from 'src/app/services/countdown.service';


const COUNTER_TIME = 300; // time in seconds

@Component({
  selector: 'todays-quote',
  templateUrl: './todays-quote.component.html',
  styleUrls: ['./todays-quote.component.css']
})
export class TodaysQuoteComponent implements OnInit{

  quote : string = "";
  author: string = "";
  isButtonDisabled: boolean = false;

  constructor(
    private quoteService: QuoteService, 
    private countdownService: CountdownService) { }

  ngOnInit(): void {
    // load data from localStorage
    this.loadQuoteFromLocalStorage();
    
    // if there is no quote, get new one
    if (!this.quote) {
      this.getNewQuote();
    }

    // if timer starts disable the button and when it expires enable the button
    this.countdownService.timeExpired.subscribe(timeExpired => {
      this.isButtonDisabled = !timeExpired
      console.log(!timeExpired)
    })

    // scroll to top of the window
    scrollToTop()
  }

  getNewQuote(){
    // getting data from data.json
    this.quoteService.getRandomQuote().subscribe((data: any) => {
      console.log(data)
      this.quote = data.content;
      this.author = data.author;
      this.saveQuoteToLocalStorage()
      },
      (error: any)=>{
        alert(error.message)
      }
    );

    this.countdownService.startCountdown(COUNTER_TIME);
  };

  // save quote to local storage
  private saveQuoteToLocalStorage(): void {
    localStorage.setItem('todaysQuote', JSON.stringify({ quote: this.quote, author: this.author }));
  }

  // load quote from local storage
  private loadQuoteFromLocalStorage(): void {
    const storedData = localStorage.getItem('todaysQuote');
    if (storedData) {
      const { quote, author } = JSON.parse(storedData);
      this.quote = quote;
      this.author = author;
    }
  }
}
