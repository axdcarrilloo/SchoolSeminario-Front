import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-periodo',
  templateUrl: './consultar-periodo.component.html',
  styleUrls: ['./consultar-periodo.component.css']
})
export class ConsultarPeriodoComponent implements OnInit {

  constructor() { 
    console.log("Saludando desde constructor");
  }

  ngOnInit(): void {
    console.log("Saludando desde ngOnInit");
    localStorage.setItem("enSession", "Si");
  }

}
