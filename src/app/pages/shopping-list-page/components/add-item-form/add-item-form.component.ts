import { Component, Output, EventEmitter } from '@angular/core';
import { ShopItem } from '../../models/shopItem';

@Component({
  selector: 'add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent {

  @Output() addItem = new EventEmitter<ShopItem>();

  // expression that allows numbers and period, and after period one or two digits
  // onlyNumbers: any = '^[0-9.]+$'; 
  numericPattern = /^[0-9]+([.][0-9]{1,2})?$/;
  newItemName = ""
  newItemPrice: string = ""

  addNewItem() {
    const newItem = new ShopItem(this.newItemName, +this.newItemPrice);
    this.addItem.emit(newItem);
    this.newItemName = ""
    this.newItemPrice = ""
  }

  areAllNumeric(input: any) {
    return this.numericPattern.test(input);
  }
}

