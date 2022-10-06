import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modal-alertas',
  templateUrl: './modal-alertas.component.html',
  styleUrls: ['./modal-alertas.component.css']
})
export class ModalAlertasComponent implements OnInit {

  @Input() datosInput: string[] = [];
  tipoAlerta: string = this.datosInput[0];
  titulo: string = this.datosInput[1];
  mensaje: string = this.datosInput[2];

  constructor() { }

  ngOnInit(): void {
  }

}
