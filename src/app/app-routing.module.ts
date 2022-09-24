import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { ConsultarPeriodoComponent } from "./componentes/periodo/consultar-periodo/consultar-periodo.component";

const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'periodo', component: ConsultarPeriodoComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  