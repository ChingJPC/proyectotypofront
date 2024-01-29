import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actividad } from '../modelos/actividad.model';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  url = 'http://127.0.0.1:8000/api/auth/Actividad/';


  constructor(private http:HttpClient) {
  }

  getActividades(): Observable<any>{
    return this.http.get(this.url);
  }

  addActividad(actividad: Actividad): Observable<any>{
    return this.http.post(this.url, actividad);
  }

  getActividad(id:any):Observable<any>{
    return this.http.get(this.url+id);
  }

  updateActividad(actividad:Actividad, id:string): Observable<any>{
    return this.http.put(this.url+id, actividad);
  }

  deleteActividad(id:any):Observable<any>{
    return this.http.delete(this.url+id);
  }
}
