import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioService } from '../services/usuario.service';

@NgModule({
  declarations: [ListaComponent, UsuarioComponent],
  imports: [
    CommonModule,
  ],
  exports: [ListaComponent, UsuarioComponent]
})
export class UsuariosModule { }
