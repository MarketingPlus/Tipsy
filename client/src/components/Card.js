import React, { useEffect, useState } from 'react';
import RapidApi from "../utils/RapidApi";
import { useStoreContext } from '../store';
import { SET_CURRENT_RECIPE, SET_FAVORITES } from "../store/actions";
import recipeApi from "../utils/recipeApi";
import { useHistory } from "react-router-dom";
import {useAuthenticatedUser} from '../utils/auth';
import apiCalls from "../utils/API";
const styles = {
  heart: {
    maxWidth: 15,
    maxHeight: "auto",
  },
  hr: {
    //paddingTop: 15
  },
  badge: {
    marginRight: 5,
    marginTop: 5
  },
  expand: {
    maxWidth: 13,
    maxHeight: "auto",
    marginLeft: 10
    },
    button: {
        backgroundColor: "#2C95E1",
        border: "none"
    },
    link: {
        color: "#2F3439" 
    }
};

