import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'registrar-periodo',
  templateUrl: './registrar-periodo.component.html',
  styleUrls: ['./registrar-periodo.component.css']
})
export class RegistrarPeriodoComponent implements OnInit {

  nombresPeriodo: string[] = Constantes.nombresPeriodos;

  constructor() { }

  ngOnInit(): void {
  }

}
