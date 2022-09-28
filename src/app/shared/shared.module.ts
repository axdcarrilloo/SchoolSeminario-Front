import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { FiltradoComponent } from './filtrado/filtrado.component';
import { FormsModule } from '@angular/forms';
import { ModalAlertasComponent } from './modal-alertas/modal-alertas.component';



@NgModule({
  declarations: [
    ModalEliminarComponent, FiltradoComponent, ModalAlertasComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    ModalEliminarComponent, FiltradoComponent, ModalAlertasComponent
  ]
})
export class SharedModule { }
