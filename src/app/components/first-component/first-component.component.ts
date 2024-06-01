import { Component } from '@angular/core';

@Component({
  selector: 'first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss',
})
export class FirstComponentComponent {
  name: string = 'Leonardo';
  age: number = 30;
  hobbies = ["correr", "jogar", "estudar"]
}
