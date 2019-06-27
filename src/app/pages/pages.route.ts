import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { LogingardGuard } from '../services/service.index';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RetencionesComponent } from './retenciones/retenciones.component';



const pagesRoutes:Routes = [
    {
        path:'',
        component:PagesComponent,
        canActivate: [LogingardGuard],
        children:[
            {path:'retenciones', component:RetencionesComponent, data:{titulo:'Retenciones'}},
            {path:'usuarios', component:UsuariosComponent, data:{titulo:'Usuarios'}},
            {path:'proveedores', component:ProveedoresComponent, data:{titulo:'Proveedores'}},
            {path:'cuentas', component:CuentasComponent, data:{titulo:'Cuentas'}},
            {path:'dashboard', component:HomeComponent, data:{titulo:'Dashboard'}},
            {path:'perfil', component:AccountSettingsComponent, data:{titulo:'Mi Perfil'}},
            {path:'', redirectTo:'/dashboard', pathMatch:'full'}
        ]
    }

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);

