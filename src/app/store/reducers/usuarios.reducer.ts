import { Usuario } from 'src/app/models/usuario.model';
import { usuariosAcciones, CARGAR_USUARIOS, CARGAR_USUARIOS_SUCCES, CARGAR_USUARIOS_FAIL } from '../actions';

// Estado de los usuarios
export interface UsuariosState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null,
};

export function usuariosReducer( state = initState, action: usuariosAcciones ): UsuariosState {

    switch ( action.type ) {
        case CARGAR_USUARIOS:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case CARGAR_USUARIOS_SUCCES:
            return {
                ...state,
                loading: false,
                loaded: true,
                users: [...action.usuarios],
            };
        case CARGAR_USUARIOS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url,
                }
            };
        default:
            return state;
    }
}
