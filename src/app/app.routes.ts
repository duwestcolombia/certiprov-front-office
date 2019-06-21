import { RouterModule, Routes } from "@angular/router";
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';


const appRoutes: Routes =[
    {
        path:'',
        component:PagesComponent,
        children:[
            {path:'dashboard',component:HomeComponent}
        ]
    },
    {path:'registrar',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path: '**', component:NopagefoundComponent}

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash:true});