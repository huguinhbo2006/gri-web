import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface AlertaConfig {
  tipo: 'success' | 'error' | 'warning' | 'info';
  titulo: string;
  mensaje: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlertaService {
  private alertaSource = new Subject<AlertaConfig>();
  alerta$ = this.alertaSource.asObservable();

  show(tipo: AlertaConfig['tipo'], titulo: string, mensaje: string) {
    this.alertaSource.next({ tipo, titulo, mensaje });
  }

  success(titulo: string, mensaje: string) {
    this.show('success', titulo, mensaje);
  }

  error(titulo: string, mensaje: string) {
    this.show('error', titulo, mensaje);
  }

  warning(titulo: string, mensaje: string) {
    this.show('warning', titulo, mensaje);
  }

  info(titulo: string, mensaje: string) {
    this.show('info', titulo, mensaje);
  }
}
