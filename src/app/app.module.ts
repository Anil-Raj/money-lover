import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { DebtsComponent } from './debts/debts.component';
import { TrendsComponent } from './trends/trends.component';
import { CategoriesComponent } from './categories/categories.component';
import { SavingsComponent } from './savings/savings.component';
import { EventsComponent } from './events/events.component';
import { BillsComponent } from './bills/bills.component';
import { RecurringTransactionsComponent } from './recurring-transactions/recurring-transactions.component';
import { HelpComponent } from './help/help.component';
import { SettingsComponent } from './settings/settings.component';
import { ScanComponent } from './scan/scan.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { AddDebtComponent } from './add-debt/add-debt.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { WalletComponent } from './wallet/wallet.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { TransactionsService } from './transactions/transactions.service';
import { HttpClientModule } from '@angular/common/http';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { GroupByPipe } from './group-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    DebtsComponent,
    TrendsComponent,
    CategoriesComponent,
    SavingsComponent,
    EventsComponent,
    BillsComponent,
    RecurringTransactionsComponent,
    HelpComponent,
    SettingsComponent,
    ScanComponent,
    AddTransactionComponent,
    AddDebtComponent,
    AddCategoryComponent,
    WalletComponent,
    TransactionDetailComponent,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,

  ],
  bootstrap: [AppComponent],
  providers: [TransactionsService]
})
export class AppModule { }
