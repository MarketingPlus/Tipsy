


export default {
  getIngredient: function (query, callback) {
    fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${query}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "b774d95af5msha37639d641a1814p18e428jsnafa3fa0339da",
        "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com"
      }
    })
      .then(response => {
        // console.log("1111111")
        // console.log(response.json);
        // Use this function for checking the status, etc... that it's a 200
        return response.json()
      })
      .then(data => {
        console.log(data.hints[0])
        // Use this function to actually use the data.
        callback(data.hints[0]);
      })
      .catch(err => {
        console.error(err);
      });

  }

}