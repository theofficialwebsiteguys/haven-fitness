import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

interface Program {
  number: string;
  name: string;
  tagline: string;
  description: string;
  detail: string[];
  price: string;
}

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [PageHeroComponent, RouterLink, AnimateOnScrollDirective, ReactiveFormsModule],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent {
  private fb = inject(FormBuilder);

  programs: Program[] = [
    {
      number: '01',
      name: 'Personal Training',
      tagline: 'One coach. One athlete. No compromises.',
      description: 'Fully customised programming built around your goals, schedule, and physiology. Your coach tracks everything and adjusts in real time.',
      detail: ['3 or 5 sessions / week', 'Private session slots', 'Full nutrition protocol'],
      price: 'From $450 / month',
    },
    {
      number: '02',
      name: 'Performance Group',
      tagline: 'Small group. High standard.',
      description: 'Coach-led sessions with a maximum of 4 athletes. The intimacy of personal training with the energy of a team.',
      detail: ['4 athletes max per session', '5 sessions / week', 'Monthly performance review'],
      price: 'From $280 / month',
    },
    {
      number: '03',
      name: 'Elite Program',
      tagline: 'The full Haven experience.',
      description: 'Unlimited access. Daily programming. Recovery sessions. Nutrition coaching. This is for athletes who treat performance as a non-negotiable.',
      detail: ['Unlimited sessions', 'Recovery & mobility included', 'Weekly coach check-ins'],
      price: 'From $720 / month',
    },
  ];

  form = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    phone:   [''],
    program: ['personal', Validators.required],
    message: [''],
  });

  submitted = signal(false);
  submitting = signal(false);

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting.set(true);
    // TODO: wire up to backend / email service
    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
    }, 800);
  }

  hasError(field: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.invalid && control.touched);
  }
}
