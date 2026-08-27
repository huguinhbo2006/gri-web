import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imagen-texto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imagen-texto.html',
  styleUrl: './imagen-texto.css'
})
export class ImagenTexto {
  @Input() titulo: string = '';
  @Input() contenido: string = '';
  @Input() imagenUrl: string = '';
  @Input() alineacion: 'izquierda' | 'derecha' = 'izquierda';
}
