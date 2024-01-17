import { Component, OnInit } from '@angular/core';
import { ShopItem } from './models/shopItem';
import { EventService } from './services/EventService';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit{
  items: ShopItem[] = []
  // = [
  //   new ShopItem ("bread", 1.5),
  //   new ShopItem ("meat", 8.5, true),
  //   new ShopItem ("apples", 3),
  //   new ShopItem ("milk", 1.75),
  // ]

  filterValue: string = "0"

  constructor(events: EventService, private shoppingListService: ShoppingListService) {
    // remove item from items
    events.listen("removeItem", (item: ShopItem)=>{
      let index = this.items.indexOf(item);
      this.items.splice(index, 1);
    })

    // editing item 
    events.listen("editItem", (updatedItem: ShopItem)=>{
      const index = this.items.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        this.items[index] = {...updatedItem};
      }
    })
  }

  get visibleItems(): ShopItem[] {
    if (this.filterValue === "0") {
      return this.items
    }
    else if (this.filterValue === "1") {
      return this.items.filter(item => item.isBought)
    }
    else {
      return this.items.filter(item => !item.isBought)
    }
  }

  ngOnInit(): void {
    // getting data from data.json
    this.shoppingListService.getShoppingItems().subscribe(
      (data: any)=>{
      this.items = data
      },
      (error: any) => {
        alert(error.message)
      }
    )
  }

  addItem(e : any): void {
    this.items.push(e)
  }
}
