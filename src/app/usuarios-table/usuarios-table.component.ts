import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { UsuarioService } from '../servicios/usuarios.service';
import { Usuario } from '../modelos/usuarios.model';
import { UsuariosTableDataSource } from './usuarios-table-datasource';

@Component({
  selector: 'app-usuarios-table',
  templateUrl: './usuarios-table.component.html',
  styleUrl: './usuarios-table.component.scss',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class UsuariosTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  dataLength!: number;
  clave: string | null = null;

  displayedColumns = [
    "id",
    "name",
    "apellido",
    "telefono",
    "fecha_nacimiento",
    "email",
    "password",
  ];
  dataSource: any;

  constructor(private usuarioService: UsuarioService) {}
  
  validarToken(): void {
    if (this.clave==null) {
      this.clave = localStorage.getItem('access_token');
    }
  }
  
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.dataSource = new UsuariosTableDataSource(this.usuarioService);
    this.usuarioService.getUsuarios(this.clave).subscribe(
      data => {
        this.dataLength = data.length;
      },
      err => {
        console.error('Error fetching user count: ', err);
      }
    );
  
}
}
