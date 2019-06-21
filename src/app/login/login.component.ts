import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //atributos
  email:string;
  recuerdame: boolean = false;
  auth2:any;

  constructor(public router:Router, public _usuService:UsuarioService) { }

  ngOnInit() {

    //validar si existe un correo guardado en el localstorange
    this.email = localStorage.getItem('email') || '';

    if (this.email.length > 1) {
      this.recuerdame = true;
    }

  }

  ingresar(forma:NgForm){
    console.log(forma);
    
    //validar que el formulario que se recibe, sea correcto
    if (!forma.valid) {
      return;
    }

    let usuario = new Usuario(null,null,forma.value.email,forma.value.password);
   

    this._usuService.login(usuario,forma.value.recuerdame).subscribe((resp:any)=>{
      this.router.navigate(['/dashboard'])
      
    })
    
  }

}
