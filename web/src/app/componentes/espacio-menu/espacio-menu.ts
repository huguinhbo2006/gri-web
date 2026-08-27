import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-espacio-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './espacio-menu.html',
  styleUrl: './espacio-menu.css'
})
export class EspacioMenu {
  @Input() alto: number = 80;

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
