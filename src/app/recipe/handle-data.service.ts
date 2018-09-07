import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './models/recipe.model';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class HandleDataService {

  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      './assets/Burger.png',
      'This is a western version of Indian Vada-Pav',
      [
        new Ingredient('Bread', 3),
        new Ingredient('Tomato', 5),
        new Ingredient('Onion', 4),
        new Ingredient('Potato', 3)
      ]
    ),
    new Recipe(
      'Pizza',
      './assets/Pizza.png',
      // tslint:disable-next-line:max-line-length
      'Pizza is a savoury dish of Italian origin, consisting of a round base dough topped with tomatoes, cheese, and meat',
      [
        new Ingredient('Meat', 3),
        new Ingredient('Cheese', 10),
        new Ingredient('Garlic', 4)
      ]
    ),
    new Recipe(
      'Cake',
      './assets/Cake.png',
      'Cake is a form of sweet dessert that is typically baked. In its oldest forms, cakes were modifications of breads',
      [
        new Ingredient('Eggs', 10),
        new Ingredient('Sugar', 3),
        new Ingredient('Wheat', 2)
      ]
    )
  ];
  private recipeSource = new Subject<Recipe>();
  recipeObs$ = this.recipeSource.asObservable();
  constructor() { }

  getRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipeByID(id: number) {
    return this.recipes[id];
  }
}
