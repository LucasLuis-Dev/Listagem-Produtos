import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent {
  produto = {
    nome: '',
    descricao: '',
    valor: 0,
    disponivel: ''
  };

  constructor(private router: Router) {}


  onSubmit() {
    this.produto.valor = parseFloat(this.produto.valor.toString().replace(',', '.'));
    console.log(this.produto);
    this.router.navigate(['/']);
  }
}
