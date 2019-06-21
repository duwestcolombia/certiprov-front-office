import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../config/config';


@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  constructor(private http: HttpClient) {

  }

  listar(){

    let url = URL_SERVICE +'cuentas';

    return this.http.get(url);
  }

  crear(){
    let url = URL_SERVICE +'cuentas';
  }
  actualizar(){
    let url = URL_SERVICE +'cuentas';
  }
  eliminar(id:number){
    let url = URL_SERVICE +'cuentas/'+id;

    return this.http.delete(url);

  }
}
