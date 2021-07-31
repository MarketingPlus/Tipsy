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

    return (

        <div id="logreg-forms">
          {
            signUpForm
              ? (
                <form className="form-signin" onSubmit={handleLoginSubmit} data-component="Form-Signin">
                  <h1 className="h3 mb-3 font-weight-normal" style={{ textAlign: 'center' }}> Sign in </h1>
                  {/* <div className="social-login">
                    <button className="btn facebook-btn social-btn text-center" type="button"><span><i className="fab fa-facebook-f" /> Sign in with Facebook </span></button>
                    <button className="btn google-btn social-btn text-center" type="button"><span><i className="fab fa-google" /> Sign in with Google </span></button>
                  </div> */}
                  {/* <p style={{ textAlign: 'center' }}>OR</p> */}
                  <input type="email" onChange={(e) => setEmail(e.target.value)} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                  <input type="password" onChange={(e) => setPassword(e.target.value)} id="inputPassword" className="form-control" placeholder="Password" required />
                  <button className="btn btn-success btn-block" style={styles.button} onSubmit={handleLoginSubmit} type="submit"><i className="fas fa-sign-in-alt"  style={styles.i}/> Sign in </button>
                  <hr />
                  <button className="btn btn-primary btn-block" type="button" style={styles.button2} id="btn-signup" onClick={onFormChange}>
                    <i className="fas fa-user-plus" style={styles.i}/> Sign up with New Account
                      </button>
                </form>
              )
              : (
                <form action="/signup/" onSubmit={handleSignUpSubmit} className="form-signin">
                  {/* <div className="social-login" style={{ textAlign: 'center' }}>
                    <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f" /> Sign up with Facebook </span></button>
                  </div>
                  <div className="social-login" style={{ textAlign: 'center' }}>
                    <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google" /> Sign up with Google </span></button>
                  </div>
                  <p style={{ textAlign: 'center' }}>OR</p> */}
                  <input type="text" onChange={(e) => setName(e.target.value)} id="user-name" className="form-control" placeholder="Full name" required autoFocus />
                  <input type="email" onChange={(e) => setNewEmail(e.target.value)} id="user-email" className="form-control" placeholder="Email address" required autoFocus />
                  <input type="password" onChange={(e) => setNewPassword(e.target.value)} id="user-pass" className="form-control" placeholder="Password" required autoFocus />
                  <input type="password" onChange={(e) => verifyNewPassword(e.target.value)} id="user-repeatpass" className="form-control" placeholder="Confirm Password" required autoFocus />
                  <button className="btn btn-primary btn-block" type="submit" style={styles.button} ><i className="fas fa-user-plus"  style={styles.i} /> Sign Up </button><br/>
                  <button id="btn-back btn" className="fas fa-angle-left btn-sm" type="button" onClick={onFormChange} style={styles.button2}></button>
                </form>
              )
          }
          {/* <br />
                  <p style={{textAlign: 'center'}} /> */}
        </div>
      )
    }
    
    export default LoginCard;
    