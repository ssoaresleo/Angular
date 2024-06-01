import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChangeNumberComponent } from '../change-number/change-number.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, ChangeNumberComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {
  show: boolean = true;
  myNumber: number = 0;

  names: string[] = ['jane', 'mary', 'bob', 'john', 'alex'];

  showMessage() {
    this.show = !this.show; //toggle
    console.log('O estado do componente foi alterado!');
  }

  showNotification() {
    alert('Botão clicado!');
  }

  onMouseEnter(hoverName: HTMLElement) {
    hoverName.style.color = 'green';
  }

  onMouseOut(hoverName: HTMLElement) {
    hoverName.style.color = 'blue';
  }

  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 100);
  }
}
