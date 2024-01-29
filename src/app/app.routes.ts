import { Routes } from '@angular/router';
import { IndexComponent as IndexActividad} from './actividad/index/index.component';
import { CreateComponent as CreateActividad } from './actividad/create/create.component';


export const routes: Routes = [
  { path: 'actividad/index', component:  IndexActividad },
  { path: 'actividad/create', component:  CreateActividad },
  { path: 'actividad/edit/:id', component:  CreateActividad },



];
