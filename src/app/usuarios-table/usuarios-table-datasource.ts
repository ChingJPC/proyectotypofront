import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable, merge, of } from 'rxjs';
import { catchError, map, mergeMap, startWith, switchMap } from 'rxjs/operators';
import { UsuarioService } from '../servicios/usuarios.service';
import { Usuario } from '../modelos/usuarios.model';

export class UsuariosTableDataSource extends DataSource<String> {
  clave: string | null = null;
  paginator!: MatPaginator;
  sort!: MatSort;
  dataLength: number = 0;
  isLoadingResults: boolean = false;

  constructor(private usuarioService: UsuarioService) {
    super();
  }

  connect(): Observable<String[]> {
   

    return merge().pipe(mergeMap(() => {
      return this.usuarioService.getUsuarios(
       this.clave
        );
      }));
  }

  disconnect() {}
}

