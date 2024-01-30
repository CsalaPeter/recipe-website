import { Component, OnInit } from '@angular/core';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { AppService, IRecipe } from '../../app.service';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [RecipeCardComponent],
  templateUrl: './search-view.component.html',
  styleUrl: './search-view.component.css',
})
export class SearchViewComponent implements OnInit {
  constructor(private appService: AppService, private route: ActivatedRoute) {}
  searchedRecipes: IRecipe[] = [];

  ngOnInit(): void {
    this.searchParam(this.route.snapshot.params['value']);
  }

  searchParam(text: string): void {
    this.appService
      .search(text)
      .subscribe((data) => (this.searchedRecipes = data));
    console.log(this.searchedRecipes);
  }
}
