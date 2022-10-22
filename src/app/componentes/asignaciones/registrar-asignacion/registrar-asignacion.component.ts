import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'registrar-asignacion',
  templateUrl: './registrar-asignacion.component.html',
  styleUrls: ['./registrar-asignacion.component.css']
})
export class RegistrarAsignacionComponent implements OnInit {

  cursoSeleccionado = "";
  validarSelecionTipoAsignacion = false;
  tiposAsignaciones = Constantes.TIPOS_ASIGNACIONES;
  tipoAsignacionSeleccionado = "Seleccionar";

  cursos = ["1ro","2do","3ro","4to","5to"];

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarCurso(curso: string): void {
    this.cursoSeleccionado = curso;
    console.log(this.cursoSeleccionado);
  }

  seleccionarTipoAsignacion(): void {
    console.log(this.tipoAsignacionSeleccionado);
    this.validarSelecionTipoAsignacion = true;
  }

}
