import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {


  cargando:boolean = true;
  totalRegistros:number = 0;
  desde:number = 0;

  Usuario:Usuario[] = [];

  constructor(public _usuService:UsuarioService) {

  }

  ngOnInit() {

    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.cargando = true;
    this._usuService.cargarUsuarios(this.desde).subscribe((data:any)=>{
      
      
      this.Usuario = data.usuarios;
      this.totalRegistros = data.total;
      this.cargando = false;
      
    })
    
  }

  buscarUsuario(termino:string){

    if (termino.length <= 0 ) {
      this.cargarUsuarios();
      return;
    }

    this.cargando = true;
    this._usuService.buscarUsuarios(termino).subscribe((data:any)=>{
      this.Usuario = data;
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
    this.cargarUsuarios();
    
  }

}
