import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class Categorias {
  @Input() titulo: string = "Explora por Categorías";
  @Input() categoriasJson: string = "[\n  {\n    \"nombre\": \"Salud\",\n    \"icono\": \"fas fa-heartbeat\"\n  },\n  {\n    \"nombre\": \"Ingenierías\",\n    \"icono\": \"fas fa-cog\"\n  },\n  {\n    \"nombre\": \"Administración\",\n    \"icono\": \"fas fa-briefcase\"\n  }\n]";

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
