import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constantes } from 'src/app/utils/constantes';

declare var window: any;

@Component({
  selector: 'registrar-periodo',
  templateUrl: './registrar-periodo.component.html',
  styleUrls: ['./registrar-periodo.component.css']
})
export class RegistrarPeriodoComponent implements OnInit {

  modalRegistroExitoso: any;
  dataRegistroExitoso: string[] = Constantes.REGISTRO_EXITOSO;
  periodoForm: FormGroup;
  nombresPeriodo: string[] = Constantes.NOMBRES_PERIODO;

  constructor(private fb: FormBuilder) { 
    this.periodoForm = this.cargarFormulario();
  }

  ngOnInit(): void {
    this.cargarModals();
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
      anno: ["",  [Validators.required]],
      nombre: ["Seleccionar",  [Validators.required]]
    });
  }

}
