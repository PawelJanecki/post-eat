import { createAction, props } from '@ngrx/store';
import { Recipe } from './model/recipe.interface';

export const loadAllRecipes = createAction('[Recipes Resolver] Load All Recipes');

export const allRecipesLoaded = createAction(
  '[Load Recipes Effect] All Recipes Loaded',
  props<{ recipes: Recipe[] }>()
);
