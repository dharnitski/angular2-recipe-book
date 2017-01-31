import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'http://tekclasses.com/wp-content/uploads/2016/02/AngularJS-Shield-large-282x300.png')

  constructor() { }

  ngOnInit() {
  }

}
