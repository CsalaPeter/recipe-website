import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  //public recipes = toSignal<IRecipe[]>(this.http.get<IRecipe[]>('/api/'));

  getAll(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>('/api/');
  }

  search(text: string): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>('/api/search/' + text);
  }

  get(id: any): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>('/api/recipe/' + id);
  }

  newRecipe(recipe: INewRecipe): Observable<{}> {
    return this.http.post('/api/newRecipe', recipe);
  }
}

export interface IRecipe {
  id: number;
  recipe_name: string;
  img: string;
  prep: number;
  cook: number;
  diff: string;
  serv: string;
  short_desc: string;
  kcal: number;
  fat: number;
  carbs: number;
  fiber: number;
  protein: number;
  ingredients: string;
  steps: string;
}

export interface INewRecipe {
  recipe_name: string;
  img: string;
  prep: number;
  cook: number;
  diff: string;
  serv: string;
  short_desc: string;
  kcal: number;
  fat: number;
  carbs: number;
  fiber: number;
  protein: number;
  ingredients: string;
  steps: string;
}
