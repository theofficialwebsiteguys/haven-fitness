import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  inject,
} from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true,
})
export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {
  /** Optional delay in ms for staggered grid entrances */
  @Input() delay = 0;

  private el = inject(ElementRef<HTMLElement>);
  private platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const el = this.el.nativeElement;
    el.classList.add('anim-item');

    if (this.delay) {
      el.style.transitionDelay = `${this.delay}ms`;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('anim-visible');
          // Remove delay after animating so hover/other transitions aren't delayed
          el.addEventListener('transitionend', () => {
            el.style.transitionDelay = '';
          }, { once: true });
          this.observer?.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
