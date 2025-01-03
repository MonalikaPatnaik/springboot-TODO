import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import {ContainerComponent} from './container/container.component';
import {ModalComponent} from './modal/modal.component';
type Todos={
    title: string;
    desc: string;
  };
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContainerComponent,ModalComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    title: string = '';
    desc: string = '';
  arr: Todos[] = [];
  onSubmit(event: Event) {
      event.preventDefault(); // Prevent form submission
      console.log('Search submitted!');
    }
showModal: boolean = false;

    onClick():void {
    this.showModal = true;
     console.log('SVG clicked!');
    }
   onClose(): void {
      this.showModal = false; // Close modal when needed
    }
  addTodo(todo: Todos): void {
      this.arr.push(todo);
      console.log(this.arr); // Check length here
    }
}
