import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SearchViewComponent } from './view/search-view/search-view.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: 'search/:value', component: SearchViewComponent },
];
