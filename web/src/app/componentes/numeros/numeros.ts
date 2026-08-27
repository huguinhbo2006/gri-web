import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-numeros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './numeros.html',
  styleUrl: './numeros.css'
})
export class Numeros {
  @Input() titulo: string = "Nuestros Logros";
  @Input() itemsJson: string = "[\n  {\n    \"numero\": \"95%\",\n    \"etiqueta\": \"Aprobados\"\n  },\n  {\n    \"numero\": \"10k+\",\n    \"etiqueta\": \"Alumnos Egresados\"\n  },\n  {\n    \"numero\": \"15\",\n    \"etiqueta\": \"Sedes en el país\"\n  }\n]";

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
