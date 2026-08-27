import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios.html',
  styleUrl: './testimonios.css'
})
export class Testimonios {
  @Input() titulo: string = "Opiniones y Testimonios reales";
  @Input() testimoniosJson: string = "[\n  {\n    \"nombre\": \"Daniela Torres\",\n    \"testimonio\": \"Gracias a Lumiere ingresé a Medicina en mi primer intento.\",\n    \"foto\": \"https://via.placeholder.com/150\"\n  }\n]";

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
