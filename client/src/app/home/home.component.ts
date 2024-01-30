import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppService, IRecipe } from '../app.service';
import { RecipeCardComponent } from '../components/recipe-card/recipe-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, RecipeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private appService: AppService) {}
  recipes: IRecipe[] = [];

  ngOnInit(): void {
    this.appService.getAll().subscribe((data) => (this.recipes = data));
  }
}
