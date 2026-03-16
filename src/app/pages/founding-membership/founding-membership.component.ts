import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-founding-membership',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective],
  templateUrl: './founding-membership.component.html',
  styleUrl: './founding-membership.component.scss'
})
export class FoundingMembershipComponent {}
