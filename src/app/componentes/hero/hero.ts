import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="d-flex align-items-center py-5" [ngStyle]="getHeroStyle()">
      <div class="container text-center py-5">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <h1 class="display-3 fw-bold mb-3" style="color: #FAF8F5; font-family: var(--font-display); text-shadow: 0 2px 4px rgba(0,0,0,0.5);">
              {{ props?.title || 'Gran Imperial Casino Events' }}
            </h1>
            <p class="lead mb-4" style="color: rgba(250, 248, 245, 0.9); font-size: 1.3rem; text-shadow: 0 1px 3px rgba(0,0,0,0.5);">
              {{ props?.lead || 'Noches Elegantes, Memorias Inolvidables. El entretenimiento exclusivo de casino para tus celebraciones más importantes.' }}
            </p>
            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
              <a *ngIf="props?.primaryBtnText" [href]="props?.primaryBtnUrl || '#events'" class="btn btn-lumiere btn-lg">
                {{ props?.primaryBtnText }}
              </a>
              <a *ngIf="props?.secondaryBtnText" [href]="props?.secondaryBtnUrl || '#contact'" class="btn btn-lumiere-outline btn-lg" style="color: #FAF8F5; border-color: #FAF8F5;">
                {{ props?.secondaryBtnText }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  @Input() props: any;

  getHeroStyle() {
    const bgImg = this.props?.backgroundImage || 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1600';
    const opacity = this.props?.overlayOpacity !== undefined ? this.props.overlayOpacity : 0.65;
    
    if (bgImg) {
      return {
        'background': `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity})), url('${bgImg}') center/cover no-repeat`,
        'color': '#FAF8F5',
        'min-height': '500px'
      };
    }
    
    return {
      'background-color': 'var(--primary-dark)',
      'color': '#FAF8F5',
      'min-height': '450px'
    };
  }
}
