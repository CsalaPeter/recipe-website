import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IRecipe } from '../../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
})
export class RecipeCardComponent {
  @Input() recipes: IRecipe[] = [];

  constructor() {}
}
