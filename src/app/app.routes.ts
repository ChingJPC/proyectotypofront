import { Routes } from '@angular/router';
import { BodyComponent } from './inicio/body/body.component';
import { IndexComponent as IndexUsuario } from './usuarios/index/index.component';
import { IndexComponent as IndexRol } from './roles/index/index.component';
import { IndexComponent as IndexMascota } from './mascota/index/index.component';
import { CreateComponent as CreateMascota } from './mascota/create/create.component';


export const routes: Routes = [
    { path: '', redirectTo: 'inicio/body', pathMatch: 'full' },
    { path: 'inicio/body', component: BodyComponent },

    { path: 'usuario/index', component: IndexUsuario},

    { path: 'rol/index', component: IndexRol},
    { path: 'rol/index', component: IndexRol},
    { path: 'rol/index', component: IndexRol},

    {path: 'mascota/index/:id', component:IndexMascota},

    {path: 'mascota/create/:user_id', component: CreateMascota},

    {path: 'mascota/editar/:id/:user_id', component: CreateMascota },


];
