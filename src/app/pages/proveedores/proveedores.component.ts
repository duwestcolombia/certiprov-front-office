import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../services/service.index';
import { Proveedor } from '../../models/proveedor.model';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styles: []
})
export class ProveedoresComponent implements OnInit {

  cargando:boolean = true;
  totalRegistros:number = 0;
  desde:number = 0;

  Proveedor:Proveedor[] = [];
 
  constructor(public _provService:ProveedorService) { 

  }

  ngOnInit() {

    
    this.cargarProveedores();
    

  }

  cargarProveedores(){
    this.cargando = true;
    this._provService.cargarProveedores(this.desde).subscribe((data:any)=>{
      
      this.Proveedor = data.proveedores
      this.totalRegistros = data.total;
      this.cargando = false;
    })
    
  }

  buscarProveedor(termino:string){
    

    if (termino.length <= 0) {

      this.cargarProveedores();
      return;
    }
    this.cargando = true;
    this._provService.buscarProveedor(termino).subscribe((data:any)=>{
      this.Proveedor = data;
      this.cargando = false;
      
    })
    
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
    this.cargarProveedores();
    
  }

}
