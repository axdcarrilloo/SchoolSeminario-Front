import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatosModificar } from 'src/app/dtos/datos-modificar';
import { UsuarioModificar } from 'src/app/dtos/usuario-modificar';

declare var window: any;

@Component({
  selector: 'modal-modificar-usuario',
  templateUrl: './modal-modificar-usuario.component.html',
  styleUrls: ['./modal-modificar-usuario.component.css']
})
export class ModalModificarUsuarioComponent implements OnInit {

  @Output() cerrarModalModificar = new EventEmitter<Boolean>();
  @Input() usuario = new UsuarioModificar("", "", "", "", "", "", "", "", "",);

  datosModificar = new DatosModificar("m", this.usuario);

  constructor() {
    console.log(this.usuario);
  }

  ngOnInit(): void {
  }

  cargarUsuarioModificar(usuario: UsuarioModificar): void {
    this.usuario = usuario;
  }

  modificar(): void {
    console.log("Se envia a modificar el usuario");
    console.log(this.usuario);
    this.cerrarModalModificar.emit(true);
  }

}
