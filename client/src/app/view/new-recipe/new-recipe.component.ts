import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AppService, INewRecipe } from '../../app.service';

@Component({
  selector: 'app-new-recipe',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.css',
})
export class NewRecipeComponent {
  constructor(
    private appService: AppService,
    private formBuilder: FormBuilder
  ) {}

  recipeForm = this.formBuilder.nonNullable.group({
    recipeName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(100)],
    ],
    recipeImg: [''],
    recipePrep: [0],
    recipeCook: [0],
    recipeDiff: [''],
    recipeServ: [0],
    recipeDesc: [''],
    recipeKcal: [0],
    recipeFat: [0],
    recipeCarbs: [0],
    recipeFiber: [0],
    recipeProtein: [0],
    recipeIng: [''],
    recipeSteps: [''],
  });

  onSubmit() {
    const newRecipe: INewRecipe = {
      recipe_name: this.recipeForm.get(['recipeName'])!.value,
      img: this.recipeForm.get(['recipeImg'])!.value,
      prep: this.recipeForm.get(['recipePrep'])!.value,
      cook: this.recipeForm.get(['recipeCook'])!.value,
      diff: this.recipeForm.get(['recipeDiff'])!.value,
      serv: this.recipeForm.get(['recipeServ'])!.value,
      short_desc: this.recipeForm.get(['recipeDesc'])!.value,
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
