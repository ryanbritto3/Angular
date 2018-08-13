import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from '../recipe/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
  }

  onAdd(ingredientName: string, quantity: number) {
    this.ingredientService.pushIngredient(new Ingredient(ingredientName, quantity));
  }
}
