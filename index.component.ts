import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActividadService } from '../../services/actividad.service';
import { Actividad } from '../../modelos/actividad.model';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  providers: [ActividadService],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  listaActiviadades: Actividad[] = [];

  constructor(private _router: Router, private service: ActividadService) { }

  ngOnInit(): void {
    this.cargarActividad();
  }

  cargarActividad(): void {
    this.service.getActividades().subscribe(
      data => {
        console.log(data);

        this.listaActiviadades = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  editarActividad(id: any): void {
    this._router.navigateByUrl('/actividad/edit/' + id);
  }

  eliminarActividad(id: any): void {
    this.service.deleteActividad(id).subscribe(
      data => {
        this.cargarActividad();
      },
      err => {
        console.log(err);
      }
    );
  }

}
