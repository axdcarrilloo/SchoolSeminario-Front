import { Component, OnInit } from '@angular/core';

import { NombrePeriodos } from 'src/app/utils/nombre-periodos';

@Component({
  selector: 'registrar-periodo',
  templateUrl: './registrar-periodo.component.html',
  styleUrls: ['./registrar-periodo.component.css']
})
export class RegistrarPeriodoComponent implements OnInit {

  nombresPeriodo: string[] = NombrePeriodos.nombres;

  constructor() { }

  ngOnInit(): void {
  }

}
