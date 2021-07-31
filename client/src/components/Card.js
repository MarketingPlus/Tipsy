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

const Card = (props) => {
    const [ ,dispatch ] = useStoreContext();
    const history = useHistory();
      const user = useAuthenticatedUser();
    
  
    useEffect(() =>{
    // RapidApi.getIngredient(props.title,setFoodResult);
    },[])
  
    const getRecipe = async event =>{
      // Start loading indicator here
      const recipe  = await recipeApi.getRecipes(props.title);
      // Stop loading indicator here
      dispatch({ type: SET_CURRENT_RECIPE, payload: recipe });
      // Also save to local storage so we can handle refresh on recipe card.
      history.push("/recipe")
    }
  
    const addIntoUser = async (event)=>{
      event.preventDefault();
      const id = user._id;
      const title = props.title;
      try {
        const { data: newFavorites } = await apiCalls.addFavorite({id:id,title:title});
        dispatch({ type: SET_FAVORITES, payload: newFavorites });
      } catch (err) {
        console.error(err) // TODO: Handle this with a message to the user.
      }
    }
  
    const getHeartIcon = () => {
      return props.isFavorited
        ? process.env.PUBLIC_URL + "/assets/heartFilled.png"
        : process.env.PUBLIC_URL + "/assets/heart.png"
    }

    