import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DatosModificar } from 'src/app/dtos/datos-modificar';
import { UsuarioModificar } from 'src/app/dtos/usuario-modificar';

@Component({
  selector: 'modal-modificar-usuario',
  templateUrl: './modal-modificar-usuario.component.html',
  styleUrls: ['./modal-modificar-usuario.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalModificarUsuarioComponent implements OnInit {

  usuarioModificado?: UsuarioModificar;
  @Output() cerrarModalModificar = new EventEmitter<Boolean>();
  @Input() datosModificar?: DatosModificar;

  constructor() {
  }
  
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.datosModificar = changes['datosModificar'].currentValue;
  // }

  ngOnInit(): void {
  }

  cargarUsuarioModificado(usuario: UsuarioModificar): void {
    this.usuarioModificado = usuario;
  }

  modificar(): void {
    this.cerrarModalModificar.emit(true);
    console.log(this.usuarioModificado);
  }

}
