import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenteService {
  private saludarSubject = new Subject<void>();
  private celebrarSubject = new Subject<void>();
  private pensarSubject = new Subject<void>();

  saludar$ = this.saludarSubject.asObservable();
  celebrar$ = this.celebrarSubject.asObservable();
  pensar$ = this.pensarSubject.asObservable();

  saludar() {
    this.saludarSubject.next();
  }

  celebrar() {
    this.celebrarSubject.next();
  }

  pensar() {
    this.pensarSubject.next();
  }
}
