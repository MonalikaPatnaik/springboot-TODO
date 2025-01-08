import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-loginpage',
  imports: [FormsModule,CommonModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginPageComponent {

}
