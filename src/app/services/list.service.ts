import { Injectable } from '@angular/core';
import { UserProps } from '../components/list-render/list-render.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type User = {
  id: number;
  name: string;
  email: string;
};

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getItem(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + `/${id}`);
  }

  remove(users: UserProps[], user: UserProps) {
    console.log('Service');
    return users.filter((u) => user.name !== u.name);
  }
}
