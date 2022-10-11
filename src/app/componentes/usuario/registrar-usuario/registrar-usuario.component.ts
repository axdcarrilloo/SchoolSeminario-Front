import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constantes } from 'src/app/utils/constantes';

declare var window: any;

@Component({
  selector: 'registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  @Output() modificado = new EventEmitter<Boolean>();
  dataModificacionExitosa: string[] = Constantes.MODIFICACION_EXITOSA;
  private modalModificacionExitosa: any;

  divPrincipal = "divPrincipalRegistrar";
  formulario = "formularioRegistrar";
  inputLogin = "form-control inputLoginRegistrar"; 
  selects = "form-control selectRegistrar"; 

  @Input() tipoRegistro: string = "r";

  tipoUsuarioSeleccionado: string = "Seleccionar";
  tiposUsuario: string[] = Constantes.TIPOS_USUARIO;
  tipoDocumentoSeleccionado: string = "Seleccionar";
  tiposDocumento: string[] = Constantes.TIPOS_DOCUMENTOS;

  constructor() { }

  ngOnInit(): void {
    this.accionModificar();
    this.cargarModals();
  }

  cerrarModificacionExitosa(): void {
    this.modalModificacionExitosa.hide();
  }

  abrirModificacionExitosa(): void {
    this.modalModificacionExitosa.show();
  }

  cargarModals(): void {
    this.modalModificacionExitosa = new window.bootstrap.Modal(
      document.getElementById("modalModificacionExitosa")
    );
  }

  modificar(): void {
    console.log("Se tira la Modificacion");
    this.modificado.emit(true);
    this.abrirModificacionExitosa();
  }

  accionModificar(): void {
    if(this.tipoRegistro == "m") {
      this.divPrincipal = "divPrincipalModificar";
      this.formulario = "formularioModificar";
      this.inputLogin = "form-control inputLoginModificar"; 
      this.selects = "form-control selectModificar"; 
    }
  }

}
