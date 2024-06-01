import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ListService } from '../../services/list.service';
import { HttpClientModule } from '@angular/common/http';

export type UserProps = {
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
  providers: [ListService],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss',
})
export class ListRenderComponent implements OnInit {
  users: UserProps[] = [];

  constructor(private listService: ListService) {
    this.getUsers();
  }

  ngOnInit(): void {}

  // users: UserProps[] = [
  //   { name: 'John', email: 'john@gmail.com' },
  //   { name: 'Helena', email: 'helena@gmail.com' },
  //   { name: 'Otávio', email: 'otavio.g@gmail.com' },
  // ];

  userDetails = '';

  products: ProductProps[] = [
    { name: 'Teclado', description: 'Teclado para jogos', price: 200 },
    { name: 'Monitor', description: 'Monitor para jogos', price: 2300 },
    { name: 'Mouse', description: 'Mouse para jogos', price: 300 },
  ];

  showEmail(user: UserProps) {
    this.userDetails = `O email do usuário  ${user.name} é ${user.email}`;
  }

  removeUser(user: UserProps) {
    console.log('Removendo usuário...');
    this.users = this.listService.remove(this.users, user);
  }

  getUsers() {
    this.listService.getAll().subscribe((users) => (this.users = users));
  }
}
