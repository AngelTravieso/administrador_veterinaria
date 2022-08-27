import { useReducer } from 'react';
import { types } from '../types/types';

import { AuthContext, AuthReducer } from './';

const init = () => {
    const user = JSON.parse( localStorage.getItem('user') );

    return {
        logged: !!user,
        user
    }
}


export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer(AuthReducer, {}, init );


    const login = ( name = '' ) => {
        
        const user = {
            id: 'ABC',
            name,
        }

        const action = {
            type: types.login,
            payload: user,
        }

        localStorage.setItem('user', JSON.stringify( user ));

        dispatch( action );

    }


    const logout = () => {

        const action = {
            type: types.logout,
        }

        localStorage.removeItem('user');

        dispatch( action );

    }

    return (
        <AuthContext.Provider value={{
            // Información del Usuario
            ...authState,

            // Metodos
            login,
            logout,

        }}>
            { children }
        </AuthContext.Provider>
    );

}
