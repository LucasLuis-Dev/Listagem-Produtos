import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { CasdastroComponent } from './pages/casdastro/casdastro.component';

const routes: Routes = [
  {
    path: '', component: ListagemComponent
  },
  {
    path: 'cadastro', component: CasdastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
