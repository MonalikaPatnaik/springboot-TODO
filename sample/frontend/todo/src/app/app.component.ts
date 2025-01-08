import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ContainerComponent} from './container/container.component';
import {ModalComponent} from './modal/modal.component';
import {Todo} from './todo';
import {TodoService} from './todo.service';
// type Todos={
//     title: string;
//     desc: string;
//   };
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContainerComponent,ModalComponent,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
//     title: string = '';
//     desc: string = '';
//   arr: Todos[] = [];
// constructor(private todoService: TodoService){}

onSubmit(event: Event) {
//       event.preventDefault(); // Prevent form submission
      console.log('Search submitted!');
}
showModal: boolean = false;
 @Output() editModal: boolean = false;
    onClick():void {
    this.showModal = true;
     console.log('SVG clicked!');
    }
   onClose(): void {
      this.showModal = false;
    }
//   addTodo(todo: Todo): void {
//      this.todoService.addTodos(todo).subscribe()
//     }
  editClose(){
    this.editModal=false;
    }
}
