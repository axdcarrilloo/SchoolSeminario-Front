import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  hiddenMenu: Boolean = false;
  hiddenLogin: Boolean = true;
  tipoUsuario: string = "";

  constructor(private route: Router) {
  }

  ngOnInit(): void {
  }

  recibirDatosLogin(datos: any[]): void {
    const logeado = datos[0];
    if(logeado) {
      this.hiddenMenu = true;
      this.hiddenLogin = false;
      this.route.navigate(['inicio']);
    }
    this.tipoUsuario = datos[1];
  }

}
