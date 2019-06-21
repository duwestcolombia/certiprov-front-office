import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { UsuarioService } from '../usuario.service';


@Injectable({
  providedIn: 'root'
})
export class LogingardGuard implements CanActivate {
  
  constructor(public _usuService:UsuarioService, public router:Router){

  }
  
  canActivate() {

    if(this._usuService.estaLogueado()){
      
      return true;
    }else{
      
      this.router.navigate(['/login']);
      return false;
    }
    
 
  }
}
