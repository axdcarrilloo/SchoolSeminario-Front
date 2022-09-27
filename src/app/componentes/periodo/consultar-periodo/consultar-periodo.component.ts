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

}
