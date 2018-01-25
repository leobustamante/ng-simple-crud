import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../environments/environment';

@Injectable()
export class CustomerService {
  private customersUrl = window['appProperties'].service.customers;  // URL to web api

  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  });

  constructor(private http: Http,
              private snackBar: MatSnackBar,
              private translate: TranslateService) {}

  getCustomers(): Observable<any> {
    return this.http.get(this.customersUrl)
      .map(this.extractJson)
      .catch((error: Response | any) => this.handleError(error));
  }

  private extractJson(res: Response) {
    console.log(res.json())
    return res.json();
  }

  private handleError(error: Response | any) {
    return this.throwError(this.showError(this.extractError(error)));
  }

  private extractError(error: Response | any) {
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      return `${error.status} - ${error.statusText || ''} ${err}`;
    }
    return error.message ? error.message : error.toString();
  }

  private showError(error: string) {
    this.translate.get('bundle.action.close').subscribe((bundle: string) => {
      this.snackBar.open(error, bundle, {
        duration: 20000,
        extraClasses: ['snack-error']
      });
    });
    return error;
  }

  private throwError(error: string) {
    return Observable.throw(error);
  }


}
