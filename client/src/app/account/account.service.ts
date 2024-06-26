import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  register(newUser: IRegister): Observable<{}> {
    return this.http.post('/api/register', newUser);
  }

  login(user: ILogin): Observable<{}> {
    return this.http.post('/api/login', user);
  }

  me(): Observable<IUser[]> {
    return this.http.get<IUser[]>('/api/me');
  }
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  email: string;
}
