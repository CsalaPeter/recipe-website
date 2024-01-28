import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private homeComponent: HomeComponent) {}

  searchText(term: string) {
    this.homeComponent.searchParam(term);
  }
}
