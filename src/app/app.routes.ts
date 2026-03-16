import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Haven Fit Club — Performance Training in Paramus, NJ',
  },
  {
    path: 'schedule',
    loadComponent: () =>
      import('./pages/schedule/schedule.component').then(m => m.ScheduleComponent),
    title: 'Schedule — Haven Fit Club',
  },
  {
    path: 'membership',
    loadComponent: () =>
      import('./pages/membership/membership.component').then(m => m.MembershipComponent),
    title: 'Membership — Haven Fit Club',
  },
  {
    path: 'founding-membership',
    loadComponent: () =>
      import('./pages/founding-membership/founding-membership.component').then(m => m.FoundingMembershipComponent),
    title: 'Founding Membership — Haven Fit Club',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact — Haven Fit Club',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
