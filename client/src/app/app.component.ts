import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { AccountService, IUser } from './account/account.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [],
})
export class AppComponent implements OnInit {
  constructor(private accountService: AccountService) {}
  user!: IUser;

  ngOnInit(): void {
    this.accountService.me().subscribe((data) => (this.user = data[0]));
    console;
  }
}
