import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  enSession: any = "";

  constructor() {
    localStorage.setItem("enSession", "No");
  }

  ngOnInit(): void {
    this.enSession = localStorage.getItem("enSession");
  }

}
