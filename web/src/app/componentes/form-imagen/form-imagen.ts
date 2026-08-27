import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-imagen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-imagen.html',
  styleUrl: './form-imagen.css'
})
export class FormImagen {
  @Input() titulo: string = "Llena tus datos para descargar";
  @Input() imagenUrl: string = "https://via.placeholder.com/500x500";
  @Input() formId: string = "form-descarga";

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
