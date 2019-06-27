import { Component, OnInit } from '@angular/core';
import { RetencionService } from '../../services/service.index';
import { Retencion } from '../../models/retencion.model';


@Component({
  selector: 'app-retenciones',
  templateUrl: './retenciones.component.html',
  styles: []
})
export class RetencionesComponent implements OnInit {

  Retenciones:Retencion[]=[];
  totalRegistros:number = 0;
  desde:number = 0;

  constructor(public _retService:RetencionService) { 
    
  }

  ngOnInit() {

    this.cargarRetencion();
  }

  cargarRetencion(){
    this._retService.cargarRetenciones(this.desde).subscribe((resp:any)=>{
      
      this.totalRegistros = resp.total;
      this.Retenciones = resp.retenciones;
      
    })
  }

  buscarRetencion(termino:string){
    console.log(termino);
    
  }

  cambiarDesde(valor:number){
    let desde = this.desde + valor;
    

    if (desde >= this.totalRegistros) {
      return;
    }
    if (desde < 0) {
      return;
    
    }
    this.desde += valor;
    this.cargarRetencion();
    
  }

  

}
