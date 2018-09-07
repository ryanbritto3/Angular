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
    this.recipes = this.handleData.getRecipes();
  }

}
