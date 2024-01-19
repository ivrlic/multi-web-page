import { Component, Output, EventEmitter } from '@angular/core';
import { ShopItem } from '../../models/shopItem';

@Component({
  selector: 'shopping-list-filter',
  templateUrl: './shopping-list-filter.component.html',
  styleUrls: ['./shopping-list-filter.component.css']
})

export class ShoppingListFilterComponent {

  @Output() filterValue = new EventEmitter<any>();

  listFilter: any = "0";

  selectFilter(value : any): void{
    this.filterValue.emit(value);
  }

}
