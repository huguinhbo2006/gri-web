import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-admitidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-admitidos.html',
  styleUrl: './tabla-admitidos.css'
})
export class TablaAdmitidos {
  @Input() titulo: string = "Resultados de Alumnos Admitidos";
  @Input() ciclo: string = "2026-A";

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
