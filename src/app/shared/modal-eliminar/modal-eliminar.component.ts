import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css']
})
export class ModalEliminarComponent implements OnInit {

  @Input() objetoEliminar: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
