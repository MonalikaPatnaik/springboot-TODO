import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
type Todo={
  title:string;
  desc:string;
  };
@Component({
  selector: 'app-container',
  imports: [CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

 @Input() todos: Todo[]=[];

}
