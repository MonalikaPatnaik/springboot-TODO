import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {Todo} from '../todo';
import {TodoService} from '../todo.service';
@Component({
  selector: 'app-container',
  imports: [CommonModule, FormsModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
constructor(private todoService: TodoService){}
todos: Todo[] =[];
ngOnInit():void{
this.todoService.getTodos().subscribe((data:Todo[])=>{
  console.log(data);
  this.todos=data;
  })
  }
 @Output() editclose = new EventEmitter<void>();
editModal: boolean = false;

title: string = '';
desc: string = '';
editIndex: number | null = null;

deleteTodo(id: number): void {
  this.todoService.deleteTodo(id).subscribe({
    next: () => {
      console.log('Todo deleted successfully');
      window.location.reload(); // Reload the page
    },
    error: (error) => {
      console.error('Error deleting todo:', error);
    }
  });
}

 showTodo(id:number){
    this.editIndex = id;
      const todo = this.todos.find((t) => t.id === id);
          if (todo) {
            this.title = todo.title; // Prefill title
            this.desc = todo.desc; // Prefill description
            this.editModal = true;
          }

   }
 closeModal(): void {
    this.editModal = false;
       this.editclose.emit();
     }
    editTodo(): void {
if(this.editIndex!==null)
      {
        const updatedTodo = { title: this.title, desc: this.desc };
        this.todoService.updateTodo(this.editIndex,updatedTodo).subscribe(() => {
                                                                                                          // Update the todo locally
                                                                                                          const index = this.todos.findIndex((t) => t.id === this.editIndex);
                                                                                                          if (index > -1) {
                                                                                                            this.todos[index] = { ...this.todos[index], ...updatedTodo };
                                                                                                          }

                                                                                                          this.closeModal(); // Close modal after saving
                                                                                                        })
                                                                                                      }
       }

}
