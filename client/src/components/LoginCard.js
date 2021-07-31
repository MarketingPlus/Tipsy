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

const LoginCard = () => {
    // Gets old user info
    const [inputEmail, setEmail] = useState("");
    const [inputPassword, setPassword] = useState("");
    // console.log(inputEmail, inputPassword);
    const login = useLogin();
    // Saves new user info
    const [signupEmail, setNewEmail] = useState("");
    const [signupName, setName] = useState("");
    const [signupPassword, setNewPassword] = useState("");
    const [verifyPassword, verifyNewPassword] = useState("");
    // console.log(signupName, signupEmail, signupPassword, verifyPassword);
    // Tries to use login component
  
    // Handles error
    const handleLoginSubmit = async e => {
      e.preventDefault();
  
      try {
        const email = inputEmail;
        const password = inputPassword;
        await login({email,password});
      } catch (err) {
        console.log(err)
      }
    };
  
    const handleSignUpSubmit = async e => {
      e.preventDefault();
      const email = signupEmail;
      const password = signupPassword;
      try {
        await api.register({ email, password });
        await login({ email, password });
      } catch (err) {
        console.log(err)
      }
    };
  
  
    // Switches between Login/Signup --> Should be broken into 2 components
    const [signUpForm, setsignUpForm] = React.useState(true)
    const onFormChange = React.useCallback((evt) => {
      const id = evt.target.id
      setsignUpForm(id === 'btn-signup' ? false : true)
    }, [])