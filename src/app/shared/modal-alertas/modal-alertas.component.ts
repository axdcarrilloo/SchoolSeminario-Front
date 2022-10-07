import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modal-alertas',
  templateUrl: './modal-alertas.component.html',
  styleUrls: ['./modal-alertas.component.css']
})
export class ModalAlertasComponent implements OnInit {

  @Input() datosInputs: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
