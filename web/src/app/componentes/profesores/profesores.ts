import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profesores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profesores.html',
  styleUrl: './profesores.css'
})
export class Profesores {
  @Input() titulo: string = "Conoce a nuestro equipo docente";
  @Input() profesoresJson: string = "[\n  {\n    \"nombre\": \"Dr. Alejandro Gomez\",\n    \"materia\": \"Matemáticas y Lógica\",\n    \"foto\": \"https://via.placeholder.com/150\"\n  },\n  {\n    \"nombre\": \"Mtra. Elena Ramos\",\n    \"materia\": \"Español y Comprensión\",\n    \"foto\": \"https://via.placeholder.com/150\"\n  }\n]";

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
