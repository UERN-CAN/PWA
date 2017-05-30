import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'novo-component',
  templateUrl: './novo-component.component.html',
  styleUrls: ['./novo-component.component.css']
})
export class NovoComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickEnviar() {
    console.log("enviar click");
  }

}
