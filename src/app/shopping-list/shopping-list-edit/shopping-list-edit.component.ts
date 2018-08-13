import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../recipe/ingredient.model';
import { IngredientService } from '../../ingredient.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  subs: Subscription;
  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients();
    this.subs = this.ingredientService.ingredientAdded.subscribe((ing: Ingredient[]) => {
      this.ingredients = ing;
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
