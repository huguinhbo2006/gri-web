import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterFijo } from './componentes/footer-fijo/footer-fijo';
import { Alerta } from './componentes/alerta/alerta';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterFijo, Alerta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('web');
}
