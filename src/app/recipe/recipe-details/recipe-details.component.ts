import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../models/recipe.model';

import { HandleDataService } from '../handle-data.service';
import { Ingredient } from '../ingredient.model';
import { IngredientService } from '../../ingredient.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  ingredients: Ingredient[] = [];
  constructor(
    private handleData: HandleDataService,
    private ingredientService: IngredientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        const id = +params['id'];
        this.recipe = this.handleData.getRecipeByID(id);
      });
  }

  toShoppingList() {
    this.ingredientService.pushIngredients(this.recipe.ingredients);
  }
}
