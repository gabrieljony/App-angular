import { CadastroCartaComponent } from './cadastro-carta/cadastro-carta.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cadastro',
    component: CadastroCartaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartaRoutingModule { }
