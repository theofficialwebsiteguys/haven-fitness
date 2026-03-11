import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

interface Trainer {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  photoRatio: string;
  photoSrc: string;
}

@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [PageHeroComponent, RouterLink, AnimateOnScrollDirective],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.scss'
})
export class TrainersComponent {
  trainers: Trainer[] = [
    {
      name: 'Marcus Reid',
      role: 'Head Coach',
      bio: 'Former national-level powerlifter with 12 years of coaching experience. Marcus built Haven\'s programming methodology from the ground up — a system built on data, discipline, and long-term athlete development.',
      specialties: ['Strength', 'Olympic Lifting', 'Athlete Programming'],
      photoRatio: '3 / 4',
      photoSrc: 'assets/5.jpg',
    },
    {
      name: 'Sofia Navarro',
      role: 'Performance Coach',
      bio: 'Certified strength and conditioning specialist with a background in sports physiology. Sofia leads metabolic conditioning and body composition programs, working with athletes at every level.',
      specialties: ['Conditioning', 'Body Composition', 'Nutrition'],
      photoRatio: '3 / 4',
      photoSrc: 'assets/6.jpg',
    },
    {
      name: 'James Okafor',
      role: 'Recovery & Mobility Specialist',
      bio: 'Former physical therapist and movement coach. James designs recovery protocols and mobility work that keep Haven members performing at full capacity week over week, month over month.',
      specialties: ['Mobility', 'Recovery', 'Injury Prevention'],
      photoRatio: '3 / 4',
      photoSrc: 'assets/7.jpg',
    },
  ];
}
