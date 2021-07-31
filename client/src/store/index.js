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