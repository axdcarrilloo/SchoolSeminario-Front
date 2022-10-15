import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatosModificarPeriodo } from 'src/app/dtos/datos-modificar-periodo';
import { PeriodoRegistrar } from 'src/app/dtos/periodo-registrar';

import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'modal-modificar-periodo',
  templateUrl: './modal-modificar-periodo.component.html',
  styleUrls: ['./modal-modificar-periodo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalModificarPeriodoComponent implements OnInit {

  @Output() cerrarModalModificar = new EventEmitter<Boolean>();
  periodoModificado?: PeriodoRegistrar;
  @Input() datosModificar?: DatosModificarPeriodo;
  nombresPeriodo: string[] = Constantes.NOMBRES_PERIODO;

  constructor() { }

  ngOnInit(): void {
  }

  modificar(): void {
    console.log(this.periodoModificado);
    this.cerrarModalModificar.emit(true);
  }

  cargarPeriodoModificado(periodo: PeriodoRegistrar): void {
    this.periodoModificado = periodo;
  }

}
