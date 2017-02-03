import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Schnitzel', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', []),
    new Recipe('Summer Salad', 'Summer Salad', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg', []),
    new Recipe('Ice Cream', 'Ice Cream', 'http://lunar.moonworks.pl/upload/images/ice-cream.jpg', []),
    new Recipe('Apple Pie', 'Apple Pie', 'http://ak.c.ooyala.com/8xanByNDE6hb53ycG6CyupljeIY9O_xa/promo295046062', []),
    new Recipe('Grilled Chicken', 'Grilled Chicken', 'https://d1doqjmisr497k.cloudfront.net/~/media/Recipe-Photos/McCormick/Main-Dishes/1007x545/Zesty-Herb-Grilled-Chicken.ashx', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
