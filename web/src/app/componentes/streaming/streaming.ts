import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-streaming',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './streaming.html',
  styleUrl: './streaming.css'
})
export class Streaming {
  @Input() titulo: string = "Clase en Vivo";
  @Input() youtubeUrl: string = "https://www.youtube.com/embed/dQw4w9WgXcQ";

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
