import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosModificar } from 'src/app/dtos/datos-modificar';
import { UsuarioModificar } from 'src/app/dtos/usuario-modificar';
import { Constantes } from 'src/app/utils/constantes';

declare var window: any;

@Component({
  selector: 'registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  modalRegistroExitoso: any;
  dataRegistroExitoso: string[] = Constantes.REGISTRO_EXITOSO;

  usuarioForm: FormGroup;

  @Output() usuarioModificar = new EventEmitter<UsuarioModificar>();

  divPrincipal = "divPrincipalRegistrar";
  formulario = "formularioRegistrar";
  inputLogin = "form-control inputLoginRegistrar"; 
  selects = "form-control selectRegistrar"; 

  @Input() inputDatos?: DatosModificar;

  tipoUsuarioSeleccionado: string = "Seleccionar";
  tiposUsuario: string[] = Constantes.TIPOS_USUARIO;
  tipoDocumentoSeleccionado: string = "Seleccionar";
  tiposDocumento: string[] = Constantes.TIPOS_DOCUMENTOS;

  constructor(private fb: FormBuilder) {
    this.usuarioForm = this.cargarFormulario();
  }

  ngOnInit(): void {
    this.accionModificar();
    this.cargarModals();
  }

  cargarModals(): void {
    this.modalRegistroExitoso = new window.bootstrap.Modal(
      document.getElementById("modalRegistroExitoso")
    );
  }

  cargarUsuarioModificar(): void {
    const caracteres = this.usuarioForm.value.usuario.length;
    if(this.inputDatos?.tipoRegistro == "m" && caracteres > 4) {
      const usuario = new UsuarioModificar(this.usuarioForm.value.tipoUsuario, this.usuarioForm.value.tipoDocumento, this.usuarioForm.value.numeroDocumento,
        this.usuarioForm.value.nombres, this.usuarioForm.value.apellidos, this.usuarioForm.value.celular, this.usuarioForm.value.direccion, 
        this.usuarioForm.value.usuario, this.usuarioForm.value.contrasenna)
      ;
      this.usuarioModificar.emit(usuario);
    }
  }

  cargarFormulario(): FormGroup {
    return this.fb.group({
      tipoUsuario: [this.inputDatos?.usuario.tipoUsuario,  [Validators.required]],
      tipoDocumento: [this.inputDatos?.usuario.tipoDocumento,  [Validators.required]],
      numeroDocumento: [this.inputDatos?.usuario.numeroDocumento,  [Validators.required]],
      nombres: [this.inputDatos?.usuario.nombres,  [Validators.required]],
      apellidos: [this.inputDatos?.usuario.apellidos,  [Validators.required]],
      celular: [this.inputDatos?.usuario.celular,  [Validators.required]],
      direccion: [this.inputDatos?.usuario.direccion,  [Validators.required]],
      usuario: [this.inputDatos?.usuario.usuario,  [Validators.required]],
      contrasenna: [this.inputDatos?.usuario.contrasenna,  [Validators.required]]
    });
  }

  registrar(): void {
    console.log(this.usuarioForm.value);
    this.usuarioForm.reset();
    this.modalRegistroExitoso.show();
  }

  accionModificar(): void {
    if(this.inputDatos?.tipoRegistro == "m") {
      this.divPrincipal = "divPrincipalModificar";
      this.formulario = "formularioModificar";
      this.inputLogin = "form-control inputLoginModificar"; 
      this.selects = "form-control selectModificar"; 
    }
  }

}
