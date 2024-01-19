import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private baseUrl = 'https://api.quotable.io';

  constructor(private http: HttpClient) {}

  getRandomQuote(): Observable<any> {
    return this.http.get(`${this.baseUrl}/random`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('There is an issue with the client or network:', error.error);
    } else {
      console.error('Server-side error: ', error.error)
    }
    return throwError(() => new Error('Cannot retrieve data from the server. Please try again.'));
  }

}
