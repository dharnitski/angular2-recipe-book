import { Ingredient } from './../shared/ingredient';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Recipe } from './recipe';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Schnitzel', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Summer Salad', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg', []),
    new Recipe('Ice Cream', 'Ice Cream', 'http://lunar.moonworks.pl/upload/images/ice-cream.jpg', []),
    new Recipe('Apple Pie', 'Apple Pie', 'http://ak.c.ooyala.com/8xanByNDE6hb53ycG6CyupljeIY9O_xa/promo295046062', []),
    new Recipe('Grilled Chicken', 'Grilled Chicken', 'https://d1doqjmisr497k.cloudfront.net/~/media/Recipe-Photos/McCormick/Main-Dishes/1007x545/Zesty-Herb-Grilled-Chicken.ashx', []),
    new Recipe('Chicken Wild Rice Soup', 'Chicken Wild Rice Soup', 'http://www.carriesexperimentalkitchen.com/wp-content/uploads/2011/11/Panera-Copycat-Chicken-wild-rice-soup-1-1024x685.jpg', [])
  ];

  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData(){
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://recipebook-39155.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData(){

  }
}
