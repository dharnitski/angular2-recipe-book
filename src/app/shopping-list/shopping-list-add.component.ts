import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit {
  isAdd = true;
  item: Ingredient;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(ingredient: Ingredient) {
    if (!this.isAdd) {
      // Editing
    } else {
      this.item = new Ingredient(ingredient.name, ingredient.amount);
      this.sls.addItem(this.item);
    }
  }

}
