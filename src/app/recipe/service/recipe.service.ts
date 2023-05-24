import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private db: Recipe[];

  constructor() {
    this.db = [
      { id: '1', name: 'Recipe no1', description: 'Description1' },
      { id: '2', name: 'Recipe no2', description: 'Description2' },
    ];
  }

  getAll(): Observable<Recipe[]> {
    return of(this.db);
  }

  create(recipe: Recipe): Observable<any> {
    this.db.push(recipe);
    return of(this.db.find(e => e.id === recipe.id));
  }

  delete(recipeId: string) {
    return of(null);
  }

  update(recipeId: string, changes: Partial<Recipe>) {
    let recipeFromDb = this.db.find(e => e.id === recipeId)!;
    Object.assign(recipeFromDb, changes);
    return of(recipeFromDb);
  }
}
