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

  recibirTipoUsuario(tipoUsuario: string):void {
    this.tipoUsuario = tipoUsuario;
  }

  recibirLogeo(logeado: Boolean): void {
    if(logeado) {
      this.hiddenMenu = true;
      this.hiddenLogin = false;
      this.route.navigate(['inicio']);
    }
  }

}
