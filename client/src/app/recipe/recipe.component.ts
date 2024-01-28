import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService, IRecipe } from '../app.service';

@Component({
  selector: 'app-recipe',
  standalone: true,
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
})
export class RecipeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private appService: AppService) {}
  recipe!: IRecipe;

  ngOnInit(): void {
    this.getRecipe(this.route.snapshot.params['id']);
  }

  getRecipe(id: string): void {
    this.appService.get(id).subscribe({
      next: (data) => {
        console.log(data);
        this.recipe = data[0];
      },
    });
  }
}
