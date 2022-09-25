import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.css']
})
export class MenuMainComponent implements OnInit {

  tipoUsuario: any = "";
  enSession: any = "";

  constructor() {
    this.tipoUsuario = localStorage.getItem("tipoUsuario");
    this.enSession = localStorage.getItem("enSession");
    localStorage.removeItem('tipoUsuario');
   }

  ngOnInit(): void {
  }
}
