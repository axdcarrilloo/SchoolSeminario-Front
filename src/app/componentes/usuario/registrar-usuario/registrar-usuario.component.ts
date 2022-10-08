import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  tipoUsuarioSeleccionado: string = "Seleccionar";
  tiposUsuario: string[] = Constantes.TIPOS_USUARIO;
  tipoDocumentoSeleccionado: string = "Seleccionar";
  tiposDocumento: string[] = Constantes.TIPOS_DOCUMENTOS;

  constructor() { }

  ngOnInit(): void {
  }

}
