import { Routes } from '@angular/router';
import { BodyComponent } from './inicio/body/body.component';
import { IndexComponent as IndexUsuario } from './usuarios/index/index.component';
import { IndexComponent as IndexRol } from './roles/index/index.component';


export const routes: Routes = [
    { path: '', redirectTo: 'inicio/body', pathMatch: 'full' },
    { path: 'inicio/body', component: BodyComponent },

    { path: 'usuario/index', component: IndexUsuario},
    
    { path: 'rol/index', component: IndexRol},
    { path: 'rol/index', component: IndexRol},
    { path: 'rol/index', component: IndexRol},
];
