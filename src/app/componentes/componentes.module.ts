
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { RoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { InicioComponent } from './inicio/inicio.component';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { ConsultarPeriodoComponent } from './periodo/consultar-periodo/consultar-periodo.component';
import { LoginComponent } from './login/login.component';
import { RegistrarPeriodoComponent } from './periodo/registrar-periodo/registrar-periodo.component';
import { ModalModificarPeriodoComponent } from './periodo/modal-modificar-periodo/modal-modificar-periodo.component';
import { RegistrarUsuarioComponent } from './usuario/registrar-usuario/registrar-usuario.component';
import { ConsultarUsuarioComponent } from './usuario/consultar-usuario/consultar-usuario.component';
import { ModalModificarUsuarioComponent } from './usuario/modal-modificar-usuario/modal-modificar-usuario.component';
import { RegistrarAsignacionComponent } from './asignaciones/registrar-asignacion/registrar-asignacion.component';
import { ConsultarAsignacionesComponent } from './asignaciones/consultar-asignaciones/consultar-asignaciones.component';

@NgModule({
  declarations: [
    InicioComponent, MenuMainComponent, ConsultarPeriodoComponent, LoginComponent, RegistrarPeriodoComponent, ModalModificarPeriodoComponent, 
    RegistrarUsuarioComponent, ConsultarUsuarioComponent, ModalModificarUsuarioComponent, RegistrarAsignacionComponent, ConsultarAsignacionesComponent
  ],
  imports: [
    RoutingModule, CommonModule, FormsModule, ReactiveFormsModule, SharedModule
  ],
  exports: [
    MenuMainComponent, LoginComponent
  ],
  providers: []
})
export class ComponentesModule { }
