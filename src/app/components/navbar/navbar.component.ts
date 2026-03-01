import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const onScroll = () => this.scrolled.set(window.scrollY > 48);
      window.addEventListener('scroll', onScroll, { passive: true });
      destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
    });
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
