import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mascota } from '../modelos/mascota.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class mascotaService {

  url='http://127.0.0.1:8000/api/auth/Informacion/';
  constructor(private http:HttpClient){
  }


  getMascotas():Observable<any>{    
    return this.http.get<any>(this.url,);
  }

  addMascota(mascota:Mascota):Observable<any>{
    return this.http.post(this.url, mascota);
  }

  getMascota(id:string, ):Observable<any>{
    return this.http.get(this.url+id);
  }

  updateMascota(id:string, mascota:Mascota): Observable<any>{
    return this.http.put(this.url+id, mascota);
  }

  deleteMascota(id:string): Observable<any>{
    return this.http.delete(this.url+id);
  }
}
