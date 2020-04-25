//This service sends signup and signin HTTP POST request to the backend

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //send signin credentials backend at this url
  signin(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  //send sign up credentials to backend at this url
  signup(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      panther_id: credentials.panther_id,
      email: credentials.email,
      firstName: credentials.firstName,
      lastName: credentials.lastName,
      password: credentials.password
    }, httpOptions);
  }
}
