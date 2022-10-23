import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'registrar-asignacion',
  templateUrl: './registrar-asignacion.component.html',
  styleUrls: ['./registrar-asignacion.component.css']
})
export class RegistrarAsignacionComponent implements OnInit {

  styleSelect = "form-control sltTipoAsignacion";
  styleBotonAsignar = "btn btn-primary btnAsignarDesactivado";
  activarBotonAsignar = true;
  maestroSeleccionado = "";
  checkSeleccionado: any;
  tituloMaestros = "";
  maestros: string[] = [];
  tituloAsignados = "";
  asignados: string[] = [];
  asignadosSeleccionados: string[] = [];
  validarSelecionTipoAsignacion = false;
  tiposAsignaciones = Constantes.TIPOS_ASIGNACIONES;
  tipoAsignacionSeleccionado = "Seleccionar";

  constructor() { }

  ngOnInit(): void {
  }

  limpiarPanels(): void {
    this.styleSelect = "form-control sltTipoAsignacion";
    this.styleBotonAsignar = "btn btn-primary btnAsignarDesactivado";
    this.activarBotonAsignar = true;
    this.maestroSeleccionado = "";
    this.tituloMaestros = "";
    this.maestros = [];
    this.tituloAsignados = "";
    this.asignados = [];
    this.asignadosSeleccionados = [];
    this.validarSelecionTipoAsignacion = false;
    this.tiposAsignaciones = Constantes.TIPOS_ASIGNACIONES;
    this.tipoAsignacionSeleccionado = "Seleccionar";
  }

  asignar(): void {
    console.log("Maestro seleccionado -> " + this.maestroSeleccionado);
    console.log("Asignados seleccionados -> " + this.asignadosSeleccionados);
    this.limpiarPanels();
  }

  validarActivacionBotonAsignar(): void {
    if(this.maestroSeleccionado != "" && this.asignadosSeleccionados.length > 0) {
      this.activarBotonAsignar = false;
      this.styleBotonAsignar = "btn btn-primary btnAsignar";
    }
  }

  seleccionarMaestro(maestro: string): void {
    this.maestroSeleccionado = maestro;
    this.validarActivacionBotonAsignar();
    console.log(this.maestroSeleccionado);
  }

  cargarAsignados(asignado: string): void {
    this.cargarChecks(asignado);
    if(this.checkSeleccionado.checked) {
      this.asignadosSeleccionados.push(asignado);
      console.log(asignado);
    }
    this.validarActivacionBotonAsignar();
  }

  cargarChecks(asignado: string): void {
    this.checkSeleccionado = window.document.getElementById(asignado);
  }

  seleccionarAsignados(asignado: string): void {
    this.cargarAsignados(asignado);
  }

  seleccionarTipoAsignacion(): void {
    switch (this.tipoAsignacionSeleccionado) {
      case 'Estudiante':
        this.tituloMaestros = "Lista de Cursos";
        this.maestros = Constantes.NOMBRES_PERIODO;
        this.tituloAsignados = "Lista de Estudiantes";
        this.asignados = ["Diego","Mario","Lisa","Plinio","Marta"];
        break;
        case "Asignatura":
          this.tituloMaestros = "Lista de Cursos";
          this.maestros = Constantes.NOMBRES_PERIODO;
          this.tituloAsignados = "Lista de Asignaturas";
          this.asignados = ["Mate","Religion","Fisica","Sociales","Deporte"];
          break;
          case "Curso":
            this.tituloMaestros = "Lista de Periodos";
            this.maestros = Constantes.NOMBRES_PERIODO;
            this.tituloAsignados = "Lista de Cursos";
            this.asignados = ["1ro","2do","3ro","4to","5to"];    
            break;
    }
    this.validarSelecionTipoAsignacion = true;
    this.styleSelect = "form-control sltTipoAsignacionDesactivado";
  }

}
