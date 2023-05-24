import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Recipe } from '../model/recipe.interface';
import { createReducer, on } from '@ngrx/store';
import { RecipeActions } from '../action-types';

export interface RecipeState extends EntityState<Recipe> {}

export const adapter = createEntityAdapter<Recipe>();

export const initialRecipeState = adapter.getInitialState();

export const recipeReducer = createReducer(
  initialRecipeState,

  on(RecipeActions.allRecipesLoaded, (state, action) => adapter.addMany(action.recipes, state))
);
