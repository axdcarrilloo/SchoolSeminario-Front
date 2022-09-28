import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modal-alertas',
  templateUrl: './modal-alertas.component.html',
  styleUrls: ['./modal-alertas.component.css']
})
export class ModalAlertasComponent implements OnInit {

  @Input() datos: string[] = [];
  tipoAlerta: string = this.datos[0];
  titulo: string = this.datos[1];
  mensaje: string = this.datos[2];

  constructor() { }

  ngOnInit(): void {
  }

}
