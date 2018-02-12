import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions/transactions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {

  transaction: any;
  constructor(private route: ActivatedRoute, private service: TransactionsService) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getTransaction(id)
      .subscribe(hero => this.transaction = hero);
  }

}
