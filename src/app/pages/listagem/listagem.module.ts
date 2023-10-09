import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { MenuListagemComponent } from './components/menu-listagem/menu-listagem.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListagemComponent,
    ListaProdutosComponent,
    MenuListagemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ListagemModule { }
