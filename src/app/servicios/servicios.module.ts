
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http'

import { UsuarioServicioService } from './usuario-servicio.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [
    UsuarioServicioService
  ]
})
export class ServiciosModule { }
