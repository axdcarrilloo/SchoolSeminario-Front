import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tiposUsuario: String[] = ["Estudiante","Profesor","Admin"];
  tipoUsuarioSeleccionado: string = "";
  usuario: string = "";
  contrasenna: string = "";
  @Output() logeado = new EventEmitter<Boolean>();
  @Output() tipoUsuarioLogeado = new EventEmitter<string>();

  constructor() {
  }
  
  ngOnInit(): void {
  }

  obtenerTipoUsuario(usuario: string) {
    this.tipoUsuarioLogeado.emit(usuario);
  }

  logeoRealizado(validarLogeo: Boolean) {
    this.logeado.emit(validarLogeo);
  }

  validarTipoUsuario(tipoUsuario:String): any {
    switch(tipoUsuario) {
      case "Admin":
        return Constantes.TIPOUSUARIO_ADMIN
      case "Estudiante":
        return Constantes.TIPOUSUARIO_ESTUDIANTE
      case "Profesor":
        return Constantes.TIPOUSUARIO_PROFESOR
    }
  }

  validarUsuario(): Boolean {
    if(this.usuario == "admin" && this.contrasenna == "1234") {
      return true;
    } else {
      return false;
    }
  }

  entrar():void {
    console.log("El seleccionado fue " + this.validarTipoUsuario(this.tipoUsuarioSeleccionado));
    if(this.validarUsuario()) {
      this.logeoRealizado(true);
      this.obtenerTipoUsuario(this.validarTipoUsuario(this.tipoUsuarioSeleccionado));
    } else {
      console.log("Usuario errado");
    }
  }
}