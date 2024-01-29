import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActividadService } from '../../services/actividad.service';
import { Actividad } from '../../modelos/actividad.model';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  providers: [ActividadService],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  id: string | null = null;

  actividadForm = this.fb.group({
    actividades_felinos : '',
    actividades_canidos: '',
    actividades_aves: '',
  });

  constructor(private fb: FormBuilder, private aRouter: ActivatedRoute,private service: ActividadService, private _router:Router ){
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit():void {
    this.verEditar();
  }

  verEditar(): void {
    if (this.id) {
      this.service.getActividad(this.id)
      .subscribe(data => {

        this.actividadForm.setValue({
          actividades_aves: data.actividades_aves,
          actividades_canidos: data.actividades_canidos,
          actividades_felinos: data.actividades_felinos,
        });

      }, err => { console.log(err) });
    } else {
      console.log("id nulo");
    }
  }

  agregarActividad(): void {
    const actividad: Actividad = {
      actividades_aves: this.actividadForm.get('actividades_aves')?.value,
      actividades_felinos: this.actividadForm.get('actividades_felinos')?.value,
      actividades_canidos: this.actividadForm.get('actividades_canidos')?.value,
    };
    console.log(actividad);

    if (this.id !== null) {
      this.service.updateActividad(actividad, this.id).subscribe(
        data => {
          this._router.navigate(['/actividad/index']);
        },
        err => {
          console.log(err);
          this._router.navigate(['/actividad/index']);
        }
      );
    } else {
      this.service.addActividad(actividad).subscribe(
        data => {
          console.log(data);
          this._router.navigate(['/actividad/index']);
        },
        err => {
          console.log(err);
          this._router.navigate(['/actividad/index']);
        }
      );
    }
  }



}
