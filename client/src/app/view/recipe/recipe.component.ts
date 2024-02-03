import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService, IRecipe } from '../../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
})
export class RecipeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private appService: AppService) {}
  recipe!: IRecipe;
  ingredients: string[] = [''];
  steps: string[] = [''];

  ngOnInit(): void {
    this.getRecipe(this.route.snapshot.params['id']);
  }

  getRecipe(id: string): void {
    this.appService.get(id).subscribe({
      next: (data) => {
        this.recipe = data[0];
        this.ingredients = this.recipe.ingredients.split('\n');
        this.steps = this.recipe.steps.split('\n');
      },
    });
  }
}
