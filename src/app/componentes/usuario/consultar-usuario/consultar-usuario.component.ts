import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'consultar-usuario',
  templateUrl: './consultar-usuario.component.html',
  styleUrls: ['./consultar-usuario.component.css']
})
export class ConsultarUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  filtrarPor(filtrado: string): void {
    console.log("Se filtrara por " + filtrado);
  }

}
