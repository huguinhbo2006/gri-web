import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imagen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imagen.html',
  styleUrl: './imagen.css'
})
export class ImagenComponent {
  @Input() imagenUrl: string = "https://via.placeholder.com/600x400";
  @Input() alto: string = "auto";
  @Input() ancho: string = "100%";

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
