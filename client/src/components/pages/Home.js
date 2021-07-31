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