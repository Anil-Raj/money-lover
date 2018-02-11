import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { CategoriesComponent } from './categories/categories.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'transactions', component: TransactionsComponent },
  { path: 'category', component: CategoriesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: 'transactions', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
