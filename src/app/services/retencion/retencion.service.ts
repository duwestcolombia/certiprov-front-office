import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class RetencionService {


  token:string;

  constructor(public http:HttpClient, _usuService:UsuarioService) { 
    
    this.token = _usuService.token;

  }

  cargarRetenciones(desde:number = 0){
    let url = URL_SERVICE + 'retenciones?desde='+desde;

    return this.http.get(url,{
      headers:{
        'token': this.token
      }
    });
    
  }
}
