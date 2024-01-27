import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeServise {
  constructor(private http: HttpClient) {}

  get(id: any): Observable<IRecipe> {
    return this.http.get<IRecipe>('/api/recipe/' + id);
  }
}

export interface IRecipe {
  id: number;
  name: string;
  img: string;
}
