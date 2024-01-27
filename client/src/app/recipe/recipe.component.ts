import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeServise } from './recipe.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
  providers: [RecipeServise],
})
export class RecipeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeServise
  ) {}

  ngOnInit() {
    this.getRecipe(this.route.snapshot.params['id']);
  }

  getRecipe(id: string): void {
    this.recipeService.get(id).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
