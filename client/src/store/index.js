import React,{ createContext, useContext, useReducer } from "react";

import {
    LOGIN_USER,
    LOGOUT_USER,
    SET_CURRENT_RECIPE,
    SET_FAVORITES,
} from "./actions";

const StoreContext = createContext({
    userAuth: {},
    recipe: null
});

const { Provider } = StoreContext;

const reducer = ( state, { type, payload } ) => {

    switch( type ) {
        case SET_FAVORITES:

            return { ...state, userAuth: { ...state.userAuth, user: { ...state.userAuth.user, favorites: payload } }}

        case LOGIN_USER:

            return { ...state, userAuth: payload };

        case LOGOUT_USER:

            return { ...state, userAuth: {} };

        case SET_CURRENT_RECIPE:
            console.log("setting recipe", payload);
            return { ...state, recipe: payload }

        default:
            return state;
    }

}