import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Transaction } from '../Models/Transaction';

@Injectable()
export class TransactionsService {

  private transactionUrl = 'http://localhost:5000/api/tr';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getTransactions (): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionUrl);
  }
}
