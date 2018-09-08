import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from '../recipe/ingredient.model';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private ingredientService: IngredientService) { }
  dangerStyle = {
    'background-color': '#d9534f',
    'color': 'white'
  };

  ngOnInit() {
  }

  // onAdd(ingredientName: string, quantity: number) {
  //   // this.ingredientService.pushIngredients([new Ingredient(ingredientName, quantity)]);
  //   console.log('TODO need to add');
  // }

  onSubmit(form: NgForm) {
    console.log(form);
    this.ingredientService.pushIngredients([new Ingredient(form.value.recipeName, form.value.recipeQuantity)]);
  }
}
