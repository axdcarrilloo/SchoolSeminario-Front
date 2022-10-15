import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoutingModule } from '../app-routing.module';

import { InicioComponent } from './inicio/inicio.component';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { ConsultarPeriodoComponent } from './periodo/consultar-periodo/consultar-periodo.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrarPeriodoComponent } from './periodo/registrar-periodo/registrar-periodo.component';
import { ModalModificarPeriodoComponent } from './periodo/modal-modificar-periodo/modal-modificar-periodo.component';
import { SharedModule } from '../shared/shared.module';
import { RegistrarUsuarioComponent } from './usuario/registrar-usuario/registrar-usuario.component';
import { ConsultarUsuarioComponent } from './usuario/consultar-usuario/consultar-usuario.component';
import { ModalModificarUsuarioComponent } from './usuario/modal-modificar-usuario/modal-modificar-usuario.component';
import { PeriodoConsultarAsignacionComponent } from './asignaciones/periodo/periodo-consultar-asignacion/periodo-consultar-asignacion.component';
import { PeriodoRegistrarAsignacionComponent } from './asignaciones/periodo/periodo-registrar-asignacion/periodo-registrar-asignacion.component';
import { CursoRegistrarAsignacionComponent } from './asignaciones/curso/curso-registrar-asignacion/curso-registrar-asignacion.component';
import { CursoConsultarAsignacionComponent } from './asignaciones/curso/curso-consultar-asignacion/curso-consultar-asignacion.component';

@NgModule({
  declarations: [
    InicioComponent, MenuMainComponent, ConsultarPeriodoComponent, LoginComponent, RegistrarPeriodoComponent, ModalModificarPeriodoComponent, 
    RegistrarUsuarioComponent, ConsultarUsuarioComponent, ModalModificarUsuarioComponent, PeriodoConsultarAsignacionComponent, 
    PeriodoRegistrarAsignacionComponent, CursoRegistrarAsignacionComponent, CursoConsultarAsignacionComponent
  ],
  imports: [
    RoutingModule, CommonModule, FormsModule, ReactiveFormsModule, SharedModule
  ],
  exports: [
    MenuMainComponent, LoginComponent, ConsultarPeriodoComponent
  ],
  providers: []
})
export class ComponentesModule { }
