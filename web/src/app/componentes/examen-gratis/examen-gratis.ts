import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-examen-gratis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './examen-gratis.html',
  styleUrl: './examen-gratis.css'
})
export class ExamenGratisComponent {
  @Input() titulo: string = "Realiza un Examen de Diagnóstico Gratis";
  @Input() descripcion: string = "Evalúa tu nivel con 50 reactivos y obtén tus resultados al instante.";
  @Input() duracionMinutos: number = 90;

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
