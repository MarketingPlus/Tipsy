import axios from "axios";
import { response } from "express";

class API {

    axios;

    constructor() {

        this.axios = axios.create();

    }

    /**
     * @param {String} name 
     * @param {String} value 
     */
    setHeader( name, value ) {

        if( value )

            this.axios.defaults.headers.common[name] = value;

        else

            delete this.axios.defaults.headers.common[name];

    }

    /**
     * @param {object} userData 
     * @param {String} userData.email
     * @param {String} userData.password
     * 
     * @returns {Promise}
     */
    register( userData ) {
      console.log("------");
      console.log(userData);
      console.log("------");

        return this.axios.post("/api/user/register", userData).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.response)
        });

    }


    /**
     * @param {object} userData 
     * @param {String} userData.email
     * @param {String} userData.password
     * 
     * @returns {Promise}
     */
    login( userData ) {

        return this.axios.post("/api/user/login", userData).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.response)
        });

    }

    authenticated() {

        return this.axios.post("/api/user/authenticated").then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.response)
        });

    }

}

export default new API();