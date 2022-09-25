import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoutingModule } from '../app-routing.module';

import { InicioComponent } from './inicio/inicio.component';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { ConsultarPeriodoComponent } from './periodo/consultar-periodo/consultar-periodo.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrarPeriodoComponent } from './periodo/registrar-periodo/registrar-periodo.component';

@NgModule({
  declarations: [
    InicioComponent, MenuMainComponent, ConsultarPeriodoComponent, LoginComponent, 
    RegistrarPeriodoComponent
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
