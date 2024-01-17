import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {

  // check validity of the url path 
  url = "assets/data.json"

  constructor(private httpClient: HttpClient) { }

  private getStandardOptions() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
  }

  getShoppingItems(){
    const options = this.getStandardOptions()
    return this.httpClient.get(this.url, options).pipe(catchError(this.handleError))
  }

  //handling errors
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('There is an issue with the client or network:', error.error);
    } else {
      console.error('Server-side error: ', error.error)
    }
    return throwError(() => new Error('Cannot retrieve wishes from the server. Please try again.'));
  }
}
 