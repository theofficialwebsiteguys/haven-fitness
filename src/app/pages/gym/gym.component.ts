import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-gym',
  standalone: true,
  imports: [PageHeroComponent, RouterLink, AnimateOnScrollDirective],
  templateUrl: './gym.component.html',
  styleUrl: './gym.component.scss'
})
export class GymComponent {
  amenities = [
    { icon: '◻', label: 'Private Training Floor', detail: '3,200 sq ft' },
    { icon: '◻', label: 'Olympic Lifting Platform', detail: '4 dedicated bays' },
    { icon: '◻', label: 'Cold Plunge & Sauna', detail: 'Recovery suite' },
    { icon: '◻', label: 'Recovery Lounge', detail: 'Member access only' },
    { icon: '◻', label: 'Consultation Rooms', detail: 'Private coaching space' },
    { icon: '◻', label: 'Nutrition Bar', detail: 'In-house protocols' },
  ];
}
