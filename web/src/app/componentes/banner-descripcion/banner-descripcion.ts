import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-descripcion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-descripcion.html',
  styleUrl: './banner-descripcion.css'
})
export class BannerDescripcion {
  @Input() titulo: string = "Preguntas sobre la convocatoria";
  @Input() descripcion: string = "Conoce las fechas, puntajes mínimos e inscripciones oficiales.";
  @Input() imagenUrl: string = "https://via.placeholder.com/800x300";

  getParsed(jsonStr: string) {
    try {
      return JSON.parse(jsonStr);
    } catch {
      return [];
    }
  }

  encodeURIComponent(str: string) {
    return encodeURIComponent(str);
  }
}
