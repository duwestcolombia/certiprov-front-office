import { Component, OnInit } from '@angular/core';
import { CuentasService } from 'src/app/services/cuentas.service';


// import { sweetalert } from "sweetalert";
// import * as swal  from 'sweetalert';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  cuentas:any = [];

  // swal:SweetAlert;

  constructor(public _cuentaService:CuentasService
              ) {
   
  }

  ngOnInit() {
    this.listarCuentas();
  }

  listarCuentas(){
    this._cuentaService.listar().subscribe(
      res => {
        
        this.cuentas = res['message'];
        
        console.log(this.cuentas);
        // swal('listo', 'alerta','success');
        // swal("funciona");
      },
      err => console.log(err)
            
    )
  }

  registrar(){

  }
  actualizar(){

  }
  eliminar(id:number){
    this._cuentaService.eliminar(id).subscribe(res=>{
      
      console.log(res);
      this.listarCuentas();
      
    },err=>{
      console.log(err);
      
    })
  }

}
