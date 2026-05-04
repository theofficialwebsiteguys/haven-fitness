import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { EmailService } from '../../email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PageHeroComponent, AnimateOnScrollDirective, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private fb           = inject(FormBuilder);
  private emailService = inject(EmailService);

  form = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    phone:   [''],
    message: ['', Validators.required],
  });

  submitted  = signal(false);
  submitting = signal(false);

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);

    const { name, email, phone, message } = this.form.value;

    this.emailService.submitForm({
      name:    name    ?? '',
      email:   email   ?? '',
      phone:   phone   ?? '',
      message: message ?? '',
    }).subscribe({
      next: () => {
        this.submitting.set(false);
        this.submitted.set(true);
      },
      error: () => {
        this.submitting.set(false);
        alert('There was an issue sending your message. Please try again.');
      },
    });
  }

  hasError(field: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.invalid && control.touched);
  }
}
