import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: RecipesListComponent,
  },
];

@NgModule({
  declarations: [RecipesListComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class RecipesModule {}
