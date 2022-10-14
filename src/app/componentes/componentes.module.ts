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

@NgModule({
  declarations: [
    InicioComponent, MenuMainComponent, ConsultarPeriodoComponent, LoginComponent, 
    RegistrarPeriodoComponent, ModalModificarPeriodoComponent, RegistrarUsuarioComponent, ConsultarUsuarioComponent, ModalModificarUsuarioComponent
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
