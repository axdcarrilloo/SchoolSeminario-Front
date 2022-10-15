import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosModificar } from 'src/app/dtos/datos-modificar';
import { UsuarioModificar } from 'src/app/dtos/usuario-modificar';
import { Constantes } from 'src/app/utils/constantes';

declare var window: any;

@Component({
  selector: 'registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  @Input() datosModificar = new DatosModificar("r", 
    new UsuarioModificar("", "", "", "", "", "", "", "", ""))
  ;

  tipoUsuarioSeleccionado: string = "Seleccionar";
  tiposUsuario: string[] = Constantes.TIPOS_USUARIO;
  tipoDocumentoSeleccionado: string = "Seleccionar";
  tiposDocumento: string[] = Constantes.TIPOS_DOCUMENTOS;

  constructor(private fb: FormBuilder, private route: Router) {
    this.usuarioForm = this.cargarFormulario();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.datosModificar = changes['datosModificar'].currentValue;
  // }

  ngOnInit(): void {
    this.accionModificar();
    this.cargarModals();
    this.usuarioForm = this.cargarFormulario();
  }

  cargarModals(): void {
    this.modalRegistroExitoso = new window.bootstrap.Modal(
      document.getElementById("modalRegistroExitoso")
    );
  }

  cargarUsuarioModificar(): void {
    const caracteres = this.usuarioForm.value.usuario.length;
    if(this.datosModificar?.tipoRegistro == "m" && caracteres > 4) {
      const usuario = new UsuarioModificar(this.usuarioForm.value.tipoUsuario, this.usuarioForm.value.tipoDocumento, this.usuarioForm.value.numeroDocumento,
        this.usuarioForm.value.nombres, this.usuarioForm.value.apellidos, this.usuarioForm.value.celular, this.usuarioForm.value.direccion, 
        this.usuarioForm.value.usuario, this.usuarioForm.value.contrasenna)
      ;
      this.usuarioModificar.emit(usuario);
    }
  }

  cargarFormulario(): FormGroup {
    return this.fb.group({
      tipoUsuario: [this.datosModificar?.usuario.tipoUsuario,  [Validators.required]],
      tipoDocumento: [this.datosModificar?.usuario.tipoDocumento,  [Validators.required]],
      numeroDocumento: [this.datosModificar?.usuario.numeroDocumento,  [Validators.required]],
      nombres: [this.datosModificar?.usuario.nombres,  [Validators.required]],
      apellidos: [this.datosModificar?.usuario.apellidos,  [Validators.required]],
      celular: [this.datosModificar?.usuario.celular,  [Validators.required]],
      direccion: [this.datosModificar?.usuario.direccion,  [Validators.required]],
      usuario: [this.datosModificar?.usuario.usuario,  [Validators.required]],
      contrasenna: [this.datosModificar?.usuario.contrasenna,  [Validators.required]]
    });
  }

  registrar(): void {
    console.log(this.usuarioForm.value);
    this.usuarioForm.reset();
    this.modalRegistroExitoso.show();
  }

  accionModificar(): void {
    if(this.datosModificar?.tipoRegistro == "m") {
      this.divPrincipal = "divPrincipalModificar";
      this.formulario = "formularioModificar";
      this.inputLogin = "form-control inputLoginModificar"; 
      this.selects = "form-control selectModificar"; 
    }
  }

}
