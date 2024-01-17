import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListItemComponent } from './components/shopping-list-item/shopping-list-item.component';
import { ShoppingListFilterComponent } from './components/shopping-list-filter/shopping-list-filter.component';
import { AddItemFormComponent } from './components/add-item-form/add-item-form.component';
import { FormsModule } from '@angular/forms';
import { TotalAmountComponent } from './components/total-amount/total-amount.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListItemComponent,
    ShoppingListFilterComponent,
    AddItemFormComponent,
    TotalAmountComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ShoppingListComponent
  ],
  providers: [
    CurrencyPipe
  ]
})
export class ShoppingListModule { }
