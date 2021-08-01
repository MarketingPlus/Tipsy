import env from "react-dotenv";
export default {

    getRecipes: function (query) {
        return fetch(`https://api.edamam.com/search?q=${query}&app_id=${env.RECIPE_ID}&app_key=${env.RECIPE_KEY}&from=0&to=50&dishType=Alcohol&imageSize=REGULAR`,{
          "method":"GET"
        })
        .then(response => {
          return response.json()
        })
        .then(data =>{
          console.log(query);
          console.log(data);
          return data.hits;
        })
        .catch(err =>{
          console.error(err);
        })
      }
    };