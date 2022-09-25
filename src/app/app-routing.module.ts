import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { ConsultarPeriodoComponent } from "./componentes/periodo/consultar-periodo/consultar-periodo.component";
import { RegistrarPeriodoComponent } from "./componentes/periodo/registrar-periodo/registrar-periodo.component";

const routes: Routes = [
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
  