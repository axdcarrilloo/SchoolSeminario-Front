import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConsultarAsignacionesPeriodoComponent } from "./componentes/asignaciones/periodo/consultar-asignaciones-periodo/consultar-asignaciones-periodo.component";

import { InicioComponent } from "./componentes/inicio/inicio.component";
import { ConsultarPeriodoComponent } from "./componentes/periodo/consultar-periodo/consultar-periodo.component";
import { RegistrarPeriodoComponent } from "./componentes/periodo/registrar-periodo/registrar-periodo.component";
import { ConsultarUsuarioComponent } from "./componentes/usuario/consultar-usuario/consultar-usuario.component";
import { RegistrarUsuarioComponent } from "./componentes/usuario/registrar-usuario/registrar-usuario.component";

const routes: Routes = [
    { path: 'consultar-asignaciones-periodo', component: ConsultarAsignacionesPeriodoComponent },
    { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
    { path: 'consultar-usuario', component: ConsultarUsuarioComponent },
    { path: 'registrar-periodo', component: RegistrarPeriodoComponent },
    { path: 'consultar-periodo', component: ConsultarPeriodoComponent },
    { path: 'inicio', component: InicioComponent },
    // { path: '', component: AppComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class RoutingModule { }
  