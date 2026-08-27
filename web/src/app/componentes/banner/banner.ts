import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {
  @Input() titulo: string = "Banner Principal";
  @Input() subtitulo: string = "Aprende con los mejores expertos de la industria.";
  @Input() imagenUrl: string = "https://via.placeholder.com/1200x400";
  @Input() botonTexto: string = "Ver Cursos";
  @Input() botonLink: string = "/cursos";

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
