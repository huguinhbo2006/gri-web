import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  @Input() logoUrl: string = "https://via.placeholder.com/150x50";
  @Input() enlacesJson: string = "[\n  {\n    \"texto\": \"Inicio\",\n    \"link\": \"/home\"\n  },\n  {\n    \"texto\": \"Licenciaturas\",\n    \"link\": \"/licenciatura\"\n  },\n  {\n    \"texto\": \"Contacto\",\n    \"link\": \"/contacto\"\n  }\n]";

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
