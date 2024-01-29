import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mascotaService } from '../../servicios/mascota.service';
import { Mascota } from '../../modelos/mascota.model';
import { Router } from '@angular/router';
//import { GlobalComponent } from '../../global/global.component';



@Component({
  selector: 'app-index',
  standalone: true,
  providers: [mascotaService],
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  listaMascotas:Mascota []=[];



  constructor(private mascotasService: mascotaService,
    private _router: Router){}

    ngOnInit(): void {
      this.cargarMascotas();
    }  




  cargarMascotas():void{
    this.mascotasService.getMascotas().subscribe(data=>{
      this.listaMascotas = data;
    },
    err =>{
      console.log(err);
    });
  }
  eliminarMascota(id:any): void {
    this.mascotasService.deleteMascota(id).subscribe(data=>{
      this.cargarMascotas();
    },
    err =>{
      console.log(err);
    });
  }

  editarMascota(id:any): void {
    this._router.navigateByUrl("/mascota/editar/"+id);
  }
}
