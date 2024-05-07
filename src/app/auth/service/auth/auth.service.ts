import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import baseUrl from '../../../helper';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static loginStatusSubject = new Subject<boolean>();
  constructor(private http: HttpClient) { }

  public register(registerRequest: any): Observable<any> {
    return this.http.post(baseUrl + "/api/server/register", registerRequest);
  }

  public login(loginRequest: any): Observable<any> {
    return this.http.post(baseUrl + "/api/server/login", loginRequest)
  }
  
}
