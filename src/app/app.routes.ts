import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Haven — Private Performance Training',
  },
  {
    path: 'gym',
    loadComponent: () =>
      import('./pages/gym/gym.component').then(m => m.GymComponent),
    title: 'The Gym — Haven',
  },
  {
    path: 'trainers',
    loadComponent: () =>
      import('./pages/trainers/trainers.component').then(m => m.TrainersComponent),
    title: 'Our Coaches — Haven',
  },
  {
    path: 'classes',
    loadComponent: () =>
      import('./pages/classes/classes.component').then(m => m.ClassesComponent),
    title: 'Programs & Sign Up — Haven',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
