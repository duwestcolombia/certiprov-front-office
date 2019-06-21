import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ROUTES
import { APP_ROUTES } from './app.routes';



//Import Modules
import { RecaptchaModule } from 'ng-recaptcha';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';

// Import Internal Modules 
// import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

// Import Pages
import { HomeComponent, 
        UploadFileComponent,
        GenerateCertificateComponent       
      } from './pages/index.pages';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { HttpClientModule } from '@angular/common/http';


//Sweet alert
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadFileComponent,
    GenerateCertificateComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    RecaptchaModule,
    APP_ROUTES,
    PagesModule,
    HttpClientModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
