import { Component, Input, OnInit } from '@angular/core';
import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'filtrado',
  templateUrl: './filtrado.component.html',
  styleUrls: ['./filtrado.component.css']
})
export class FiltradoComponent implements OnInit {

  @Input() filtrosDe: string = "";
  filtroSeleccionado: string = "Seleccionar";

  filtrosPeriodo: string[] = Constantes.FILTROS_PERIODO;
  filtrosCurso: string[] = Constantes.FILTROS_CURSO;

  constructor() { }

  ngOnInit(): void {
  }

  cargarFiltros(): string[] {
    let filtroVacio: string[] = [];
    switch (this.filtrosDe) {
      case "Periodo":
        return this.filtrosPeriodo;
      case "Curso":
        return this.filtrosCurso;
      default:
        return filtroVacio;
    }
  }

}
