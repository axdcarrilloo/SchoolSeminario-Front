import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InicioComponent } from './inicio/inicio.component';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { ConsultarPeriodoComponent } from './periodo/consultar-periodo/consultar-periodo.component';
import { CommonModule } from '@angular/common';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { RoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    InicioComponent, MenuMainComponent, ConsultarPeriodoComponent, VistaPrincipalComponent, LoginComponent
  ],
  imports: [
    RoutingModule, CommonModule, FormsModule, ReactiveFormsModule,
  ],
  exports: [
    MenuMainComponent, LoginComponent
  ],
  providers: []
})
export class ComponentesModule { }
