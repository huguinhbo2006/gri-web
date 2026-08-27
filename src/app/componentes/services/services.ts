import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="services">
      <section *ngFor="let s of props?.services; let i = index" [id]="'servicio-' + s.id" class="py-5" [ngStyle]="{'background-color': i % 2 === 0 ? '#FAF8F5' : '#C2C4B5'}">
        <div class="container">
          <div class="row align-items-center g-5" [ngClass]="{'flex-row-reverse': s.reversed}">
            <div class="col-lg-6">
              <h2 class="display-5 mb-3 fw-bold" style="font-family: var(--font-display); color: var(--primary-dark);">
                {{ s.title }}
              </h2>
              <p class="lead text-muted mb-3" *ngIf="s.subtitle">
                {{ s.subtitle }}
              </p>
              <p class="mb-4" style="line-height: 1.8;">
                {{ s.text }}
              </p>
              <button class="btn btn-lumiere-outline">
                {{ s.buttonText || 'Ver Galería' }}
              </button>
            </div>
            <div class="col-lg-6">
              <img [src]="s.image" class="img-fluid w-100 shadow-sm rounded-0" [alt]="s.title" style="max-height: 400px; object-fit: cover;">
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class ServicesComponent {
  @Input() props: any;
}
