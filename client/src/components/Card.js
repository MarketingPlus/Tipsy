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

    return (
        <div className="col mb-4">
          <div className="card h-100 ">
            <span onClick={addIntoUser}>
              <a href="#" 
                          className="badge float-right"
                      style={styles.badge}>
                <img src={getHeartIcon()} style={styles.heart} />
              </a>
            </span>
    
            <img
              src={process.env.PUBLIC_URL + props.image}
              className="card-img-top"
              alt={props.title} />
            <div className="card-body">
    
              {
            // }<h5 className="card-title">{foodResult.food? foodResult.food.label:("")}</h5>
            }<h5 className="card-title text-center" >
              {/* <a rel="noreferrer noopener"href={"https://en.wikipedia.org/w/api.php?action=opensearch&search="+props.title+"&limit=1&format=json&origin=*"}>{props.title}</a> */}
                          <a target="_blank" rel="noreferrer noopener" href={"https://en.wikipedia.org/wiki/" + props.title} style={styles.link}>{props.title}
                          
                          <span>
                              <img
                                  src={process.env.PUBLIC_URL + '/assets/resize.png'}
                                  alt='Open in new tab'
                                  style={styles.expand}/>
                          </span></a>
                          
                          
            </h5>
                
              <p className="card-text">
                {props.select}
              </p>
              <p className="card-text">
               {props.type}
              </p>
                <div style={styles.option}>
              <p className="card-text" style={styles.option}>
                <small className="text-muted" style={styles.option}>
                                  <hr style={styles.hr}/><strong>Nutritional Value: </strong><br />
                                  {props.calories} <br />
                                  {props.sugar} <br />
                                  {props.contains}<hr/>
                </small></p></div>
              <div className="card-body text-center">
    
                          <button onClick={getRecipe} style={styles.button} className="btn btn-primary btn-block card-link">
                  View Recipes
                                            </button>
                {/* <a onClick= {getRecipe} href='/recipe' className="btn btn-primary btn-block card-link">
    
                  View Recipes
                                            </a> */}
              </div>
            </div>
          </div>
        </div>
      )
    };
    
    export default Card;