import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-carreras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-carreras.html',
  styleUrl: './tabla-carreras.css'
})
export class TablaCarreras {
  @Input() titulo: string = "Puntajes Mínimos por Carrera";

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
