import { Component, Output,Input, EventEmitter } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-modal',
  imports:[FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})

export class ModalComponent {
  title = '';
  desc = '';
 constructor(private todoService: TodoService){}
 todos: Todo[] =[];
 @Output() close = new EventEmitter<void>();
 @Output() save = new EventEmitter<Todo>();
//  @Input() arr: Todos[]=[];

  closeModal(): void {
    this.close.emit();
  }


//   onSave(): void {
//     const newTodo : Todo ={ title: this.title, desc: this.desc };
//     this.save.emit(newTodo);
//      this.closeModal();
//   }

addTodo(): void {
  const todo: Todo = { title: this.title, desc: this.desc };

  this.todoService.addTodos(todo).subscribe({
    next: (response: Todo) => { // Assuming the API returns the added todo with an ID
      console.log('Todo added successfully', response);
      window.location.reload();
      // Add the new todo to the local array
      this.todos.push(response);
       console.log(this.todos);// Update the local todos array
      this.closeModal(); // Close the modal
    },
    error: (error) => {
      console.error('Error adding todo:', error);
    }
  });
}



}
