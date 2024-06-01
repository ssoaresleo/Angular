import { Injectable } from '@angular/core';
import { UserProps } from '../components/list-render/list-render.component';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  remove(users: UserProps[], user: UserProps) {
    console.log('Service');
    return users.filter((u) => user.name !== u.name);
  }
}
