import { Injectable } from '@angular/core';
import { Subject, Observable, timer, takeWhile } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  private countdownTimeSubject = new Subject<string>();
  private countdownSeconds!: number; 
  timeExpired = new Subject<boolean>()

  constructor() {  }

  startCountdown(time: number): void {
    this.resetCountdown(time)
    this.timeExpired.next(false)

    timer(0, 1000).pipe(
      takeWhile(() => this.countdownSeconds > 0) // timer condition for duration (after that it stops counting)
    )
    .subscribe(() => {
      this.countdownSeconds--;
      if (this.countdownSeconds <= 0) {
        this.timeExpired.next(true);
      }
      this.updateCountdownTime();
    });
  }

  private resetCountdown(time: number): void {
    this.countdownSeconds = time;
  }

  getCountdownTime(): Subject<string> {
    return this.countdownTimeSubject;
  }

  private updateCountdownTime(): void {
    if (this.countdownSeconds <= 0) {
      this.countdownTimeSubject.next('');
    } else {
      const minutes = Math.floor(this.countdownSeconds / 60);
      const remainingSeconds = this.countdownSeconds % 60;
      this.countdownTimeSubject.next(`${minutes} min : ${remainingSeconds} sec`);
    }
  }
}

