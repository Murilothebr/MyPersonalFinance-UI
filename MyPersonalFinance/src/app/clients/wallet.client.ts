import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WalletClient {
  private userIdKey = 'userId';

  constructor(private http: HttpClient) {}

  getUserWallets(): Observable<any> {
    const userId = localStorage.getItem(this.userIdKey);
    return this.http.get(environment.apiRouteWallet + userId);
  }
}
