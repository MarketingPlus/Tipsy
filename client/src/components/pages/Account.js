import React, { } from 'react';
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

function Account() {
  const user = useAuthenticatedUser();
  const userFavorite = Drink.filter(drink => {
    if (user.favorites.includes(drink.name)) {
      return drink
    }
  })

  console.log(userFavorite)

  return (
    <div className="container mx-auto">
      <p className="display-4">
        Favorite drinks
      </p>
      <hr style={styles.hr}/>
    <div className="row row-cols-1 row-cols-md-3">
      {userFavorite.map(item => (
        <Card
          id={item.id}
          title={item.name}
          select={item.select}
          image={item.image}
          calories={item.calories}
          sugar={item.sugar}
          contains={item.contains}
          isFavorited={user && user.favorites.includes(item.name)}
          season={item.season} />
      ))}
      </div>
      <hr style={styles.hr}/>
      <button className="btn btn-danger float-right" style={styles.button} onClick={useLogout()}>Logout</button><br/>
      </div>
  )
  
}

export default Account;