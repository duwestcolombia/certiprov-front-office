import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '..//usuario/usuario.service';
import { URL_SERVICE } from '../../config/config';
import { Cuenta } from '../../models/cuenta.model';

import { map } from "rxjs/operators";
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  token:string;

  constructor(public http:HttpClient, public _usuService:UsuarioService) { 
    
    this.token = this._usuService.token;

  }

  listar(desde:number = 0){
    
    let url = URL_SERVICE + 'cuentas?desde='+desde;

    return this.http.get(url, {
      headers:{
        'token':this.token
      }
    });

  }
  //Crear un servicio para buscar todos los terminos
  buscarCuentas(termino:string){

    let url = URL_SERVICE + 'busqueda/entidad/cuentas/'+termino;

    return this.http.get(url,{
      headers:{
        'token':this.token
      }
    }).pipe(
      map((resp:any)=> resp.cuentas)
    )

  }

  crear(cuenta:Cuenta){

    let url = URL_SERVICE + 'cuentas';

    return this.http.post(url, cuenta, {
      headers:{
        'token':this.token
      }
    }).pipe(
      map((resp:any)=>{
        Swal.fire({
          title: 'Bien Hecho!',
            text: 'Se registro la cuenta '+cuenta.NOM_CUENTA,
            type: 'success',
            confirmButtonText: 'Genial'
        })

        return resp.cuenta;
      })
      
    )

  }

  eliminar(id:number){
    let url = URL_SERVICE + 'cuentas/'+id;

    return this.http.delete(url, {
      headers:{
        'token':this.token
      }
    }).pipe(
      map((resp:any)=>{
        Swal.fire({
          title: 'Bien Hecho!',
            text: resp.message,
            type: 'success',
            confirmButtonText: 'Genial'
        })

        return true;
      })
    )
  }


  

}
