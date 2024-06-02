import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListService } from '../../services/list.service';
import { UserProps } from '../list-render/list-render.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss',
})
export class ItemDetailComponent {
  user?: UserProps;

  constructor(private service: ListService, private route: ActivatedRoute) {
    this.getUser();
  }

  getUser() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getItem(id).subscribe((user) => (this.user = user));
  }
}
