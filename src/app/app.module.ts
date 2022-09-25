import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComponentesModule } from './componentes/componentes.module';
import { VistaPrincipalComponent } from './componentes/vista-principal/vista-principal.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ComponentesModule, RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
