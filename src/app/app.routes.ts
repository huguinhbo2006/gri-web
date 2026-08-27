import { Routes } from '@angular/router';
import { DynamicPageComponent } from './paginas/dynamic-page/dynamic-page';

export const routes: Routes = [
  { path: '', component: DynamicPageComponent },
  { path: '**', component: DynamicPageComponent }
];
