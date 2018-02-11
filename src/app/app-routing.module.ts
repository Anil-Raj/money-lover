import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { CategoriesComponent } from './categories/categories.component';
import { SettingsComponent } from './settings/settings.component';
import { TrendsComponent } from './trends/trends.component';
import { DebtsComponent } from './debts/debts.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'transactions', component: TransactionsComponent },
  { path: 'debt', component: DebtsComponent },
  { path: 'trend', component: TrendsComponent },
  { path: 'category', component: CategoriesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', component: TransactionsComponent }
];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule { }
