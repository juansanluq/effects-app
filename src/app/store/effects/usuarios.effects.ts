import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';

import * as usuariosActions from '../actions';
import { of } from 'rxjs';

import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CargarUsuariosFail } from '../actions';

@Injectable()
export class UsuariosEffects {

    constructor( private actions$: Actions, private usuarioService: UsuarioService) {}


    @Effect()
    cargarUsuarios$ = this.actions$.pipe(
        ofType( usuariosActions.CARGAR_USUARIOS ),
        switchMap( () => {
            return this.usuarioService.getUsers()
                .pipe(
                    map( users => new usuariosActions.CargarUsuariosSucces(users)),
                    catchError( error => of(new CargarUsuariosFail(error)))
                );
        })
    );

}
