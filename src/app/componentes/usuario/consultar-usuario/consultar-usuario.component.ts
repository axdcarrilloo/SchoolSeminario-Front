import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/app/utils/constantes';

declare var window: any;

@Component({
  selector: 'consultar-usuario',
  templateUrl: './consultar-usuario.component.html',
  styleUrls: ['./consultar-usuario.component.css']
})
export class ConsultarUsuarioComponent implements OnInit {

  objetoEliminar: string = "el Usuario";
  dataEliminacionExitosa: string[] = Constantes.ELIMINACION_EXITOSA;

  private modalConfirmarEliminacion: any;
  private modalEliminacionExitosa: any;

  constructor() { }

  ngOnInit(): void {
    this.cargarModals();
  }

  usuarioModificado(validar: Boolean): void {
    if(validar) {
      console.log("Se modifico el usuario");
    } else {
    console.log("No s epudo modificar el usuario");
    }
  }
  
  cerrarModalConfirmarEliminacion(): void {
    this.modalConfirmarEliminacion.hide();
  }

  cargarModals(): void {
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

  abrirModalEliminacionExitosa(): void {
    this.modalEliminacionExitosa.show();
  }

  eliminar(eliminado: Boolean): void {
    if(eliminado) {
      this.cerrarModalConfirmarEliminacion();
      this.abrirModalEliminacionExitosa();
      console.log("Se elimino");
    }
  }

}
