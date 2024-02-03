import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppService, IRecipe } from '../../app.service';
import { BehaviorSubject, debounceTime, filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  searchRes: IRecipe[] = [];
  seachSubject = new BehaviorSubject<string>('');
  searchParam = '';
  constructor(private router: Router, private appService: AppService) {
    this.seachSubject
      .pipe(
        debounceTime(500),
        filter((search) => search.length > 2),
        switchMap((search) => this.appService.search(search))
      )
      .subscribe((data) => (this.searchRes = data));
  }

  searchRoute(text: string) {
    this.router.navigate(['/search/', text]);
    console.log(text);
  }

  handleSearch(search: string) {
    this.seachSubject.next(search);
  }

  onBlur() {
    this.searchRes = [];
    this.searchParam = '';
  }
}
