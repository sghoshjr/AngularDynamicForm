import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-user-component',
  imports: [ButtonModule, CommonModule],
  templateUrl: './user-component.html',
  styleUrl: './user-component.scss',
})
export class UserComponent {}
