import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent, UserData } from './components/parent-data/parent-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent, ParentDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  userName = 'leonardo';
  age = 17
  hobbies = ['correr', 'jogar', 'estudar'];
  title = 'angular';
  userData: UserData = {
    email: "leonardo@gmail.com",
    role: "ADMIN",
  }
}
