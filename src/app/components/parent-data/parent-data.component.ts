import { Component, Input } from '@angular/core';

type UserRole = 'ADMIN' | 'CUSTOMER';

export type UserData = {
  email: string;
  role: UserRole;
};

@Component({
  selector: 'parent-data',
  standalone: true,
  imports: [],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.scss',
})
export class ParentDataComponent {
  @Input() name: string = '';
  @Input() age: number = 0;
  @Input() hobbies: string[] = [];

  @Input() userData: UserData = {} as UserData;
}
