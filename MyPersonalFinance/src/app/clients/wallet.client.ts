import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WalletClient {
  constructor(private http: HttpClient) {}

  getClientData(): Observable<any> {
    return this.http.get(environment.apiUrl + '/WeatherForecast');
  }
}
