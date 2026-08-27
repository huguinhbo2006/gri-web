import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Builder {
    private currentPage$ = new BehaviorSubject<any>(null);

    constructor(private http: HttpClient) { }

    headers: HttpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      Authorization : 'bearer ' + localStorage.getItem('token')
    });
    uri = environment.url + '/pages/';
    
    contenido(body: any) {
      const url = this.uri + 'traer';
      return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
    }

    getCurrentPage(): Observable<any> {
      return this.currentPage$.asObservable();
    }

    loadPage(pageId: string) {
      this.contenido({ id: pageId }).subscribe({
        next: (res: any) => {
          const page = {
            id: res.id,
            name: res.name,
            slug: res.slug,
            elements: res.content?.elements || []
          };
          this.currentPage$.next(page);
        },
        error: (err) => {
          console.error("Error loading page contents in web:", err);
        }
      });
    }
}
