import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, RouterLink, AnimateOnScrollDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
