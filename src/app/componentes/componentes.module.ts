import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { ConsultarPeriodoComponent } from './periodo/consultar-periodo/consultar-periodo.component';

@NgModule({
  declarations: [
    InicioComponent, MenuMainComponent, ConsultarPeriodoComponent
  ],
  imports: [
    
  ],
  exports: [
    MenuMainComponent
  ],
  providers: []
})
export class ComponentesModule { }
