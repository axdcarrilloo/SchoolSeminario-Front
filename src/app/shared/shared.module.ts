import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { FiltradoComponent } from './filtrado/filtrado.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModalEliminarComponent,
    FiltradoComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    ModalEliminarComponent, FiltradoComponent
  ]
})
export class SharedModule { }
