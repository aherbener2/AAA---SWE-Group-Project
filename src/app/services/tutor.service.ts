// Service provides methods to access public and protected resources

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  constructor(private http: HttpClient) { }

  getTutorList(): Observable<any> {
    return this.http.get(API_URL + 'tutor-list');
  }

  createTutor(tutor: object): Observable<object> {
    return this.http.get(API_URL + 'save-tutor');
  }

  getTutor(id: String): Observable<Object> {
    return this.http.get(API_URL + 'tutor/${id}');
  }

  updateTutor(id: String, value: any): Observable<Object> {
    return this.http.get(API_URL+'update-tutor/${id}', value);
  }

  /*getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text'});
  }
  
  //private component for tutors only
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  */
}
