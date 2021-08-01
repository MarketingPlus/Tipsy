import React, { Component, useEffect, useState } from 'react';
import Card from '../Card';
import Drink from '../Drink.json';
import { useStoreContext } from '../../store';
import ItemOption from '../ItemOption';
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
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const d = new Date();
  const defaultMonth = monthNames[d.getMonth()];
  console.log(defaultMonth);

  const [drinkSearch, setdrinkSearch] = useState("");
  const [drinkResult, setdrinkResult] = useState({});
  const [month, setMonth] = useState(defaultMonth);
  const [drinkList, setdrinkList] = useState(Drink);



  const handleMonthChange = (event) => {
    const { value } = event.target;
    setMonth(value);
    console.log(value);
    setdrinkSearch("")
    // const onSeason = Drink.filter(drink => {return drink.season.includes(month)});
    // // const onSeason = Drink.filter(drink => drink.season.includes(month));
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
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const d = new Date();
    const defaultMonth = monthNames[d.getMonth()];
    console.log(defaultMonth);
    const onSeason = Drink.filter(drink => { return drink.season.includes(month) });
    if (month=="allSeason"){
      setdrinkList(Drink)
    } else {
      setdrinkList(onSeason);
    }
    console.log(onSeason);


    const selecteddrink = Drink.filter(drink => { return drink.type==drinkSearch });

    if(drinkSearch=="allDrink"){
      setdrinkResult(Drink)
    } else {
      setdrinkResult(selecteddrink)
    }

  }, [month,drinkSearch])

  useEffect(() => {
    console.log("Our user:", user)
  }, [user])

  return (
    <div className="container mx-auto">

      <form className="text-center mx-auto">
        <p className="display-4" style={styles.head}>Your favorite Drink, with Style</p><br/>
        <div className="form-row mx-auto">
                  <div className="col-md-6 col-lg-6 col-xl-6 form-group mx-auto">

                      

                   
                      <select className='form-control selectpicker' id='all-Drink' style={styles.search2} onChange={handleMonthChange}>
                          
                          <option value={defaultMonth} id="0" >   
                          
                          Current Month {`(${defaultMonth})`}</option>

              {/* <option value="allSeason" id="13" href="#">All Season</option> */}
              <option value="January" id="1">January</option>
              <option value="February" id="2">February</option>
              <option value="March" id="3">March</option>
              <option value="April" id="4">April</option>
              <option value="May" id="5">May</option>
              <option value="June" id="6">June</option>
              <option value="July" id="7">July</option>
              <option value="August" id="8">August</option>
              <option value="September" id="9">September</option>
              <option value="October" id="10">October</option>
              <option value="November" id="11">November</option>
              <option value="December" id="12">December</option>
            </select>

          </div>

          <div className="col-md-6 col-lg-6 col-xl-6 form-group mx-auto">

            <select className='form-control' id='all-Drink' onChange={handleInputChange} style={styles.search}>
              <option value="allDrink"id="0">All Beverages</option>
              <option value="Vodka" id="1">Vodka</option>
              <option value="Gin" id="2">Gin</option>
              <option value="Whiskey" id="3">Whiskey</option>
              <option value="Scotch" id="4">Scotch</option>
              <option value="Beer" id="5">Beer</option>
              <option value="Wine" id="6">Wine</option>
              <option value="Tequila" id="7">Tequila</option>
              <option value="Rum" id="8">Rum</option>
              <option value="Cognac" id="9">Cognac & Brandy</option>
              <option value="Liqueurs" id="10">Liqueurs</option>
              <option value="Aperitifs" id="11">Aperitifs</option>
              <option value="Bourbon" id="12">Bourbon</option>
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
                type={item.type}
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
                  type={item.type}
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