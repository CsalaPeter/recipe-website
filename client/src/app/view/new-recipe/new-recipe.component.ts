import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { AppService, INewRecipe } from '../../app.service';

@Component({
  selector: 'app-new-recipe',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.css',
})
export class NewRecipeComponent {
  constructor(private appService: AppService) {}

  recipeForm = new FormGroup({
    recipeName: new FormControl(''),
    recipeImg: new FormControl(''),
    recipePrep: new FormControl(0),
    recipeCook: new FormControl(0),
    recipeDiff: new FormControl(''),
    recipeServ: new FormControl(0),
    recipeDesc: new FormControl(''),
    recipeKcal: new FormControl(0),
    recipeFat: new FormControl(0),
    recipeCarbs: new FormControl(0),
    recipeFiber: new FormControl(0),
    recipeProtein: new FormControl(0),
    recipeIng: new FormControl(''),
    recipeSteps: new FormControl(''),
  });

  onSubmit() {
    const newRecipe: INewRecipe = {
      name: this.recipeForm.get(['recipeName'])!.value,
      img: this.recipeForm.get(['recipeImg'])!.value,
      prep: this.recipeForm.get(['recipePrep'])!.value,
      cook: this.recipeForm.get(['recipeCook'])!.value,
      diff: this.recipeForm.get(['recipeDiff'])!.value,
      serv: this.recipeForm.get(['recipeServ'])!.value,
      shortDesc: this.recipeForm.get(['recipeDesc'])!.value,
      kcal: this.recipeForm.get(['recipeKcal'])!.value,
      fat: this.recipeForm.get(['recipeFat'])!.value,
      carbs: this.recipeForm.get(['recipeCarbs'])!.value,
      fiber: this.recipeForm.get(['recipeFiber'])!.value,
      protein: this.recipeForm.get(['recipeProtein'])!.value,
      ingredients: this.recipeForm.get(['recipeIng'])!.value,
      steps: this.recipeForm.get(['recipeSteps'])!.value,
    };

    this.appService.newRecipe(newRecipe).subscribe();
    console.log(newRecipe);
  }
}
