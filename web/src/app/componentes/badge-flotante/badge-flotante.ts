import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge-flotante',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge-flotante.html',
  styleUrl: './badge-flotante.css'
})
export class BadgeFlotante {
  @Input() texto: string = "¡Nuevo Examen Disponible!";
  @Input() link: string = "/examenGratis";
  @Input() icono: string = "fas fa-bell";

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
