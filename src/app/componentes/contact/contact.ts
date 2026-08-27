import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="py-5" style="background-color: var(--bg-grey);">
      <div class="container py-4">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="text-center mb-5">
              <h2 class="display-5 fw-bold" style="font-family: var(--font-display); color: var(--primary-dark);">
                {{ props?.title || 'Contáctanos' }}
              </h2>
              <p class="text-dark-50 fs-5" *ngIf="props?.subtitle">
                {{ props?.subtitle }}
              </p>
            </div>
            <form (submit)="onSubmit($event)">
              <div class="mb-3">
                <input type="text" class="form-control rounded-0 p-3" placeholder="Nombre Completo" required>
              </div>
              <div class="mb-3">
                <input type="email" class="form-control rounded-0 p-3" placeholder="Correo Electrónico" required>
              </div>
              <div class="mb-3">
                <select class="form-select rounded-0 p-3" required>
                  <option value="">Selecciona el Tipo de Evento</option>
                  <option value="Boda">Boda</option>
                  <option value="XV Años">XV Años</option>
                  <option value="Bautizo">Bautizo</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div class="mb-3">
                <textarea class="form-control rounded-0 p-3" rows="5" placeholder="Tu Mensaje..." required></textarea>
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-lumiere btn-lg">
                  {{ props?.buttonText || 'SOLICITAR COTIZACIÓN' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  @Input() props: any;

  onSubmit(event: Event) {
    event.preventDefault();
    alert('¡Gracias por tu mensaje! Te contactaremos a la brevedad.');
  }
}
