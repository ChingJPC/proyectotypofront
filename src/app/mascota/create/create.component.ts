import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';

import { FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { mascotaService } from '../../servicios/mascota.service';
import { tipomascotaService } from '../../servicios/tipomascota.service';

import { Mascota } from '../../modelos/mascota.model';
import { tipomascota } from '../../modelos/tipomascota';


@Component({
  selector: 'app-create',
  standalone: true,
  providers: [mascotaService, tipomascotaService],
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  mascotaForm = this.fb.group({
    Nombre_Mascota: '',
    Edad: null,
    Raza:'',
    Peso:null,
    Tamano:null,
    Sexo:'',
    user_id:null,
    id_tipomascota:null,
    
  })

  id: string | null;
  listatipomascota: tipomascota[]= [];

  constructor(private fb: FormBuilder, private _router: Router, private mascotasService: mascotaService, private aRoute: ActivatedRoute, private tipomascotaservice:tipomascotaService){
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  cargartipomascota(): void{
    this.tipomascotaservice.gettipoMascotas().subscribe(
      data=>{
        /*for (let index = 0; index < data.length; index++) {
          const element = data[index];
          this.listatipomascota[index].id = element.id
          this.listatipomascota[index].Tipo_mascota = element.Tipo_mascota
        }*/
        console.log(data);
        
        this.listatipomascota = data;
      }, err => {console.log(err);}
    )
    
  }
  ngOnInit(): void {
    this.verEditar();
    this.cargartipomascota();

  }
  verEditar(): void {
    if (this.id != null) {
      this.mascotasService.getMascota(this.id).subscribe(
        data => {
          this.mascotaForm.setValue({
            Nombre_Mascota: data.Nombre_Mascota,
            Edad: data.Edad,
            Raza: data.Raza,
            Peso:data.peso,
            Tamano:data.Tamano,
            Sexo:data.Sexo,
            user_id:data.user_id,
            id_tipomascota:data.id.tipomascota
          })
        },
        err => {
          console.log(err);
        }
      )
    }
  }

  agregarMascota(): void {
    const mascota: Mascota = {


      Nombre_Mascota: this.mascotaForm.get('Nombre_Mascota')?.value!,
      Edad: this.mascotaForm.get('Edad')?.value!,
      Raza: this.mascotaForm.get('Raza')?.value,
      Peso:this.mascotaForm.get('Peso')?.value!,
      Tamano:this.mascotaForm.get('Tamano')?.value!,
      Sexo:this.mascotaForm.get('Sexo')?.value,
      user_id:this.mascotaForm.get('user_id')?.value!,
      id_tipomascota: this.mascotaForm.get('id_tipomascota')?.value!
    }


    console.log(mascota);
    
    if (this.id != null) {
      this.mascotasService.updateMascota(this.id, mascota).subscribe(
        data => {
          this._router.navigate(['/mascota/index']);
        },
        err => {
          console.log(err);
          this._router.navigate(['/mascota/index']);
        }
      );

    } else {
      this.mascotasService.addMascota(mascota).subscribe(data => {
        console.log(data);
        this._router.navigate(['/mascota/index']);
      },
        err => {
          console.log(err);
          this._router.navigate(['/mascota/index']);
        }
      );
    }
  }
}
