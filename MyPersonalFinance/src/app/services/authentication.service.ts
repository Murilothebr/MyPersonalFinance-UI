import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationClient } from '../clients/authentication.client';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private tokenKey = 'token';
  private userIdKey = 'userId';

  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router
  ) {}

  public login(username: string, password: string): void {
    this.authenticationClient.login(username, password).subscribe((token) => {
      localStorage.setItem(this.tokenKey, token);
      this.setUserIdInLocalStorage(token);
      this.router.navigate(['/']);
    });
  }

  public register(username: string, email: string, password: string): void {
    this.authenticationClient
      .register(username, email, password)
      .subscribe((token) => {
        localStorage.setItem(this.tokenKey, token);
        this.setUserIdInLocalStorage(token);
        this.router.navigate(['/']);
      });
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userIdKey);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }

  public setUserIdInLocalStorage(token: string): void {
    const decodedToken:any = jwt_decode(token);
    localStorage.setItem(this.userIdKey, decodedToken.userId);
  }
}
