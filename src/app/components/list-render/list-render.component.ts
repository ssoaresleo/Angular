import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

type UserProps = {
  name: string;
  email: string;
};

type ProductProps = {
  name: string;
  description: string;
  price: number;
};

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss',
})
export class ListRenderComponent {
  users: UserProps[] = [
    { name: 'John', email: 'john@gmail.com' },
    { name: 'Helena', email: 'helena@gmail.com' },
    { name: 'Otávio', email: 'otavio.g@gmail.com' },
  ];

  userDetails = '';

  products: ProductProps[] = [
    { name: 'Teclado', description: 'Teclado para jogos', price: 200 },
    { name: 'Monitor', description: 'Monitor para jogos', price: 2300 },
    { name: 'Mouse', description: 'Mouse para jogos', price: 300 },
  ];

  showEmail(user: UserProps) {
    this.userDetails = `O email do usuário ${user.email} é ${user.email}`;
  }
}
