import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'consultar-periodo',
  templateUrl: './consultar-periodo.component.html',
  styleUrls: ['./consultar-periodo.component.css']
})
export class ConsultarPeriodoComponent implements OnInit {

  objetoEliminar: string = "el Periodo"

  constructor() { 
  }

  ngOnInit(): void {
  }

  filtrarPor(filtrado: string): void {
    console.log("Se filtrara por " + filtrado);
  }

  eliminar(eliminado: Boolean): void {
    console.log("Se elimina? " + eliminado);
  }

}
