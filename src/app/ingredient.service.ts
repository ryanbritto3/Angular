import { Injectable } from '@angular/core';

import { Ingredient } from './recipe/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  ingredientAdded = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [];
  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  pushIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next([...this.ingredients]);
  }
}
