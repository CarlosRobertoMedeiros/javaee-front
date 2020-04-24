import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent implements OnInit {

  public nomeDoCompomente:String;

  constructor() { }

  ngOnInit(): void {
    this.nomeDoCompomente = "Carreguei o componente Cadastro Usuário";
  }

}
