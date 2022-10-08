import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'filtrado',
  templateUrl: './filtrado.component.html',
  styleUrls: ['./filtrado.component.css']
})
export class FiltradoComponent implements OnInit {

  @Input() filtrosDe: string = "";
  filtroSeleccionado: string = "Seleccionar";
  @Output() filtroSeleccionadoResponder = new EventEmitter<string>();

  filtrosPeriodo: string[] = Constantes.FILTROS_PERIODO;
  filtrosCurso: string[] = Constantes.FILTROS_CURSO;
  filtrosUsuario: string[] = Constantes.FILTROS_USUARIO;

  constructor() { }

  ngOnInit(): void {
  }

  devolverFiltroSeleccionado(filtro: string): void {
    this.filtroSeleccionadoResponder.emit(filtro);
  }

  cargarFiltros(): string[] {
    let filtroVacio: string[] = [];
    switch (this.filtrosDe) {
      case "Periodo":
        return this.filtrosPeriodo;
      case "Curso":
        return this.filtrosCurso;
      case "Usuario":
        return this.filtrosUsuario;
      default:
        return filtroVacio;
    }
  }

}
