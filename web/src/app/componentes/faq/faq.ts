import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {
  @Input() titulo: string = "Preguntas Frecuentes";
  @Input() faqsJson: string = "[\n  {\n    \"pregunta\": \"¿Cuándo inician los cursos?\",\n    \"respuesta\": \"Tenemos inicios cada mes para modalidades presenciales y virtuales.\"\n  },\n  {\n    \"pregunta\": \"¿Qué formas de pago aceptan?\",\n    \"respuesta\": \"Aceptamos transferencias bancarias, pagos con tarjeta y depósitos en Oxxo.\"\n  }\n]";

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
