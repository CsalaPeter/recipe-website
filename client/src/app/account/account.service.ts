import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor() {}
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  userName: string;
  registerEmail: string;
  registerPassword: string;
  passwordAgain: string;
}
