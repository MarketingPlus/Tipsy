import React from 'react';


const styles = {
  heart: {
    maxWidth: 13,
    maxHeight: "auto"
  },
  badge: {
    marginLeft: 5
    },
    button: {
        backgroundColor: "#2C95E1",
        border: "none"
    },
    header: {
        color: "#2F3439"
    },
    expand: {
        maxWidth: 11,
        maxHeight: "auto",
        marginLeft: 10,
        verticalAlign: "baseline"
        },
};


const RecipeCard = ({ recipe }) => {

  return (
    recipe.map(hit => {
      return (
        <div className="col mb-4">


          <div className="card h-100 text-center">


            <img
              src={hit.recipe.image}
              className="card-img-top img-fluid"
              alt={hit.recipe.label} />
            <div className="card-body">
              {/* <span>
                <a href="#"
                  className="badge badge-danger float-right" style={styles.badge}>
                  <img src={process.env.PUBLIC_URL + "/assets/heart.png"} style={styles.heart} />
                </a>
              </span> */}

              {
                // }<h5 className="card-title">{foodResult.food? foodResult.food.label:("")}</h5>
              }<h6 className="card-title" style={styles.header}>
                {/* <a rel="noreferrer noopener"href={"https://en.wikipedia.org/w/api.php?action=opensearch&search="+props.title+"&limit=1&format=json&origin=*"}>{props.title}</a> */}
                {hit.recipe.label}
              </h6>

              <p className="card-text">

              </p>
              <div style={styles.option}>
                <p className="card-text" style={styles.option}>
                  <small className="text-muted text-left" style={styles.option}>
                    {hit.recipe.ingredientLines.map(ingredient => {
                      return <li>{ingredient}</li>
                    })}

                  </small></p></div><br />
              <div className="card-body">
                <a href={hit.recipe.url} className="card-link btn btn-sm btn-secondary" style={styles.button}>
                              View Full Recipe
                                           
                              <span>
                          <img
                              src={process.env.PUBLIC_URL + '/assets/resize.png'}
                              alt='Open in new tab'
                              style={styles.expand}/>
                      </span></a>
                                          


              </div>

            </div>
          </div>
        </div>
      )

    })

  )
};
export default RecipeCard;
