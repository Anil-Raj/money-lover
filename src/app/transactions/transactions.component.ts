import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './transactions.service';
import { Transaction } from '../Models/Transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[];
  constructor(private service: TransactionsService) { }

  ngOnInit() {
    this.service.getTransactions().subscribe(tr => {
      console.log(tr);
      this.transactions = tr;
    });
  }

}
