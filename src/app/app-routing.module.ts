import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeInitComponent } from './recipe/recipe-init/recipe-init.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipeComponent, children: [
      { path: '', component: RecipeInitComponent },
      { path: ':id', component: RecipeDetailsComponent }
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
