import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  // Esta estructura es para un menu con sub-menu
  // menu: any = [
  //   {
  //     titulo: 'Principal',
  //     icono:'fa fa-tachometer',
  //     submenu:[
  //       {titulo: 'Dashboard', url: '/dashboard', icono:'fa fa-tachometer'},
  //       {titulo: 'Mi', url: '/perfil', icono:'a fa-user-circle-o'},
  //       {titulo: 'Cuentas', url: '/cuentas', icono:'fa fa-table'},
  //     ]
  //   }
  // ]
  menu: any = [
      {titulo: 'Dashboard', url: '/dashboard', icono:'fa fa-tachometer'},
      {titulo: 'Mi cuenta', url: '/perfil', icono:'fa fa-user'},
      {titulo: 'Cuentas', url: '/cuentas', icono:'fa fa-table'},
      {titulo: 'Proveedores', url: '/proveedores', icono:'fa fa-table'},
      {titulo: 'Usuarios', url: '/usuarios', icono:'fa fa-table'},
      {titulo: 'Retenciones', url: '/retenciones', icono:'fa fa-table'}
  ]

  constructor() { }
}
