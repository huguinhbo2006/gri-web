import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos-udg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos-udg.html',
  styleUrl: './cursos-udg.css'
})
export class CursosUdg {
  @Input() titulo: string = "Cursos de Admisión UDG";
  @Input() descripcion: string = "Prepara tu examen de ingreso a la Universidad de Guadalajara.";

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
