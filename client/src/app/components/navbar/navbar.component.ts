import { OnInit, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppService, IRecipe } from '../../app.service';
import { BehaviorSubject, debounceTime, filter, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
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
        filter((search) => search.length > 2),
        debounceTime(300),
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
    setTimeout(() => {
      this.searchRes = [];
      this.searchParam = '';
    }, 200);
  }
}
