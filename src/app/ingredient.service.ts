import { Injectable } from '@angular/core';

import { Ingredient } from './recipe/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

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
}
