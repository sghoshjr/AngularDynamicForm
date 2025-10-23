import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-user-component',
  imports: [ButtonModule, CommonModule, RadioButtonModule],
  templateUrl: './user-component.html',
  styleUrl: './user-component.scss',
})
export class UserComponent {}
