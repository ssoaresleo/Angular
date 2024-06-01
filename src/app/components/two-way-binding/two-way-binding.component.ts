import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.scss',
})
export class TwoWayBindingComponent {
  name: string = '';

  user = {
    name: 'Leonardo',
    email: 'leonardo@gmail.com',
    age: 17,
  };

  onChangeValue() {
    console.log(`O evento mudou! ${this.name}`);
  }

  onChangeUser() {
    console.log(`Usuário atualizado ${this.user}`);
  }
}
