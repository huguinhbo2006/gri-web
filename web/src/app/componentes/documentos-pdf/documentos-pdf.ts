import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documentos-pdf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './documentos-pdf.html',
  styleUrl: './documentos-pdf.css'
})
export class DocumentosPdf {
  @Input() titulo: string = "Descarga Guías de Estudio en PDF";
  @Input() archivosJson: string = "[\n  {\n    \"nombre\": \"Guía EXANI-II Temario Oficial\",\n    \"pdfUrl\": \"https://www.orimi.com/pdf-test.pdf\"\n  }\n]";

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
