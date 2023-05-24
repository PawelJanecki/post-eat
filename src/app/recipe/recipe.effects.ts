import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RecipeActions } from './action-types';
import { RecipeService } from './service/recipe.service';
import { concatMap, map } from 'rxjs';

@Injectable()
export class RecipeEffects {
  loadRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.loadAllRecipes),
      concatMap(action => this.recipeService.getAll()),
      map(recipes => RecipeActions.allRecipesLoaded({ recipes }))
    )
  );

  constructor(private actions$: Actions, private recipeService: RecipeService) {}
}
