import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AccountService, IRegister } from '../account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(
    private formBuilder: FormBuilder,
    private accountServive: AccountService
  ) {}

  registerForm = this.formBuilder.group({
    userName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    registerEmail: ['', [Validators.required, Validators.email]],
    registerPassword: ['', [Validators.required, Validators.minLength(10)]],
    passwordAgain: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit() {
    const newUser: IRegister = {
      name: this.registerForm.get(['userName'])!.value,
      email: this.registerForm.get(['registerEmail'])!.value,
      password: this.registerForm.get(['registerPassword'])!.value,
    };

    this.accountServive.register(newUser).subscribe();
    console.log(newUser);
  }
}
