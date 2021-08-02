import axios from "axios";

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

        return this.axios.post("https://enigmatic-cliffs-10818.herokuapp.com/login/api/user/register", userData);

    }


    /**
     * @param {object} userData 
     * @param {String} userData.email
     * @param {String} userData.password
     * 
     * @returns {Promise}
     */
    login( userData ) {

        return this.axios.post("https://enigmatic-cliffs-10818.herokuapp.com/login/api/user/login", userData);

    }

    authenticated() {

        return this.axios.post("https://enigmatic-cliffs-10818.herokuapp.com/login/api/user/authenticated");

    }

}

export default new API();