import React, { Component } from 'react';
import Drink from '../Drink.json';
import LoginCard from '../LoginCard';
// import Box from '@material-ui/core/Box';


class Login extends Component {

    state = {
        Drink
    };

    render() {
        return (
            <div className="container mx-auto">

                <LoginCard />

            </div>
        )
    }
}

export default Login;