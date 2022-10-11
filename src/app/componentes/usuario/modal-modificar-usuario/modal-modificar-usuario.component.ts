import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsuarioModificar } from 'src/app/dtos/usuario-modificar';
import { Constantes } from 'src/app/utils/constantes';

declare var window: any;

@Component({
  selector: 'modal-modificar-usuario',
  templateUrl: './modal-modificar-usuario.component.html',
  styleUrls: ['./modal-modificar-usuario.component.css']
})
export class ModalModificarUsuarioComponent implements OnInit {

  @Output() cerrarModalModificar = new EventEmitter<Boolean>();

  usuario?: UsuarioModificar;

  constructor() { }

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
