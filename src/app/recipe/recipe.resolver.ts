import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, finalize, first, tap } from 'rxjs';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';
import { loadAllRecipes } from './recipe.actions';

@Injectable()
export class RecipeResolver implements Resolve<any> {
  loading = false;

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      tap(() => {
        if (!this.loading) {
          this.loading = true;
          this.store.dispatch(loadAllRecipes());
        }
      }),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
