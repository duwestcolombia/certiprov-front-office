import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Cuenta } from '../../models/cuenta.model';
import { CuentaService } from '../../services/service.index';


@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  cuentas:any = [];
  desde:number = 0;

  totalRegistros:number = 0;
  cargando:boolean = true;

  //modelo de la cuenta
  cuenta:Cuenta;

  constructor(public _cuentaService:CuentaService
              ) {
   
  }

  ngOnInit() {
    this.listarCuentas();
  }

  listarCuentas(){
    this.cargando = true;
    this._cuentaService.listar(this.desde).subscribe(
      (res:any) => {

        this.totalRegistros = res.total;
        this.cuentas = res['cuentas'];
        this.cargando = false;

      },
      err => console.log(err)
            
    )
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
    this.listarCuentas();
    
  }

  buscarCuenta(termino:string){



    if (termino.length <= 0) {
      this.listarCuentas();
      return;  
    }
    this.cargando = true;
    this._cuentaService.buscarCuentas(termino).subscribe(resp=>{
     
      this.cuentas = resp;
      this.cargando = false;
      
    })
    
  }

  registrar(forma:NgForm){
    if (!forma.valid) {
      return;
    }

    let cuenta = new Cuenta(forma.value.cod_cuenta, forma.value.nom_cuenta);

    this._cuentaService.crear(cuenta).subscribe((resp:any)=>{
      this.listarCuentas();
      
    })
    
    

  }
  actualizar(){

  }
  eliminar(id:number){
    this._cuentaService.eliminar(id).subscribe(res=>{
      
      if (res) {
        this.listarCuentas();
      }
      
    },err=>{
      console.log(err);
      
    })
  }

}
