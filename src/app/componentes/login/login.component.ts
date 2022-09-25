import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLoginForm: FormGroup;
  tiposUsuario: String[] = ["Estudiante","Profesor","Admin"];
  tipoUsuarioSeleccionado: string = "";
  enSession: any = "";

  constructor(private fb: FormBuilder, private route: Router) {
    this.usuarioLoginForm = this.buildForm();
    this.enSession = localStorage.getItem("enSession");
  }
  
  ngOnInit(): void {
  }

  buildForm(): FormGroup{
    return this.fb.group({
      tipoUsuario: ['',  [Validators.required]],
      usuario: ['',  [Validators.required]],
      contrasenna: ['',  [Validators.required]]
    });
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

  entrar():void {
    console.log("El seleccionado fue " + this.validarTipoUsuario(this.usuarioLoginForm.value.tipoUsuario));
    // this.route.navigate(['/consultar-cliente', this.clienteMain]);
    this.tipoUsuarioSeleccionado = this.validarTipoUsuario(this.usuarioLoginForm.value.tipoUsuario);
    localStorage.setItem("tipoUsuario",this.tipoUsuarioSeleccionado);
    this.enSession = "Si";
    localStorage.setItem("enSession", "Si");
    this.route.navigate(['vista-principal']);
  }
}
