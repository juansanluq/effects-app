import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule // Importamos el RouterModule para que este componente sepa como trabajar
                // con las rutas
  ],
  exports: [NavbarComponent]
})
export class SharedModule { }
