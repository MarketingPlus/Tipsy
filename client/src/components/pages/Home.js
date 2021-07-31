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
      }

    const handleInputChange = (event) => {
        const { value } = event.target;
        setdrinkSearch(value);
        console.log(drinkSearch);
      }