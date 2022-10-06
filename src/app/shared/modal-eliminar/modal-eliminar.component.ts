import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css']
})
export class ModalEliminarComponent implements OnInit {

  @Input() objetoEliminar: string = "";
  @Output() eliminado = new EventEmitter<Boolean>();

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  eliminar(): void {
    this.eliminado.emit(true);
  }

}
