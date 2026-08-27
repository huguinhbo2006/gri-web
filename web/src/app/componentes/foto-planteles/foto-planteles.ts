import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foto-planteles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foto-planteles.html',
  styleUrl: './foto-planteles.css'
})
export class FotoPlanteles {
  @Input() titulo: string = "Nuestras Instalaciones";
  @Input() fotosJson: string = "[\n  {\n    \"nombre\": \"Plantel Centro\",\n    \"imagenUrl\": \"https://via.placeholder.com/600x400\"\n  },\n  {\n    \"nombre\": \"Plantel Américas\",\n    \"imagenUrl\": \"https://via.placeholder.com/600x400\"\n  }\n]";

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
