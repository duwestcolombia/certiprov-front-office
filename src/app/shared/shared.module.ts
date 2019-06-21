import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pages shared
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

// Modules 


@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BreadCrumbComponent,
    NopagefoundComponent
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BreadCrumbComponent,
    NopagefoundComponent
  ]
})
export class SharedModule { }
