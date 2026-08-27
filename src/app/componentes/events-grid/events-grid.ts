import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="events" class="py-5 bg-white">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold" style="font-family: var(--font-display); color: var(--primary-dark);">
            {{ props?.title || 'Nuestras Celebraciones' }}
          </h2>
          <p class="text-muted fs-5" *ngIf="props?.subtitle">
            {{ props?.subtitle }}
          </p>
        </div>
        <div class="row g-4">
          <div class="col-md-4" *ngFor="let ev of props?.events">
            <div class="card border-0 shadow-sm h-100 rounded-0">
              <img [src]="ev.image" class="card-img-top rounded-0" [alt]="ev.title" style="height: 250px; object-fit: cover;">
              <div class="card-body text-center p-4">
                <h3 class="card-title h4 fw-bold mb-3" style="font-family: var(--font-display); color: var(--primary-dark);">
                  {{ ev.title }}
                </h3>
                <p class="card-text text-muted mb-4">
                  {{ ev.description }}
                </p>
                <button class="btn btn-lumiere-outline btn-sm">
                  {{ ev.buttonText || 'SABER MÁS' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class EventsGridComponent {
  @Input() props: any;
}
