import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

import api from "./register-api";
import { useStoreContext } from "../store";
import { LOGIN_USER, LOGOUT_USER } from "../store/actions";

const setAuthToken = token => {

    storeAuthToken( token );
    applyAuthToken( token );

    return token ? jwt_decode(token) : undefined;

}

const storeAuthToken = token => {

    token

        ? localStorage.setItem("jwtToken", token)
        
        : localStorage.removeItem( "jwtToken" );

}

const applyAuthToken = token => {

    token

        // Apply authorization token to every request if logged in
        ? api.setHeader( "Authorization", token )

        // Delete auth header
        : api.setHeader( "Authorization", false );

}