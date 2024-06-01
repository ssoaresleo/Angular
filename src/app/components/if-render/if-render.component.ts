import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.scss',
})
export class IfRenderComponent {
  canShow: boolean = true;

  name = "Leonardo"
}
