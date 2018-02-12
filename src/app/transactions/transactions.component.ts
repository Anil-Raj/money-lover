import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './transactions.service';
import { Transaction } from '../Models/Transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  categories: any[];
  transactions: Transaction[];
  groupByFilter = 'categoryId';
  constructor(private service: TransactionsService) {
    this.service.getTransactions().subscribe(tr => this.transactions = tr);
    this.service.getCategories().subscribe(c => this.categories = c);
  }

  ngOnInit() {

  }
  getHeader(key, trs: Transaction[]) {
    if (this.groupByFilter === 'time') {
      return trs[0].time;
    }
    if (this.groupByFilter === 'categoryId') {
      console.log(key);

      // return this.service.getCategoryById(key).subscribe(c => c.name);
      return 'CategoryName';
    }
  }
}
