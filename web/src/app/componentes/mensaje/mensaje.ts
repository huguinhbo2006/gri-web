import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mensaje.html',
  styleUrl: './mensaje.css'
})
export class Mensaje {
  @Input() titulo: string = "Aviso Importante";
  @Input() texto: string = "Las inscripciones para el próximo ciclo cierran el 30 de Septiembre. Asegura tu lugar.";

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
