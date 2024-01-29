import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppService, IRecipe } from '../app.service';
import { Injectable } from '@angular/core';
import { RecipeCardComponent } from '../components/recipe-card/recipe-card.component';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, RecipeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private appService: AppService) {}
  searchedRecipes: IRecipe[] = [];
  recipes: IRecipe[] = [];

  ngOnInit(): void {
    this.appService.getAll().subscribe((data) => (this.recipes = data));
  }

  searchParam(text: string): void {
    this.appService
      .search(text)
      .subscribe((data) => (this.searchedRecipes = data));
    console.log(this.searchedRecipes);
  }
}
