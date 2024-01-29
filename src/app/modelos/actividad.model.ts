export class Actividad {
  id?:number;
  actividades_felinos?:string|null|undefined;
  actividades_canidos?:string|null|undefined;
  actividades_aves?:string|null|undefined;

  constructor(id?:number, actividades_felinos?:string, actividades_canidos?:string,
    actividades_aves?:string){
      this.actividades_aves = actividades_aves;
      this.actividades_canidos = actividades_canidos;
      this.actividades_felinos = actividades_felinos;
    }
}
