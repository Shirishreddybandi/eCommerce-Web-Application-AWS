import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserDto {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = `${environment.apiBaseUrl}/user`;

  constructor(private http: HttpClient) { }

  getUserDetails(userId: string): Observable<User> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    const options = { headers };
    const url = `${this.baseUrl}/${userId}`;
    return this.http.get<User>(url, options);
  }

  updateUser(userId: string, userDto: UserDto): Observable<User> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    const options = { headers };
    const url = `${this.baseUrl}/update/${userId}`;
    return this.http.put<User>(url, userDto, options);
  }
}