import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class RecipeCardComponent implements OnChanges {
  @Input() recipes: IRecipe[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['recipes'].previousValue !== changes['recipes'].currentValue) {
      console.log(changes['recipes'].currentValue);
    }
  }
}
