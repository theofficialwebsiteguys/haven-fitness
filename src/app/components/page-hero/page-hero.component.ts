import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [],
  templateUrl: './page-hero.component.html',
  styleUrl: './page-hero.component.scss'
})
export class PageHeroComponent {
  label       = input('');
  title       = input.required<string>();
  description = input('');
}
