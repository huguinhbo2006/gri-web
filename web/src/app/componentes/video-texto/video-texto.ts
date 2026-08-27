import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-texto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-texto.html',
  styleUrl: './video-texto.css'
})
export class VideoTexto {
  @Input() titulo: string = "Vídeo Informativo";
  @Input() descripcion: string = "Observa una explicación detallada del proceso.";
  @Input() videoUrl: string = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  @Input() alineacion: string = "derecha";

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
