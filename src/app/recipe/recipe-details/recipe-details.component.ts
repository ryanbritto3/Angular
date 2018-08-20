import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Observable, Subscription } from '../../../../node_modules/rxjs';
import { Recipe } from '../models/recipe.model';
import { HandleDataService } from '../handle-data.service';
import { Ingredient } from '../ingredient.model';
import { IngredientService } from '../../ingredient.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {

  temp: Observable<Recipe>;
  recipe: Recipe = new Recipe(
    'Burger',
    './assets/Burger.png',
    'This is a western version of Indian Vada-Pav',
    [
      new Ingredient('Bread', 3),
      new Ingredient('Tomato', 5),
      new Ingredient('Onion', 4),
      new Ingredient('Potato', 3)
    ]
  );
  subscription: Subscription;
  ingredients: Ingredient[] = [];
  constructor(
    private handleData: HandleDataService,
    private ingredientService: IngredientService
  ) { }

  ngOnInit() {
    this.subscription = this.handleData.recipeObs$.subscribe(data => {
      this.recipe = data;
    });
    this.ingredients = this.ingredientService.getIngredients();
  }

  toShoppingList() {
    this.ingredientService.pushIngredients(this.recipe.ingredients);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
