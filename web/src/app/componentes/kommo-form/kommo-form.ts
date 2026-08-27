import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kommo-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kommo-form.html',
  styleUrl: './kommo-form.css'
})
export class KommoForm {
  @Input() titulo: string = "Regístrate para recibir asesoría personalizada";
  @Input() formId: string = "form-12345";
  @Input() scriptUrl: string = "";

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
