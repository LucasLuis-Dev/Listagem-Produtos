import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CadastrarProdutoService } from 'src/app/service/cadastrarProduto.service';


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

  constructor(private router: Router, private cadastroService: CadastrarProdutoService) {}


  onSubmit() {
    this.produto.valor = parseFloat(this.produto.valor.toString().replace(',', '.'));
    console.log(this.produto);

    this.cadastroService.cadastrarProduto(this.produto).subscribe(
      (response) => {
        console.log('Produto cadastrado com sucesso!', response);
      },
      (error) => {
        console.error('Erro ao cadastrar produto', error);
      }
    );
    this.router.navigate(['/']);
  }
}
