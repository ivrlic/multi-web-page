import { Component, OnInit } from '@angular/core';
import scrollToTop from 'src/app/services/scroll-to-top';
import { QuoteService } from './services/quote.service';
import { CountdownService } from 'src/app/services/countdown.service';
import { Subject, Subscription } from 'rxjs';


const COUNTER_TIME = 60 // time in seconds

@Component({
  selector: 'todays-quote',
  templateUrl: './todays-quote.component.html',
  styleUrls: ['./todays-quote.component.css']
})
export class TodaysQuoteComponent implements OnInit{

  quote : string = "";
  author: string = "";
  isButtonDisabled!: boolean;
  private countdownSubscription: Subscription | undefined;

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

    // on initialization update if button is disabled
    this.isButtonDisabled = ! this.countdownService.btnDisabled

    // if timer starts disable the button and when it expires enable the button
    this.countdownSubscription = this.countdownService.getTimeExpired().subscribe(timeExpired => {
      this.isButtonDisabled = !timeExpired
    })

    // scroll to top of the window
    scrollToTop()
  }

  ngOnDestroy(): void {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }

  getNewQuote(){
    // getting data from data.json
    this.quoteService.getRandomQuote().subscribe((data: any) => {
      this.quote = data.content;
      this.author = data.author;
      this.saveQuoteToLocalStorage()
      },
      (error: any)=>{
        alert(error.message)
      }
    );
    this.isButtonDisabled = true; // Botun postaje disabled
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
