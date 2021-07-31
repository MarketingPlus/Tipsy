import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/tipsy-logo-white.svg';
import Home from '../components/pages/Home'
import LogoutButton from './LogoutButton';

const styles = {
    nav: {
        position: "sticky",
        zIndex: 1,
        backgroundColor:"#2F3439",
    },
    logo: {
        width: "auto",
        height: "30px"
    },
    links: {
        marginRight: 10,
        color: "#fff"
    }
};
