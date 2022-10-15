import { Component, OnInit } from '@angular/core';
import { DatosModificar } from 'src/app/dtos/datos-modificar';
import { UsuarioModificar } from 'src/app/dtos/usuario-modificar';
import { Constantes } from 'src/app/utils/constantes';

declare var window: any;

@Component({
  selector: 'consultar-usuario',
  templateUrl: './consultar-usuario.component.html',
  styleUrls: ['./consultar-usuario.component.css']
})
export class ConsultarUsuarioComponent implements OnInit {

  datosModificar?: DatosModificar;
  usuarioModificar?: UsuarioModificar;
  private modalModificacionExitosa: any;
  dataModificacionExitosa: string[] = Constantes.MODIFICACION_EXITOSA;
  objetoEliminar: string = "el Usuario";
  dataEliminacionExitosa: string[] = Constantes.ELIMINACION_EXITOSA;
  private modalModificarUsuario: any;
  private modalConfirmarEliminacion: any;
  private modalEliminacionExitosa: any;

  constructor() { }

  ngOnInit(): void {
    this.cargarModals();
  }

  cargarDatosModificar(): void {
    const usuario = new UsuarioModificar("Estudiante", "Tarjeta Identidad", "1098765", "Juan", "Omaña", "311983412", "Mz 56-12", "juom", "juom123");

    this.datosModificar = new DatosModificar("m", usuario);
  }

  cerrarModalModificarUsuario(validar: Boolean): void {
    if(validar) {
      this.modalModificarUsuario.hide();
      this.modalModificacionExitosa.show();
    }
  }

  cargarModals(): void {
    this.modalModificacionExitosa = new window.bootstrap.Modal(
      document.getElementById("modalModificacionExitosa")
    );
    this.modalModificarUsuario = new window.bootstrap.Modal(
      document.getElementById("modalModificarUsuario")
    );
    this.modalConfirmarEliminacion = new window.bootstrap.Modal(
      document.getElementById("modalEliminar")
    );
    this.modalEliminacionExitosa = new window.bootstrap.Modal(
      document.getElementById("modalEliminacionExitosa")
    );
  }

  filtrarPor(filtrado: string): void {
    console.log("Se filtrara por " + filtrado);
  }

  eliminar(eliminado: Boolean): void {
    if(eliminado) {
      this.modalConfirmarEliminacion.hide();
      this.modalEliminacionExitosa.show();
      console.log("Se elimino");
    }
  }

}
