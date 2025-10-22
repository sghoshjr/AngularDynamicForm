import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeIcons } from 'primeng/api';

import { NAV_ITEMS } from './nav-items';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header-component.html',
  styleUrls: ['./header-component.scss'],
})
export class HeaderComponent {
  readonly navItems = NAV_ITEMS;
  readonly PrimeIcons = PrimeIcons;
}
