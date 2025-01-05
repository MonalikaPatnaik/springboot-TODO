import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
type Todo={
  title:string;
  desc:string;
  };
@Component({
  selector: 'app-editmodal',
  imports: [FormsModule,CommonModule],
  templateUrl: './editmodal.component.html',
  styleUrl: './editmodal.component.css'
})
export class EditmodalComponent {
@Input() todos: Todo[]=[];
@Output() close = new EventEmitter<void>();
title: string = '';
desc: string = '';
@Input() editIndex: number | null = null;
editModal:boolean=false;
closeModal(): void {
       this.close.emit();
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
