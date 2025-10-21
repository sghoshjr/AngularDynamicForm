import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { UserComponent } from './components/user-component/user-component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'user',
    title: 'User',
    component: UserComponent,
  },
];
