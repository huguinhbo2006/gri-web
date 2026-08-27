import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light sticky-top" style="background-color: var(--bg-offwhite); border-bottom: 1px solid rgba(72, 52, 21, 0.1);">
      <div class="container">
        <a class="navbar-brand fs-3 fw-bold" href="#" style="color: var(--primary-dark); font-family: var(--font-display);">
          {{ props?.brand || 'Gran Imperial' }}
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" *ngFor="let link of props?.links">
              <a class="nav-link fw-semibold px-3 text-uppercase" [href]="link.url" style="color: var(--primary-dark); font-size: 0.9rem;">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  @Input() props: any;
}
