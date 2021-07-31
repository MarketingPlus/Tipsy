import React, { useState } from 'react';
import "./login.css";
import { useLogin } from "../utils/auth"
import auth from "../utils/auth";
import api from "../utils/register-api";

const styles = {
  button: {
    backgroundColor: "#2F3439",
    border: "none",
    textAlign: "center"
  },
  button2: {
    backgroundColor: "#2C95E1",
    border: "none",
    textAlign: "center",
    color: "white"
  },
  i: {
    paddingRight: 5
  }
}