import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { CargarUsuariosAction } from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean;
  error: any;

  constructor( /* public usuarioService: UsuarioService */ private store: Store<AppState> ) { }

  ngOnInit() {
    // this.usuarioService.getUsers()
    //     .subscribe( users => {
    //       console.log(users);
    //       this.usuarios = users;
    //     });
    this.store.dispatch(new CargarUsuariosAction());
    this.store.select('usuarios')
        .subscribe( usuarios => {
            this.usuarios = usuarios.users;
            this.loading = usuarios.loading;
            this.error = usuarios.error;
        });
  }
}
