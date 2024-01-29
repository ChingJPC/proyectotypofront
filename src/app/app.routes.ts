import { Routes } from '@angular/router';
import { IndexComponent as IndexActividad } from './actividad/index/index.component';
import { CreateComponent as CreateActividad } from './actividad/create/create.component';
import { BodyComponent } from './inicio/body/body.component';
import { IndexComponent as IndexUsuario } from './usuarios/index/index.component';
import { IndexComponent as IndexRol } from './roles/index/index.component';
import { IndexComponent as IndexMascota } from './mascota/index/index.component';
import { CreateComponent as CreateMascota } from './mascota/create/create.component';

export const routes: Routes = [
  // Rutas de Actividad
  { path: 'actividad/index', component: IndexActividad },
  { path: 'actividad/create', component: CreateActividad },
  { path: 'actividad/edit/:id', component: CreateActividad },

  // Rutas de Inicio
  { path: 'inicio/body', component: BodyComponent },

  // Rutas de Usuario
  { path: 'usuario/index', component: IndexUsuario },

  // Rutas de Rol
  { path: 'rol/index', component: IndexRol },

  // Rutas de Mascota
  { path: 'mascota/index/:id', component: IndexMascota },
  { path: 'mascota/create/:user_id', component: CreateMascota },
  { path: 'mascota/editar/:id/:user_id', component: CreateMascota },
];


