import { Component, OnInit } from '@angular/core';
import { PeriodoRegistrar } from 'src/app/dtos/periodo-registrar';

@Component({
  selector: 'consultar-asignaciones-periodo',
  templateUrl: './consultar-asignaciones-periodo.component.html',
  styleUrls: ['./consultar-asignaciones-periodo.component.css']
})
export class ConsultarAsignacionesPeriodoComponent implements OnInit {

  arregloPeriodosMain: PeriodoRegistrar[] = [];

  constructor() { 
    this.cargarPeriodos();
  }

  ngOnInit(): void {
  }

  cargarPeriodos(): void {
    let periodo1 = new PeriodoRegistrar(2010, "1er");
    let periodo2 = new PeriodoRegistrar(2010, "2do");
    let periodo3 = new PeriodoRegistrar(2010, "3er");
    let periodo4 = new PeriodoRegistrar(2010, "4to");
    let periodo5 = new PeriodoRegistrar(2011, "1er");
    
    this.arregloPeriodosMain.push(periodo1);
    this.arregloPeriodosMain.push(periodo2);
    this.arregloPeriodosMain.push(periodo3);
    this.arregloPeriodosMain.push(periodo4);
    this.arregloPeriodosMain.push(periodo5);
    console.log(this.arregloPeriodosMain);
  }

}
