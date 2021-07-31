import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Account from './components/pages/Account';
import Recipe from './components/pages/Recipe'
import Hero from './components/Hero';
import Logo from './components/Logo';
import Login from './components/pages/Login'
import GuestRoute from './components/GuestRoute'
import PrivateRoute from "./components/PrivateRoute";
// Import the useAuthTokenStore hook.
import { useAuthTokenStore, useIsAuthenticated } from "./utils/auth";

const App = () => {

  const isAuthenticated = useIsAuthenticated();
  // Use the hook to reauthenticate stored tokens.
  useAuthTokenStore();