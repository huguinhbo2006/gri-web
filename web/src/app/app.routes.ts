import { Routes } from '@angular/router';
import { Home } from './paginas/home/home';
import { Licenciatura } from './paginas/licenciatura/licenciatura';
import { Preparatoria } from './paginas/preparatoria/preparatoria';
import { Planteles } from './paginas/planteles/planteles';
import { ExamenGratis } from './paginas/examen-gratis/examen-gratis';
import { Exani } from './paginas/exani/exani';
import { Puntajes } from './paginas/puntajes/puntajes';
import { Ubicaciones } from './paginas/ubicaciones/ubicaciones';
import { Calculadora } from './paginas/calculadora/calculadora';
import { ModuloExani } from './paginas/modulo-exani/modulo-exani';
import { MaterialEstudio } from './paginas/material-estudio/material-estudio';
import { Comunidad } from './paginas/comunidad/comunidad';
import { Landing } from './paginas/landing/landing';
import { Youtube } from './paginas/youtube/youtube';
import { LicenciaturaPresencial } from './paginas/licenciatura-presencial/licenciatura-presencial';
import { ExaniOnline } from './paginas/exani-online/exani-online';
import { ExaniADistancia } from './paginas/exani-a-distancia/exani-a-distancia';
import { ExaniPresencial } from './paginas/exani-presencial/exani-presencial';
import { LicenciaturaADistancia } from './paginas/licenciatura-a-distancia/licenciatura-a-distancia';
import { LicenciaturaOnline } from './paginas/licenciatura-online/licenciatura-online';
import { PreparatoriaOnline } from './paginas/preparatoria-online/preparatoria-online';
import { PreparatoriaADistancia } from './paginas/preparatoria-a-distancia/preparatoria-a-distancia';
import { PreparatoriaPresencial } from './paginas/preparatoria-presencial/preparatoria-presencial';
import { StreamingPagina } from './paginas/streaming/streaming';
import { Admitidos } from './paginas/admitidos/admitidos';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'home', component: Home},
    { path: 'admitidos', component: Admitidos},
    { path: 'calculadora', component: Calculadora},
    { path: 'comunidad', component: Comunidad},
    { path: 'examenGratis', component: ExamenGratis},
    { path: 'exani', component: Exani},
    { path: 'exani-a-distancia', component: ExaniADistancia},
    { path: 'exani-online', component: ExaniOnline},
    { path: 'exani-presencial', component: ExaniPresencial},
    { path: 'landing', component: Landing},
    { path: 'licenciatura', component: Licenciatura},
    { path: 'licenciatura-a-distancia', component: LicenciaturaADistancia},
    { path: 'licenciatura-online', component: LicenciaturaOnline},
    { path: 'licenciatura-presencial', component: LicenciaturaPresencial},
    { path: 'material', component: MaterialEstudio},
    { path: 'moduloExani', component: ModuloExani},
    { path: 'planteles', component: Planteles},
    { path: 'preparatoria', component: Preparatoria},
    { path: 'preparatoria-a-distancia', component: PreparatoriaADistancia},
    { path: 'preparatoria-online', component: PreparatoriaOnline},
    { path: 'preparatoria-presencial', component: PreparatoriaPresencial},
    { path: 'puntajes', component: Puntajes},
    { path: 'streaming', component: StreamingPagina},
    { path: 'ubicaciones', component: Ubicaciones},
    { path: 'youtube', component: Youtube},
];
