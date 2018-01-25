import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Customer } from '../models/customer'; 

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CustomerService {
  private customersUrl = window['appProperties'].service.customers;  // URL to web api

  constructor(
    private http: HttpClient) { }



  /** GET costmers from the server */
  getCustomers (): Observable<any> {
    return this.http.get<Customer[]>(this.customersUrl)
      .pipe(
        tap(customers => this.log(`fetched customers`)),
        catchError(this.handleError('getCustomers', []))
      );
    
  }



  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

}
