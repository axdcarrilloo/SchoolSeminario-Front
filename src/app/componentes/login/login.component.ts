import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Constantes } from 'src/app/utils/constantes';

declare var window : any;

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tiposUsuario: string[] = Constantes.TIPOS_USUARIO;
  tipoUsuarioSeleccionado: string = "Seleccionar";
  usuario: string = "";
  contrasenna: string = "";
  @Output() datos = new EventEmitter<any[]>();

  loginFallido: string[] = ["modal-content divPrincipalFallido", "Usuario fallido", "fallido", "Verifique su usuario y contraseña"];
  modalLoginFallido: any;

  constructor() {
  }
  
  ngOnInit(): void {
    this.cargarModals();
  }

  abrirModalLoginFallido(): void {
    this.modalLoginFallido.show();
  }

  cargarModals(): void {
    this.modalLoginFallido = new window.bootstrap.Modal(
      document.getElementById("modalLoginFallido")
    );
  }

  responderDatos(datos: any[]) {
    this.datos.emit(datos);
  }

  validarTipoUsuario(tipoUsuario:String): any {
    switch(tipoUsuario) {
      case "Admin":
        return Constantes.TIPOUSUARIO_ADMIN
      case "Estudiante":
        return Constantes.TIPOUSUARIO_ESTUDIANTE
      case "Profesor":
        return Constantes.TIPOUSUARIO_PROFESOR
      case "Coordinador":
        return Constantes.TIPOUSUARIO_COORDINADOR
      case "Rector":
        return Constantes.TIPOUSUARIO_RECTOR
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
    // console.log("El seleccionado fue " + this.validarTipoUsuario(this.tipoUsuarioSeleccionado));
    if(this.validarUsuario()) {
      const datos = [true, this.validarTipoUsuario(this.tipoUsuarioSeleccionado)];
      this.responderDatos(datos);
    } else {
      this.abrirModalLoginFallido();
    }
  }
}