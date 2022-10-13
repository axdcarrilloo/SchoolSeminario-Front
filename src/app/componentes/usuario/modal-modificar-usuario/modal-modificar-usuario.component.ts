import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatosModificar } from 'src/app/dtos/datos-modificar';

@Component({
  selector: 'modal-modificar-usuario',
  templateUrl: './modal-modificar-usuario.component.html',
  styleUrls: ['./modal-modificar-usuario.component.css']
})
export class ModalModificarUsuarioComponent implements OnInit {

  @Output() cerrarModalModificar = new EventEmitter<Boolean>();
  @Input() datosModificar?: DatosModificar;

  constructor() {
  }

  ngOnInit(): void {
  }

  modificar(): void {
    console.log("Se envia a modificar el usuario");
    console.log(this.datosModificar);
    this.cerrarModalModificar.emit(true);
  }

}
