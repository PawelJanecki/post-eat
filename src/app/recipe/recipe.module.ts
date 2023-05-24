import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RecipeResolver } from './recipe.resolver';
import { RecipeEffects } from './recipe.effects';
import { recipeReducer } from './reducers/recipe.reducers';

const routes: Routes = [
  {
    path: '',
    component: RecipesListComponent,
    resolve: {
      recipes: RecipeResolver,
    },
  },
];

@NgModule({
  declarations: [RecipesListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('recipes', recipeReducer),
    EffectsModule.forFeature([RecipeEffects]),
  ],
  providers: [RecipeResolver],
})
export class RecipeModule {}
