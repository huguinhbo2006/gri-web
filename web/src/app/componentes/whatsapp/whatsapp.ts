import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp.html',
  styleUrl: './whatsapp.css'
})
export class Whatsapp {
  @Input() telefono: string = "523300000000";
  @Input() mensajePredefinido: string = "Hola, me gustaría recibir informes sobre los cursos.";

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
