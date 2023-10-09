import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CasdastroComponent } from './casdastro.component';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';



@NgModule({
  declarations: [
    CasdastroComponent,
    CadastroFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CasdastroModule { }
