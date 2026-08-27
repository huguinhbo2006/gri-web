import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiencia-evento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia-evento.html',
  styleUrl: './experiencia-evento.css'
})
export class ExperienciaEvento {
  @Input() titulo: string = "Cómo se viven nuestras clases";
  @Input() descripcion: string = "Una experiencia dinámica que te prepara para el éxito.";
  @Input() videoUrl: string = "https://www.youtube.com/embed/dQw4w9WgXcQ";

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
