import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'registrar-asignacion',
  templateUrl: './registrar-asignacion.component.html',
  styleUrls: ['./registrar-asignacion.component.css']
})
export class RegistrarAsignacionComponent implements OnInit {

  tituloMaestro = "";
  cursoSeleccionado = "";
  validarSelecionTipoAsignacion = false;
  tiposAsignaciones = Constantes.TIPOS_ASIGNACIONES;
  tipoAsignacionSeleccionado = "Seleccionar";

  maestros: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarCurso(curso: string): void {
    this.cursoSeleccionado = curso;
    console.log(this.cursoSeleccionado);
  }

  seleccionarTipoAsignacion(): void {
    this.validarSelecionTipoAsignacion = true;
    switch (this.tipoAsignacionSeleccionado) {
      case 'Estudiante':
        this.maestros = ["Diego","Mario","Lisa","Plinio","Marta"];
      break;
      case "Asignatura":
        this.maestros = ["Mate","Religion","Fisica","Sociales","Deporte"];
      break;
      case "Curso":
        this.maestros = ["1ro","2do","3ro","4to","5to"];    
      break;
    }
    console.log(this.tipoAsignacionSeleccionado);
  }

}
