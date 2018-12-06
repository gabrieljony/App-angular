import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartaRoutingModule } from './carta-routing.module';
import { CadastroCartaComponent } from './cadastro-carta/cadastro-carta.component';

@NgModule({
  declarations: [CadastroCartaComponent],
  imports: [
    CommonModule,
    CartaRoutingModule
  ]
})
export class CartaModule { }
