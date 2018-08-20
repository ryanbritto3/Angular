import { Injectable } from '@angular/core';

import { Ingredient } from './recipe/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  ingredientAdded = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Tomato', 5),
    new Ingredient('Onion', 7),
    new Ingredient('Capsicum', 3),
    new Ingredient('Meat', 2),
    new Ingredient('Spices', 4)
  ];
  constructor() { }

  getIngredients(): Ingredient[] {
    return [...this.ingredients];
  }

  pushIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next([...this.ingredients]);
  }
}
