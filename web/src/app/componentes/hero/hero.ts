import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  @Input() titulo: string = "Lumiere Educación";
  @Input() subtitulo: string = "Tu futuro profesional empieza hoy mismo.";
  @Input() imagenUrl: string = "https://via.placeholder.com/1920x800";
  @Input() botonTexto: string = "Comenzar Ahora";
  @Input() botonLink: string = "/registro";

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
