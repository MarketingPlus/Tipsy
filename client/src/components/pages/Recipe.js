import React, { Component } from 'react';
import recipeApi from '../../utils/recipeApi';
import RecipeCard from '../RecipeCard';
import { useStoreContext } from '../../store';
import { Redirect } from "react-router-dom"



const Recipe = (props) => {


    const [{ recipe } ] = useStoreContext();

    return recipe ? (
        <div className="container">

            <div className="row row-cols-1 row-cols-md-3">
                <RecipeCard recipe={recipe} />
            </div>

        </div>
    ) : <Redirect to={"/"} />
}

export default Recipe;