import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modalidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modalidades.html',
  styleUrl: './modalidades.css'
})
export class Modalidades {
  @Input() titulo: string = "Elige tu modalidad preferida";
  @Input() modalidadesJson: string = "[\n  {\n    \"nombre\": \"Presencial\",\n    \"descripcion\": \"Asiste a nuestras sucursales y convive con profesores y compañeros.\"\n  },\n  {\n    \"nombre\": \"Online\",\n    \"descripcion\": \"Clases 100% en vivo a distancia desde cualquier dispositivo.\"\n  }\n]";

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
