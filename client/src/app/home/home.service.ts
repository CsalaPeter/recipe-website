import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public recipes = toSignal<IRecipe[]>(this.http.get<IRecipe[]>('/api/'));

  constructor(private http: HttpClient) {}
}

export interface IRecipe {
  id: number;
  name: string;
  img: string;
  shortDesc: string;
}
