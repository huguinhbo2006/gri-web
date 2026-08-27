import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Builder } from '../../servicios/builder';
import { NavbarComponent } from '../../componentes/navbar/navbar';
import { HeroComponent } from '../../componentes/hero/hero';
import { EventsGridComponent } from '../../componentes/events-grid/events-grid';
import { ServicesComponent } from '../../componentes/services/services';
import { ContactComponent } from '../../componentes/contact/contact';
import { FooterComponent } from '../../componentes/footer/footer';

@Component({
  selector: 'app-dynamic-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    EventsGridComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div *ngIf="loading()" class="text-center py-5">
      <div class="spinner-border text-gold" role="status">
        <span class="visually-hidden">Cargando página...</span>
      </div>
    </div>

    <div *ngIf="!loading() && page()">
      <ng-container *ngFor="let elem of page()?.content?.elements || []">
        <ng-container [ngSwitch]="elem.type">
          <app-navbar *ngSwitchCase="'navbar'" [props]="elem.props"></app-navbar>
          <app-hero *ngSwitchCase="'hero'" [props]="elem.props"></app-hero>
          <app-events-grid *ngSwitchCase="'events-grid'" [props]="elem.props"></app-events-grid>
          <app-services *ngSwitchCase="'services'" [props]="elem.props"></app-services>
          <app-contact *ngSwitchCase="'contact'" [props]="elem.props"></app-contact>
          <app-footer *ngSwitchCase="'footer'" [props]="elem.props"></app-footer>
        </ng-container>
      </ng-container>
    </div>
  `
})
export class DynamicPageComponent implements OnInit {
  page = signal<any>(null);
  loading = signal<boolean>(true);

  constructor(
    private route: ActivatedRoute,
    private builderService: Builder
  ) {}

  ngOnInit(): void {
    const slug = window.location.pathname || '/';
    this.builderService.obtenerPaginaPorSlug(slug).subscribe({
      next: (res: any) => {
        if (res && res.content) {
          if (typeof res.content === 'string') {
            try {
              res.content = JSON.parse(res.content);
            } catch (e) {}
          }
          this.page.set(res);
        }
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error cargando página dinámica:', err);
        this.loading.set(false);
      }
    });
  }
}
