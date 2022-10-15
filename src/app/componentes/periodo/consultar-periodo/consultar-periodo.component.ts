import { Component, OnInit } from '@angular/core';
import { DatosModificarPeriodo } from 'src/app/dtos/datos-modificar-periodo';
import { PeriodoRegistrar } from 'src/app/dtos/periodo-registrar';
import { Constantes } from 'src/app/utils/constantes';

declare var window: any;

@Component({
  selector: 'consultar-periodo',
  templateUrl: './consultar-periodo.component.html',
  styleUrls: ['./consultar-periodo.component.css']
})
export class ConsultarPeriodoComponent implements OnInit {

  private modalModificarPeriodo: any;
  private modalModificacionExitosa: any;
  dataModificacionExitosa: string[] = Constantes.MODIFICACION_EXITOSA;
  datosModificar?: DatosModificarPeriodo;
  objetoEliminar: string = "el Periodo";
  private modalConfirmarEliminacion: any;
  dataEliminacionExitosa: string[] = ["modal-content divPrincipalExitoso", "Eliminacion Exitosa", "exito", "Eliminacion realizada con exito...!"];
  private modalEliminacionExitosa: any;

  constructor() {
  }

  ngOnInit(): void {
    this.cargarModals();
  }

  cerrarModalModificarPeriodo(validar: Boolean): void {
    if(validar) {
      this.modalModificarPeriodo.hide();
      this.modalModificacionExitosa.show();
    }
  }

  cargarDatosModificar(): void {
    const periodo = new PeriodoRegistrar(2010, "1er");
    this.datosModificar = new DatosModificarPeriodo("m", periodo);
  }

  cargarModals(): void {
    this.modalModificarPeriodo = new window.bootstrap.Modal(
      document.getElementById("modalModificarPeriodo")
    );
    this.modalModificacionExitosa = new window.bootstrap.Modal(
      document.getElementById("modalModificacionExitosa")
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
