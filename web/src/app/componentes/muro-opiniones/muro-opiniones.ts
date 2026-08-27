import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-muro-opiniones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './muro-opiniones.html',
  styleUrl: './muro-opiniones.css'
})
export class MuroOpiniones {
  @Input() titulo: string = "Lo que dicen nuestros alumnos";
  @Input() opinionesJson: string = "[\n  {\n    \"nombre\": \"Sofía Martínez\",\n    \"rating\": 5,\n    \"comentario\": \"Excelente curso, obtuve mi puntaje deseado.\"\n  },\n  {\n    \"nombre\": \"Carlos Ruiz\",\n    \"rating\": 4.8,\n    \"comentario\": \"Los profesores son muy dedicados y explican increíble.\"\n  }\n]";

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
