import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';

// Components 
import { PagesComponent } from './pages.component';

// Modules
import { SharedModule } from '../shared/shared.module';

// Services

import {
  CuentaService,
  UsuarioService,
  LogingardGuard,
  ProveedorService,
  RetencionService
} from '../services/service.index';



// ROUTES
import { PAGES_ROUTES } from './pages.route';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { HttpClientModule } from '@angular/common/http';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUpdateComponent } from '../components/modal-update/modal-update.component';
import { RetencionesComponent } from './retenciones/retenciones.component';




@NgModule({
  declarations: [
    PagesComponent,
    AccountSettingsComponent,
    CuentasComponent,
    ProveedoresComponent,
    UsuariosComponent,
    ModalUpdateComponent,
    RetencionesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    UsuarioService,
    LogingardGuard,
    CuentaService,
    ProveedorService,
    RetencionService
  ],
  exports:[

  ]
})
export class PagesModule { }
