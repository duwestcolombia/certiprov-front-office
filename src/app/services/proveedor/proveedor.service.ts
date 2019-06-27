import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  token:string;

  constructor(public http:HttpClient, public _usuService:UsuarioService) {
    this.token = this._usuService.token;
  }
  
  cargarProveedores(desde:number = 0){
    let url = URL_SERVICE + 'proveedores?desde='+desde;

    return this.http.get(url, {
      headers:{
        'token': this.token
      }
    })
  }

  buscarProveedor(termino:string){
    let url = URL_SERVICE + 'busqueda/entidad/proveedores/'+termino;

    return this.http.get(url, {
      headers:{
        'token': this.token
      }
    }).pipe(
      map((resp:any)=> resp.proveedores)
    )
  }

}
