import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppService, IRecipe } from '../app.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
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
  }
}
