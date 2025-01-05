import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {EditmodalComponent} from '../editmodal/editmodal.component';
type Todo={
  title:string;
  desc:string;
  };
@Component({
  selector: 'app-container',
  imports: [CommonModule, FormsModule,EditmodalComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

 @Input() todos: Todo[]=[];
 @Output() editclose = new EventEmitter<void>();
editModal: boolean = false;

title: string = '';
desc: string = '';
editIndex: number | null = null;

deleteTodo(index:number){

  this.todos.splice(index, 1);
  console.log(this.todos);
}

 showTodo(index:number){
    this.editIndex = index;
       this.title = this.todos[index].title; // Pre-fill title
       this.desc = this.todos[index].desc;
       this.editModal = true;
   }
 closeModal(): void {
    this.editModal = false;
       this.editclose.emit();
     }
    editTodo(): void {
       if (this.editIndex !== null) {
         this.todos[this.editIndex] = {
           title: this.title,
           desc: this.desc
         };
         this.closeModal();
       }
}
}
