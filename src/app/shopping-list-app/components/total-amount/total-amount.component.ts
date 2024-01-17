import { Component, Input } from '@angular/core';
import { ShopItem } from '../../models/shopItem';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.css']
})

export class TotalAmountComponent {
  @Input() items! : ShopItem[]

  constructor(private currencyPipe: CurrencyPipe) {}

  get totalAmount(): number {
    // +item.price - there is + in order to change item.price into Num
    return this.items.reduce((total, item) => total + +item.price, 0);
  }
}

