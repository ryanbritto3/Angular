import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class HandleDataService {

  recipeSource = new Subject<Recipe>();
  recipeObs$ = this.recipeSource.asObservable();
  constructor() { }

  updateRecipe(recipe: Recipe) {
    this.recipeSource.next(recipe);
  }
}
