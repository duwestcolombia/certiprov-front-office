import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components 
import { PagesComponent } from './pages.component';

// Modules
import { SharedModule } from '../shared/shared.module';

// Services

import {
  CuentasService,
  UsuarioService,
  LogingardGuard
} from '../services/service.index';



// ROUTES
import { PAGES_ROUTES } from './pages.route';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PagesComponent,
    AccountSettingsComponent,
    CuentasComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    HttpClientModule
  ],
  providers:[
    CuentasService,
    UsuarioService,
    LogingardGuard
  ],
  exports:[

  ]
})
export class PagesModule { }
