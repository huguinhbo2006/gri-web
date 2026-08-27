import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="text-center text-lg-start py-5" style="background-color: var(--primary-dark); color: var(--text-on-dark);">
      <div class="container p-4">
        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="footer-logo fs-2 fw-bold mb-2" style="font-family: var(--font-display); color: var(--text-on-dark);">
              {{ props?.brand || 'Gran Imperial' }}
            </div>
            <p style="color: rgba(250, 248, 245, 0.8);">
              {{ props?.description || 'Elegancia y entretenimiento exclusivo para tus eventos más importantes.' }}
            </p>
          </div>
          <div class="col-lg-3 mb-4">
            <h5 class="text-uppercase mb-3 fw-bold" style="font-family: var(--font-display);">Enlaces</h5>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="#hero" class="text-white-50 text-decoration-none">Inicio</a></li>
              <li class="mb-2"><a href="#events" class="text-white-50 text-decoration-none">Eventos</a></li>
              <li class="mb-2"><a href="#contact" class="text-white-50 text-decoration-none">Contacto</a></li>
            </ul>
          </div>
          <div class="col-lg-3 mb-4">
            <h5 class="text-uppercase mb-3 fw-bold" style="font-family: var(--font-display);">Síguenos</h5>
            <div class="d-flex justify-content-center justify-content-lg-start gap-3 fs-4">
              <a href="#" class="text-white-50"><i class="fab fa-facebook"></i></a>
              <a href="#" class="text-white-50"><i class="fab fa-instagram"></i></a>
              <a href="#" class="text-white-50"><i class="fab fa-tiktok"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        <p class="mb-0 text-white-50" style="font-size: 0.9rem;">
          {{ props?.copyright || '© 2026 Gran Imperial Casino Events. Todos los derechos reservados.' }}
        </p>
      </div>
    </footer>
  `
})
export class FooterComponent {
  @Input() props: any;
}
