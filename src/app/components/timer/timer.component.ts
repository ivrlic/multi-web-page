import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownService } from 'src/app/services/countdown.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  countdownTime: string = '';
  private countdownSubscription!: Subscription;

  constructor(private countdownService: CountdownService) {}

  ngOnInit(): void {
    this.countdownSubscription = this.countdownService.getCountdownTime().subscribe((time) => {
      this.countdownTime = time;
    });
  }

  ngOnDestroy(): void {
    this.countdownSubscription?.unsubscribe();
  }
}
