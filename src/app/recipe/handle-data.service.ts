import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class HandleDataService {

  recipes: Recipe[] = [
    new Recipe(
      'Burger',
      './assets/Burger.png',
      'This is a western version of Indian Vada-Pav'
    ),
    new Recipe(
      'Pizza',
      './assets/Pizza.png',
      // tslint:disable-next-line:max-line-length
      'Pizza is a savoury dish of Italian origin, consisting of a round base dough topped with tomatoes, cheese, and meat'
    ),
    new Recipe(
      'Cake',
      './assets/Cake.png',
      'Cake is a form of sweet dessert that is typically baked. In its oldest forms, cakes were modifications of breads'
    )
  ];
  recipeSource = new Subject<Recipe>();
  recipeObs$ = this.recipeSource.asObservable();
  constructor() { }

  updateRecipe(recipe: Recipe) {
    this.recipeSource.next(recipe);
  }

  getRecipes(): Recipe[] {
    return [...this.recipes];
  }
}
