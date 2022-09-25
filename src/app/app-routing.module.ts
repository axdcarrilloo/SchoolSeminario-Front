import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { LoginComponent } from "./componentes/login/login.component";
import { ConsultarPeriodoComponent } from "./componentes/periodo/consultar-periodo/consultar-periodo.component";
import { VistaPrincipalComponent } from "./componentes/vista-principal/vista-principal.component";

const routes: Routes = [
    { path: 'consultar-periodo', component: ConsultarPeriodoComponent },
    { path: 'vista-principal', component: VistaPrincipalComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'login', component: LoginComponent }
    // { path: '', component: AppComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class RoutingModule { }
  