import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'novo-component',
  templateUrl: './novo-component.component.html',
  styleUrls: ['./novo-component.component.css']
})
export class NovoComponentComponent implements OnInit {

  imagem: string;

  constructor() {
    this.imagem = "assets/Images/logo_uern.jpg";
  }

  ngOnInit() {
  }

  onClickEnviar() {
    console.log("enviar click");
  }

  buttonClick() {
    alert("Botão clicado!!!");
  }

  logoClick() {
    console.log(this.imagem);
  }

}
