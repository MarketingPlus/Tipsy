import React, { Component, useEffect, useState } from 'react';
import Card from '../Card';
import Drink from '../Drink.json';
import { useStoreContext } from '../../store';
import ItemOption from '../ItemOption';
import calendar from '../../assets/calendar.png';
import RapidApi from "../../utils/RapidApi";
import {useAuthenticatedUser, useIsAuthenticated} from '../../utils/auth';