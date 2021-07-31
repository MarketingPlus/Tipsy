import React, { Component } from 'react';
import FavoriteDrink from '../FavoriteDrink';
import FavoriteRecipes from "../FavoriteRecipes";
import Card from '../Card';
import Drink from '../Drink.json';
import { useAuthenticatedUser } from '../../utils/auth';
import {useLogout} from "../../utils/auth";


const styles = {
    hr: {
      paddingBottom: 10
    },
    button: {
      backgroundColor: "#2F3439",
      border: "none",
      textAlign: "center",
      marginBottom: 15
    }
  }

export default Account;