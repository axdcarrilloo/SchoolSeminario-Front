import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosModificarPeriodo } from 'src/app/dtos/datos-modificar-periodo';
import { PeriodoRegistrar } from 'src/app/dtos/periodo-registrar';
import { Constantes } from 'src/app/utils/constantes';

declare var window: any;

@Component({
  selector: 'registrar-periodo',
  templateUrl: './registrar-periodo.component.html',
  styleUrls: ['./registrar-periodo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrarPeriodoComponent implements OnInit {

  @Output() periodoModificado = new EventEmitter<PeriodoRegistrar>();
  divPrincipal = "divPrincipalRegistrar";
  inputs = "form-control inputRegistrar";
  @Input() datosModificar?: DatosModificarPeriodo;
  modalRegistroExitoso: any;
  dataRegistroExitoso: string[] = Constantes.REGISTRO_EXITOSO;
  periodoForm: FormGroup;
  nombresPeriodo: string[] = Constantes.NOMBRES_PERIODO;

  constructor(private fb: FormBuilder) { 
    this.periodoForm = this.cargarFormulario();
  }

  ngOnInit(): void {
    this.accionModificar();
    this.cargarModals();
    this.periodoForm = this.cargarFormulario();
  }

  cargarPeriodoModificado(): void {
    const periodo = new PeriodoRegistrar(this.periodoForm.value.anno, this.periodoForm.value.nombre);
    this.periodoModificado.emit(periodo);
  }

  accionModificar(): void {
    if(this.datosModificar?.tipoRegistro == "m") {
      this.divPrincipal = "divPrincipalModificar";
      this.inputs = "form-control inputModificar"; 
    }
  }

  cargarModals(): void {
    this.modalRegistroExitoso = new window.bootstrap.Modal(
      document.getElementById("modalRegistroExitoso")
    );
  }

  registrar(): void {
    console.log(this.periodoForm.value);
    this.periodoForm.reset();
    this.periodoForm = this.cargarFormulario();
    this.modalRegistroExitoso.show();
  }

  cargarFormulario(): FormGroup {
    return this.fb.group({
      anno: [this.datosModificar?.periodo.anno,  [Validators.required]],
      nombre: [this.datosModificar?.periodo.nombre,  [Validators.required]]
    });
  }

}
