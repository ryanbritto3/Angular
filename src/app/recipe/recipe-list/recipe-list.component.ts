import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { HandleDataService } from '../handle-data.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private handleData: HandleDataService) { }

  ngOnInit() {
    // this.recipes.push(
    //   new Recipe(
    //     'Burger',
    //     './assets/Burger.png',
    //     'This is a western version of Indian Vada-Pav'
    //   )
    // );
    // this.recipes.push(
    //   new Recipe(
    //     'Pizza',
    //     './assets/Pizza.png',
    //     // tslint:disable-next-line:max-line-length
    //     'Pizza is a savoury dish of Italian origin, consisting of a round base dough topped with tomatoes, cheese, and meat'
    //   )
    // );
    // this.recipes.push(
    //   new Recipe(
    //     'Cake',
    //     './assets/Cake.png',
    //     'Cake is a form of sweet dessert that is typically baked. In its oldest forms, cakes were modifications of breads'
    //   )
    // );

    this.recipes = this.handleData.getRecipes();

  }


  showDetail(recipe: Recipe) {
    this.handleData.updateRecipe(recipe);
  }
}
