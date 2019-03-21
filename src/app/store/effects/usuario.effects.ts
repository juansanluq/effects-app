import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';

import * as usuarioActions from '../actions';
import { of } from 'rxjs';

import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CargarUsuarioFail } from '../actions';

@Injectable()
export class UsuarioEffects {

    constructor( private actions$: Actions, private usuarioService: UsuarioService) {}


    @Effect()
    cargarUsuarios$ = this.actions$.pipe(
        ofType( usuarioActions.CARGAR_USUARIO ),
        switchMap( action => {
            const id = action['id'];
            return this.usuarioService.getUserById(id)
                .pipe(
                    map( user => new usuarioActions.CargarUsuarioSuccess(user)),
                    catchError( error => of(new CargarUsuarioFail(error)))
                );
        })
    );

}
