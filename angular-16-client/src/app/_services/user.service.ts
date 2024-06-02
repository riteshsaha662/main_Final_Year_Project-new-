// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// const API_URL = 'http://localhost:2000/api/test/';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserService {
//   constructor(private http: HttpClient) {}

//   getPublicContent(): Observable<any> {
//     return this.http.get(API_URL + 'all', { responseType: 'text' });
//   }

//   getUserBoard(): Observable<any> {
//     return this.http.get(API_URL + 'user', { responseType: 'text' });
//   }
  
//   getModeratorBoard(): Observable<any> {
//     return this.http.get(API_URL + 'mod', { responseType: 'text' });
//   }

//   getAdminBoard(): Observable<any> {
//     return this.http.get(API_URL + 'admin', { responseType: 'text' });
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Update the API_URL constant to point to your Render backend URL
const API_URL = 'https://main-final-year-project-new-3.onrender.com/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
