import { Component, EventEmitter, OnInit, Output } from '@angular/core';

declare var window: any;

@Component({
  selector: 'modal-modificar-usuario',
  templateUrl: './modal-modificar-usuario.component.html',
  styleUrls: ['./modal-modificar-usuario.component.css']
})
export class ModalModificarUsuarioComponent implements OnInit {

  esteModal: any;

  @Output() outputMouodificado = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit(): void {
    this.cargarModals();
  }

  modificado(validar: Boolean): void {
    if(validar) {
      this.esteModal.hide();
      this.outputMouodificado.emit(true);
    }
  }

  cargarModals(): void {
    this.esteModal = new window.bootstrap.Modal(
      document.getElementById("modalModificarUsuario")
    );
  }

}
