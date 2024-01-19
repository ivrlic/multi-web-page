import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopItem } from '../../models/shopItem';
import { EventService } from '../../services/EventService';

@Component({
  selector: 'shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})

export class ShoppingListItemComponent implements OnInit{

  @Input() item! : ShopItem
  @Input() isBought! : boolean
  @Output() isBoughtChange = new EventEmitter<boolean>()

  isEditing = false;
  editedItem: ShopItem = { ...this.item };

  // expression that allows numbers and period, and after period one or two digits
  numericPattern = /^[0-9]+([.][0-9]{1,2})?$/;

  constructor(private events: EventService) {}

  get boughtItemCssClass() {
    return this.isBought ? "bought-item" : ""
  }
  
  ngOnInit() {
    // set initial value
    this.editedItem = {...this.item};
  }
  
  toggleIsBought() {
    this.isBought = !this.isBought
    this.isBoughtChange.emit(this.isBought)
    // updating editedItem
    this.editedItem.isBought = this.item.isBought;
  }

  areAllNumeric(input: any) {
    return this.numericPattern.test(input);
  }

  editItem() {
    this.isEditing = true;
  }

  saveEdit() {
    this.isEditing = false;
    this.events.emit("editItem", this.editedItem)
  }

  cancelEdit() {
    this.isEditing = false;
    // reseting the item
    this.editedItem = { ...this.item };
  }

  removeItem() {
    this.events.emit("removeItem", this.item)
  }

}
