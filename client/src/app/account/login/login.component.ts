import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AccountService, ILogin } from '../account.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) {}

  loginForm = this.formBuilder.group({
    loginEmail: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    const user: ILogin = {
      email: this.loginForm.get(['loginEmail'])!.value,
      password: this.loginForm.get(['password'])!.value,
    };

    this.accountService.login(user).subscribe();
    console.log(user);
  }
}
