import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simulador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simulador.html',
  styleUrl: './simulador.css'
})
export class Simulador {
  @Input() titulo: string = "Simulador de Examen";
  @Input() descripcion: string = "Prueba tus conocimientos con nuestro simulador dinámico.";
  @Input() urlExamen: string = "https://examen.lumiere.com";

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
