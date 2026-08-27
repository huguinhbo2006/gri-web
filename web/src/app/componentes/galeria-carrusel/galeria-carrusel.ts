import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria-carrusel.html',
  styleUrl: './galeria-carrusel.css'
})
export class GaleriaCarrusel {
  @Input() titulo: string = "Nuestra Galería";
  @Input() imagenesJson: string = "[\n  {\n    \"imagenUrl\": \"https://via.placeholder.com/800x500\"\n  },\n  {\n    \"imagenUrl\": \"https://via.placeholder.com/800x500\"\n  }\n]";

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
