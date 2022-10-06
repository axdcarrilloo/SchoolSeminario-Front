import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'consultar-periodo',
  templateUrl: './consultar-periodo.component.html',
  styleUrls: ['./consultar-periodo.component.css']
})
export class ConsultarPeriodoComponent implements OnInit {

  objetoEliminar: string = "el Periodo";
  @ViewChild('modalEliminar') modalEliminar = null;
  private modal: any;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  abrirModalConfirmarEliminacion(): void {
    this.modal = this.modalService.open(this.modalEliminar);
  }

  filtrarPor(filtrado: string): void {
    console.log("Se filtrara por " + filtrado);
  }

  eliminar(eliminado: Boolean): void {
    this.abrirModalConfirmarEliminacion();
    if(eliminado) {
      console.log("Se elimino");
      this.modal.close();
    }
  }

}
