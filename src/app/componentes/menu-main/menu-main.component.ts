import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.css']
})
export class MenuMainComponent implements OnInit {

  @Input() tipoUsuario: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }
}
