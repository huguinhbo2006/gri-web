import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-minibanner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minibanner.html',
  styleUrl: './minibanner.css'
})
export class Minibanner {
  @Input() texto: string = "⚡ Descuento del 15% válido hasta este fin de semana.";
  @Input() colorFondo: string = "#ffc107";

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
