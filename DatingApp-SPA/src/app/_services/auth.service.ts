import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  basedUrl = 'http://localhost:5000/api/auth/';

  constructor(private http: HttpClient) { }

  login(user: { username: string, password: string }) {
    return this.http.post(this.basedUrl + 'login', user).pipe(
      map((response: any) => {
        if (response) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  register(user: { username: string, password: string }) {
    return this.http.post(this.basedUrl + 'register', user);
  }
}

