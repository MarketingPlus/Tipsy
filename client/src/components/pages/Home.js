import React, { Component, useEffect, useState } from 'react';
import Card from '../Card';
import Drink from '../Drink.json';
import { useStoreContext } from '../../store';
import ItemOption from '../ItemOption';
import calendar from '../../assets/calendar.png';
import RapidApi from "../../utils/RapidApi";
import {useAuthenticatedUser, useIsAuthenticated} from '../../utils/auth';



const styles = {
    search: {
        marginBottom: 25,
        backgroundColor: "#2C95E1",
        color: "white"
    },
    icon: {
        maxWidth: 15,
        maxHeight: "auto"
    },
    hr: {
        paddingBottom: 10
    },
    search2: {
        backgroundColor: "#2C95E1",
        color: "white",
  },
  head: {
      fontSize: 34
    }
}


function Home() {
  const user = useAuthenticatedUser();
  const liqourNames = ["Vodka", "Brandy", "Scotch"
  ];
  const d = new Date();
  const defaultliqour = "Vodka";
  console.log(defaultliqour);

  const [drinkSearch, setdrinkSearch] = useState("");
  const [drinkResult, setdrinkResult] = useState({});
  const [liqour, setliqour] = useState(defaultliqour);
  const [drinkList, setdrinkList] = useState(Drink);



  const handleliqourChange = (event) => {
    const { value } = event.target;
    setliqour(value);
    console.log(value);
    setdrinkSearch("")
    // const onSeason = Drink.filter(drink => {return drink.season.includes(liqour)});
    // // const onSeason = Drink.filter(drink => drink.season.includes(liqour));
    // setdrinkList(onSeason);
    // console.log(onSeason);
    // // console.log(drinkList);
    // setdrinkSearch("");
  }

  const handleInputChange = (event) => {
    const { value } = event.target;
    setdrinkSearch(value);
    console.log(drinkSearch);

    // RapidApi.getIngredient(value, setdrinkResult);
    // if (drinkResult == {}) {
    //   RapidApi.getIngredient(value, setdrinkResult);
    // }
  }

  useEffect(() => {
    const liqourNames = ["Vodka", "Brandy", "Scotch"
    ];
    const d = new Date();
    console.log(defaultliqour);
    const onSeason = Drink.filter(drink => { return drink.season.includes(liqour) });
    if (liqour=="allSeason"){
      setdrinkList(Drink)
    } else {
      setdrinkList(onSeason);
    }
    console.log(onSeason);


    const selecteddrink = Drink.filter(drink => { return drink.name==drinkSearch });

    if(drinkSearch=="allDrink"){
      setdrinkResult(Drink)
    } else {
      setdrinkResult(selecteddrink)
    }

  }, [liqour,drinkSearch])

  useEffect(() => {
    console.log("Our user:", user)
  }, [user])

  return (
    <div className="container mx-auto">

      <form className="text-center mx-auto">
        <p className="display-4" style={styles.head}>Your favorite Drink, in season.</p><br/>
        <div className="form-row mx-auto">
                  <div className="col-md-6 col-lg-6 col-xl-6 form-group mx-auto">

                      

                   
                      <select className='form-control selectpicker' id='all-Drink' style={styles.search2} onChange={handleliqourChange}>
                          
                          <option value={defaultliqour} id="0" >   
                          
                          Current liqour {`(${defaultliqour})`}</option>

              {/* <option value="allSeason" id="13" href="#">All Season</option> */}
              <option value="Vodka" id="1">Vodka</option>
              <option value="Brandy" id="2">Brandy</option>
              <option value="Scotch" id="3">Scotch</option>
            </select>

          </div>

          <div className="col-md-6 col-lg-6 col-xl-6 form-group mx-auto">

            <select className='form-control' id='all-Drink' onChange={handleInputChange} style={styles.search}>
              <option value="allDrink"id="0">All Drink</option>

              {Drink.map(item => (
                <ItemOption
                  id={item.id}
                  name={item.name}
                  value={item.name}
                  key={item.name}
                />))}


            </select>

          </div>
          {/* <div className="col-fluid form-group">
            <span><button className="btn form-group float-right pull-right justify-content-end btn-secondary btn-small">Search</button></span>
          </div> */}
        </div>
      </form>


      <div className="row row-cols-1 row-cols-md-3">



        {(drinkSearch.length) ?(drinkResult.map(item => (
            <Card
                id={item.id}
                title={item.name}
                select={item.select}
                image={item.image}
                calories={item.calories}
                sugar={item.sugar}
                contains={item.contains}
                isFavorited={user && user.favorites.includes(item.name)}
                season={item.season}/>)))
          
          :
          (drinkList.map(item => (
            <Card
                  id={item.id}
                  title={item.name}
                  select={item.select}
                  image={item.image}
                  calories={item.calories}
                  sugar={item.sugar}
                  contains={item.contains}
                  isFavorited={user && user.favorites.includes(item.name)}
                  season={item.season}/>
          ))
          )


        }




          </div>

    </div>
  )
}
export default Home;