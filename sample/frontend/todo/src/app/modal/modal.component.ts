import { Component, Output,Input, EventEmitter } from '@angular/core';
import {FormsModule } from '@angular/forms';
type Todos={
    title: string;
    desc: string;
  };

@Component({
  selector: 'app-modal',
  imports:[FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})

export class ModalComponent {
  title = '';
  desc = '';
 @Output() close = new EventEmitter<void>();
 @Output() save = new EventEmitter<Todos>();
 @Input() arr: Todos[]=[];

  closeModal(): void {
    this.close.emit();
  }


  onSave(): void {
    const newTodo : Todos ={ title: this.title, desc: this.desc };
    this.save.emit(newTodo);
     this.closeModal();
//      this.sendarray.emit(this.arr);
  }



}
