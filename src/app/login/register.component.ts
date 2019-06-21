import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import Swal from 'sweetalert2';


import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {


  forma:FormGroup;

  constructor(public _usuService:UsuarioService, public router:Router) { 

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

    //estructura del formulario con validaciones previas

    this.forma = new FormGroup({
      documento:new FormControl(null, Validators.required),
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)

    },  {validators: this.sonIguales('password', 'password2') });

    this.forma.setValue({
      documento:'123456',
      nombre: 'David',
      correo: 'user1@user1.com',
      password: '123456',
      password2: '12345',
      condiciones:true
    });

  }

  registrarUsuario(){

    if (this.forma.invalid) {
      return;
    }

    if (!this.forma.value.condiciones) {
      
      Swal.fire({
        title: 'Importante!',
        text: 'Debe aceptar los términos y condiciones antes de continuar.',
        type: 'warning',
        confirmButtonText: 'Entiendo'
      })
      return;
      
    }
    //crear el usuario nuevo
    let usuario = new Usuario(
      this.forma.value.documento,
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password
    );

    
    this._usuService.crearUsuario(usuario).subscribe(resp =>{
      console.log(resp);

      this.router.navigate(['/login']);
      
    })
    
    

  }

}
