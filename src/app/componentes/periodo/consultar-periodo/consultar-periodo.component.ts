import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'consultar-periodo',
  templateUrl: './consultar-periodo.component.html',
  styleUrls: ['./consultar-periodo.component.css']
})
export class ConsultarPeriodoComponent implements OnInit {

  objetoEliminar: string = "el Periodo";
  private modalConfirmarEliminacion: any;

  dataEliminacionExitosa: string[] = ["exito", "Eliminacion Exitosa", "Eliminacion realizada con exito...!"];
  private modalEliminacionExitosa: any;

  constructor() {
  }

  ngOnInit(): void {
    this.cargarModals();
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

  abrirModalEliminacionExitosa(): void {
    this.modalEliminacionExitosa.show();
  }

  filtrarPor(filtrado: string): void {
    console.log("Se filtrara por " + filtrado);
  }

  eliminar(eliminado: Boolean): void {
    if(eliminado) {
      this.cerrarModalConfirmarEliminacion();
      this.abrirModalEliminacionExitosa();
      console.log("Se elimino");
    }
  }

}
