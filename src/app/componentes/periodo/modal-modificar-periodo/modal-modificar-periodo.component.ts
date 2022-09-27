import { Component, OnInit } from '@angular/core';

import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'modal-modificar-periodo',
  templateUrl: './modal-modificar-periodo.component.html',
  styleUrls: ['./modal-modificar-periodo.component.css']
})
export class ModalModificarPeriodoComponent implements OnInit {

  nombresPeriodo: string[] = Constantes.NOMBRES_PERIODO;

  constructor() { }

  ngOnInit(): void {
  }

}
