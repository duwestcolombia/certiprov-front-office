import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  usuario:Usuario;
  forma:FormGroup

  constructor(public _usuService:UsuarioService) {

    this.usuario = this._usuService.usuario;
    

   }

   //evalua las contraseñas
  sonIguales(campo1:string, campo2:string){
    return (group: FormGroup)=>{
      
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
        return null;
      }

      return {
        sonIguales:true
      }

    }
  }

  ngOnInit() {

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      telefono:new FormControl(null),
      contrasena: new FormControl(null),
      contrasena2: new FormControl(null)

    },  {validators: this.sonIguales('contrasena', 'contrasena2') });
  }

  actualizarUsuario(){

    
    if (this.forma.invalid) {

      if (this.forma.errors) {
        Swal.fire({
          title: 'Error!',
          text: 'Las contraseñas no coinciden, verifique y vuelva a intentar.',
          type: 'error',
          confirmButtonText: 'Entiendo'
        })
        return;
      }
      
    }
   

    let usuActualizar:any;
    if (this.forma.value.contrasena === null) {
        //crear el usuario para actualizar
        usuActualizar = new Usuario(
        this.usuario.DOC_USUARIO,
        this.forma.value.nombre,
        this.usuario.EMAIL_USUARIO,
        undefined,
        this.forma.value.telefono
      );
    }else{
      //crear el usuario para actualizar
        usuActualizar = new Usuario(
        this.usuario.DOC_USUARIO,
        this.forma.value.nombre,
        this.usuario.EMAIL_USUARIO,
        this.forma.value.contrasena,
        this.forma.value.telefono
      );

    }

    
    
    this._usuService.actualizarUsuario(this.usuario.DOC_USUARIO,usuActualizar).subscribe(resp=>{

      this._usuService.actualizaStorage(usuActualizar);
      
    })
    
  }

}
