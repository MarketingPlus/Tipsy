import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

import api from "./register-api";
import { useStoreContext } from "../store";
import { LOGIN_USER, LOGOUT_USER } from "../store/actions";