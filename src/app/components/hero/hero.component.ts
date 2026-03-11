import { Component, AfterViewInit, ViewChild, ElementRef, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);

  @ViewChild('heroVideo')
  heroVideoRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const video = this.heroVideoRef?.nativeElement;

    if (!video) return;

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    if (video.readyState >= 3) {
      tryPlay();
    } else {
      video.addEventListener('canplay', tryPlay, { once: true });
    }
  }
  startVideo() {
    const video = this.heroVideoRef.nativeElement;

    video.muted = true;
    video.play().catch(() => {});
  }
}
